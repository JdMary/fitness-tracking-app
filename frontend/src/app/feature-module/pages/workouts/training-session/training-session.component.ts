import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { WorkoutFormService } from '../services/workout-form.service';
import { routes } from 'src/app/shared/routes/routes';
import { Exercise } from '../models/entities';
import { TrainingSession } from '../models/entities';
import { TrainingSessionService } from '../services/training-session.service';
@Component({
  selector: 'app-training-session',
  templateUrl: './training-session.component.html',
  styleUrls: ['./training-session.component.css']
})
export class TrainingSessionComponent implements OnInit {
  public routes = routes;
  public trainingSessions: TrainingSession[] = [];
  sessionForm: FormGroup;
  loading = false;
  error: string | null = null;
  workoutPlanId: number | null = null;
  trainingSessionId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private trainingSessionService: TrainingSessionService,
  ) {
    this.sessionForm = this.fb.group({
      entryTime: ['', Validators.required],
      exitTime: ['', Validators.required],
      guided: [true, Validators.required],
      username: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.workoutPlanId = params['workoutPlanId'] ? +params['workoutPlanId'] : null;
      this.loadTrainingSessions();
    });
  }

  loadTrainingSessions(): void {
    this.loading = true;
    if (this.workoutPlanId) {
      this.trainingSessionService.getAllSessionsByWorkout(this.workoutPlanId).subscribe({
        next: (sessions) => {
          this.trainingSessions = sessions;
          console.log('Loaded sessions:', sessions[0].id);
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to load training sessions';
          this.loading = false;
          console.error('Error loading training sessions:', error);
        }
      });
    } else {
      this.trainingSessionService.getAllSessions().subscribe({
        next: (sessions) => {
          this.trainingSessions = sessions;
          this.loading = false;
          console.log('Loaded sessions:', sessions);
        },
        error: (error) => {
          this.error = 'Failed to load training sessions';
          this.loading = false;
          console.error('Error loading training sessions:', error);
        }
      });
    }
  }

  showExercices(sessionId: number | undefined): void {
    
    if (sessionId) {
      console.log('Navigating to exercices with sessionId:', sessionId); 
      this.router.navigate(['/workouts/exercice'], { queryParams: { trainingSessionId: sessionId } });
      console.log('Navigating to exercices with sessionId:', sessionId);
    } else {
      console.log('Navigating to exercices with sessionId:', sessionId); 
    }
      
     
  }

  goBack(): void {
    this.router.navigate(['/workouts/plans/list']);
  }
  onDelete(id: number | undefined): void {
    if (id && confirm('Are you sure you want to delete this training session?')) {
      this.trainingSessionService.deleteTrainingSession(id).subscribe({
        next: () => {
          this.router.navigate(['/workouts/plans/list']);
        },
        error: (error) => {
          console.error('Error deleting session:', error);
          this.error = 'Failed to delete session';
        }
      });
    }
  }
}
