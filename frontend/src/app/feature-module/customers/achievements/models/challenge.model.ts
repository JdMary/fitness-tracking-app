import { ChallengeStatus } from './challenge-status.enum';

export interface Challenge {
    challengeId: string;
    challenge_id?: string;
  title: string;
  startDate: string;
  endDate: string;
  description: string;
  xpPoints: number;
  userId: string;
  status: ChallengeStatus; 
  reminder15: boolean;
  participation: boolean;
  validation: boolean;
  alertShown?: boolean;
}
