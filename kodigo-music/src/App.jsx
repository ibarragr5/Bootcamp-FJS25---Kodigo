import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import { auth } from './firebaseConfig';
import { onAuthStateChanged } from 'firebase/auth';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setIsAuthenticated(!!currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>Kodigo Music</h1>
      {error && <p className="error-message">{error}</p>}
      <Outlet context={{ isAuthenticated, setIsAuthenticated, setError }} />
    </div>
  );
};

export default App;