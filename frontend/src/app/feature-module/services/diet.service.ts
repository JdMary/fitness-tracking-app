import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { DietPlan, Preference, Meal } from '../models/diet.interface';
import { tap, map, catchError, switchMap } from 'rxjs/operators';
//import { MealAnalysisResonse } from '../models/meal-analysis.interface';

@Injectable({
  providedIn: 'root'
})
export class DietService {
  private baseUrl = 'http://localhost:8222/api/v1/diets/preference';
  private baseUrl2 = 'http://localhost:8222/api/v1/diets/plan';
  private baseUrl3 = 'http://localhost:8222/api/v1/diets/Meal';
  private defaultToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJhdXRoLWFwaSIsInN1YiI6InVzZXJAZXNwcml0LnRuIiwiZXhwIjoxNzQ1NDAzNDgzfQ.vwonz7_vtMiwKMPr8rdhuKIkV_noJ8-sZx5YRDS0NLc';
  geminiPath: string = "http://127.0.0.1:8000/process-image"

  constructor(private http: HttpClient) {
    localStorage.removeItem('token');
    localStorage.setItem('token', this.defaultToken);
    console.log('Token reset with new value');
  }

  private getHeaders(): HttpHeaders {
    const token = localStorage.getItem('token');
    console.log('Current token:', token); 
    
    if (!token) {
      console.error('No token found in localStorage');
      localStorage.setItem('token', this.defaultToken);
      console.log('Default token set');
      return new HttpHeaders({
        'Authorization': `Bearer ${this.defaultToken}`,
        'Content-Type': 'application/json'
      });
    }
    
    return new HttpHeaders({
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    });
  }



  /////////AI///////
  // getDamageEstimate(image: string): Observable<MealAnalysisResonse> {
  //   // Assuming the 'image' parameter might be a Data URL (e.g., 'data:image/png;base64,...')
  //   // We split the string at the comma and take the second part, which is the Base64 data.
  //   const base64Image = image.split(',')[1] || image; // Handle cases where it might already be just Base64

  //   return this.http.post<MealAnalysisResonse>(
  //     this.geminiPath,
  //     { image: base64Image },
  //     {
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //     }
  //   );
  // }
  //////////////
  getPreferencesByUser(): Observable<Preference> {
    return this.http.get<Preference>(
      `${this.baseUrl}/PreferenceByUsername`,
      { headers: this.getHeaders() }
    ).pipe(
      tap(response => console.log('Retrieved preferences:', response)),
      catchError(error => {
        console.error('Error fetching preferences:', error);
        if (error.status === 404) {
          return of({} as Preference);
        }
        throw error;
      })
    );
  }

  savePreferences(preferences: Preference): Observable<Preference> {
  console.log('🟡 Starting savePreferences...');
  
  if (!preferences) {
    throw new Error('❌ Preferences object cannot be null');
  }

  console.log('📦 Full preference payload to send:', JSON.stringify(preferences, null, 2));

  return this.getPreferencesByUser().pipe(
    switchMap(existingPreference => {
      if (existingPreference && existingPreference.preferenceId) {
        console.log(`🔁 Updating existing preference with ID: ${existingPreference.preferenceId}`);
        console.log('📤 PUT payload:', JSON.stringify(preferences, null, 2));

        return this.http.put<Preference>(
          `${this.baseUrl}/update/${existingPreference.preferenceId}`,
          preferences,
          { headers: this.getHeaders() }
        ).pipe(
          tap(response => console.log('✅ Updated preferences successfully:', response)),
          catchError(error => {
            console.error('❌ Error updating preferences:', error);
            throw error;
          })
        );
      } else {
        console.log('🆕 No existing preference found, creating new one');
        console.log('📤 POST payload:', JSON.stringify(preferences, null, 2));

        return this.http.post<Preference>(
          `${this.baseUrl}/add`,
          preferences,
          { headers: this.getHeaders() }
        ).pipe(
          tap(response => console.log('✅ Created new preferences successfully:', response)),
          catchError(error => {
            console.error('❌ Error creating preferences:', error);
            throw error;
          })
        );
      }
    }),
    catchError(error => {
      console.error('❌ General error in savePreferences():', error);

      // Fallback POST if 404 from getPreferencesByUser
      if (error.status === 404) {
        console.log('⚠️ No existing preferences (404), falling back to create');
        console.log('📤 POST payload (fallback):', JSON.stringify(preferences, null, 2));

        return this.http.post<Preference>(
          `${this.baseUrl}/add`,
          preferences,
          { headers: this.getHeaders() }
        ).pipe(
          tap(response => console.log('✅ Fallback creation succeeded:', response)),
          catchError(fallbackError => {
            console.error('❌ Fallback create also failed:', fallbackError);
            throw fallbackError;
          })
        );
      }

      throw error;
    })
  );
}


  generateMealPlan(dietPlan: DietPlan): Observable<DietPlan> {
    console.log('Generating meal plan:', dietPlan);
    return this.http.post<DietPlan>(
      `${this.baseUrl2}/addDiet`,
      dietPlan,
      { headers: this.getHeaders() }
    ).pipe(
      switchMap(savedPlan => {
        console.log('Initial plan saved:', savedPlan);
        return this.http.post<DietPlan>(
          `${this.baseUrl2}/generate`,
          savedPlan,
          { headers: this.getHeaders() }
        );
      }),
      tap(response => console.log('Generated meal plan:', response)),
      catchError(error => {
        console.error('Error in meal plan generation:', error);
        throw error;
      })
    );
  }

  saveInitialDietPlan(dietPlan: Partial<DietPlan>): Observable<DietPlan> {
    return this.http.post<DietPlan>(
      `${this.baseUrl2}/addDiet`,
      dietPlan,
      { headers: this.getHeaders() }
    ).pipe(
      tap(response => console.log('Saved initial plan:', response)),
      catchError(error => {
        console.error('Error saving initial plan:', error);
        throw error;
      })
    );
  }

  getDietPlan(): Observable<DietPlan> {
    return this.http.get<DietPlan>(
      `${this.baseUrl2}/DietPlanByUsername`,
      { headers: this.getHeaders() }
    ).pipe(
      tap(response => console.log('Retrieved diet plan:', response)),
      catchError(error => {
        console.error('Error fetching diet plan:', error);
        if (error.status === 404) {
          return of({} as DietPlan);
        }
        throw error;
      })
    );
  }

  getMeals(): Observable<Meal[]> {
    return this.http.get<Meal[]>(
      `${this.baseUrl3}/meals`, 
      { headers: this.getHeaders() }
    ).pipe(
      tap(response => {
        console.log('Fetched meals:', response); // Log fetched meals
      }),
      catchError(error => {
        console.error('Error fetching meals:', error);
        throw error;
      })
    );
  }

  getMealById(mealId: string): Observable<Meal> {
    return this.http.get<Meal>(`${this.baseUrl3}/MealDetail/${mealId}`, { headers: this.getHeaders() }).pipe(
      map((response: any) => ({
        ...response,
        ingredients: response.ingredients || [] // Ensure ingredients are mapped
      }))
    );
  }
  
  getMealCompletionAnalytics(dayNumber: number): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl3}/analytics/${dayNumber}`,
      { headers: this.getHeaders() }
    ).pipe(
      tap(response => console.log('Fetched meal completion analytics:', response)),
      catchError(error => {
        console.error('Error fetching meal completion analytics:', error);
        throw error;
      })
    );
  }
  markMealCompleted(mealId: string): Observable<void> {
    return this.http.put<void>(
      `${this.baseUrl3}/mark-completed/${mealId}`,
      {}, // empty body
      { headers: this.getHeaders() }
    );
  }
  
  
  // compareDailyNutrients(username: string, dietPlanId: number, dayNumber: number): Observable<any> {
  //   return this.http.get<any>(
  //     `${this.baseUrl3}/compare-nutrients?username=${username}&dietPlanId=${dietPlanId}&dayNumber=${dayNumber}`,
  //     { headers: this.getHeaders() }
  //   );
  // }
  
  getDailyNutrientStats(): Observable<any[]> {
    return this.http.get<any[]>(
      `${this.baseUrl3}/daily-nutrient-stats`,
      { headers: this.getHeaders() }
    ).pipe(
      tap(response => console.log('Fetched daily nutrient stats:', response)),
      catchError(error => {
        console.error('Error fetching daily nutrient stats:', error);
        throw error;
      })
    );
  }
  
  //////////////////////Admin Dashboard//////////////////////////
  getDietPlanList(): Observable<DietPlan[]> {
    return this.http.get<DietPlan[]>(
      `${this.baseUrl2}/DietPlanList`,
      { headers: this.getHeaders() }
    );
  }

  getDietPlanDetail(dietPlanId: string): Observable<DietPlan> {
    return this.http.get<DietPlan>(
      `${this.baseUrl2}/DietPlanDetail/${dietPlanId}`,
      { headers: this.getHeaders() }
    ).pipe(
      tap(response => console.log('Fetched diet plan details:', response)),
      catchError(error => {
        console.error('Error fetching diet plan details:', error);
        throw error;
      })
    );
  }

  getPreferences(): Observable<Preference[]> {
    return this.http.get<Preference[]>(
      `${this.baseUrl}/PreferencesList`,
      { headers: this.getHeaders() }
    );
  }


  getRecipeDetails(recipeId: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseUrl3}${recipeId}`,
      { headers: this.getHeaders() }
    ).pipe(
      tap(response => console.log('Fetched recipe details:', response)),
      catchError(error => {
        console.error('Error fetching recipe details:', error);
        throw error;
      })
    );
  }
  

}
