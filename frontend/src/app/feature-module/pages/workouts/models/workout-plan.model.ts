export interface WorkoutPlan {
    id: number;
    name: string;
    exercises: Exercise[];
    duration: number;
    difficulty: string;
}