export enum DietLabel {
  BALANCED = 'balanced',
  HIGH_FIBER = 'high-fiber',
  HIGH_PROTEIN = 'high-protein',
  LOW_CARB = 'low-carb',
  LOW_FAT = 'low-fat',
  LOW_SODIUM = 'low-sodium'
}

export enum MealType {
  BREAKFAST = 'BREAKFAST',
  LUNCH = 'LUNCH',
  DINNER = 'DINNER',
  SNACK = 'SNACK',
  TEATIME = 'TEATIME'
}

export enum HealthLabel {
  VEGETARIAN = 'vegetarian',
  VEGAN = 'VEGAN',
  GLUTEN_FREE = 'gluten-free',
  DAIRY_FREE = 'dairy-free',
  // ...other health labels
}

export enum CuisineType {
  AMERICAN = 'American',
  ASIAN = 'Asian',
  BRITISH = 'British',
  // ...other cuisine types from backend
}

export enum DishType {
  MAIN_COURSE = 'MAIN_COURSE',
  BISCUITS_AND_COOKIES = 'BISCUITS_AND_COOKIES',
  BREAD = 'BREAD',
  CEREALS = 'CEREALS',
  DRINKS = 'DRINKS',
  EGG = 'EGG',
  PANCAKE = 'PANCAKE',
  PASTRY = 'PASTRY',
  PIES_AND_TARTS = 'PIES_AND_TARTS',
  SANDWICHES = 'SANDWICHES',
  SALAD = 'SALAD',
  SEAFOOD = 'SEAFOOD',
  SOUP = 'SOUP',
  STARTER = 'STARTER',
  PIZZA = 'PIZZA',
  PASTA = 'PASTA',
}


export enum PlanStatus {
  DRAFT = 'DRAFT',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
  ARCHIVED = 'ARCHIVED'
}

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
  status?: PlanStatus;
  mealsPerDay?: number;
  createdAt?: Date;
  lastModified?: Date;
}

export interface Meal {
  mealId: number; 
  completed?: boolean;
  dietPlan?: DietPlan;
  name: string;
  imageUrl?: string;
  recipeUrl?: string;
  source?: string;
  sourceUrl?: string;
  mealType: MealType;
  dayNumber: number;
  prepTimeMinutes?: number;
  cookTimeMinutes: number | null;
  totalTimeMinutes?: number;
  servings: number | null;
  totalWeight?: number;
  calories: number;
  protein: number;
  fat: number;
  fiber: number;
  carbs: number;
  sugar: number;
  calcium: number; // Added calcium field
  iron: number; // Added iron field
  magnesium: number; // Added magnesium field
  potassium: number; // Added potassium field
  vitaminA: number; // Added vitamin A field
  vitaminC: number; // Added vitamin C field
  vitaminK: number; // Added vitamin K field
  ingredients: string[]; // Added ingredients field
  dietLabels?: DietLabel[];
  healthLabels?: HealthLabel[];
  cuisineTypes?: CuisineType[];
  dishTypes?: DishType[];
}

export interface Preference {
  preferenceId?: string;
  username?: string;
  dietType?: string; // Add this property
  calorieLimit?: number; // Add this property
  proteinLimit?: number; // Add this property
  carbsLimit?: number; // Add this property
  dietLabel?: DietLabel;
  mealTypes?: MealType[];
  healthLabels?: HealthLabel[];
  cuisineTypes?: CuisineType[];
  dishTypes?: DishType[];
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
  minCholesterol?: number;
  minPotassium?: number;
  minSodium?: number;
  minVitaminA?: number;
  minVitaminC?: number;
}

export interface NutrientRange {
  min: number;
  max: number;
}

export interface MealPlanRequest {
  size: number;
  plan: {
    accept: {
      all: Array<{
        allergies?: string[];
        dietLabels?: string[];
        health?: string[];
        cuisine?: string[];
        dish?: string[];
      }>;
    };
    fit: {
      ENERC_KCAL?: NutrientRange;
      PROCNT?: NutrientRange;
      [key: string]: NutrientRange | undefined;
    };
    sections: {
      [key: string]: {
        accept?: {
          meal?: string[];
          [key: string]: string[] | undefined;
        };
      };
    };
  };
}
