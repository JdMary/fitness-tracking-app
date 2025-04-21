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
  token = localStorage.getItem('authToken') || ''; // Retrieve token from local storage
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
