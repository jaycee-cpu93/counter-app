import React from 'react';
import { useState } from 'react';
import ErrorBoundary from './ErrorBoundary';

const ErrorBoundaryTest = () => {
  const [errorFlag, setErrorFlag] = useState(false);

  const throwCustomError = () => {
    if (errorFlag) {
      throw new Error('There is an error somewhere in this page');
    }
  };

  return (
    <div className="errorpagetest">
            <h1>Error Boundary Test:</h1>       
      <p>
        {throwCustomError()}
        <button className="errorbtn" onClick={() => setErrorFlag(true)}>
            ErrorBoundary         
        </button>
             
      </p>
      <ErrorBoundary />       
    </div>
  );
};

export default ErrorBoundaryTest;
