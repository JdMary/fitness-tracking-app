import { Component, OnInit } from '@angular/core';
import { PromotionService, Promotion } from 'src/app/shared/services/promotion.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.css']
})
export class ListPromotionComponent implements OnInit {

  promotions: Promotion[] = [];
  displayedPromotions: Promotion[] = [];
  currentPage: number = 1;
  pageSize: number = 1;
  totalData: number = 0;
  pageNumberArray: number[] = [];
  serialNumberArray: number[] = [];

  selectedValue: string = '';
  selectedList = [
    { value: 'A - Z' },
    { value: 'Z - A' },
    { value: 'Recently Added' }
  ];
  routes = routes;

  token = localStorage.getItem('authToken') || '';

  constructor(private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.loadPromotions();
  }

  loadPromotions(): void {
    this.promotionService.getAllPromotions().subscribe({
      next: (response) => {
        this.promotions = response;
        this.totalData = this.promotions.length;
        this.currentPage = 1;
        this.updateDisplayedPromotions();
      },
      error: (error) => {
        console.error('Error loading promotions', error);
      }
    });
  }

  openDeleteModal(promotionId: number): void {
    const confirmDelete = confirm('Are you sure you want to delete this promotion?');
    if (confirmDelete) {
      this.promotionService.deletePromotion(promotionId, this.token).subscribe({
        next: () => {
          alert('Promotion deleted successfully');
          this.loadPromotions();
        },
        error: (error) => {
          console.error('Error deleting promotion', error);

           if (error.error && error.error.message) {
          alert('❌ Error: ' + error.error.message);
        } else {
          alert('❌ An unexpected error occurred while deleting the promotion.');
        }
        }
      });
    }
  }

  onSearch(event: Event): void {
    const input = event.target as HTMLInputElement;
    const keyword = input?.value.trim();

    if (keyword) {
      this.promotionService.searchPromotions(keyword, this.token).subscribe({
        next: (res) => {
          this.promotions = res;
          this.totalData = res.length;
          this.currentPage = 1;
          this.updateDisplayedPromotions();
        },
        error: (err) => {
          console.error('Error searching promotions', err);
        }
      });
    } else {
      this.loadPromotions();
    }
  }

  PageSize(): void {
    this.currentPage = 1;
    this.updateDisplayedPromotions();
  }

  moveToPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedPromotions();
  }

  updateDisplayedPromotions(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedPromotions = this.promotions.slice(start, end);
    this.pageNumberArray = Array.from({ length: Math.ceil(this.totalData / this.pageSize) }, (_, i) => i + 1);
    this.serialNumberArray = this.displayedPromotions.map((_, i) => start + i + 1);
  }

  sortFacilities(): void {
    if (this.selectedValue === 'A - Z') {
      this.promotions.sort((a, b) => a.sportFacility.name.localeCompare(b.sportFacility.name));
    } else if (this.selectedValue === 'Z - A') {
      this.promotions.sort((a, b) => b.sportFacility.name.localeCompare(a.sportFacility.name));
    } else if (this.selectedValue === 'Recently Added') {
      this.promotions.sort((a, b) => (b.id ?? 0) - (a.id ?? 0));

    }

    this.currentPage = 1;
    this.updateDisplayedPromotions();
  }

}
