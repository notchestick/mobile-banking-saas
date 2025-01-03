import React from 'react';
import { useTheme } from '../context/ThemeContext';
import { useLanguage } from '../context/LanguageContext';
import { Sun, Moon, Palette } from 'lucide-react';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { Theme } from '../types/theme';

export function Navbar() {
  const { theme, setTheme } = useTheme();
  const { t } = useLanguage();

  const themes: Theme[] = ['light', 'dark', 'purple', 'green'];

  return (
    <nav className="border-b px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-2xl font-bold">Mobile Banking</h1>
        </div>
        <div className="flex items-center space-x-4">
          <LanguageSwitcher />
          {themes.map((t) => (
            <button
              key={t}
              onClick={() => setTheme(t)}
              className={`p-2 rounded-full ${
                theme === t ? 'bg-gray-200 dark:bg-gray-700' : ''
              }`}
            >
              {t === 'light' && <Sun size={20} />}
              {t === 'dark' && <Moon size={20} />}
              {(t === 'purple' || t === 'green') && <Palette size={20} />}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}