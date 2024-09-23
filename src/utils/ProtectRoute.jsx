import { Loader } from "lucide-react";
import React from "react";

const ProtectRoute = ({ children }) => {
  const x = true;
  console.log(x);

  return x ? (
    <>{children}</>
  ) : (
    <>
      <h1>Pranav From Protected Route</h1>
    </>
  );
};

export default ProtectRoute;
