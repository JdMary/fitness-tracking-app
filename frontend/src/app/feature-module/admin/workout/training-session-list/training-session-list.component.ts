import { Component, OnInit } from '@angular/core';
import { TrainingSession, WorkoutPlanService } from '../services/workout-plan.service';

@Component({
  selector: 'app-training-session-list',
  templateUrl: './training-session-list.component.html',
  styleUrls: ['./training-session-list.component.css']
})
export class TrainingSessionListComponent implements OnInit {
  workoutPlanId: string = '';
  trainingSessions: TrainingSession[] = [];
  filteredTrainingSession: TrainingSession[] = [];

  constructor(private workoutPlanService: WorkoutPlanService) {}

  ngOnInit() {
    this.loadAllSessions();
  }

  loadAllSessions() {
    this.workoutPlanService.getAllSessions().subscribe({
      next: (sessions) => {
        this.trainingSessions = sessions;
        this.filteredTrainingSession = sessions;
      },
      error: (error) => {
        console.error('Error loading sessions:', error);
      }
    });
  }

  applyFilter() {
    if (this.workoutPlanId && !isNaN(parseInt(this.workoutPlanId))) {
      this.workoutPlanService.getAllSessionsByWorkout(parseInt(this.workoutPlanId)).subscribe({
        next: (sessions) => {
          this.filteredTrainingSession = sessions;
        },
        error: (error) => {
          console.error('Error loading filtered sessions:', error);
        }
      });
    } else {
      this.loadAllSessions();
    }
  }
}
