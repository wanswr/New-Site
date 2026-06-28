import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";
import CustomCursor from "@/components/ui/CustomCursor";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <CustomCursor />
      <Navbar />
      <main className="overflow-x-hidden h-screen w-full relative">{children}</main>
    </SmoothScroll>
  );
}
