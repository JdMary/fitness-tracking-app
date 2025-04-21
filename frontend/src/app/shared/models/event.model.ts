export interface Event {
    id?: number;
    name: string;
    description: string;
    eventDate: string;
    startTime: string;
    endTime: string;
    price: number;
    maxParticipation: number;
    status?: string;
    sportFacility: {
      id: number;
      name: string;
    };
  }
  