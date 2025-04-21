import { Component, OnInit } from '@angular/core';
import { SubscriptionService } from 'src/app/shared/services/subscription.service';

// 📊 Import ApexCharts types
import {
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexFill
} from 'ng-apexcharts';

// 🎯 Type pour options graphiques
export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  tooltip: ApexTooltip;
  fill: ApexFill;
};

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.css']
})
export class SubscriptionComponent implements OnInit {
  subscriptions: any[] = [];

  // ✅ Initialisation avec type correct
  chartOptionsOne: ChartOptions = {
    series: [],
    chart: { type: 'bar', height: 350 },
    xaxis: { categories: [] },
    dataLabels: { enabled: true },
    tooltip: { y: { formatter: (val: number) => `$${val.toFixed(2)}` } },
    fill: { opacity: 1 }
  };

  chartOptionsThree: ChartOptions = {
    series: [],
    chart: { type: 'bar', height: 350 },
    xaxis: { categories: [] },
    dataLabels: { enabled: true },
    tooltip: { y: { formatter: (val: number) => `$${val.toFixed(2)}` } },
    fill: { opacity: 1 }
  };

  private token: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQ4MDgwNzN9.KjmPiaecEZcHa2tJYPJjkrdLZu_dN9eZFo9Er_0fXs4';

  constructor(private subscriptionService: SubscriptionService) {}

  ngOnInit(): void {
    this.fetchSubscriptions();
    this.loadRevenueCharts();
  }

  // 🔁 Ne pas modifier
  fetchSubscriptions(): void {
    const token =
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQ4MDgwNzN9.KjmPiaecEZcHa2tJYPJjkrdLZu_dN9eZFo9Er_0fXs4';
    this.subscriptionService.getAllSubscriptions(token).subscribe({
      next: (res) => (this.subscriptions = res),
      error: (err) => console.error('Erreur lors du chargement des abonnements', err)
    });
  }

  deleteSubscription(id: number): void {
    if (confirm('Are you sure you want to delete this subscription?')) {
      this.subscriptionService.deleteSubscription(id).subscribe({
        next: () => {
          this.subscriptions = this.subscriptions.filter((sub) => sub.id !== id);
        },
        error: (err) => console.error('Delete failed', err)
      });
    }
  }

  canDelete(sub: any): boolean {
    return sub.status === 'EXPIRED';
  }

  loadRevenueCharts(): void {
    this.subscriptionService.getMonthlyRevenue(this.token).subscribe((data) => {
      this.chartOptionsOne = this.prepareChart(data, 'Monthly Revenue');
    });

    this.subscriptionService.getQuarterlyRevenue(this.token).subscribe((data) => {
      this.chartOptionsThree = this.prepareChart(data, 'Quarterly Revenue');
    });
  }

  prepareChart(data: { [key: string]: number }, title: string): ChartOptions {
    const labels = Object.keys(data);
    const values = Object.values(data);

    return {
      series: [{ name: title, data: values }],
      chart: { type: 'bar', height: 350 },
      xaxis: { categories: labels },
      dataLabels: { enabled: true },
      tooltip: {
        y: {
          formatter: (val: number) => `TND ${val.toFixed(2)}`
        }
      },
      fill: { opacity: 1 }
    };
  }
}
