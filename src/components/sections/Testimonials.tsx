"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "James Wilson",
    role: "Regular Client",
    image: "/images/testimonial-1.jpg",
    content: "The attention to detail and level of service at Clásico is unmatched. Every visit feels like a premium experience.",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Business Owner",
    image: "/images/testimonial-2.jpg",
    content: "As someone who values both quality and efficiency, I appreciate how Clásico delivers exceptional results every time.",
    rating: 5
  },
  {
    name: "David Rodriguez",
    role: "Fashion Designer",
    image: "/images/testimonial-3.jpg",
    content: "The barbers here are true artists. They understand exactly what I want and always exceed my expectations.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-black">
      <div className="container-custom">
        <div className="text-center mb-16 opacity-0 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-display text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            Hear from our valued clients about their experiences at Clásico Barbershop.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-white/5 rounded-lg p-6 opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="48px"
                  />
                </div>
                <div>
                  <h3 className="text-white font-medium">
                    {testimonial.name}
                  </h3>
                  <p className="text-white/50 text-sm">
                    {testimonial.role}
                  </p>
                </div>
              </div>

              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-gold"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <p className="text-white/70">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 