export interface Exercise {
  exerciseId: number;
  category: string;
  sets: number;
  reps: number;
  difficulty: string;
  videoUrl: string;
  instructions: string;
  status: boolean;
  trainingSessionId: number;
}

export interface WorkoutPlan {
  workoutPlanId: number;
  description: string;
  duration: number;
  startDate: string;
  status: string;
  difficulty: string;
  progressTrackerId: number;
  trainingSessions: TrainingSession[];
}

export interface TrainingSession {
  trainingSessionId: number;
  guided: boolean;
  entryTime: string;
  exitTime: string;
  username: string;
  workoutPlanId: number;
  exercises: Exercise[];
}

export interface ProgressTracker {
  progressId: number;
  totalRepsCompleted: number;
  totalSetsCompleted: number;
  totalExercisesCompleted: number;
  burnedCalories: number;
  date: string;
  username: string;
  workoutPlanId: number;
}