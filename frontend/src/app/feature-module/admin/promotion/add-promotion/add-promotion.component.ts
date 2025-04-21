import { Component, OnInit } from '@angular/core';
import { PromotionService, Promotion } from 'src/app/shared/services/promotion.service';
import { SportFacilityService } from 'src/app/shared/services/sport-facility.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-add-promotion',
  templateUrl: './add-promotion.component.html',
  styleUrls: ['./add-promotion.component.css']
})
export class AddPromotionComponent implements OnInit {

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

  sportFacilities: any[] = []; 
  token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQ3NTY2MDB9.UXwXQWM1s3W2c0iy_Ymsp2A-4XEu5Ek4EwOnkRtsguM';
  routes = routes;

  constructor(
    private promotionService: PromotionService,
    private sportFacilityService: SportFacilityService
  ) {}

  ngOnInit(): void {
    this.loadSportFacilities();
  }

  loadSportFacilities(): void {
    this.sportFacilityService.getAllFacilities(this.token).subscribe({
      next: (response) => {
        this.sportFacilities = response;
      },
      error: (error) => {
        console.error('Error loading sport facilities', error);
      }
    });
  }

  submitPromotion(): void {
    this.promotionService.addPromotion(this.promotion, this.token).subscribe({
      next: (response) => {
        alert('Promotion created successfully ');
        this.resetForm();
      },
      error: (error) => {
        console.error('Error creating promotion', error);
        alert('Error creating promotion ');
      }
    });
  }

  resetForm(): void {
    this.promotion = {
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
  }
}
