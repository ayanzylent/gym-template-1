import { Star, CheckCircle2 } from "lucide-react";

const reviews = [
  {
    name: "John D.",
    initial: "J",
    date: "2 weeks ago",
    text: "The best equipment in the city. The trainers actually care about your form and the atmosphere is electric. Highly recommend for anyone serious about their fitness.",
  },
  {
    name: "Sarah W.",
    initial: "S",
    date: "1 month ago",
    text: "Joined two months ago and already seeing massive changes. 24/7 access is a pure lifesaver for my hectic schedule. The facilities are always perfectly clean and maintained.",
  },
  {
    name: "Michael R.",
    initial: "M",
    date: "3 months ago",
    text: "Hands down the most premium gym experience I've ever had. Spacious, never too crowded, and the community here constantly pushes you to crush your personal records.",
  },
  {
    name: "Elena G.",
    initial: "E",
    date: "1 day ago",
    text: "The turf zone and Olympic lifting platforms are top tier. I've crushed all my plateaus since I switched to Flentnong. Absolutely a 10/10 training facility.",
  },
  {
    name: "David K.",
    initial: "D",
    date: "4 months ago",
    text: "Great community vibe. The staff greets you by name, and the recovery rooms with the sauna and cold plunge are worth the membership price alone.",
  },
  {
    name: "Marcus T.",
    initial: "M",
    date: "1 year ago",
    text: "I've been to every commercial gym out there, but this is different. It's built for real athletes. Music is always on point and the machines are literally flawless.",
  },
];

export function DemoReviews() {
  return (
    <section className="bg-[#050505] w-full py-5 md:py-5 overflow-hidden relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12">

        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[#FF2A5F] text-[11px] md:text-xs xl:text-[13px] font-bold tracking-[0.2em] uppercase mb-4">
            Testimonials
          </p>
          <h2 className="text-3xl md:text-[40px] lg:text-6xl font-black text-white mb-4 md:mb-6 tracking-tight leading-[1.1] lg:leading-none">
            What True Athletes Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-white font-bold text-xl md:text-3xl">4.9</span>
            <div className="flex text-yellow-500">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 md:w-6 md:h-6 fill-current" />
              ))}
            </div>
            <span className="text-neutral-400 text-xs md:text-sm ml-2">Based on 450+ Google Reviews</span>
          </div>
        </div>
      </div>

      {/* Reviews Carousel (Infinite Marquee) */}
      <div className="relative flex overflow-hidden group py-4 w-full">

        {/* Track 1 */}
        <div className="flex gap-4 md:gap-8 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap flex-nowrap pr-4 md:pr-8">
          {reviews.map((review, idx) => (
            <div
              key={`track1-${idx}`}
              className="flex-none w-[280px] md:w-[350px] lg:w-[400px] bg-[#0a0a0a] rounded-2xl p-6 md:p-8 border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 snap-center shadow-lg whitespace-normal"
            >
              {/* User Info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center flex-shrink-0 border border-white/10">
                    <span className="text-white font-bold text-sm md:text-base">{review.initial}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm md:text-base">{review.name}</span>
                    <span className="text-neutral-500 text-[10px] md:text-xs">{review.date}</span>
                  </div>
                </div>
                <div className="bg-blue-500/10 p-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral-300 text-xs md:text-sm font-light leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

        {/* Track 2 (Duplicate for seamless loop) */}
        <div className="flex gap-4 md:gap-8 animate-marquee group-hover:[animation-play-state:paused] whitespace-nowrap flex-nowrap pr-4 md:pr-8" aria-hidden="true">
          {reviews.map((review, idx) => (
            <div
              key={`track2-${idx}`}
              className="flex-none w-[280px] md:w-[350px] lg:w-[400px] bg-[#0a0a0a] rounded-2xl p-6 md:p-8 border border-white/5 hover:border-white/20 transition-all hover:-translate-y-1 snap-center shadow-lg whitespace-normal"
            >
              {/* User Info */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-neutral-700 to-neutral-900 flex items-center justify-center flex-shrink-0 border border-white/10">
                    <span className="text-white font-bold text-sm md:text-base">{review.initial}</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-white font-bold text-sm md:text-base">{review.name}</span>
                    <span className="text-neutral-500 text-[10px] md:text-xs">{review.date}</span>
                  </div>
                </div>
                <div className="bg-blue-500/10 p-1.5 rounded-full">
                  <CheckCircle2 className="w-4 h-4 text-blue-500" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex text-yellow-500 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral-300 text-xs md:text-sm font-light leading-relaxed">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>

      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
      `}} />
    </section>
  );
}
