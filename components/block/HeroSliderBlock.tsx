"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";
import { AnimatedText } from "@/components/custom/AnimatedText";
import { PrimaryButton } from "@/components/custom/PrimaryButton";
import { motion } from "framer-motion";
import Link from "next/link";

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1470&auto=format&fit=crop",
    subtitle: "WELCOME TO",
    titlePart1: "THE RETRO ",
    titlePart2: "FITNESS",
    desc: "The Retro Fitness is one stop destination for motivation and fun while reaching your fitness goals.",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=1470&auto=format&fit=crop",
    subtitle: "TRAIN HARD",
    titlePart1: "NO ",
    titlePart2: "EXCUSES",
    desc: "Push your limits with our state-of-the-art equipment and expert trainers.",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop",
    subtitle: "ACHIEVE MORE",
    titlePart1: "YOUR NEW ",
    titlePart2: "BODY",
    desc: "Transform your life today. First month is on us when you sign up for an annual membership.",
  },
];

export function HeroSliderBlock() {
  const plugin = useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  );


  return (
    <section className="relative h-[100vh] w-full bg-black overflow-hidden">
      <Carousel
        plugins={[plugin.current]}
        className="w-full h-full"
        opts={{
          loop: true,
        }}
      >
        <CarouselContent className="h-full" style={{ marginLeft: 0 }}>
          {slides.map((slide, index) => (
            <CarouselItem key={slide.id} className="relative h-screen min-w-full" style={{ paddingLeft: 0 }}>
              {/* Background Image with priority loading for performance */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt="Gym Hero Background"
                  fill
                  priority={index === 0} // High priority for first slide
                  className="object-cover object-center transform"
                  quality={90}
                />
                {/* Gradient Overlays for better text contrast */}
                <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-transparent" />
                <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent" />
              </div>

              {/* Text Content */}
              <div className="relative h-full flex items-center">
                <div className="container mx-auto px-4 md:px-8">
                  <div className="max-w-3xl pt-20">
                    <AnimatedText
                      text={slide.subtitle}
                      className="text-primary font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base"
                      delay={0.2}
                    />

                    <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9] mb-6 drop-shadow-lg">
                      <AnimatedText text={slide.titlePart1} delay={0.4} />
                      <span className="text-primary drop-shadow-[0_0_15px_rgba(255,87,34,0.3)]">
                        <AnimatedText text={slide.titlePart2} delay={0.6} />
                      </span>
                    </h1>

                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8, duration: 0.6 }}
                      className="text-lg md:text-xl text-gray-300 mb-10 max-w-xl font-sans"
                    >
                      {slide.desc}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1, duration: 0.6 }}
                      className="flex flex-wrap gap-4"
                    >
                      <PrimaryButton asChild>
                        <Link href={`https://wa.me/${process.env.NEXT_PUBLIC_MOBILE_NUMBER}`}>BOOK AN APPOINTMENT</Link>
                      </PrimaryButton>
                      <PrimaryButton variant="outline" className="bg-transparent border-border text-foreground">
                        VIEW PLANS
                      </PrimaryButton>
                    </motion.div>
                  </div>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="hidden md:block">
          <CarouselPrevious className="left-8 border-none bg-black/50 hover:bg-primary hover:text-white text-white w-12 h-12" />
          <CarouselNext className="right-8 border-none bg-black/50 hover:bg-primary hover:text-white text-white w-12 h-12" />
        </div>
      </Carousel>
    </section>
  );
}
