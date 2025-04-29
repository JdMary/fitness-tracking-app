import { Component } from '@angular/core';



export interface ProgressTracker {
  progressId?: number;
  totalRepsCompleted: number;
  totalSetsCompleted: number;
  totalExercisesCompleted: number;
  burnedCalories: number;
  completionPercentage: number;
  date: Date;
  username: string;
  workoutPlanId?: number;  // Reference to WorkoutPlan without circular dependency
  estimatedWeight: number;
}
@Component({
  selector: 'app-progress-tracker',
  templateUrl: './progress-tracker.component.html',
  styleUrl: './progress-tracker.component.css'
})

export class ProgressTrackerComponent {

}
