import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Feedback Collection System</h1>
        <Routes>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          {/* We will set the default page to register */}
          <Route path="/" element={<RegisterPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;