import { Component, OnInit } from '@angular/core';
import { WorkoutPlan, WorkoutPlanService } from '../services/workout-plan.service';

@Component({
  selector: 'app-workout-plans-list',
  templateUrl: './workout-plans-list.component.html',
  styleUrls: ['./workout-plans-list.component.css']
})
export class WorkoutPlansListComponent implements OnInit {
  selectedStatus: string = 'ALL';
  workoutPlans: WorkoutPlan[] = [];
  filteredWorkoutPlans: WorkoutPlan[] = [];

  constructor(private workoutPlanService: WorkoutPlanService) {}

  ngOnInit() {
    this.loadWorkoutPlans();
  }

  loadWorkoutPlans() {
    this.workoutPlanService.getAllPlans().subscribe({
      next: (plans) => {
        this.workoutPlans = plans;
        this.filteredWorkoutPlans = plans;
      },
      error: (error) => {
        console.error('Error loading workout plans:', error);
      }
    });
  }

  filterByStatus(status: string) {
    this.selectedStatus = status;
    if (status === 'ALL') {
      this.filteredWorkoutPlans = this.workoutPlans;
    } else {
      this.filteredWorkoutPlans = this.workoutPlans.filter(plan => plan.status === status);
    }
  }
}
