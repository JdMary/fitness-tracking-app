import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WorkoutPlanService, WorkoutPlan } from '../services/workout-plan.service';

@Component({
  selector: 'app-workout-plan-list',
  templateUrl: './workout-plan-list.component.html'
})
export class WorkoutPlanListComponent implements OnInit {
  workoutPlans: WorkoutPlan[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private workoutPlanService: WorkoutPlanService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadWorkoutPlans();
  }
  onAddTrainingSession(workoutPlanId: number | undefined): void {
    if (workoutPlanId) {
      this.router.navigate(['/workouts/plans', workoutPlanId, 'training-session']);
    } else {
      console.error('WorkoutPlan ID is undefined');
    }
  }

  loadWorkoutPlans(): void {
    this.loading = true;
    this.workoutPlanService.getAllPlans().subscribe({
      next: (plans) => {
        this.workoutPlans = plans;
        this.loading = false;
        console.log('Loaded plans:', plans);
      },
      error: (error) => {
        this.error = 'Failed to load workout plans';
        this.loading = false;
        console.error('Error loading plans:', error);
      }
    });
  }

  onEdit(id: number | undefined): void {
    if (id) {
      this.router.navigate(['/workouts/plans/edit', id]);
    }
  }

  onDelete(id: number | undefined): void {
    if (id && confirm('Are you sure you want to delete this plan?')) {
      this.workoutPlanService.deleteWorkoutPlan(id).subscribe({
        next: () => {
          this.loadWorkoutPlans();
        },
        error: (error) => {
          console.error('Error deleting plan:', error);
          this.error = 'Failed to delete plan';
        }
      });
    }
  }

  showTrainingSessions(workoutPlanId: number | undefined): void {
    if (workoutPlanId) {
      this.router.navigate(['/workouts/training-session'], { queryParams: { workoutPlanId } });
    }
  }
}