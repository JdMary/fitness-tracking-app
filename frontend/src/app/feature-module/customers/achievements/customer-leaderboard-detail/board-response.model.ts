export interface User {
    id: string;
    name: string;
    boardId: string;
    xpPoints: number;
    rank: number;
  }
  
  export interface FullBoardResponse {
    boardId: string;
    name: string;
    description: string;
    users: User[];
  }
  