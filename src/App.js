import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';  // Importing the routes

function App() {
  return (
    <Router>
      <AppRoutes />  {/* This will load all routes */}
    </Router>
  );
}

export default App;
