import { Loader, Loader2, LoaderPinwheel } from "lucide-react";
import React, { Suspense } from "react";
import { BarLoader, HashLoader } from "react-spinners";

const Layout = async ({ children }) => {
  return (
    <div className="px-5">
      <Suspense
        fallback={
          <div className="loader-container">
            <Loader className="mt-4 animate-spin h-12 w-12" />
          </div>
        }
      >
        {children}
      </Suspense>
    </div>
  );
};

export default Layout;
