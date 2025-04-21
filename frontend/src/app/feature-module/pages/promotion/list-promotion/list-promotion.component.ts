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
  routes = routes;

  constructor(private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.fetchPromotions();
  }

  fetchPromotions(): void {
    this.promotionService.getAllPromotions().subscribe({
      next: (data) => {
        this.promotions = data;
        console.log('Promotions chargées:', this.promotions);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des promotions', error);
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
  
}
