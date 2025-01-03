import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import type { Language } from '../types/language';

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' },
  { code: 'pl', label: 'Polski' },
  { code: 'de', label: 'Deutsch' },
];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <select
      value={language}
      onChange={(e) => setLanguage(e.target.value as Language)}
      className="bg-transparent border border-gray-300 dark:border-gray-700 rounded-lg px-3 py-1"
    >
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </select>
  );
}