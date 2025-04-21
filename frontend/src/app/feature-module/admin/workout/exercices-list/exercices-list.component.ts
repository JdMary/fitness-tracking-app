import { Component } from '@angular/core';
import { Exercise } from '../services/workout-plan.service';
import {WorkoutPlanService } from '../services/workout-plan.service';
@Component({
  selector: 'app-exercices-list',
  templateUrl: './exercices-list.component.html',
  styleUrls: ['./exercices-list.component.css']
})
export class ExercicesListComponent {
 trainingSessionId: string = '';
  exercicesList: Exercise[] = [];
  filteredExercices: Exercise[] = [];

  constructor(private workoutPlanService: WorkoutPlanService) {}

  ngOnInit() {
    this.loadAllSessions();
  }

  loadAllSessions() {
    this.workoutPlanService.getAllExercices().subscribe({
      next: (exercices) => {
        this.exercicesList = exercices;
        this.filteredExercices = exercices;
      },
      error: (error) => {
        console.error('Error loading sessions:', error);
      }
    });
  }

  applyFilter() {
    if (this.trainingSessionId && !isNaN(parseInt(this.trainingSessionId))) {
      this.workoutPlanService.getAllExercicesBySession(parseInt(this.trainingSessionId)).subscribe({
        next: (sessions) => {
          this.filteredExercices = sessions;
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
