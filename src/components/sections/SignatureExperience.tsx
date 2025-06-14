'use client';

import Image from "next/image";

const experiences = [
  {
    title: "The Classic Cut",
    description: "A timeless haircut that combines traditional techniques with modern precision.",
    image: "/images/classic-cut.jpg",
    price: "$45",
    duration: "45 min"
  },
  {
    title: "The Royal Shave",
    description: "Experience the art of traditional wet shaving with hot towels and premium products.",
    image: "/images/royal-shave.jpg",
    price: "$35",
    duration: "30 min"
  },
  {
    title: "The Executive Package",
    description: "A complete grooming experience including haircut, shave, and facial treatment.",
    image: "/images/executive-package.jpg",
    price: "$85",
    duration: "90 min"
  }
];

export default function SignatureExperience() {
  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
            Signature Experiences
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Discover our curated selection of premium grooming services, each designed
            to deliver an exceptional experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((experience, index) => (
            <div
              key={experience.title}
              className="bg-white/5 rounded-lg overflow-hidden group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64">
                <Image
                  src={experience.image}
                  alt={experience.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-display text-white mb-2">
                  {experience.title}
                </h3>
                <p className="text-white/70 mb-4">
                  {experience.description}
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-gold font-medium">
                    {experience.price}
                  </span>
                  <span className="text-white/50">
                    {experience.duration}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 