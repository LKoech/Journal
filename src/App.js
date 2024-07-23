// src/App.js
import React from 'react';
import 'antd/dist/reset.css'; // Updated path for antd v4.17.0 and above
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginPage from './LoginPage';
import EntriesPage from './EntriesPage';
import AddEntryPage from './AddEntryPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/entries" element={<EntriesPage />} />
        <Route path="/add-entry" element={<AddEntryPage />} />
      </Routes>
    </Router>
  );
};

export default App;
