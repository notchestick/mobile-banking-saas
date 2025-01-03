export type Language = 'en' | 'pl' | 'de';

export interface Translation {
  common: {
    dashboard: string;
    cards: string;
    analytics: string;
    transfers: string;
    accounts: string;
    settings: string;
  };
  dashboard: {
    mainAccount: string;
    savings: string;
    recentTransactions: string;
    balance: string;
  };
  transactions: {
    income: string;
    expense: string;
  };
}