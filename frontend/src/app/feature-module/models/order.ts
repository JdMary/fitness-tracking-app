import { UserDetails } from "./user-details";

export interface Order {
    id: number;
    sessionId: string;
    price: number;
    currency: string;
    method: string;
    intent: string;
    description: string;
    status: string;
    user: UserDetails;
}
