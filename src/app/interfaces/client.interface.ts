export interface Client {
    id: number;
    name: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    country: string;
    status: 'active' | 'inactive';
  }