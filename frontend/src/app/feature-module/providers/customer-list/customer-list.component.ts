import { Component } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/shared/data/data.service';
import { customerlist } from 'src/app/shared/models/data-table-model';
import { apiResultFormat, pageSelection } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrl: './customer-list.component.css'
})
export class CustomerListComponent {
  public customerlist : Array<customerlist> = []
  dataSource!: MatTableDataSource<customerlist>;

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
  public routes = routes

  constructor(public data : DataService){

  }
  ngOnInit() {
    this.getTableData();
  }
  private getTableData(): void {
    this.customerlist = [];
    this.serialNumberArray = [];

    this.data.getCustomerList().subscribe((data: apiResultFormat) => {
      this.totalData = data.totalData;
      data.data.map((res: customerlist, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.customerlist.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<customerlist>(this.customerlist);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.customerlist = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.customerlist.slice();

    if (!sort.active || sort.direction === '') {
      this.customerlist = data;
    } else {
      this.customerlist = data.sort((a, b) => {         
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
  isFilterInputsVisible: boolean = false; // Initially hidden

  toggleFilterInputs() {
    this.isFilterInputsVisible = !this.isFilterInputsVisible; // Toggle visibility
  }
}
