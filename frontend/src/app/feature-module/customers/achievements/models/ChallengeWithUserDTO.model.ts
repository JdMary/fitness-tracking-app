import { ChallengeStatus } from './challenge-status.enum';
export interface ChallengeWithUserDTO {
  challengeId: string;
  title: string;
  description: string;
  status: ChallengeStatus;
  xpPoints: number;
  startDate: string;
  endDate: string;
  userId: string;
  name: string;
  participation: boolean;
  reminder15: boolean;
  validation: boolean;
}
