"use client";

import { motion } from "framer-motion";
import { Dumbbell, HeartPulse, Trophy } from "lucide-react";

const services = [
  {
    icon: <Dumbbell className="w-12 h-12 text-primary" />,
    title: "STRENGTH TRAINING",
    desc: "Build muscle, increase your strength, and improve your overall fitness with our state-of-the-art free weights and resistance machines.",
  },
  {
    icon: <HeartPulse className="w-12 h-12 text-primary" />,
    title: "CARDIO FITNESS",
    desc: "Boost your endurance and heart health with our extensive range of treadmills, ellipticals, and stationary bikes.",
  },
  {
    icon: <Trophy className="w-12 h-12 text-primary" />,
    title: "PERSONAL COACHING",
    desc: "Achieve your goals faster with one-on-one sessions tailored specifically to your body type and fitness level.",
  },
];

export function ServicesBlock() {
  return (
    <section id="services" className="py-24 bg-black relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-5xl md:text-6xl text-white tracking-wide mb-4"
          >
            OUR SERVICES
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-24 h-1 bg-primary mx-auto"
          />
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="group bg-background border border-white/5 p-8 rounded-xl hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(255,87,34,0.1)]"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="font-heading text-2xl text-white mb-4 tracking-wider">{service.title}</h3>
              <p className="text-gray-400 font-sans leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
