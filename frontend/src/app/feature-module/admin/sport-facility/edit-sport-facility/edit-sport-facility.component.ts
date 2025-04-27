import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportFacilityService } from 'src/app/shared/services/sport-facility.service';

@Component({
  selector: 'app-edit-sport-facility',
  templateUrl: './edit-sport-facility.component.html',
  styleUrls: ['./edit-sport-facility.component.css']
})
export class EditSportFacilityComponent implements OnInit {

  sportFacility: any = {}; 
  facilityId: number = 0;
  selectedFile!: File;
  token = localStorage.getItem('authToken') || '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sportFacilityService: SportFacilityService
  ) { }

  ngOnInit(): void {
    this.facilityId = +this.route.snapshot.paramMap.get('id')!;
    this.loadFacility();
  }

  loadFacility(): void {
    this.sportFacilityService.getFacilityById(this.facilityId, this.token).subscribe({
      next: (response) => {
        this.sportFacility = response;
      },
      error: (error) => {
        console.error('Error loading facility', error);
      }
    });
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  updateFacility(): void {
    const formData = new FormData();
    formData.append('facility', new Blob([JSON.stringify(this.sportFacility)], { type: 'application/json' }));

    if (this.selectedFile) {
      formData.append('image', this.selectedFile);
    }

    this.sportFacilityService.updateFacilityWithImage(formData, this.token, this.sportFacility.id).subscribe({
      next: (response) => {
        alert('Facility updated successfully');
        this.router.navigate(['/admin/list-sport-facility']);
      },
      error: (error) => {
        alert('Error updating facility: ' + (error.error.message || error.error));
      }
      
    });
  }
}
