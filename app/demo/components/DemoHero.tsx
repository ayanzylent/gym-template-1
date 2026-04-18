import Image from "next/image";

export function DemoHero() {
  return (
    <section className="relative w-full aspect-[5/4] md:aspect-[4/3] lg:aspect-auto lg:min-h-[calc(100vh-72px)] bg-[#050505] overflow-hidden flex items-center">

      {/* Background Image: Absolute cover globally */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/demo_images/image.png"
          alt="Gym Hero Background"
          fill
          priority
          className="object-cover object-top lg:object-contain lg:object-right"
        />
        {/* Deep, smooth shadow: Solid black initially to hide image seams, fades completely before traversing too far */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#050505_0%,#050505_15%,transparent_55%)] lg:bg-[linear-gradient(to_right,#050505_0%,#050505_30%,transparent_65%)] pointer-events-none"></div>
        {/* Soft bottom gradient */}
        <div className="absolute inset-x-0 bottom-0 h-24 lg:h-32 bg-gradient-to-t from-[#050505] to-transparent pointer-events-none"></div>
      </div>

      {/* Content wrapper: Overlaid on top of the background */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-16 xl:px-24 flex flex-col justify-center">
        <div className="w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%]">
          <p className="hidden md:block text-[11px] md:text-xs xl:text-[13px] text-neutral-300 font-medium mb-3 md:mb-4 xl:mb-5 uppercase tracking-[0.3em] pl-[2px] border-l-2 border-rose-500 ml-1 pl-4">
            New Era of Fitness
          </p>
          <h1 className="text-3xl md:text-[40px] lg:text-6xl xl:text-[85px] leading-[1.1] md:leading-tight lg:leading-none font-black text-white tracking-[-0.03em] mb-4 md:mb-6 xl:mb-8 drop-shadow-xl relative z-10">
            Transform <span className="block mt-1 md:mt-2 xl:mt-3">Your Body.</span>
          </h1>
          <p className="text-gray-300 lg:text-[#e0e0e0] text-xs md:text-sm lg:text-base xl:text-xl font-light mb-6 md:mb-8 xl:mb-10 leading-relaxed max-w-[250px] md:max-w-md xl:max-w-[500px] drop-shadow-md">
            Your ave molite a hove allente videoc ofs deeder
            ated chiolhngr yannsnocin togeras. Join our massive and active community.
          </p>

          <div className="flex flex-row items-center gap-4 md:gap-6 xl:gap-8">
            <button className="px-6 py-2.5 md:px-8 md:py-4 xl:px-12 xl:py-5 bg-[#FF2A5F] hover:bg-rose-500 text-white font-bold rounded-full text-[10px] md:text-xs xl:text-sm tracking-widest shadow-[0_4px_15px_rgba(255,42,95,0.4)] transition-all uppercase whitespace-nowrap">
              FREE EONREP
            </button>
            <button className="text-white hover:text-[#FF2A5F] font-bold tracking-wider text-[11px] md:text-xs xl:text-sm transition-colors drop-shadow-md uppercase whitespace-nowrap">
              JOIN NOW
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
