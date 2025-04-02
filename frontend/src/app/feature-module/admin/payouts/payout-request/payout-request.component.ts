import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/shared/data/data.service';
import { payoutRequest } from 'src/app/shared/models/data-table-model';
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
interface data {
  value: string;
}
@Component({
  selector: 'app-payout-request',
  templateUrl: './payout-request.component.html',
  styleUrls: ['./payout-request.component.css']
})
export class PayoutRequestComponent implements OnInit{
  public routes = routes;
  public selectedValue1 = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';

  public payoutRequest : Array<payoutRequest> = []
  dataSource!: MatTableDataSource<payoutRequest>;

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
    this.payoutRequest = [];
    this.serialNumberArray = [];

    this.data.getPayoutRequest().subscribe((data: apiResultFormat) => {
      this.totalData = data.totalData;
      data.data.map((res: payoutRequest, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.payoutRequest.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<payoutRequest>(this.payoutRequest);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.payoutRequest = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.payoutRequest.slice();

    if (!sort.active || sort.direction === '') {
      this.payoutRequest = data;
    } else {
      this.payoutRequest = data.sort((a, b) => {         
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
  selectedList1: data[] = [
    {value: 'A - Z'},
    {value: 'Z - A'},
  ];
  selectedList2: data[] = [
    {value: 'Select Status'},
    {value: 'Pending'},
    {value: 'Inprogress'},
    {value: 'Completed'},
    {value: 'Cancelled'},
  ];
  selectedList3: data[] = [
    {value: 'Select Status'},
    {value: 'Pending'},
    {value: 'Inprogress'},
    {value: 'Completed'},
    {value: 'Cancelled'},
  ];
  selectedList4: data[] = [
    {value: 'Select Status'},
    {value: 'Pending'},
    {value: 'Inprogress'},
    {value: 'Completed'},
    {value: 'Cancelled'},
  ];
  selectedList5: data[] = [
    {value: 'Select Status'},
    {value: 'Pending'},
    {value: 'Inprogress'},
    {value: 'Completed'},
    {value: 'Cancelled'},
  ];
 
  selectedList7: data[] = [
    {value: 'Select any Provider'},
    {value: 'Provider 1'},
    {value: 'Provider 2'},
    {value: 'Provider 3'},
  ];
  selectedList8: data[] = [
    {value: 'Select any Payment'},
    {value: 'Payment 1'},
    {value: 'Payment 2'},
    {value: 'Payment 3'},
  ];
  selectedList9: data[] = [
    {value: 'Select Status'},
    {value: 'Pending'},
    {value: 'Inprogress'},
    {value: 'Completed'},
    {value: 'Cancelled'},
  ];
  selectedList10: data[] = [
    {value: 'Select Status'},
    {value: 'Completed'},
    {value: 'Inprogress'},
    
  ];
}
