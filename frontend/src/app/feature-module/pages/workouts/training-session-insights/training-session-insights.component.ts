import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartData, ChartType } from 'chart.js';
import { TrainingSessionService } from '../services/training-session.service';

interface SessionEfficiencyDto {
  sessionId: number;
  durationMinutes: number;
  calories: number;
  caloriesPerMinute: number;
}

interface SessionInsightsDto {
  sessions: SessionEfficiencyDto[];
  bestSession: SessionEfficiencyDto | null;
  avgCaloriesPerMinute: number;
  recommendation: string;
}

@Component({
  selector: 'app-training-session-insights',
  templateUrl: './training-session-insights.component.html',
  styleUrls: ['./training-session-insights.component.css']
})
export class TrainingSessionInsightsComponent implements OnInit {
  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Sessions'
        }
      },
      y: {
        title: {
          display: true,
          text: 'Value'
        }
      }
    }
  };

  public lineChartType: ChartType = 'line';
  public lineChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Calories Burned',
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true
      },
      {
        data: [],
        label: 'Session Duration (minutes)',
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        fill: true
      },
      {
        data: [],
        label: 'Calories Per Minute',
        borderColor: 'rgba(255,99,132,1)',
        backgroundColor: 'rgba(255,99,132,0.2)',
        fill: true
      }
    ]
  };

  bestSession: SessionEfficiencyDto | null = null;
  avgCaloriesPerMinute: number | null = null;
  recommendation: string = '';

  constructor(private sessionService: TrainingSessionService) {}

  ngOnInit(): void {
    this.sessionService.getSessionInsights().subscribe({
      next: (data: SessionInsightsDto) => {
        this.updateChart(data.sessions);
        this.bestSession = data.bestSession;
        this.avgCaloriesPerMinute = data.avgCaloriesPerMinute || null;
        this.recommendation = data.recommendation;
      },
      error: (error) => {
        console.error('Error fetching session insights:', error);
        this.avgCaloriesPerMinute = null;
      }
    });
  }

  updateChart(sessions: SessionEfficiencyDto[]) {
    const labels = sessions.map(session => `Session ${session.sessionId}`);
    const calories = sessions.map(session => session.calories);
    const durations = sessions.map(session => session.durationMinutes);
    const caloriesPerMinute = sessions.map(session => session.caloriesPerMinute);

    this.lineChartData.labels = labels;
    this.lineChartData.datasets[0].data = calories;
    this.lineChartData.datasets[1].data = durations;
    this.lineChartData.datasets[2].data = caloriesPerMinute;
  }
}
