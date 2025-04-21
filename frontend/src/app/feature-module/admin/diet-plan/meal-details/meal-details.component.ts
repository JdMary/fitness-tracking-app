import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Meal } from 'src/app/feature-module/models/diet.interface';
import { DietService } from 'src/app/feature-module/services/diet.service';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
  //styleUrls: ['./meal-details.component.css'],
})
export class MealDetailsComponent implements OnInit {
  meal: Meal | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(private route: ActivatedRoute, private dietService: DietService) {}

  ngOnInit(): void {
    const mealId = this.route.snapshot.paramMap.get('id');
    if (mealId) {
      this.loadMealDetails(mealId);
    }
  }

  private loadMealDetails(mealId: string): void {
    this.dietService.getMealById(mealId).subscribe({
      next: (meal) => {
        this.meal = meal;
        this.isLoading = false;
      },
      error: () => {
        this.error = 'Failed to load meal details';
        this.isLoading = false;
      },
    });
  }
}
