import { NavbarBlock } from "@/components/block/NavbarBlock";
import { HeroSliderBlock } from "@/components/block/HeroSliderBlock";
import { AboutUsBlock } from "@/components/block/AboutUsBlock";
import { ServicesBlock } from "@/components/block/ServicesBlock";
import { FooterBlock } from "@/components/block/FooterBlock";

export const metadata = {
  title: "Retro Fitness | Achieve Your Potential",
  description: "The Retro Fitness is your one-stop destination for motivation, fun, and expert guidance to reach your fitness goals.",
};

export default function Home() {
  return (
    <main className="bg-background">
      <NavbarBlock />
      <HeroSliderBlock />
      <AboutUsBlock />
      <ServicesBlock />
      <FooterBlock />
    </main>
  );
}
