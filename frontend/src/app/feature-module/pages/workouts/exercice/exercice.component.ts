import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { WorkoutFormService } from '../services/workout-form.service';
import { ExerciceService } from '../services/exercice.service';
import { Exercise } from '../models/entities';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {
  exerciseForm: FormGroup;
  videoUrl: string | null = null;
  loading = false;
  error: string | null = null;
  trainingSessionId: number | null = null;
  exercices: Exercise[] = [];
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private exerciceService: ExerciceService,
  ) {
    this.exerciseForm = this.fb.group({
      category: ['', Validators.required],
      sets: ['', [Validators.required, Validators.min(1)]],
      reps: ['', [Validators.required, Validators.min(1)]],
      difficulty: ['', Validators.required],
      videoUrl: [''],
      instructions: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      this.trainingSessionId = params['trainingSessionId'] ? +params['trainingSessionId'] : null;
      this.loadTrainingSessions();
    });
  }

  
  loadTrainingSessions(): void {
    this.loading = true;
    if (this.trainingSessionId) {
      this.exerciceService.getAllExercicesBySession(this.trainingSessionId).subscribe({
        next: (exercices) => {
          this.exercices = exercices;
          this.loading = false;
        },
        error: (error) => {
          this.error = 'Failed to load exercices';
          this.loading = false;
          console.error('Error loading exercices:', error);
        }
      });
    } else {
      this.exerciceService.getAllExercices().subscribe({
        next: (exercices) => {
          this.exercices = exercices;
          this.loading = false;
          console.log('Loaded exercices:', exercices);
        },
        error: (error) => {
          this.error = 'Failed to load exercices';
          this.loading = false;
          console.error('Error loading exercices:', error);
        }
      });
    }
  }
}
