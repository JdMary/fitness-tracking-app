import { Component, ViewChild } from '@angular/core';

import { DataService } from 'src/app/shared/data/data.service';
import { recentBooking } from 'src/app/shared/models/pages-model';
import { routes } from 'src/app/shared/routes/routes';


import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  
} from 'ng-apexcharts';
import * as ApexCharts from 'apexcharts';
export interface ChartOptions {
  series: ApexAxisChartSeries | any;
  chart: ApexChart | any;
  dataLabels: ApexDataLabels | any;
  plotOptions: ApexPlotOptions | any;
  xaxis: ApexXAxis | any;
  colors:ApexCharts | any;
 
}
interface data {
  value: string;
}

@Component({
  selector: 'app-provider-dashboard',
  templateUrl: './provider-dashboard.component.html',
  styleUrls: ['./provider-dashboard.component.css'],
})
export class ProviderDashboardComponent {
  selected!: Date | null;
  public routes = routes;
  public selectedValue = '';
  public recentBooking : recentBooking[] = [];

  selectedList: data[] = [{ value: 'A -> Z' }, { value: 'Most helpful' }];

  



  @ViewChild('chart') chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartOptions3: Partial<ChartOptions>;
  

  constructor( public data : DataService) {
    this.chartOptions = {
      series: [{
        name: 'Tasks',
        data: [12, 19, 15, 20, 14] ,
        
    }],
    colors: ['#4A00E5'],// Example data for each day
    chart: {
        type: 'bar',
        height: 140
    },
   
    plotOptions: {
        bar: {
             borderRadius: 5,
            // horizontal: false,
        },
    },
    dataLabels: {
        enabled: false
    },
    xaxis: {
        categories: ['M', 'T', 'W', 'T', 'F'],
    },
   }
   this.chartOptions3 = {
    series: [
      {
        name: 'sales',
        colors: ['#FFC38F'],
        data: [
          {
            x: 'Inpipeline',
            y: 400,
          },
          {
            x: 'Follow Up',
            y: 130,
          },
          {
            x: 'Schedule',
            y: 248,
          },
          {
            x: 'Conversation',
            y: 470,
          },
          {
            x: 'Won',
            y: 470,
          },
          {
            x: 'Lost',
            y: 180,
          },
        ],
      },
    ],
    colors: ['#00918E'],
    chart: {
      type: 'bar',
      height: 275,
    },
    plotOptions: {
      bar: {
        borderRadiusApplication: 'around',
        columnWidth: '40%',
      },
    },

    xaxis: {
      type: 'category',
      group: {
        style: {
          fontSize: '7px',
          fontWeight: 700,
        },
      },
    },
   
  };

  
   
  }
}
