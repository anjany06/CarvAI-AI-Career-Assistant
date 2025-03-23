import { Loader } from "lucide-react";
import React, { Suspense } from "react";

const AuthLayout = ({ children }) => {
  return (
    <div className="flex justify-center items-center mt-35">
      <Suspense
        fallback={
          <div className="loader-container">
            <Loader className="mt-4 h-12 w-12 animate-spin" />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
};

export default AuthLayout;
