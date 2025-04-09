import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomerAchievementService } from 'src/app/feature-module/customers/achievements/customer-achievements/customer-achievement.service';
import { Achievement } from 'src/app/feature-module/customers/achievements/customer-achievements/achievement.model';

@Component({
  selector: 'app-edit-achievement',
  templateUrl: './edit-achievement.component.html',
  styleUrls: ['./edit-achievement.component.css']
})
export class EditAchievementComponent implements OnInit {

  achievement: Achievement = {
    achieveId: '',
    title: '',
    xpPoints: 0,
    criteria: '',
    progress: 0,
    exerciseId: ''
  };

  successMessage: string = '';
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private achievementService: CustomerAchievementService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.achievementService.getAchievementById(id).subscribe({
        next: (data) => {
          this.achievement = data;
        },
        error: () => {
          this.errorMessage = '❌ Error loading achievement data.';
        }
      });
    } else {
      this.errorMessage = '❌ Achievement ID is missing in the URL.';
    }
  }

  onSubmit(): void {
    // ✅ Validation complète

    if (
      !this.achievement.title ||
      !this.achievement.criteria ||
      this.achievement.xpPoints === null ||
      this.achievement.progress === null
    ) {
      this.errorMessage = 'All fields are required.';
      return;
    }

    if (this.achievement.title.trim().length < 5) {
      this.errorMessage = 'Title must be at least 5 characters long.';
      return;
    }

    if (this.achievement.criteria.trim().length < 5) {
      this.errorMessage = 'Criteria must be at least 5 characters long.';
      return;
    }

    if (this.achievement.xpPoints < 0) {
      this.errorMessage = 'XP Points cannot be negative.';
      return;
    }

    if (this.achievement.progress < 0) {
      this.errorMessage = 'Progress must be at least 0.';
      return;
    }

    // Reset error
    this.errorMessage = '';

    // ✅ Envoi de la mise à jour
    this.achievementService.updateAchievement(this.achievement).subscribe({
      next: () => {
        this.successMessage = '✅ Achievement updated successfully!';
        setTimeout(() => {
          this.successMessage = '';
          this.navigateToList();
        }, 3000);
      },
      error: () => {
        this.errorMessage = '❌ Error updating achievement.';
      }
    });
  }

  navigateToList(): void {
    this.router.navigate(['/admin/liste-achievements']);
  }
}
