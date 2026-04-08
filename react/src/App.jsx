import React, { useState, useEffect } from 'react';
import Home from './Pages/Home';
import CGU from './Pages/CGU';
import PrivacyPolicy from './Pages/PrivacyPolicy';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1) || 'home';
      setCurrentPage(hash);
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check initial hash

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigate = (path) => {
    window.location.hash = path;
  };

  return (
    <div>
      {currentPage === 'cgu' ? (
        <CGU navigate={navigate} />
      ) : currentPage === 'privacy' ? (
        <PrivacyPolicy navigate={navigate} />
      ) : (
        <Home navigate={navigate} />
      )}
    </div>
  );
}
