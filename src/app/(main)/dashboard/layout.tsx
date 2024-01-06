import React from "react";

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout = ({ children }: LayoutProps) => {
  return <main className="flex overflow-hidden h-screen">{children}</main>;
};

export default Layout;
