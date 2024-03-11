import React, { ReactNode } from "react";
import { Navbar } from "../components/navbar/Navbar"; // Assuming Navbar component is defined in a separate file

interface ParentContainerProps {
  children: ReactNode;
}

const ParentContainer: React.FC<ParentContainerProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      <div className="w-full py-8">{children}</div>
    </div>
  );
};

export default ParentContainer;
