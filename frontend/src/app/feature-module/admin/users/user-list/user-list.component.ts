import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/shared/data/data.service';
import { userList } from 'src/app/shared/models/data-table-model';
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
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

  
 public userList : Array<userList> = []
 dataSource!: MatTableDataSource<userList>;

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

 constructor(public data : DataService){

 }
 ngOnInit() {
   this.getTableData();
 }
 private getTableData(): void {
   this.userList = [];
   this.serialNumberArray = [];

   this.data.getUserList().subscribe((data: apiResultFormat) => {
     this.totalData = data.totalData;
     data.data.map((res: userList, index: number) => {
       const serialNumber = index + 1;
       if (index >= this.skip && serialNumber <= this.limit) {
         res.id = serialNumber;
         this.userList.push(res);
         this.serialNumberArray.push(serialNumber);
       }
     });
     this.dataSource = new MatTableDataSource<userList>(this.userList);
     this.calculateTotalPages(this.totalData, this.pageSize);
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
     this.getTableData();
   } else if (event == 'previous') {
     this.currentPage--;
     this.pageIndex = this.currentPage - 1;
     this.limit -= this.pageSize;
     this.skip = this.pageSize * this.pageIndex;
     this.getTableData();
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
   this.getTableData();
 }

 public PageSize(): void {
   this.pageSelection = [];
   this.limit = this.pageSize;
   this.skip = 0;
   this.currentPage = 1;
   this.getTableData();
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
   {value: 'Admin'},
   {value: 'Super Admin'},
 ];

 togglePassword1() {
   this.passwordClass1 = !this.passwordClass1;
 }
 togglePassword2() {
   this.passwordClass2 = !this.passwordClass2;
 }
}
