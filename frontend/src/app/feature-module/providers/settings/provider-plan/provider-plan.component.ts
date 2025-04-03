import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/shared/data/data.service';
import { providerPlan } from 'src/app/shared/models/data-table-model';
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
interface data {
  value: string;
}
@Component({
  selector: 'app-provider-plan',
  templateUrl: './provider-plan.component.html',
  styleUrls: ['./provider-plan.component.css']
})
export class ProviderPlanComponent implements OnInit{
  public selectedValue = '';
  public providerPlan : Array<providerPlan> = []
  dataSource!: MatTableDataSource<providerPlan>;
  public showFilter = false;
  public searchDataValue = '';
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit = this.pageSize;
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
    this.providerPlan = [];
    this.serialNumberArray = [];

    this.data.getProviderPlan().subscribe((data: apiResultFormat) => {
      this.totalData = data.totalData;
      data.data.map((res: providerPlan, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.providerPlan.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<providerPlan>(this.providerPlan);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.providerPlan = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.providerPlan.slice();

    if (!sort.active || sort.direction === '') {
      this.providerPlan = data;
    } else {
      this.providerPlan = data.sort((a, b) => {
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
  selectedList: data[] = [
      {value: 'A -> Z'},
      {value: 'Most helpful'},
  ];
  cards = [
    { title: 'Credit Card', imgUrl: 'assets/img/icons/visa.svg', lastFour: '9525' },
    { title: 'Debit Card', imgUrl: 'assets/img/icons/mastercard.svg', lastFour: '1234' },
    // Add more cards as needed
  ];
  selectedCardIndex: number = 0; // Default active card

  selectCard(index: number) {
    this.selectedCardIndex = index; // Set the clicked card as active
  }
  isFilterInputsVisible: boolean = false; // Initially hidden

  toggleFilterInputs() {
    this.isFilterInputsVisible = !this.isFilterInputsVisible; // Toggle visibility
  }
  public selectedValue1 = '';
  public selectedValue2 = '';
  selectedList1: data[] = [{ value: 'Services' }, { value: 'Computer Repairs' },{ value: 'Plumbing' }];
  selectedList2: data[] = [{ value: 'Name' }, { value: 'Jacob Kline' },{ value: 'William Smith' }];
  
}
