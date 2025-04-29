import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietService } from '../../../services/diet.service';
import { Meal } from '../../../models/diet.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-meal-details',
  templateUrl: './meal-details.component.html',
})
export class MealDetailsComponent implements OnInit {
  meal: Meal | null = null;
  isLoading = true;
  error: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private dietService: DietService
  ) {}

  ngOnInit(): void {
    const mealId = this.route.snapshot.paramMap.get('id');
    if (mealId) {
      this.loadMealDetails(mealId);
    }
  }

  private loadMealDetails(mealId: string): void {
    this.dietService.getMealById(mealId).subscribe({
      next: (meal) => {
        console.log('Meal data:', meal);
        this.meal = meal;
        this.isLoading = false;
      },
      error: (error) => {
        this.error = 'Failed to load meal details';
        this.isLoading = false;
      }
    });
  }

  addToFavorites(): void {
    if (this.meal) {
      console.log('Added to favorites:', this.meal.name);
    }
  }
}
