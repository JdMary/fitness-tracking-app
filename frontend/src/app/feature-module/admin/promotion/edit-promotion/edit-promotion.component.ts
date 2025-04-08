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

  token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQwNjk3NTJ9.s1Zv4XYhK3PfiIxWRNg0ZacsmmjbB7_qy0FQL_MmdKE';
  routes = routes;
  sportFacilities: any[] = []; // ✅ tu peux typer mieux plus tard


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
    const token = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6Im5hc3NpbUBlc3ByaXQudG4iLCJleHAiOjE3NDQwNjk3NTJ9.s1Zv4XYhK3PfiIxWRNg0ZacsmmjbB7_qy0FQL_MmdKE'; // ton token dynamique plus tard
    this.promotionService.getSportFacilities(token).subscribe({
      next: (response) => {
        this.sportFacilities = response;
        console.log('✅ Sport facilities loaded:', this.sportFacilities);
  
        // 🟢 Après avoir chargé les facilities, charge la promotion
        this.loadPromotion();
      },
      error: (error) => {
        console.error('❌ Error loading sport facilities', error);
      }
    });
  }

  loadPromotion(): void {
    this.promotionService.getPromotionById(this.promotionId, this.token).subscribe({
      next: (data) => {
        this.promotion = data;
  
        // 🟢 Important : Associer le sportFacility à l'objet de la liste pour garder le binding
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
        alert('Promotion updated successfully 🎉');
        this.router.navigate([routes.listPromotion]);
      },
      error: (error) => {
        console.error('Error updating promotion', error);
        alert('Error updating promotion ❌');
      }
    });
  }
  isEditMode = true; // ✅ pour le mode édition

onSubmit(): void {
  this.updatePromotion(); // Appelle ta fonction d’update existante
}

}
