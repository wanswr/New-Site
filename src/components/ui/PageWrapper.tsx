import Navbar from "@/components/ui/Navbar";
import SmoothScroll from "@/components/ui/SmoothScroll";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <Navbar />
      <main className="relative w-full">{children}</main>
    </SmoothScroll>
  );
}
