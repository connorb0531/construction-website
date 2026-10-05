// client/src/components/Loading.js

import React from "react";

function LoadingIndicator() {
  return (
    <div className="flex justify-center items-center p-4">
      <div className="brand-spinner w-8 h-8 border-4 rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingIndicator;
