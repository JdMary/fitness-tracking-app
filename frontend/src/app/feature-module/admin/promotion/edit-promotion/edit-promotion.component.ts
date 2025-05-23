import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PromotionService, Promotion } from 'src/app/shared/services/promotion.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-edit-promotion',
  templateUrl: './edit-promotion.component.html',
  styleUrls: ['./edit-promotion.component.css']
})
export class EditPromotionComponent implements OnInit {
  isEditMode: boolean = true; 

  promotionId!: number;
  promotion: Promotion = {
    promoCode: '',
    description: '',
    discountPercentage: 0,
    startDate: '',
    endDate: '',
    active: true,
    sportFacility: {
      id: 0,
      name: ''
    }
  };

  token = localStorage.getItem('authToken') || ''; 
  routes = routes;
  sportFacilities: any[] = []; 

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private promotionService: PromotionService
  ) {}

  ngOnInit(): void {
    this.promotionId = Number(this.route.snapshot.paramMap.get('id'));
    this.fetchSportFacilities();
    this.loadPromotion();
  }

  fetchSportFacilities(): void {
    this.promotionService.getSportFacilities().subscribe({
      next: (response) => {
        this.sportFacilities = response;
        console.log('Sport facilities loaded:', this.sportFacilities);
        this.loadPromotion();
      },
      error: (error) => {
        console.error('Error loading sport facilities', error);
      }
    });
  }

  loadPromotion(): void {
    this.promotionService.getPromotionById(this.promotionId, this.token).subscribe({
      next: (data) => {
        this.promotion = data;
        const facilityFromList = this.sportFacilities.find(f => f.id === this.promotion.sportFacility.id);
        if (facilityFromList) {
          this.promotion.sportFacility = facilityFromList;
        }
      },
      error: (error) => {
        console.error('Error loading promotion', error);
      }
    });
  }

  updatePromotion(): void {
    this.promotionService.updatePromotion(this.promotion, this.token).subscribe({
      next: () => {
        alert('Promotion updated successfully');
        this.router.navigate([routes.listPromotion]);
      },
      error: (error) => {
        console.error('Error updating promotion', error);

        if (error.error && error.error.message) {
        alert('❌ Error: ' + error.error.message);
      } else {
        alert('❌ An unexpected error occurred while updating the promotion.');
      }
    }
  });
}

  onSubmit(): void {
    this.updatePromotion();
  }
}
