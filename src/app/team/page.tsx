"use client";

import { Navigation } from "@/components/layout/navigation";
import { motion } from "framer-motion";

const team = [
  {
    name: "John Smith",
    role: "Master Barber",
    bio: "With over 15 years of experience, John specializes in classic cuts and traditional shaves.",
    image: "/team/john.jpg",
  },
  {
    name: "Michael Johnson",
    role: "Senior Barber",
    bio: "Michael brings his artistic vision to every cut, creating unique styles that complement each client's features.",
    image: "/team/michael.jpg",
  },
  {
    name: "David Wilson",
    role: "Beard Specialist",
    bio: "David is our go-to expert for beard grooming and styling, with a passion for creating the perfect shape.",
    image: "/team/david.jpg",
  },
  {
    name: "Robert Brown",
    role: "Junior Barber",
    bio: "Robert combines modern techniques with traditional methods to deliver exceptional results.",
    image: "/team/robert.jpg",
  },
];

export default function TeamPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h1 
              className="font-serif text-4xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Meet Our Team
            </motion.h1>
            <motion.p 
              className="text-lg text-gray-600 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Our skilled barbers are dedicated to providing you with the best grooming experience
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                  <div className="absolute inset-0 bg-gold/20" />
                  <div 
                    className="w-full h-full bg-cover bg-center"
                    style={{
                      backgroundImage: `url(${member.image})`,
                    }}
                  />
                </div>
                <h3 className="font-serif text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-gold mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h2 className="font-serif text-3xl font-bold mb-4">Join Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              We're always looking for talented barbers who share our passion for excellence and customer service.
            </p>
            <a
              href="/contact"
              className="inline-block bg-black text-white px-8 py-3 rounded-md hover:bg-black-light transition-colors"
            >
              Apply Now
            </a>
          </motion.div>
        </div>
      </div>
    </main>
  );
} 