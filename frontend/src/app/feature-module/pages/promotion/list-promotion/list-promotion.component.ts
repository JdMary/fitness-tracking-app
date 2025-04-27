import { Component, OnInit } from '@angular/core';
import { PromotionService, Promotion } from 'src/app/shared/services/promotion.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.css']
})
export class ListPromotionComponent implements OnInit {
  currentPage: number = 1;
  pageSize: number = 1; 
  totalPages: number = 0;
  displayedPromotions: Promotion[] = [];
  promotions: Promotion[] = [];
  facilitiesnames: string[] = [];
  selectedFacility: string = 'All';
  routes = routes;

  constructor(private promotionService: PromotionService) {}

  ngOnInit(): void {
    this.loadFacilityNames();
    this.fetchPromotions();
  }

  loadFacilityNames(): void {
    const token = localStorage.getItem('authToken') || '';
    this.promotionService.getFacilityNames(token).subscribe({
      next: (names) => {
        this.facilitiesnames = names;
      },
      error: (err) => console.error('Error loading facilities', err)
    });
  }

  fetchPromotions(): void {
    this.promotionService.getAllPromotions().subscribe({
      next: (data) => {
        this.promotions = data;
        console.log('Promotions loaded:', this.promotions);
       this.currentPage = 1; 
      this.updateDisplayedPromotions(); 
      },
      error: (error) => {
        console.error('Error loading promotions', error);
      }
    });
  
  }
  

  getImageByDiscount(discount: number): string {
    switch (discount) {
      case 10: return 'assets/img/promotions/10.jpeg';
      case 20: return 'assets/img/promotions/20.jpeg';
      case 30: return 'assets/img/promotions/30.jpeg';
      case 40: return 'assets/img/promotions/40.jpeg';
      case 50: return 'assets/img/promotions/50.jpeg';
      case 60: return 'assets/img/promotions/60.jpeg';
      case 70: return 'assets/img/promotions/70.jpeg';
      case 80: return 'assets/img/promotions/80.jpeg';
      default: return 'assets/img/promotions/default-promo.jpeg';
    }
  }

  filterByFacility(name: string): void {
    const token = localStorage.getItem('authToken') || '';
    this.selectedFacility = name;
  
    if (name === 'All') {
      this.fetchPromotions();
  -   this.updateDisplayedPromotions(); 
    } else {
      this.promotionService.getPromotionsByFacility(name, token).subscribe({
        next: (data) => {
          this.promotions = data;
          console.log('Promotions filtered by facility:', this.promotions);
         this.currentPage = 1; 
         this.updateDisplayedPromotions(); 
        },
        error: (err) => console.error('Error filtering promotions', err)
      });
    }
  }
  
  updateDisplayedPromotions(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    const end = start + this.pageSize;
    this.displayedPromotions = this.promotions.slice(start, end);
    this.totalPages = Math.ceil(this.promotions.length / this.pageSize);
  }
  
  goToPreviousPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updateDisplayedPromotions();
    }
  }
  
  goToNextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updateDisplayedPromotions();
    }
  }
  
  goToPage(page: number): void {
    this.currentPage = page;
    this.updateDisplayedPromotions();
  }
}
