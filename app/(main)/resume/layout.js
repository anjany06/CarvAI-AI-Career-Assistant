import { Loader, LoaderPinwheel } from "lucide-react";
import React, { Suspense } from "react";
import { BarLoader, HashLoader } from "react-spinners";

const Layout = ({ children }) => {
  return (
    <div className="px-3 md:px-5">
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

export default Layout;
