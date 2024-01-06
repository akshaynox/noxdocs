import Sidebar from "@/components/sidebar/sidebar";

interface LayoutProps {
  children: React.ReactNode;
  params: any;
}

const Layout = ({ children, params }: LayoutProps) => {
  return (
    <main className="flex overflow-hidden h-screen w-screen">
      <Sidebar params={params} />
      <div className="dark:border-Neutrals/neutrals-12/70 border-l-[1px] w-full relative overflow-scroll">
        {children}
      </div>
    </main>
  );
};

export default Layout;
