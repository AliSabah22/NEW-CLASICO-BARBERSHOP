"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const teamMembers = [
  {
    name: "John Smith",
    role: "Master Barber",
    image: "/images/barber1.jpg",
    bio: "With over 15 years of experience, John specializes in classic cuts and modern fades.",
  },
  {
    name: "Mike Johnson",
    role: "Senior Stylist",
    image: "/images/barber2.jpg",
    bio: "Mike brings creativity and precision to every cut, with expertise in contemporary styles.",
  },
  {
    name: "David Wilson",
    role: "Beard Specialist",
    image: "/images/barber3.jpg",
    bio: "David is our go-to expert for beard grooming and straight razor shaves.",
  },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="about" className="section-padding bg-black">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-display mb-4 text-white">
            Our Story
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Founded in 2010, Clasico Barbershop has been providing exceptional grooming
            services with a focus on quality, tradition, and customer satisfaction.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white/5 rounded-xl p-6 text-center"
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl font-display text-white mb-2">{member.name}</h3>
              <p className="text-gold mb-4">{member.role}</p>
              <p className="text-white/70">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 