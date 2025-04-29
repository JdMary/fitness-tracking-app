import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ai',
  templateUrl: './ai.component.html',
  styleUrl: './ai.component.css',
  // standalone: true,
  // imports: [CommonModule],
})
export class AIComponent implements OnInit {
  @Input() plannedMeal: any;

  selectedImage: File | null = null;
  previewUrl: string | ArrayBuffer | null = null;
  result: any = null;
  loading: boolean = false;
  error: string | null = null;

  constructor(private http: HttpClient) {}
  ngOnInit(): void {
    console.log('Planned Meal passed to AIComponent:', this.plannedMeal);

    
  }

  onFileSelected(event: any): void {
    if (event.target.files && event.target.files.length > 0) {
      this.selectedImage = event.target.files[0];

      const reader = new FileReader();
      reader.onload = (e) => {
        this.previewUrl = reader.result;
      };
      if (this.selectedImage) {
        reader.readAsDataURL(this.selectedImage);
      }
    }
  }

  submitImage(): void {
    if (!this.previewUrl) {
      this.error = "No image selected!";
      return;
    }

    this.loading = true;
    this.error = null;
    this.result = null;

    const base64Image = (this.previewUrl as string).split(',')[1];

    this.http.post('http://localhost:8000/process-image/', { image: base64Image })
      .subscribe({
        next: (response) => {
          this.result = response;
          this.loading = false;
          this.compareMealWithGeminiNutrients();  // Compare once response is received

        },
        error: (err) => {
          this.error = err.error.detail || 'Error processing image';
          this.loading = false;
        }
      });
  }
  compareMealWithGeminiNutrients(): void {
    if (this.plannedMeal && this.result) {
      const mealNutrients = this.plannedMeal;
      const geminiNutrients = this.result.total_nutrients;
  
      // Log to verify the structure of both plannedMeal and geminiNutrients
      console.log('Planned Meal Nutrients:', mealNutrients);
      console.log('Gemini Nutrients:', geminiNutrients);
  
      // Check if mealNutrients and geminiNutrients are defined
      if (mealNutrients && geminiNutrients) {
       const tolerance = 0.5;  // Set a tolerance level of 0.5

      const comparisonResult = {
        calories: Math.abs(mealNutrients.Calories - geminiNutrients.Calories) < tolerance,
        protein: Math.abs(mealNutrients.Protein - geminiNutrients.Protein) < tolerance,
        totalFat: Math.abs(mealNutrients.TotalFat - geminiNutrients.TotalFat) < tolerance,
        carbohydrates: Math.abs(mealNutrients.Carbohydrates - geminiNutrients.Carbohydrates) < tolerance,
        fiber: Math.abs(mealNutrients.Fiber - geminiNutrients.Fiber) < tolerance,
        sugar: Math.abs(mealNutrients.Sugar - geminiNutrients.Sugar) < tolerance,
        sodium: Math.abs(mealNutrients.Sodium - geminiNutrients.Sodium) < tolerance
      }
      
  
        console.log('Nutrient Comparison:', comparisonResult);
      } else {
        console.error('Nutrient data is undefined!');
      }
    } else {
      console.error('Planned Meal or Gemini Result is undefined!');
    }
  }
  showComparison: boolean = false;  // Add a property to toggle comparison
// List of nutrients to display
nutrientsList = [
  { key: 'calories', label: 'Calories', unit: '' },
  { key: 'protein', label: 'Protein', unit: 'g' },
  { key: 'fat', label: 'Fat', unit: 'g' },
  { key: 'carbs', label: 'Carbs', unit: 'g' },
  { key: 'fiber', label: 'Fiber', unit: 'g' },
  { key: 'sugar', label: 'Sugar', unit: 'g' },
  { key: 'sodium', label: 'Sodium', unit: 'mg' }
];


// Tolerance checker
isWithinTolerance(plannedValue: number, geminiValue: number): boolean {
  const tolerance = 0.5;
  if (plannedValue == null || geminiValue == null) {
    return false; 
  }
  return Math.abs(plannedValue - geminiValue) <= tolerance;
}

  toggleComparison(): void {
    this.showComparison = !this.showComparison;  
  }
}
