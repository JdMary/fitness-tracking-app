import { Component,OnInit } from '@angular/core';
import { ChartData, ChartOptions, ChartType } from 'chart.js';
import { WorkoutPlanService } from '../services/workout-plan.service';
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
  selector: 'app-progress-insights',
  templateUrl: './progress-insights.component.html',
  styleUrl: './progress-insights.component.css'
})
export class ProgressInsightsComponent implements OnInit {
  public caloriesChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: { display: true, text: 'Progress' }
      },
      y: {
        title: { display: true, text: 'Burned Calories' }
      }
    }
  };

  public weightChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: { display: true, text: 'Progress' }
      },
      y: {
        title: { display: true, text: 'Estimated Weight (kg)' }
      }
    }
  };

  public chartType: ChartType = 'line';

  public caloriesChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Burned Calories',
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        fill: true
      }
    ]
  };

  public weightChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Estimated Weight',
        borderColor: 'rgba(54,162,235,1)',
        backgroundColor: 'rgba(54,162,235,0.2)',
        fill: true
      }
    ]
  };

  constructor(private workoutPlanService: WorkoutPlanService) {}

  ngOnInit(): void {
    this.workoutPlanService.getProgressTracking().subscribe({
      next: (progresses: ProgressTracker[]) => {
        this.updateCharts(progresses);
        console.log('Progress tracking data:', progresses);
        console.log('Calories chart data:', this.caloriesChartData);
      },
      error: (error) => {
        console.error('Error fetching progress tracking data:', error);
      }
    });
  }

  updateCharts(progresses: ProgressTracker[]): void {
    const labels = progresses.map((progress, index) => `Progress ${index + 1}`);
    const burnedCalories = progresses.map(progress => progress.burnedCalories);
    const estimatedWeights = progresses.map(progress => progress.estimatedWeight);

    this.caloriesChartData.labels = labels;
    this.caloriesChartData.datasets[0].data = burnedCalories;

    this.weightChartData.labels = labels;
    this.weightChartData.datasets[0].data = estimatedWeights;
  }
}