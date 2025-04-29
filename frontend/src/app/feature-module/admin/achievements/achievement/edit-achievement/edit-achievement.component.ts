import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerAchievementService } from 'src/app/shared/services/customer-achievement.service';
import { Achievement } from 'src/app/feature-module/customers/achievements/models/achievement.model';

@Component({
  selector: 'app-edit-achievement',
  templateUrl: './edit-achievement.component.html',
  styleUrls: ['./edit-achievement.component.css']
})
export class EditAchievementComponent implements OnInit {
  achieveId!: string; // Ensure the achievement ID is correctly assigned
  achievement: Achievement = {
    achieveId: '',
    title: '',
    xpPoints: 0,
    criteria: '',
    progress: 0,
    exerciseId: ''
  };

  successMessage = '';
  errorMessage = '';
  errors: { [key: string]: string } = {};  // Store errors per field

  constructor(
    private route: ActivatedRoute,
    private achievementService: CustomerAchievementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    // Retrieve the achievement ID from the route parameters
    const id = this.route.snapshot.paramMap.get('achieveId');
    if (id) {
      this.achieveId = id;  // Ensure achieveId is correctly assigned
      this.loadAchievement(id);
    } else {
      this.errorMessage = '❌ Achievement ID is missing in the URL.';
    }
  }

  // Load achievement data based on achieveId
  loadAchievement(id: string): void {
    this.achievementService.getAchievementById(id).subscribe({
      next: (data) => {
        this.achievement = data;
      },
      error: () => {
        this.errorMessage = '❌ Error loading achievement data.';
      }
    });
  }

  // Handle the form submission
  updateAchievement(): void {
    if (!this.achieveId) {
      this.errorMessage = '❌ Achievement ID is missing.';
      return;
    }
  
    this.errors = {}; // Réinitialiser les erreurs
    this.errorMessage = ''; // Réinitialiser le message d'erreur général
  
    this.achievementService.updateAchievement(this.achieveId, this.achievement).subscribe({
      next: () => {
        this.successMessage = '✅ Achievement updated successfully! Redirecting...';
        setTimeout(() => this.router.navigate(['/admin/liste-achievements']), 1500);
      },
      error: (errorResponse) => {
        console.error('❌ Errors received:', errorResponse);
  
        if (errorResponse.error && typeof errorResponse.error === 'string') {
          try {
            // Essayer de parser l'erreur JSON
            const errorObj = JSON.parse(errorResponse.error);
            if (errorObj.errors) {
              errorObj.errors.forEach((error: string) => {
                this.parseErrorMessage(error);
              });
            }
          } catch (e) {
            // Si le format JSON échoue, traiter l'erreur autrement
            const errorParts = errorResponse.error.split('|');
            errorParts.forEach((part: string) => {
              const [field, message] = part.split(':').map((s: string) => s.trim());
              if (field && message) {
                this.parseErrorMessage(`${field}:${message}`);
              }
            });
          }
        }
      }
    });
  }
  
  // Parse error messages from backend response
  parseErrorMessage(errorMessage: string): void {
    const [field, message] = errorMessage.split(':').map((s: string) => s.trim());
    if (field && message) {
      const cleanField = field.toLowerCase();
      if (cleanField.includes('title')) this.errors['title'] = message;
      else if (cleanField.includes('criteria')) this.errors['criteria'] = message;
      else if (cleanField.includes('xppoints')) this.errors['xpPoints'] = message;  // Corrected field name
      else if (cleanField.includes('progress')) this.errors['progress'] = message;
    }
  }

  // Navigate to the list of achievements
  navigateToList(): void {
    this.router.navigate(['/admin/liste-achievements']);
  }

  clearError(field: string): void {
    if (this.errors[field]) {
      delete this.errors[field];
    }
  }
}
