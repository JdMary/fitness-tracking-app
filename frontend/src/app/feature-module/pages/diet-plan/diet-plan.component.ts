import { ViewEncapsulation, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { DietService } from '../../services/diet.service';
import { Preference, DietPlan, DietLabel, MealType, Meal, HealthLabel, PlanStatus, CuisineType } from '../../models/diet.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diet-plan',
  templateUrl: './diet-plan.component.html',
  styleUrls: ['./diet-plan.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DietPlanComponent implements OnInit {
  currentStep = 1;
  subStep = 1; 
  day: number = 1; 

  selectedCategory: string = 'Allergies';
  preferenceCategories = ['Allergies', 'Diet Types', 'Cuisines', 'Nutrients'];
  
  nutrients = [
    { key: 'Calories', label: 'Calories', unit: 'kcal' },
    { key: 'Protein', label: 'Protein', unit: 'g' },
    { key: 'Carbs', label: 'Carbohydrates', unit: 'g' },
    { key: 'Fat', label: 'Fat', unit: 'g' },
    { key: 'Fiber', label: 'Fiber', unit: 'g' }
  ];

  // Diet Plan
  dietPlan: DietPlan = {
    numberOfDays: 1,
    calorieTarget: 2000, 
    targetProtein: 0,
    targetCarbs: 0,
    meals: [],
    status: PlanStatus.DRAFT
  };

  // Add these properties
  allHealthLabels = Object.keys(HealthLabel);
  allMealTypes = Object.values(MealType);

  // Preferences State
  preferencesState: PreferencesState = {
    dietLabel: DietLabel.BALANCED,
    mealTypes: {},
    healthLabels: {},
    selectedNutrients: {
      minCalories: 0,
      maxCalories: 0,
      minProtein: 0,
      maxProtein: 0,
      minCarbs: 0,
      maxCarbs: 0,
      minFat: 0,
      maxFat: 0,
      minFiber: 0,
      maxFiber: 0,
      minCalcium: 0,
      minCholesterol: 0,
      minPotassium: 0,
      minSodium: 0,
      minVitaminA: 0,
      minVitaminC: 0,
      minVitaminK: 0,
      

    }
  };

  selectedMealTypes: string[] = [];
  meals: Meal[] = []; 

  dailyNutrientComparison: { [key: string]: number } | null = null;

  analytics: { completionRate: number; consumedNutrients: any; totalMeals: number; completedMeals: number ,remainingNutrients: {
    calories: 0,
    protein: 0,
    carbs: 0,
    fat: 0,
},} | null = null;

  dailyNutrientStats: any; 

  private initializeEnumRecord<T extends string>(enumValues: T[]): Record<T, boolean> {
    return enumValues.reduce((acc, val) => ({
      ...acc,
      [val]: false
    }), {} as Record<T, boolean>);
  }

  // Allergies list
  allergies = ['Gluten', 'Dairy', 'Nuts', 'Shellfish', 'Eggs', 'Soy'];
  dietLabels = ['No Restrictions', 'Vegetarian', 'Vegan', 'Keto', 'Paleo', 'Mediterranean'];
  mealTypes = ['Breakfast', 'Lunch', 'Dinner', 'Snacks'];
  healthLabels = [HealthLabel.VEGETARIAN, HealthLabel.VEGAN, HealthLabel.GLUTEN_FREE, HealthLabel.DAIRY_FREE];

  // Generated Meals
  generatedMeals: Meal[] = [];

  // Add cuisineTypes array
  cuisineTypes = [
    { id: 'italian', label: 'Italian', icon: 'ti-pizza' },
    { id: 'mediterranean', label: 'Mediterranean', icon: 'ti-salad' },
    { id: 'asian', label: 'Asian', icon: 'ti-bowl' },
    { id: 'mexican', label: 'Mexican', icon: 'ti-pepper' },
    { id: 'indian', label: 'Indian', icon: 'ti-soup' },
    { id: 'american', label: 'American', icon: 'ti-burger' }
  ];

  selectedCuisines: string[] = [];

  constructor(
    private dietService: DietService,
    private router: Router
  ) {}

  ngOnInit(): void {
   

    this.preferencesState.mealTypes = this.initializeEnumRecord(Object.values(MealType));
    this.preferencesState.healthLabels = this.initializeEnumRecord(Object.values(HealthLabel));
    this.loadExistingDietPlan(); 
    this.loadUserPreferences();
    this.fetchMeals();
    // this.fetchAnalytics();
    //this.dailyNutrientStats = this.fetchDailyNutrientStats();
    this.fetchDailyNutrientStats(); 
  }

  private loadExistingDietPlan(): void {
    this.dietService.getDietPlan().subscribe({
      next: (existingPlan) => {
        if (existingPlan) {
          console.log('Loaded existing diet plan:', existingPlan);
          this.dietPlan.numberOfDays = existingPlan.numberOfDays || 1; 
           this.dietPlan.calorieTarget = existingPlan.calorieTarget;
           this.dietPlan.targetProtein = existingPlan.targetProtein;
           this.dietPlan.targetCarbs = existingPlan.targetCarbs;
        }
      },
      error: (error) => {
        console.error('Error loading diet plan:', error);
      }
    });
  }

  fetchMeals(): void {
    this.dietService.getMeals().subscribe({
      next: (meals) => {
        console.log('Fetched meals:', meals);
        this.meals = meals;
      },
      error: (error) => {
        console.error('Error fetching meals:', error);
      }
    });
  }
/////1st
  // fetchAnalytics(): void {
  //   console.log('Fetching analytics for day:', this.day);
  //   this.dietService.getMealCompletionAnalytics(this.day).subscribe({
  //     next: (data) => {
  //       console.log('Analytics data for day', this.day, ':', data);
  //       this.analytics = data;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching analytics for day', this.day, ':', error);
  //     }
  //   });
  // }
  // onDaySelected(day: number): void {
  //   this.day = day;
  //   console.log('Selected day:', this.day);
  //   this.fetchAnalytics(); // Refetch analytics for the new day
  // }
///////////////////////

fetchDailyNutrientStats(): void {
  this.dietService.getDailyNutrientStats().subscribe({
    next: (stats) => {
      console.log('Daily nutrient stats:', stats);
      this.dailyNutrientStats = stats;
      this.updateSelectedDayStats(); 
      //this.loadMealCompletionAnalytics(this.selectedDay)
    },
    error: (error) => {
      console.error('Error fetching daily nutrient stats:', error);
    }
  });
}
selectedDay: number = 1;

getStatForSelectedDay(): any {
  return this.dailyNutrientStats?.find((stat: { dayNumber: number }) => stat.dayNumber === this.selectedDay);
}
getStatForDay(day: number): any {
  return this.dailyNutrientStats?.find((stat: { day: number }) => stat.day === day) || null;
}
mealCompletionStats: any = null;
selectedDayStats: any = null;

onDaySelected(day: number): void {
  this.selectedDay = day;
  this.updateSelectedDayStats();
}
updateSelectedDayStats(): void {
  this.selectedDayStats = this.dailyNutrientStats?.find(
    (stat: any) => stat.dayNumber === this.selectedDay
  ) || null;
}

  loadUserPreferences(): void {
    this.dietService.getPreferencesByUser().subscribe(
      (preference: Preference) => {
        if (preference) {
          this.preferencesState = {
            dietLabel: preference.dietLabel || DietLabel.BALANCED,
            mealTypes: this.arrayToRecord(preference.mealTypes || []),
            healthLabels: this.arrayToRecord(preference.healthLabels || []),
            selectedNutrients: {
              minCalories: preference.minCalories || 0,
              maxCalories: preference.maxCalories || 0,
              minProtein: preference.minProtein || 0,
              maxProtein: preference.maxProtein || 0,
              minCarbs: preference.minCarbs || 0,
              maxCarbs: preference.maxCarbs || 0,
              minFat: preference.minFat || 0,
              maxFat: preference.maxFat || 0
            }
          };
        }
      }
    );
  }

  private arrayToRecord<T extends string>(arr: T[]): Record<T, boolean> {
    return arr.reduce((acc, curr) => {
      acc[curr] = true;
      return acc;
    }, {} as Record<T, boolean>);
  }

  private stringToHealthLabel(value: string): HealthLabel {
    return HealthLabel[value as keyof typeof HealthLabel] || HealthLabel.VEGETARIAN; // Default value
  }

  savePreferences(): void {
    const preference: Preference = this.mapPreferencesToModel();

    this.dietService.savePreferences(preference).subscribe({
      next: (savedPreference) => {
        console.log('Preferences saved:', savedPreference);
        this.generateMealPlan();
      },
      error: (error) => console.error('Error saving preferences:', error)
    });
  }

  mapPreferencesToModel(): Preference {
    return {
      dietLabel: this.preferencesState.dietLabel,
      mealTypes: Object.keys(this.preferencesState.mealTypes)
        .filter(key => this.preferencesState.mealTypes[key])
        .map(key => key as MealType),
      healthLabels: Object.keys(this.preferencesState.healthLabels)
        .filter(key => this.preferencesState.healthLabels[key])
        .map(key => key as HealthLabel),
      minCalories: this.preferencesState.selectedNutrients.minCalories,
      maxCalories: this.preferencesState.selectedNutrients.maxCalories,
      minProtein: this.preferencesState.selectedNutrients.minProtein,
      maxProtein: this.preferencesState.selectedNutrients.maxProtein,
      minCarbs: this.preferencesState.selectedNutrients.minCarbs,
      maxCarbs: this.preferencesState.selectedNutrients.maxCarbs,
      minFat: this.preferencesState.selectedNutrients.minFat,
      maxFat: this.preferencesState.selectedNutrients.maxFat
    };
  }

  generateMealPlan(): void {
    const dietPlan: DietPlan = {
        numberOfDays: this.dietPlan.numberOfDays,
        calorieTarget: this.dietPlan.calorieTarget, 
        targetProtein: this.dietPlan.targetProtein,
        targetCarbs: this.dietPlan.targetCarbs,
        meals: [],
        status: PlanStatus.DRAFT
    };

    this.dietService.generateMealPlan(dietPlan).subscribe({
        next: (response) => {
            console.log('Plan generated successfully:', response);
            this.generatedMeals = response.meals;
            this.fetchMeals();
            this.currentStep = 3;
        },
        error: (error) => {
            console.error('Error generating meal plan:', error);
            alert('An error occurred while generating the meal plan. Please try again later.');
        }
    });
  }

  handleStepCompletion(): void {
    if (this.currentStep === 1) {
      this.dietService.saveInitialDietPlan(this.dietPlan).subscribe({
        next: (response) => {
          console.log('Initial diet plan saved:', response);
          this.currentStep = 2;
        },
        error: (error) => console.error('Error saving diet plan:', error)
      });
    } else if (this.currentStep === 2) {
      // Save preferences first
      this.savePreferences();
    }
  }

  getSelectedAllergies(): HealthLabel[] {
    return Object.keys(this.preferencesState.healthLabels)
      .filter(key => this.preferencesState.healthLabels[key])
      .map(key => key as HealthLabel);
  }

  getSelectedMeals(): MealType[] {
    return Object.keys(this.preferencesState.mealTypes)
      .filter(key => this.preferencesState.mealTypes[key])
      .map(key => key as MealType);
  }

  savePlan(): void {
    // First save preferences
    this.savePreferences();
    // Then generate meal plan
    this.generateMealPlan();
  }

  formatLabel(label: string): string {
    return label
      .toLowerCase()
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  togglePreference(type: string, value: string): void {
    console.log(`Toggling ${type}: ${value}`);
    
    if (type === 'healthLabels') {
      // If already selected, remove it
      if (this.preferencesState.healthLabels[value]) {
        delete this.preferencesState.healthLabels[value];
      } else {
        // If not selected, add it
        this.preferencesState.healthLabels[value] = true;
      }
      console.log('Updated healthLabels:', this.preferencesState.healthLabels);
    } else if (type === 'mealTypes') {
      if (this.preferencesState.mealTypes[value]) {
        delete this.preferencesState.mealTypes[value];
      } else {
        this.preferencesState.mealTypes[value] = true;
      }
      console.log('Updated mealTypes:', this.preferencesState.mealTypes);
      this.updateSelectedMeals();
    }
  }

  toggleCuisine(cuisineId: string): void {
    const index = this.selectedCuisines.indexOf(cuisineId);
    if (index > -1) {
      this.selectedCuisines.splice(index, 1);
    } else {
      this.selectedCuisines.push(cuisineId);
    }
  }

  isCuisineSelected(cuisineId: string): boolean {
    return this.selectedCuisines.includes(cuisineId);
  }

  isDietaryRestrictionSelected(restriction: string): boolean {
    return !!this.preferencesState.healthLabels[restriction];
  }

  isMealTypeSelected(mealType: string): boolean {
    return !!this.preferencesState.mealTypes[mealType];
  }

  getMealTypeIcon(type: string): string {
    const iconMap: Record<string, string> = {
      'breakfast': 'ti-coffee',
      'lunch': 'ti-bowl',
      'dinner': 'ti-meat',
      'snack': 'ti-apple'
    };
    return iconMap[type.toLowerCase()] || 'ti-bowl';
  }

  toggleMealType(type: MealType): void {
    this.preferencesState.mealTypes[type] = !this.preferencesState.mealTypes[type];
    // Update selected meals display
    this.updateSelectedMeals();
  }

  private updateSelectedMeals(): void {
    this.selectedMealTypes = Object.entries(this.preferencesState.mealTypes)
      .filter(([_, selected]) => selected)
      .map(([type]) => type);
  }

  getNutrientValue(nutrient: { key: string }, type: 'min' | 'max'): number {
    const key = `${type}${nutrient.key}` as keyof PreferencesState['selectedNutrients'];
    return this.preferencesState.selectedNutrients[key];
  }

  setNutrientValue(nutrient: { key: string }, type: 'min' | 'max', value: number): void {
    const key = `${type}${nutrient.key}` as keyof PreferencesState['selectedNutrients'];
    this.preferencesState.selectedNutrients[key] = value;
  }

  // Helper method to check if a string is a valid HealthLabel
  private isHealthLabel(value: string): value is HealthLabel {
    return Object.values(HealthLabel).includes(value as HealthLabel);
  }

  decreaseDays(): void {
    if (this.dietPlan.numberOfDays > 1) {
      this.dietPlan.numberOfDays--;
    }
    console.log('Number of days decreased to:', this.dietPlan.numberOfDays); // Debugging log
  }

  increaseDays(): void {
    if (this.dietPlan.numberOfDays < 30) {
      this.dietPlan.numberOfDays++;
    }
    console.log('Number of days increased to:', this.dietPlan.numberOfDays); // Debugging log
  }

  previousStep(): void {
    if (this.currentStep > 1) {
      this.currentStep--;
      // Reset substep when going back
      this.subStep = 1;
    }
  }

  nextStep(): void {
    if (this.currentStep === 1) {
      this.saveInitialPlan();
    } else if (this.currentStep === 2) {
      this.savePreferencesAndGeneratePlan();
    }
  }

  canProceedToNextStep(): boolean {
    if (this.currentStep === 1) {
      return this.dietPlan.numberOfDays > 0;
    }
    if (this.currentStep === 2) {
      return this.hasSelectedPreferences();
    }
    return true;
  }

  private saveInitialPlan(): void {
    this.dietService.saveInitialDietPlan(this.dietPlan).subscribe({
      next: (response) => {
        console.log('Initial plan saved:', response);
        this.currentStep++;
      },
      error: (error) => {
        console.error('Error saving initial plan:', error);
        // Show error message to user
      }
    });
  }

  private savePreferencesAndGeneratePlan(): void {
    const preferences = this.mapPreferencesToModel();
    this.dietService.savePreferences(preferences).subscribe({
      next: (savedPreferences) => {
        console.log('Preferences saved successfully:', savedPreferences);
        // Only generate meal plan after preferences are saved
        this.generateMealPlan();
      },
      error: (error) => {
        console.error('Error saving preferences:', error);
        // Show error to user
      }
    });
  }

  setStep(step: number): void {
    if (step >= 1 && step <= 3) {
      if (step < this.currentStep || this.canProceedToStep(step)) {
        this.currentStep = step;
      }
    }
  }

  selectCategory(category: string): void {
    this.selectedCategory = category;
  }

  getCategoryIcon(category: string): string {
    const icons: Record<string, string> = {
      'Allergies': 'ti-alert-triangle',
      'Diet Types': 'ti-apple',
      'Cuisines': 'ti-bowl',
      'Nutrients': 'ti-chart-bar'
    };
    return icons[category] || 'ti-settings';
  }

  private canProceedToStep(step: number): boolean {
    if (step === 2) {
      return this.dietPlan.numberOfDays > 0;
    }
    if (step === 3) {
      return this.hasSelectedPreferences();
    }
    return true;
  }

  private hasSelectedPreferences(): boolean {
    const hasSelectedMealTypes = Object.values(this.preferencesState.mealTypes).some(v => v);
    const hasSelectedHealthLabels = Object.values(this.preferencesState.healthLabels).some(v => v);
    return hasSelectedMealTypes || hasSelectedHealthLabels;
  }

  viewMealDetails(mealId: string): void {
    console.log('Navigating to meal:', mealId);
    if (mealId) {
      this.router.navigate(['diet-plan', 'meal', mealId])
        .then(success => console.log('Navigation result:', success))
        .catch(error => console.error('Navigation error:', error));
    } else {
      console.warn('No meal ID provided');
    }
  }

  // fetchDailyNutrientComparison(dayNumber: number): void {
  //   const dietPlanId = this.dietPlan.dietPlanId;
  //   const username = this.dietPlan.username; // make sure this exists
  
  //   if (!dietPlanId || !username) {
  //     console.error('Missing diet plan ID or username.');
  //     return;
  //   }
  
  //   this.dietService.compareDailyNutrients(username, dietPlanId, dayNumber).subscribe({
  //     next: (comparison) => {
  //       console.log('Daily nutrient comparison:', comparison);
  //       this.dailyNutrientComparison = comparison;
  //     },
  //     error: (error) => {
  //       console.error('Error fetching daily nutrient comparison:', error);
  //       this.dailyNutrientComparison = null;
  //     }
  //   });
  // }

  markMealAsCompleted(mealId: string): void {
    this.dietService.markMealCompleted(mealId).subscribe({
      next: () => {
        console.log(`Meal with ID ${mealId} marked as completed.`);
        // Update the meal's completed status in the UI
        const meal = this.meals.find(m => m.mealId.toString() === mealId);
        if (meal) {
          meal.completed = true;
        }
        // Refresh analytics for the current day
        this.fetchDailyNutrientStats();
      },
      error: (error) => {
        console.error(`Error marking meal with ID ${mealId} as completed:`, error);
      }
    });
  }
}

interface PreferencesState {
  dietLabel: DietLabel;
  mealTypes: Record<string, boolean>;
  healthLabels: Record<string, boolean>;
  selectedNutrients: {
    [key: string]: number; // Add index signature
    minCalories: number;
    maxCalories: number;
    minProtein: number;
    maxProtein: number;
    minCarbs: number;
    maxCarbs: number;
    minFat: number;
    maxFat: number;
  };
  
}
