import { Component, OnInit } from '@angular/core';
import { BuddyRequestService, BuddyRequest, BuddyRequestFull } from '../services/buddy-request-service.service';
import { routes } from 'src/app/shared/routes/routes';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../../../backend-services/user/auth.service';



@Component({
  selector: 'app-buddy-request',
  templateUrl: './buddy-request.component.html',
  styleUrl: './buddy-request.component.css'
})
export class BuddyRequestComponent implements OnInit {
  buddyRequestForm!: FormGroup;
  goals = ['LOSE_WEIGHT', 'BUILD_MUSCLE', 'GET_FIT', 'INCREASE_ENDURANCE', 'HEAVY_LIFTING', 'IMPROVE_FLEXIBILITY'];
  selectedGoal: string | null = null;
  goalError: boolean = false;
  userName: string | undefined;
  singleBuddyRequest: BuddyRequest | null = null;
  editMode: boolean = false;
  editRequestId: number | null = null;
  submitValue: string = 'Create Request';

  currentFilter: string = 'ALL';
  filteredRequests: BuddyRequestFull[] = [];

  minDurationValidator(control: any) {
    const value = Number(control.value);
    if (isNaN(value) || value < 30) {
      return { minDuration: true };
    }
    return null;
  }
    pastDateValidator(control: any) {
    const today = new Date();
    const selectedDate = new Date(control.value);
    if (selectedDate < today) {
      return { pastDate: true };
    }
    return null;
  }  
  timeRangeValidator(control: any) {
    const time = control.value;
    const hours = parseInt(time.split(':')[0], 10);
    if (hours >= 22 || hours < 8) {
      return { invalidTime: true };
    }
    return null;
  } 
  selectGoal(goal: string): void {
    this.selectedGoal = goal;
    this.buddyRequestForm.get('goal')?.setValue(goal);
    this.goalError = false;
  }
  
  public routes = routes;
  buddyRequests: BuddyRequestFull[] = [];
  buddyRequestsCount: number = 0;
  currentPage: number = 1;
  itemsPerPage: number = 6;
  
  get paginatedBuddyRequests(): BuddyRequestFull[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredRequests.slice(startIndex, endIndex);
  }

  get totalPages(): number {
    return Math.ceil(this.filteredRequests.length / this.itemsPerPage);
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
    }
  }
  
  constructor(private buddyRequestService: BuddyRequestService,private fb: FormBuilder, private http: HttpClient, private toastr: ToastrService, private authService: AuthService) {}

  ngOnInit(): void {
    this.buddyRequestForm = this.fb.group({
      goal: ['', Validators.required],
      date: ['', Validators.compose([Validators.required, this.pastDateValidator])],
      time: ['', Validators.compose([Validators.required, this.timeRangeValidator])],
      duration: ['', Validators.compose([Validators.required, this.minDurationValidator])]
    });
    this.loadBuddyRequests();
  }
  loadBuddyRequests(): void {
    this.buddyRequestService.getMyBuddyRequests().subscribe(
      (data) => {
        this.buddyRequests = data;
        this.buddyRequests.forEach(request => {
          if (request.userEmail) {
            this.authService.extractNameFromEmail(request.userEmail).subscribe(
              (name) => {
                request.userName = name;
              },
              (error) => {
                console.error('Error extracting name from email:', error);
              }
            );
          }
        });
        this.buddyRequestsCount = data.length;
        this.filterRequests(this.currentFilter); // Apply initial filter
      }
    );
  }

  filterRequests(status: string): void {
    this.currentFilter = status;
    if (status === 'ALL') {
      this.filteredRequests = this.buddyRequests;
    } else {
      this.filteredRequests = this.buddyRequests.filter(request => request.status === status);
    }
    this.buddyRequestsCount = this.filteredRequests.length;
    this.currentPage = 1; // Reset to first page when filtering
  }
  
  get totalPagesArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
  
  selectedDate: Date | null = null;
  selectedTime: string | null = null;

get combinedDateTime(): Date | null {
  if (!this.selectedDate || !this.selectedTime) return null;

  const [hours, minutes] = this.selectedTime.split(':').map(Number);
  const finalDate = new Date(this.selectedDate);
  finalDate.setHours(hours);
  finalDate.setMinutes(minutes);

  return finalDate;
}
  
onSubmit() {
  if (!this.selectedGoal || !this.buddyRequestForm.get('goal')?.value) {
    this.goalError = true;
    console.log("erreur");
    return;
  }

  if (this.buddyRequestForm.valid) {
    const formValue = this.buddyRequestForm.value;
    const combinedDateTime = `${formValue.date} ${formValue.time}`;

    const buddyRequest: BuddyRequest = {
      goal: this.selectedGoal,
      workoutStartTime: combinedDateTime,
      duration: formValue.duration,
    };

    if (this.editMode && this.editRequestId) {
      this.buddyRequestService.updateBuddyRequest(this.editRequestId, buddyRequest).subscribe(
        (response) => {
          console.log('Buddy request updated successfully:', response);
          this.resetForm();
        }
      );
    } else {
      this.buddyRequestService.addBuddyRequest(buddyRequest).subscribe(
        (response) => {
          console.log('Buddy request added successfully:', response);
          this.toastr.success('Your request has been successfully made', 'Success');
          this.resetForm();
        }
      );
    }
  }
}

resetForm(): void {
  this.loadBuddyRequests();
  this.submitValue = 'Create Request';
  this.buddyRequestForm.reset({
    goal: '',
    date: '',
    time: '',
    duration: ''
  });
  this.selectedGoal = null;
  this.goalError = false;
  this.editMode = false;
  this.editRequestId = null;
  
  Object.keys(this.buddyRequestForm.controls).forEach(key => {
    const control = this.buddyRequestForm.get(key);
    control?.markAsUntouched();
    control?.updateValueAndValidity();
  });
  
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox: any) => {
    checkbox.checked = false;
  });
}

getUserName(email: string): string {
  let userName = '';
  this.buddyRequestService.displayUserName(email).subscribe(
    (name: string) => {
      userName = name;
    }
  );
  return userName;
}


acceptRequest(requestId: number): void {
  this.buddyRequestService.acceptMatch(requestId).subscribe(
    (response) => {
      console.log('Match accepted successfully:', response);
      this.loadBuddyRequests();
    }
  );
}
rejectRequest(requestId: number): void {
  this.buddyRequestService.rejectMatch(requestId).subscribe(
    (response) => {
      console.log('Match rejected successfully:', response);
      this.loadBuddyRequests();
    }
  );
}

findBuddyRequestById(id: number): void {
  this.buddyRequestService.findBuddyRequest(id).subscribe(
    (data) => {
      if (data) {
        this.singleBuddyRequest = data;
        this.editMode = true;
        this.editRequestId = id;
        this.submitValue = 'Update Request';
        
        const workoutDateTime = new Date(data.workoutStartTime.toString());
        const date = workoutDateTime.toISOString().split('T')[0];
        const time = workoutDateTime.toTimeString().slice(0,5);

        this.selectedGoal = data.goal;
        
        this.buddyRequestForm.patchValue({
          goal: data.goal,
          date: date,
          time: time,
          duration: data.duration
        });

        const checkboxes = document.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach((checkbox: any) => {
          checkbox.checked = checkbox.value === data.goal;
        });
      }
    }
  );
}

  get date() {
    return this.buddyRequestForm.get('date');
  }

  get time() {
    return this.buddyRequestForm.get('time');
  }

  get duration() {
    return this.buddyRequestForm.get('duration');
  }
  
  
}
