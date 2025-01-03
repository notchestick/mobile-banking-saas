import React from 'react';
import { ArrowUpRight, ArrowDownRight, Wallet, CreditCard } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const accounts = [
  { id: '1', name: 'mainAccount', balance: 5420.50, currency: 'USD', type: 'checking' },
  { id: '2', name: 'savings', balance: 12750.75, currency: 'USD', type: 'savings' },
];

const transactions = [
  { id: '1', amount: -85.50, description: 'Grocery Store', date: '2024-03-10', type: 'expense', category: 'Shopping' },
  { id: '2', amount: 2500.00, description: 'Salary', date: '2024-03-09', type: 'income', category: 'Salary' },
  { id: '3', amount: -35.20, description: 'Restaurant', date: '2024-03-08', type: 'expense', category: 'Food' },
];

export function Dashboard() {
  const { t } = useLanguage();

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {accounts.map((account) => (
          <motion.div
            key={account.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-lg"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                {account.type === 'checking' ? <Wallet size={24} /> : <CreditCard size={24} />}
              </div>
              <span className="text-sm text-gray-500 dark:text-gray-400">{account.type}</span>
            </div>
            <h3 className="text-lg font-medium mb-2">{t.dashboard[account.name]}</h3>
            <p className="text-2xl font-bold">
              ${account.balance.toLocaleString('en-US', { minimumFractionDigits: 2 })}
            </p>
          </motion.div>
        ))}
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-bold mb-4">{t.dashboard.recentTransactions}</h2>
        <div className="space-y-4">
          {transactions.map((transaction) => (
            <motion.div
              key={transaction.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between p-4 rounded-lg bg-gray-50 dark:bg-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${
                  transaction.type === 'income' ? 'bg-green-100 dark:bg-green-900' : 'bg-red-100 dark:bg-red-900'
                }`}>
                  {transaction.type === 'income' ? <ArrowUpRight size={20} /> : <ArrowDownRight size={20} />}
                </div>
                <div>
                  <p className="font-medium">{transaction.description}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{transaction.date}</p>
                </div>
              </div>
              <span className={`font-bold ${
                transaction.type === 'income' ? 'text-green-500' : 'text-red-500'
              }`}>
                {transaction.type === 'income' ? '+' : '-'}
                ${Math.abs(transaction.amount).toLocaleString('en-US', { minimumFractionDigits: 2 })}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}