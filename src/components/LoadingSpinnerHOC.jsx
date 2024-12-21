
import React, { useState, useEffect } from "react";

const LoadingSpinnerHOC = (WrappedComponent) => {
  return function WrappedWithSpinner(props) {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      setLoading(false);
    }, []);

    if (loading) {
      return <div>Loading...</div>; 
    }

    return <WrappedComponent {...props} />;
  };
};

export default LoadingSpinnerHOC;
