export interface Nutrients {
    Calories: number;
    Protein: number;
    TotalFat: number;
    Carbohydrates: number;
    Fiber: number;
    Sugar: number;
    Sodium: number;
  }
  
  export interface MealItem {
    name: string;
    estimated_weight_grams: number;
    nutrients: Nutrients;
  }
  
  export interface MealAnalysisResponse {
    meal_analysis: MealItem[];
    total_nutrients: Nutrients;
  }
  