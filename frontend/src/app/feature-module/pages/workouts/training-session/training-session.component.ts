import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WorkoutFormService } from '../services/workout-form.service';
import { routes } from 'src/app/shared/routes/routes';

@Component({
  selector: 'app-training-session',
  templateUrl: './training-session.component.html',
  styleUrls: ['./training-session.component.css']
})
export class TrainingSessionComponent implements OnInit {
  public routes = routes;
  sessionForm: FormGroup;
  selectedValue: string | null = null;
  selectedList = [
    { value: 'Newly Added' },
    { value: 'Most Popular' },
    { value: 'Highest Rated' }
  ];
  customerFavourite = [
    {
      img1: 'path/to/image1.jpg',
      img2: 'path/to/avatar1.jpg',
      like: false,
      work: 'Yoga',
      title: 'Morning Yoga Session',
      name: 'John Doe',
      country: 'USA'
    },
    {
      img1: 'path/to/image2.jpg',
      img2: 'path/to/avatar2.jpg',
      like: true,
      work: 'Cardio',
      title: 'Cardio Blast',
      name: 'Jane Smith',
      country: 'Canada'
    }
  ];
  public data = {
    like: false,
    title: 'Training Session'
  };

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private formService: WorkoutFormService
  ) {
    this.sessionForm = this.fb.group({
      entryTime: ['', Validators.required],
      exitTime: ['', Validators.required],
      guided: [true, Validators.required],
      username: ['', Validators.required]
    });
  }

  ngOnInit() {
    this.formService.trainingSession$.subscribe(data => {
      if (data) {
        this.sessionForm.patchValue(data);
      }
    });
  }

  onNext() {
    if (this.sessionForm.valid) {
      this.formService.updateTrainingSession(this.sessionForm.value);
      this.router.navigate(['/workouts/exercice']);
    }
  }

  onPrevious() {
    this.formService.updateTrainingSession(this.sessionForm.value);
    this.router.navigate(['/workouts/workout-plan']);
  }

  toggleLike(): void {
    this.data.like = !this.data.like;
  }
}
