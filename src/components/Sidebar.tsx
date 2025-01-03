import React from 'react';
import { Link } from 'react-router-dom';
import { Home, CreditCard, PieChart, Send, Settings, Wallet } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Sidebar() {
  const { t } = useLanguage();

  const navigation = [
    { name: t.common.dashboard, icon: Home, path: '/' },
    { name: t.common.cards, icon: CreditCard, path: '/cards' },
    { name: t.common.analytics, icon: PieChart, path: '/analytics' },
    { name: t.common.transfers, icon: Send, path: '/transfers' },
    { name: t.common.accounts, icon: Wallet, path: '/accounts' },
    { name: t.common.settings, icon: Settings, path: '/settings' },
  ];

  return (
    <aside className="w-64 border-r h-[calc(100vh-4rem)]">
      <nav className="p-4 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            <item.icon size={20} />
            <span>{item.name}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}