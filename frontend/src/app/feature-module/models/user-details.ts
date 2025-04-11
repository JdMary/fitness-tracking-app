export interface Authority {
    authority: string;
  }
  
  export interface UserDetails {
    id: string;
    name: string;
    email: string;
    number: number;
    password: string;
    role: string;
    orders: any[]; // Replace `any` with the specific type if you have a model for orders
    username: string;
    authorities: Authority[];
    enabled: boolean;
    accountNonLocked: boolean;
    accountNonExpired: boolean;
    credentialsNonExpired: boolean;
  }