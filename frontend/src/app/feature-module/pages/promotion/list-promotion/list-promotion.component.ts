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
  routes = routes;

  constructor(private promotionService: PromotionService) { }

  ngOnInit(): void {
    this.fetchPromotions();
  }

  fetchPromotions(): void {
    this.promotionService.getActivePromotions().subscribe({
      next: (data) => {
        this.promotions = data;
        console.log(' Promotions actives chargées:', this.promotions);
      },
      error: (error) => {
        console.error('Erreur lors du chargement des promotions actives', error);
      }
    });
  }
}
