import { Component, OnInit } from '@angular/core';
import { PromotionService } from 'src/app/shared/services/promotion.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-list-promotion',
  templateUrl: './list-promotion.component.html',
  styleUrls: ['./list-promotion.component.css']
})
export class ListPromotionComponent implements OnInit {

  promotions: any[] = [];
  selectedValue = '';
  selectedList = [
    { value: 'A - Z' },
    { value: 'Z - A' },
    { value: 'Recently Added' }
  ];
  routes = routes;

  token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQyNzkyOTl9.2BpGPYAL-NLlykkI-Yu8Nt2EkNL8UdPSeiRwVVXuOmw';

  constructor(private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.loadPromotions();
  }

  loadPromotions(): void {
    this.promotionService.getAllPromotions(this.token).subscribe({
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
          alert('Promotion deleted successfully ');
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
