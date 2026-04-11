"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PrimaryButton } from "@/components/custom/PrimaryButton";
import { AnimatedText } from "@/components/custom/AnimatedText";

export function AboutUsBlock() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Grid Background Elements */}
      <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '50px 50px' }} 
      />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col gap-6"
          >
            <h2 className="font-heading text-5xl md:text-6xl text-white tracking-wide">
              ABOUT US
            </h2>
            
            <p className="text-gray-300 leading-relaxed font-sans mt-2">
              Our vision is to make health and fitness more accessible to everybody by
              providing motivation & mental strength, with science based training and
              customisable Nutritional guidance according to their fitness goal. We are here
              with affordable and reasonable membership rates at your local convenient
              location.
            </p>
            
            <p className="text-gray-300 leading-relaxed font-sans">
              We have huge Cardio & Strength training floor. We are equipped with highly
              advanced and imported training machines. Tons of free weights for manual
              training and weight liftings. We are providing motivational ambience for
              fitness training all the time. Awesome music system with bluetooth for
              favourite motivational songs.
            </p>
            
            <p className="text-gray-300 leading-relaxed font-sans mb-4">
              Our Certified and vastly experienced fitness trainers and coaches are
              specialised in various fitness training programs. Like Strength & Conditioning,
              Cardio vascular training, CrossFit, HIIT, LIIT, Functional Training, HRX training,
              Animal flow, Power lifting, Weight lifting, Olympic lifting, Kettle Bell training,
              Body weight training, calisthenics etc
            </p>
            
            <div>
              <PrimaryButton>READ MORE</PrimaryButton>
            </div>
          </motion.div>

          {/* Image Grid */}
          <div className="grid grid-cols-2 gap-4 h-150">
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative w-full h-full rounded-2xl overflow-hidden row-span-2 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10"
            >
              <Image 
                src="https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=1469&auto=format&fit=crop" 
                alt="Gym Training"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-white/10"
            >
              <Image 
                src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=1470&auto=format&fit=crop" 
                alt="Personal Training"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg border border-white/10"
            >
              <Image 
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1470&auto=format&fit=crop" 
                alt="Weight Lifting"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
