import { ChallengeStatus } from './challenge-status.enum';

export interface Challenge {
    challengeId: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  xpPoints: number;
  userId: string;
  status: ChallengeStatus; // ✅ Ici on utilise l'enum
  reminder15: boolean;
  participation: boolean;
  validation: boolean;
  alertShown?: boolean;
}
