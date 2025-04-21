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
  selectedValue: string = '';
  selectedList = [
    { value: 'A - Z' },
    { value: 'Z - A' },
    { value: 'Recently Added' }
  ];
  routes = routes;


  token: string = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQ3NTY2MDB9.UXwXQWM1s3W2c0iy_Ymsp2A-4XEu5Ek4EwOnkRtsguM';

  constructor(private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.loadPromotions();
  }

  loadPromotions(): void {
    this.promotionService.getAllPromotions().subscribe({
      next: (response) => {
        this.promotions = response;
        console.log('Promotions loaded:', this.promotions);
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
          alert('Error deleting promotion');
        }
      });
    }
  }
}
