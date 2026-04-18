import Image from "next/image";

const services = [
  {
    title: "Weight Training",
    subtitle: "Gniced",
    description: "Teil dical aojertex ccmier aveiny, ccnstrat lie tedirig.",
    image: "/demo_images/demo_card_1_1776074807303.png",
  },
  {
    title: "Personal Eldoy",
    subtitle: "Tiniherd",
    description: "Taelx emariue ta ius ory ceolling, aomenlal ltuissling.",
    image: "/demo_images/demo_hero_bg_1776074789894.png", // Changed image to differ
  },
  {
    title: "Crosslal Training",
    subtitle: "Traince",
    description: "Theu afrar feor thenerasy ceyour amail balling.",
    image: "/demo_images/demo_card_2_1776074822914.png",
  },
];

export function DemoServices() {
  return (
    <section className="bg-[#070707] w-full pt-10 pb-20 overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-[40px] lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight leading-[1.1] lg:leading-none">
            Elite Training Programs
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm lg:text-base font-light max-w-sm md:max-w-xl mx-auto leading-relaxed">
            Explore our specialized facilities and expert-led sessions designed to break boundaries and elevate your entire fitness journey.
          </p>
        </div>

        {/* Cards container - Row scroll on mobile */}
        <div className="flex overflow-x-auto pb-8 md:grid md:grid-cols-3 gap-4 md:gap-8 snap-x snap-mandatory hide-scroll-bar">

          {services.map((service, idx) => (
            <div
              key={idx}
              className="relative flex-none w-[200px] h-[260px] md:w-auto md:h-[450px] rounded-3xl overflow-hidden snap-center group border border-[#222222] bg-[#111]"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0 opacity-80 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Gradient overlays to darken background so text is readable */}
              <div className="absolute inset-0 bg-gradient-to-b from-[#070707]/30 via-transparent to-[#070707]/90 z-10"></div>

              {/* Top Tag */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 z-20">
                <div className="bg-[#1a1a1a]/80 backdrop-blur-md px-3 py-1 rounded-[10px]">
                  <span className="text-[10px] font-semibold text-neutral-300 tracking-wider">
                    {service.subtitle}
                  </span>
                </div>
              </div>

              {/* Bottom Content */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 z-20">
                <h3 className="text-[15px] md:text-2xl font-bold text-white mb-2 tracking-tight">{service.title}</h3>
                <p className="text-[#a0a0a0] text-[10px] md:text-sm leading-[1.4] font-normal">
                  {service.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        .hide-scroll-bar::-webkit-scrollbar { display: none; }
        .hide-scroll-bar { -ms-overflow-style: none; scrollbar-width: none; }
      `}} />
    </section>
  );
}
