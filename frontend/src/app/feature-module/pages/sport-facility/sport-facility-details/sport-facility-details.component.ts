import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SportFacilityService } from 'src/app/shared/services/sport-facility.service';
import { PromotionService } from 'src/app/shared/services/promotion.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-facility-detail',
  templateUrl: './sport-facility-details.component.html',
  styleUrls: ['./sport-facility-details.component.css']
})
export class FacilityDetailComponent implements OnInit {
  // Facility & promotions
  facility: any;
  activePromotions: any[] = [];

  // Form values
  startOption: string = 'now';
  customStartDate: string = '';
  priceType: string = 'normal';
  selectedPromotionId: number | null = null;

  // UI states
  loading: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  routes = routes;

 
  token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6ImF5YUBlc3ByaXQudG4iLCJleHAiOjE3NDQ3OTk5NzN9.XFO55qL4IR9aW6VqXkCEUmLvMjiLGJQyKk4uJDQQw80';
  ///
  paidPrice: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private sportFacilityService: SportFacilityService,
    private promotionService: PromotionService
  ) {}

  ngOnInit(): void {
    const facilityId = Number(this.route.snapshot.paramMap.get('id'));
    if (facilityId) {
      this.loadFacility(facilityId);
    }
  }

  private loadFacility(facilityId: number): void {
    this.sportFacilityService.getFacilityById(facilityId, this.token).subscribe({
      next: (data) => {
        this.facility = data;
        this.loadPromotions();
      },
      error: (error) => {
        console.error('Error loading facility details', error);
      }
    });
  }

  private loadPromotions(): void {
    this.promotionService.getActivePromotions(this.token).subscribe({
      next: (promotions: any[]) => {
        this.activePromotions = promotions.filter((promo: any) => promo.sportFacility.id === this.facility.id);
      },
      error: (error: any) => {
        console.error('Error loading promotions', error);
      }
    });
    
  }

  subscribeToFacility(): void {
    this.resetMessages();
    this.loading = true;
    this.paidPrice = null; 
  
    const subscriptionData: any = {
      sportFacility: { id: this.facility.id },
      ...(this.startOption === 'choose' && this.customStartDate ? { startDate: this.customStartDate } : {})
    };
  
    this.sportFacilityService.createSubscription(
      subscriptionData,
      this.token,
      this.priceType,
      this.selectedPromotionId ?? undefined
    ).subscribe({
      next: (response) => { // ✅ récupère la réponse complète
        this.loading = false;
        this.paidPrice = response.pricePaid; // ✅ récupère le prix payé
        this.successMessage = 'Subscription created successfully!';
        setTimeout(() => this.goBack(), 4000); // petite pause plus longue pour voir le prix
      },
      error: (error) => {
        this.loading = false;
        this.errorMessage = error.error.message || 'Failed to create subscription.';
      }
    });
  }
  

  private resetMessages(): void {
    this.successMessage = '';
    this.errorMessage = '';
  }

  goBack(): void {
    this.router.navigate([this.routes.userSportFacility + '/list']);
  }
  isCollapsed: boolean = false;

toggleCollapse(): void {
  this.isCollapsed = !this.isCollapsed;
}
selectPromotionBasedOnPriceType(): void {
  if (!this.activePromotions || this.activePromotions.length === 0) {
    this.selectedPromotionId = null;
    return;
  }

  let matchingPromotion;

  if (this.priceType === 'normal') {
    matchingPromotion = this.activePromotions.find(promo =>
      promo.promoCode.toLowerCase().includes('normal')
    );
  } else if (this.priceType === 'premium') {
    matchingPromotion = this.activePromotions.find(promo =>
      promo.promoCode.toLowerCase().includes('premium')
    );
  }

  this.selectedPromotionId = matchingPromotion ? matchingPromotion.id : null;
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
