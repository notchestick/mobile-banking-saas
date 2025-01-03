import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { Sidebar } from './Sidebar';
import { Navbar } from './Navbar';
import type { Theme } from '../types/theme';

const themeStyles: Record<Theme, string> = {
  light: 'bg-white text-gray-900',
  dark: 'bg-gray-900 text-white',
  purple: 'bg-purple-50 text-purple-900',
  green: 'bg-emerald-50 text-emerald-900'
};

export function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${themeStyles[theme]} transition-colors duration-300`}>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">{children}</main>
      </div>
    </div>
  );
}