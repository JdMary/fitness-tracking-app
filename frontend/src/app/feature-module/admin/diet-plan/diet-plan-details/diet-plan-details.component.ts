import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DietService } from '../../../services/diet.service';
import { DietPlan, Meal, Preference } from '../../../models/diet.interface';

@Component({
  selector: 'app-diet-plan-details',
  templateUrl: './diet-plan-details.component.html',
  styleUrl: './diet-plan-details.component.css'
})
export class DietPlanDetailsComponent implements OnInit {
  dietPlan: DietPlan = {
    username: '',
    numberOfDays: 0,
    calorieTarget: 0,
    targetProtein: 0,
    targetCarbs: 0,
    meals: []
  };
  preference : Preference = {
    maxCarbs: 0,
    maxProtein: 0,  
  maxCalories: 0,};

  constructor(private route: ActivatedRoute, private dietService: DietService) {}

  ngOnInit(): void {
    const dietPlanId = this.route.snapshot.paramMap.get('dietPlanId');
    if (dietPlanId) {
      this.getDietPlanDetail(dietPlanId);
    }
  }

  getDietPlanDetail(dietPlanId: string): void {
    this.dietService.getDietPlanDetail(dietPlanId).subscribe({
      next: (data: DietPlan) => {
        this.dietPlan = data;
        console.log('Diet plan details loaded:', this.dietPlan);
       // this.fetchMealDetails(); // Fetch additional meal details
      },
      error: (error) => {
        console.error('Error loading diet plan details:', error);
      }
    });
  }

  fetchMealDetails(): void {
    this.dietPlan.meals.forEach((meal, index) => {
      if (meal.mealId) {
        this.dietService.getRecipeDetails(meal.mealId.toString()).subscribe({
          next: (details) => {
            this.dietPlan.meals[index] = { ...meal, ...details };
            console.log(`Fetched details for meal ID ${meal.mealId}:`, details);
          },
          error: (error) => {
            console.error(`Error fetching details for meal ID ${meal.mealId}:`, error);
          }
        });
      }
    });
  }

  getDaysGroupedMeals(): { dayNumber: number; meals: Meal[] }[] {
    const groupedMeals: { [key: number]: Meal[] } = {};
    this.dietPlan.meals.forEach((meal) => {
      if (!groupedMeals[meal.dayNumber]) {
        groupedMeals[meal.dayNumber] = [];
      }
      groupedMeals[meal.dayNumber].push(meal);
    });
    return Object.keys(groupedMeals).map((dayNumber) => ({
      dayNumber: +dayNumber,
      meals: groupedMeals[+dayNumber],
    }));
  }

  filterByType(meals: Meal[], dayNumber: number, mealType: string): Meal[] {
    if (!meals || dayNumber == null || !mealType) return [];
    return meals.filter(
      (meal) =>
        meal.dayNumber === dayNumber &&
        meal.mealType?.toUpperCase() === mealType.toUpperCase()
    );
  }
}
