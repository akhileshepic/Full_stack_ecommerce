import React from "react";
import FooterComponent from "./FooterComponent";
import NavbarComponent from "./NavbarComponent";
const LayoutComponent = ({ children }) => {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div style={{ flex: 1 }}>
        <NavbarComponent />

        {children}
      </div>
      <FooterComponent />
    </div>
  );
};

export default LayoutComponent;
