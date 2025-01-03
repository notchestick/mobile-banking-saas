import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { LanguageProvider } from './context/LanguageContext';
import { Layout } from './components/Layout';
import { Dashboard } from './components/Dashboard';

function App() {
  return (
    <LanguageProvider>
      <ThemeProvider>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              {/* Add more routes as needed */}
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </LanguageProvider>
  );
}

export default App;