import { Component, OnInit } from '@angular/core';
import { BuddyRequestService, BuddyRequestFull } from '../services/buddy-request-service.service';
import { ChartOptions } from '../../dashboard/dashboard.component';
import { DataService } from 'src/app/shared/data/data.service';

@Component({
  selector: 'app-buddy-requests-list',
  templateUrl: './buddy-requests-list.component.html',
  styleUrl: './buddy-requests-list.component.css'
})
export class BuddyRequestsListComponent implements OnInit {
  buddyRequests: BuddyRequestFull[] = [];
  filteredBuddyRequests: BuddyRequestFull[] = [];
  selectedStatus: string = 'ALL';
  statusCounts: { [status: string]: number } = {};
  public chart: Partial<ChartOptions>;
  public chart1: Partial<ChartOptions>;

  pageSize: number = 10;
  currentPage: number = 1;
  totalItems: number = 0;
  pageSizeOptions: number[] = [10, 25, 50, 100];

  constructor(private buddyService: BuddyRequestService, private data: DataService) {
    this.chart = {
      series: [0, 0, 0, 0, 0],
      chart: {
        width: 400,
        type: 'pie',
        foreColor: '#373d3f'
      },
      plotOptions: {
        pie: {
          donut: {
            labels: {
              show: true,
            }
          }
        }
      },
      labels: ['Accepted', 'Pending', 'Waiting', 'Rejected', 'Expired'],
      colors: ['#7eff82', '#f8c06c', '#60b2f5', '#f57370', '#c2bfbf'],
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
    this.chart1 = {
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
  }

  ngOnInit(): void {
    this.selectedStatus = 'ALL';
    this.loadBuddyRequests();
    this.getStatusCount();
  }

  loadBuddyRequests() {
    this.buddyService.getBuddyRequests().subscribe(
      requests => {
        this.buddyRequests = requests;
        this.filterByStatus(this.selectedStatus);
      }
    );
  }

  filterByStatus(status: string) {
    this.selectedStatus = status;
    if (status === 'ALL') {
      this.filteredBuddyRequests = [...this.buddyRequests];
    } else {
      this.filteredBuddyRequests = this.buddyRequests.filter(request => request.status === status);
    }
  }

  formatGoal(goal: string): string {
    return goal.toLowerCase()
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  getStatusCount() {
    this.buddyService.getCountByStatus().subscribe(
      (data) => {
        this.statusCounts = data;
        // Ensure series order matches labels order
        this.chart.series = [
          this.statusCounts['ACCEPTED'] || 0,
          this.statusCounts['PENDING'] || 0,
          this.statusCounts['WAITING'] || 0,
          this.statusCounts['REJECTED'] || 0,
          this.statusCounts['EXPIRED'] || 0
        ];
      },
      (error) => console.error('Error fetching count by status', error)
    );
  }

  getTotalCount(): number {
    return Object.values(this.statusCounts).reduce((acc, curr) => acc + curr, 0);
  }

  onPageChange(page: number) {
    this.currentPage = page;
    this.filterByStatus(this.selectedStatus);
  }

  onPageSizeChange(event: any) {
    this.pageSize = event.target.value;
    this.currentPage = 1;
    this.filterByStatus(this.selectedStatus);
  }

  get paginatedRequests() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    return this.filteredBuddyRequests.slice(startIndex, startIndex + this.pageSize);
  }

  get totalPages() {
    return Math.ceil(this.filteredBuddyRequests.length / this.pageSize);
  }
}
