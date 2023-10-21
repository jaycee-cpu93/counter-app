import React from 'react';
import './style.css';
import MainCounter from './components/MainCounter';
import NotFound from './components/NotFound';
import ErrorBoundaryTest from './components/ErrorBoundaryTest';
import ErrorBoundary from './components/ErrorBoundary';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <ErrorBoundary>
          <Routes>
            <Route exact path="/" element={<MainCounter />} />
            <Route exact path="*" element={<NotFound />} />
            <Route exact path="/error" element={<ErrorBoundaryTest />} />
          </Routes>
        </ErrorBoundary>
      </BrowserRouter>
    </div>
  );
}
