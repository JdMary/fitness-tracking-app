export interface DietPlan {
  dietPlanId?: number;
  username?: string;
  meals: Meal[];
  numberOfDays: number;
  calorieTarget: number;
  targetProtein: number;
  targetCarbs: number;
  startDate?: Date;
  endDate?: Date;
  status?: string;
}

export interface Meal {
  mealId?: number;
  completed?: boolean;
  name: string;
  imageUrl?: string;
  recipeUrl?: string;
  source?: string;
  sourceUrl?: string;
  mealType: string;
  dayNumber: number;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  fiber?: number;
  sugar?: number;
  calcium?: number;
  iron?: number;
  magnesium?: number;
  potassium?: number;
  vitaminA?: number;
  vitaminC?: number;
  vitaminK?: number;
}

export interface Preference {
  preferenceId?: string;
  username?: string;
  dietLabel?: string | null;
  mealTypes: string[];
  healthLabels: string[];
  cuisineTypes?: string[];
  dishTypes?: string[];
  minCalories?: number;
  maxCalories?: number;
  maxTotalTime?: number;
  excludedIngredients?: string;
  excludedDietLabels?: string;
  excludedHealthLabels?: string;
  minProtein?: number;
  maxProtein?: number;
  minCarbs?: number;
  maxCarbs?: number;
  minFat?: number;
  maxFat?: number;
  minFiber?: number;
  maxFiber?: number;
  minCalcium?: number;
  maxCalcium?: number;
  minCholesterol?: number;
  maxCholesterol?: number;
  minPotassium?: number;
  maxPotassium?: number;
  minSodium?: number;
  maxSodium?: number;
  minVitaminA?: number;
  maxVitaminA?: number;
  minVitaminC?: number;
  maxVitaminC?: number;
  minVitaminK?: number;
  maxVitaminK?: number;
}
