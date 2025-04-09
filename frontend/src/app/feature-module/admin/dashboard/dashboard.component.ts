import { Component, OnInit, ViewChild } from '@angular/core';
import { routes } from 'src/app/shared/routes/routes';
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
import { Sort } from '@angular/material/sort';
import { DataService } from 'src/app/shared/data/data.service';
import { adminDashboard, topProviders, topServices } from 'src/app/shared/models/pages-model';
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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit{
  public routes = routes;
  options: unknown;

  @ViewChild('chart') chart!: ChartComponent;
  public chartOptionsOne: Partial<ChartOptions>;
  public chartOptionsTwo: Partial<ChartOptions>;
  public chartOptionsThree: Partial<ChartOptions>;
  public chartOptionsFour: Partial<ChartOptions>;
  public adminDashboard : Array<adminDashboard> = [];
  public topServices : Array<topServices> = [];
  public topProviders : Array<topProviders> = [];


  constructor(private data : DataService) {
    this.chartOptionsOne = {
      series: [
        {
          name: 'series1',
          data: [11, 32, 45, 32, 34, 52, 41],
          colors: [' #4169E1'],
        },
        {
          name: 'series2',
          colors: [' #4169E1'],
          data: [31, 40, 28, 51, 42, 109, 100],
        },
      ],
      chart: {
        height: 350,
        type: 'area',
      },
      fill: {
        colors: [' #4169E1', '#4169E1'],
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.1,
          gradientToColors: undefined,
          inverseColors: true,
          opacityFrom: 0.5,
          opacityTo: 0.5,
          stops: [0, 50, 100],
          colorStops: [],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 1,
        curve: 'smooth',
        dashArray: [0, 8, 5],
        opacityFrom: 0.5,
        opacityTo: 0.5,
        colors: [' #4169E1'],
      },
      xaxis: {
        type: 'Month',
        categories: ["Jan", "Feb", "March", "April", "May", "Jun", "July"],
      },
    };
    this.chartOptionsTwo = {
      series: [{
        name: 'series1',
        data: [31, 40, 28, 51, 42, 109, 100]
      }],
        chart: {
        height: 350,
        type: 'area',
      },
      fill: {
        colors: [' #4169E1'],
        type: 'gradient',
        gradient: {
          type: "horizontal",
          shadeIntensity: 0.1,
          gradientToColors: undefined, 
          inverseColors: true,
          opacityFrom: 0.5,
          opacityTo: 0.5,
          stops: [0, 50, 100],
          colorStops: []
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth'
      },
      xaxis: {
        type: 'Month',
        categories: ["Jan", "Feb", "March", "April", "May", "Jun", "July"]
      },
    };
    this.chartOptionsThree = {
      colors: ['#4169E1'],
      series: [
        {
        name: "Received",
        type: "column",
        data: [70, 150, 80, 180, 150, 175, 201, 60, 200, 120, 190, 160, 50]
        }
      ],
      chart: {
        type: 'bar',
        height: 350,
        toolbar: {
          show: false
        }
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: '55%',
          endingShape: 'rounded',
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent'],
      },
      xaxis: {
        categories: [
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'
        ],
      },
      yaxis: {
        title: {
          text: '$ (thousands)',
        },
      },
      fill: {
        opacity: 1,
      },
      
    };
    this.chartOptionsFour = {
     
      series: [10, 45 , 45],
      chart: {
      width: 200,
      type: 'pie',
    },
    labels: ['Team A', 'Team B', 'Team C'],
    colors:['#1BA345','#0081FF' , ' #FEC001' ],
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
    };
    this.adminDashboard = this.data.adminDashboard;
    this.topServices = this.data.topServices;
    this.topProviders = this.data.topProviders;

  }
  public sortData1(sort: Sort) {
    const data = this.adminDashboard.slice();

    if (!sort.active || sort.direction === '') {
      this.adminDashboard = data;
    } else {
      this.adminDashboard = data.sort((a, b) => {         
        const aValue = (a as never)[sort.active];         
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  public sortData2(sort: Sort) {
    const data = this.topServices.slice();

    if (!sort.active || sort.direction === '') {
      this.topServices = data;
    } else {
      this.topServices = data.sort((a, b) => {         
        const aValue = (a as never)[sort.active];         
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  public sortData3(sort: Sort) {
    const data = this.topProviders.slice();

    if (!sort.active || sort.direction === '') {
      this.topProviders = data;
    } else {
      this.topProviders = data.sort((a, b) => {         
        const aValue = (a as never)[sort.active];         
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }
  ngOnInit(): void {
    this.options = {
      center: { lat: 20.5937, lng: 78.9629 },
      zoom: 3,
    };
  }
}
