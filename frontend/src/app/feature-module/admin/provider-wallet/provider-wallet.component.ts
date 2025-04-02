import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
interface data {
  value : string
  
}
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexPlotOptions,
  ApexYAxis,
  ApexFill,
  ApexLegend,
  ApexResponsive,
} from 'ng-apexcharts';
import { DataService } from 'src/app/shared/data/data.service';
import { providerWallet } from 'src/app/shared/models/data-table-model';
import { apiResultFormat, pageSelection } from 'src/app/shared/models/models';
export type ChartOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  series: ApexAxisChartSeries | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chart: ApexChart | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xaxis: ApexXAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stroke: ApexStroke | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tooltip: ApexTooltip | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataLabels: ApexDataLabels | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plotOptions: ApexPlotOptions | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yaxis: ApexYAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fill: ApexFill | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legend: ApexLegend | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  labels: | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responsive: ApexResponsive[] | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: | any;
};

@Component({
  selector: 'app-provider-wallet',
  templateUrl: './provider-wallet.component.html',
  styleUrls: ['./provider-wallet.component.css']
})
export class ProviderWalletComponent implements OnInit{
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
  public providerWallet : Array<providerWallet> = []
    dataSource!: MatTableDataSource<providerWallet>;
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptionsThree: Partial<ChartOptions>;
  public selectedValue = '';
  selectedList: data[] = [
    {value: 'Date'},
    {value: '01'},
    {value: '02'},
    {value: '03'}
  ]
  selectedList1: data[] = [
    {value: 'Select Status'},
    {value: 'Completed'},
    {value: 'Uncompleted'},
   
  ];
  selectedList2: data[] = [
    {value: 'July'},
    {value: 'Aug'},
    {value: 'Sep'},
   
  ];
  selectedList3: data[] = [
    {value: '2023'},
    {value: '2022'},
    {value: '2021'}
  ];
  selectedList4: data[] = [
    {value: 'Select Provider'},
    {value: 'Jerry'},
    {value: 'Pauline'},
    {value: 'Rebert'}
  ];
  selectedList5: data[] = [
    {value: 'Select Status'},
    {value: 'Completed'},
    {value: 'Uncompleted'}
  ];
  constructor(public data : DataService){
    this.chartOptionsThree = {
      chart: {
        type: 'bar',
        height: 350,
        width: '100%',
        stacked: false,
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      series: [{
        color: '#000',
        data: [420, 532, 516, 575, 519, 517, 454, 392, 262, 383, 446, 551],
      }],
      labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
      xaxis: {
        labels: {
          show: false
        },
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
      },
      yaxis: {
        axisBorder: {
          show: false
        },
        axisTicks: {
          show: false
        },
        labels: {
          style: {
            colors: '#777'
          }
        }
      },
    
      
    };
  }
  ngOnInit() {
    this.getTableData();
  }
  private getTableData(): void {
    this.providerWallet = [];
    this.serialNumberArray = [];

    this.data.getProviderWallet().subscribe((data: apiResultFormat) => {
      this.totalData = data.totalData;
      data.data.map((res: providerWallet, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.providerWallet.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<providerWallet>(this.providerWallet);
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
    const data = this.providerWallet.slice();

    if (!sort.active || sort.direction === '') {
      this.providerWallet = data;
    } else {
      this.providerWallet = data.sort((a, b) => {         
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

}
