import DotGridBackground from "@/components/dotGridBackground";
import FloatingButtons from "@/components/floatingButton";
import Navbar from "../sections/navbar";
import Footer from "../sections/footer";

interface LayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative">
      <DotGridBackground />
      <FloatingButtons />
      <Navbar />

      <main className="relative z-10 px-6 py-20">{children}</main>

      <Footer />
    </div>
  );
};

export default MainLayout;
