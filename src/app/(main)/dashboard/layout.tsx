import React from "react";
import { SubscriptionModalProvider } from "@/lib/providers/subscription-modal-provider";

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <main className="flex overflow-hidden h-screen">
      <SubscriptionModalProvider products={[]}>
        {children}
      </SubscriptionModalProvider>
    </main>
  );
};

export default Layout;
