import React from 'react';
import HashLoader from "react-spinners/HashLoader";

const LoadingSpinner = ({ color }) => {
  return (
    <HashLoader
      color={color}
      size={35}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

export default LoadingSpinner;
