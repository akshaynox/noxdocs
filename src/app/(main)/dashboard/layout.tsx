import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout = ({ children }: LayoutProps) => {
  return <main>{children}</main>;
};

export default Layout;
