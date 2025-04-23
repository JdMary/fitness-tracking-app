export interface StripePayment {
    amount: number;
    quantity: number;
    currency: string;
    name: string;
    successUrl: string;
    cancelUrl: string;
}