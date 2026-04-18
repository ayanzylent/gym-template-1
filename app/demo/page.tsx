import { DemoHero } from "./components/DemoHero";
import { DemoAbout } from "./components/DemoAbout";
import { DemoServices } from "./components/DemoServices";
import { DemoReviews } from "./components/DemoReviews";
import { DemoLocation } from "./components/DemoLocation";
import { DemoFooter } from "./components/DemoFooter";

export default function DemoPage() {
  return (
    <main className="w-full flex-grow flex flex-col">
      <DemoHero />
      <DemoAbout />
      <DemoServices />
      <DemoReviews />
      <DemoLocation />
      <DemoFooter />
    </main>
  );
}
