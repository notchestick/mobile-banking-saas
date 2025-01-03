export type Theme = 'light' | 'dark' | 'purple' | 'green';

export interface Transaction {
  id: string;
  amount: number;
  currency: string;
  description: string;
  date: string;
  type: 'income' | 'expense';
  category: string;
}

export interface Account {
  id: string;
  name: string;
  balance: number;
  currency: string;
  type: 'checking' | 'savings' | 'investment';
}