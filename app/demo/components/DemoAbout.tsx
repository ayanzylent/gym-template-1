import Image from "next/image";

export function DemoAbout() {
  return (
    <section className="w-full bg-[#050505] py-5 lg:py-32 px-6 sm:px-12 lg:px-24 overflow-hidden relative border-t border-white/5">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

        {/* Left Content (Text) - Shows second on mobile, first on desktop */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center order-2 lg:order-1">
          <p className="text-[#FF2A5F] text-[11px] md:text-xs xl:text-[13px] font-bold tracking-[0.2em] uppercase mb-4 pl-3 md:pl-4 border-l-2 border-[#FF2A5F]">
            About Flentnong
          </p>
          <h2 className="text-3xl md:text-[40px] lg:text-6xl xl:text-[85px] font-black text-white mb-4 md:mb-6 leading-[1.1] lg:leading-none tracking-tight">
            We Build <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Great Bodies.</span>
          </h2>
          <p className="text-neutral-400 text-xs md:text-sm lg:text-base xl:text-xl leading-relaxed mb-6 md:mb-8 max-w-sm md:max-w-lg xl:max-w-full font-light">
            Flentnong isn't just a gym; it's a sanctuary for transformation. We combine brutal efficiency with premium amenities. Whether you're sculpting, bulking, or just building a legendary mindset, our elite trainers and state-of-the-art facilities are engineered to push your absolute limits.
          </p>

          {/* Simple stats row */}
          <div className="flex flex-row gap-6 md:gap-12 pt-4 md:pt-6 border-t border-white/10">
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-4xl xl:text-5xl font-black text-white">50+</span>
              <span className="text-[10px] md:text-xs xl:text-[13px] uppercase tracking-widest text-[#FF2A5F] font-bold tracking-[0.15em]">Programs</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-4xl xl:text-5xl font-black text-white">10k</span>
              <span className="text-[10px] md:text-xs xl:text-[13px] uppercase tracking-widest text-[#FF2A5F] font-bold tracking-[0.15em]">Members</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="text-2xl md:text-4xl xl:text-5xl font-black text-white">24/7</span>
              <span className="text-[10px] md:text-xs xl:text-[13px] uppercase tracking-widest text-[#FF2A5F] font-bold tracking-[0.15em]">Access</span>
            </div>
          </div>
        </div>

        {/* Right Images (4-Grid) - Shows first on mobile, second on desktop */}
        <div className="w-full lg:w-1/2 relative h-[500px] sm:h-[600px] lg:h-[650px] flex justify-center items-center order-1 lg:order-2">

          {/* Decorative glowing blob behind images */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#FF2A5F]/10 blur-[100px] rounded-full pointer-events-none"></div>

          {/* 4 Image Asymmetric Grid Layout */}
          <div className="grid grid-cols-2 gap-3 md:gap-4 w-full h-full relative z-10 p-2 md:p-6">

            {/* Left Column */}
            <div className="flex flex-col gap-3 md:gap-4 h-full">
              {/* Top Left: Tall Image */}
              <div className="relative w-full h-[55%] sm:h-[60%] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src="/demo_images/demo_hero_bg_1776074789894.png"
                  alt="Gym Session"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Left: Short Image */}
              <div className="relative w-full h-[45%] sm:h-[40%] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src="/demo_images/demo_card_1_1776074807303.png"
                  alt="Weights Workout"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="flex flex-col gap-3 md:gap-4 h-full">
              {/* Top Right: Short Image */}
              <div className="relative w-full h-[45%] sm:h-[40%] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src="/demo_images/image.png"
                  alt="Gym Facilities"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Bottom Right: Tall Image */}
              <div className="relative w-full h-[55%] sm:h-[60%] rounded-3xl overflow-hidden shadow-2xl border border-white/5 bg-neutral-900 group">
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                <Image
                  src="/demo_images/demo_card_2_1776074822914.png"
                  alt="Personal Training"
                  fill
                  className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
