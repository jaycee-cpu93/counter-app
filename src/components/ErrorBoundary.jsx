import React, { useState, useEffect } from 'react';

function CustomErrorBoundary(props) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const componentDidCatch = (error, errorInfo) => {
      setHasError(true);
      console.error(error, errorInfo);
    };

    //use the componentDidCatch function to simulate componentDidCatch behavior

    window.onerror = componentDidCatch; //to catch global errors.

    return () => {
      // Cleanup when the component unmounts
      window.onerror = null;
    };
  }, []);

  if (hasError) {
    return (
      <>
        <div className="error-container">
          <i>Pardon me</i>
          <h1>Something Went Wrong.</h1>
          <button>
            <a href="/">Go to Counter</a>
          </button>
        </div>
      </>
    );
  }

  return props.children;
}

export default CustomErrorBoundary;
