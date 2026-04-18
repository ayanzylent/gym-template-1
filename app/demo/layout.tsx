import { DemoNavbar } from "./components/DemoNavbar";

export const metadata = {
  title: "Demo Page | Flentnong",
  description: "A dark, premium, immersive fitness demo page.",
};

export default function DemoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-rose-500/30 selection:text-white flex flex-col">
      <DemoNavbar />
      <div className="mt-[56px] md:mt-[72px] flex-grow">
        {children}
      </div>
    </div>
  );
}
