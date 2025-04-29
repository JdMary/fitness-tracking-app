import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css'
})
export class ChartComponent implements OnInit {
  chartOptions: any; 
  apiUrl = 'http://localhost:8222/api/v1/diets/Meal/daily-nutrient-stats'; 

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchNutrientStats();
  }

  fetchNutrientStats(): void {
    this.http.get(this.apiUrl).subscribe((data: any) => {
      this.chartOptions = {
        series: [
          {
            name: 'Proteins',
            data: data.proteins 
          },
          {
            name: 'Carbohydrates',
            data: data.carbohydrates 
          },
          {
            name: 'Fats',
            data: data.fats 
          }
        ],
        chart: {
          type: 'line',
          height: 350
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          categories: data.days 
        },
        yaxis: {
          title: {
            text: 'Nutrients (grams)'
          }
        },
        legend: {
          position: 'top'
        },
        tooltip: {
          enabled: true
        }
      };
    });
  }
}
