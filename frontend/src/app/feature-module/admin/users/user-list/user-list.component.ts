import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/shared/data/data.service';
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
import { UserService } from 'src/app/feature-module/backend-services/user/user.service';
import { UserDetails } from 'src/app/feature-module/models/user-details';
interface data {
  value: string;
}

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  public routes = routes;

  
 public userList: Array<UserDetails> = [];
 dataSource!: MatTableDataSource<UserDetails>;

 public showFilter = false;
 public searchDataValue = '';
 public lastIndex = 0;
 public pageSize = 10;
 public totalData = 0;
 public skip = 0;
 public limit: number = this.pageSize;
 public pageIndex = 0;
 public serialNumberArray: Array<number> = [];
 public currentPage = 1;
 public pageNumberArray: Array<number> = [];
 public pageSelection: Array<pageSelection> = [];
 public totalPages = 0;
 public selectedUser: UserDetails = {} as UserDetails;
public selectedFile: File = {} as File;

 constructor(public userService: UserService){

 }
 ngOnInit() {
   this.getAllUsers();
 }
 private getAllUsers(): void {
   this.userService.getAllUsers().subscribe((users: UserDetails[]) => {
     this.userList = users;
     this.totalData = users.length; // Set totalData to the number of users retrieved 
     this.dataSource = new MatTableDataSource<UserDetails>(this.userList);
   });
 }

 public searchData(value: string): void {
   this.dataSource.filter = value.trim().toLowerCase();
   this.userList = this.dataSource.filteredData;
 }

 public sortData(sort: Sort) {
   const data = this.userList.slice();

   if (!sort.active || sort.direction === '') {
     this.userList = data;
   } else {
     this.userList = data.sort((a, b) => {
        
        const aValue = (a as never)[sort.active];
        
        const bValue = (b as never)[sort.active];
       return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
     });
   }
 }

 public getMoreData(event: string): void {
   if (event == 'next') {
     this.currentPage++;
     this.pageIndex = this.currentPage - 1;
     this.limit += this.pageSize;
     this.skip = this.pageSize * this.pageIndex;
     this.getAllUsers();
   } else if (event == 'previous') {
     this.currentPage--;
     this.pageIndex = this.currentPage - 1;
     this.limit -= this.pageSize;
     this.skip = this.pageSize * this.pageIndex;
     this.getAllUsers();
   }
 }

 public moveToPage(pageNumber: number): void {
   this.currentPage = pageNumber;
   this.skip = this.pageSelection[pageNumber - 1].skip;
   this.limit = this.pageSelection[pageNumber - 1].limit;
   if (pageNumber > this.currentPage) {
     this.pageIndex = pageNumber - 1;
   } else if (pageNumber < this.currentPage) {
     this.pageIndex = pageNumber + 1;
   }
   this.getAllUsers();
 }

 public PageSize(): void {
   this.pageSelection = [];
   this.limit = this.pageSize;
   this.skip = 0;
   this.currentPage = 1;
   this.getAllUsers();
 }

 private calculateTotalPages(totalData: number, pageSize: number): void {
   this.pageNumberArray = [];
   this.totalPages = totalData / pageSize;
   if (this.totalPages % 1 != 0) {
     this.totalPages = Math.trunc(this.totalPages + 1);
   }
   for (let i = 1; i <= this.totalPages; i++) {
     const limit = pageSize * i;
     const skip = limit - pageSize;
     this.pageNumberArray.push(i);
     this.pageSelection.push({ skip: skip, limit: limit });
   }
 }
 public selectedValue = '';
 public passwordClass1 = false;
 public passwordClass2 = false;

selectedList: data[] = [
  { value: 'ADMIN' },
  { value: 'USER' },
  { value: 'TRAINER' },
  { value: 'FACILITY_MANAGER' },
];

 togglePassword1() {
   this.passwordClass1 = !this.passwordClass1;
 }
 togglePassword2() {
   this.passwordClass2 = !this.passwordClass2;
 }

 selectUser(user: UserDetails): void {
  console.log(user.role);
   this.selectedUser = { ...user };
 }

 onImageChange(event: Event): void {
   const input = event.target as HTMLInputElement;
   if (input.files && input.files[0]) {
     this.selectedFile = input.files[0];
     const reader = new FileReader();
     reader.onload = (e: any) => {
       this.selectedUser.imageUrl = e.target.result;
     };
     reader.readAsDataURL(this.selectedFile);
   }
 }

 removeImage(): void {
   this.selectedUser.imageUrl = '';
   //this.selectedFile = null;
 }

 updateUser(): void {
  this.userService.updateUser(this.selectedUser, this.selectedFile).subscribe({
    next: () => {
      const index = this.userList.findIndex((user) => user.id === this.selectedUser.id);
      if (index !== -1) {
        this.userList[index] = { ...this.selectedUser };
        this.dataSource.data = [...this.userList];
      }
      alert('User updated successfully!');
      this.selectedUser = {} as UserDetails;
      this.selectedFile = {} as File;
      this.getAllUsers();
      // Hide the modal after successful update
      const modal = document.getElementById('edit-user');
      if (modal) {
        (modal as any).classList.remove('show');
        document.body.classList.remove('modal-open');
        const backdrops = document.querySelectorAll('.modal-backdrop');
        backdrops.forEach((backdrop) => backdrop.remove());
        document.body.style.overflow = ''; // Reset overflow style
      }

      // Refresh the page
      window.location.reload();
    },
    error: (err) => {
      console.error('Error updating user:', err);
      alert('An error occurred while updating the user. Please try again.');
    },
  });
 }

 deleteUser(userId: string): void {
  this.userService.removeUser(userId).subscribe(() => {
    this.userList = this.userList.filter((user) => user.id !== userId);
    this.dataSource.data = [...this.userList];
    alert('User deleted successfully!');
    this.getAllUsers();
  });
 }
}
