import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/shared/data/data.service';
import { registerReports } from 'src/app/shared/models/data-table-model';
import { apiResultFormat, pageSelection } from 'src/app/shared/models/models';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid
} from "ng-apexcharts";
export type ChartOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  series: ApexAxisChartSeries | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chart: ApexChart |any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xaxis: ApexXAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataLabels: ApexDataLabels | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  grid: ApexGrid | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stroke: ApexStroke | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  title: ApexTitleSubtitle | any;
};
interface data {
  value : string
  
}


@Component({
  selector: 'app-register-report',
  templateUrl: './register-report.component.html',
  styleUrls: ['./register-report.component.css']
})
export class RegisterReportComponent implements OnInit{
  
  @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public registerReports : Array<registerReports> = []
  dataSource!: MatTableDataSource<registerReports>;
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
  public selectedValue = '';
  
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
  constructor(public data : DataService) {
    this.chartOptions = {
      series: [{
        name: "Registered User",
        color: '#333333',
        data: [45, 60, 75, 51, 42, 42, 30]
      }],
      chart: {
        height: 350,
        type: "line",
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "smooth"
      },
     
      grid: {
        row: {
          colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
          opacity: 0.5
        }
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
      }
    };
    
  }
  ngOnInit() {
    this.getTableData();
  }
  private getTableData(): void {
    this.registerReports = [];
    this.serialNumberArray = [];

    this.data. getRegisterReport().subscribe((data: apiResultFormat) => {
      this.totalData = data.totalData;
      data.data.map((res: registerReports, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.registerReports.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<registerReports>(this.registerReports);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
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
  public sortData(sort: Sort) {
    const data = this.registerReports.slice();

    if (!sort.active || sort.direction === '') {
      this.registerReports = data;
    } else {
      this.registerReports = data.sort((a, b) => {         
        const aValue = (a as never)[sort.active];         
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
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
  selectedList: data[] = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
  ];
  selectedList2: data[] = [
    {value: 'Jul'},
    {value: 'Aug'},
    {value: 'Sep'},
  ];
  selectedList3: data[] = [
    {value: '2023'},
    {value: '2022'},
    {value: '2021'},
  ];
    selectedList4: data[] = [
      {value: 'Robert'},
      {value: 'Pauline'},
      {value: 'Jerry'},
    ];
    selectedList5: data[] = [
      {value: 'Completed'},
      {value: 'Uncompleted'},
    ];

}
