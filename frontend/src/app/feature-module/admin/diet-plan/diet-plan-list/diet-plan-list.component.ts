import { Component, OnInit } from '@angular/core';
import { DietService } from '../../../services/diet.service';
import { DietPlan } from '../../../models/diet.interface';

@Component({
  selector: 'app-diet-plan-list',
  templateUrl: './diet-plan-list.component.html',
  styleUrls: ['./diet-plan-list.component.css']
})
export class DietPlanListComponent implements OnInit {
  dietPlans: DietPlan[] = [];
  PlanStatus: any; 

  constructor(private dietService: DietService) {}

  ngOnInit(): void {
    console.log('DietPlanListComponent initialized');
    this.loadDietPlans();
  }
  getStatusText(status: string | undefined): string {
    switch(status) {
      case 'DRAFT': return 'Draft';
      case 'COMPLETED': return 'Completed';
      default: return 'Pending';
    }
  }
  
  loadDietPlans(): void {
    this.dietService.getDietPlanList().subscribe({
      next: (data: DietPlan[]) => {
        this.dietPlans = data;
        console.log('Diet plans loaded:', this.dietPlans);
      },
      error: (error) => {
        console.error('Error loading diet plans:', error);
      }
    });
  }
}
