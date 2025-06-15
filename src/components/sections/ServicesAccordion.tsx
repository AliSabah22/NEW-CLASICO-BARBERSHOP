"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

const categories = [
  {
    emoji: "💈",
    name: "Clasico Services",
    services: [
      "Hair & Beard Combos",
      "Haircut & Beard",
      "Haircut & Beard Trim Line-Up (Blade)",
      "Haircut & Beard Trim Line-Up (Machine)",
      "Haircut & Line-Up Beard (Blade)",
      "Haircut & Line-Up (Machine)",
      "Haircut & Hot Towel Shave (Blade)",
      "Line-Up, Hair & Beard (Blade)",
    ],
  },
  {
    emoji: "✂️",
    name: "Side Fades",
    services: [
      "Side Fade & Beard Trim",
      "Side Fade & Beard Trim Line-Up (Blade)",
      "Side Fade & Beard Trim Line-Up (Machine)",
      "Side Fade & Line-Up Beard (Blade)",
      "Side Fade & Line-Up Beard (Machine)",
      "Side Fade & Hot Towel Shave (Blade)",
      "Buzz Cut Combos",
      "Buzz Cut & Beard Trim Line-Up (Blade)",
      "Buzz Cut & Beard Trim Line-Up (Machine)",
    ],
  },
  {
    emoji: "🧼",
    name: "Face Waxing / Threading",
    services: [
      "Ears Wax or Threading",
      "Nose Waxing",
      "Unibrow Threading",
      "Eyebrows Waxing",
      "Eyebrows Shaping (Blade)",
      "Forehead Wax or Threading",
      "Cheeks Wax or Threading",
      "Full Face Wax or Threading",
      "Beard Line-Up Wax or Threading",
      "Upper Lip Wax or Threading",
      "Chin Wax or Threading",
    ],
  },
  {
    emoji: "🧔",
    name: "Beard Services",
    services: [
      "Beard Trim",
      "Beard Trim (Scissors)",
      "Line-Up Beard (Blade)",
      "Line-Up Beard (Machine)",
      "Beard Trim Line-Up (Blade)",
      "Beard Trim Line-Up (Machine)",
      "Hot Towel",
      "Hot Towel Shave (Blade)",
      "Beard Dye (Colouring)",
      "Moustache Dye (Colouring)",
      "Moustache Trim",
      "Steam Face Shave",
    ],
  },
];

export default function ServicesAccordion() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  // Keyboard accessibility: open/close with Enter/Space
  const handleKeyDown = (e: React.KeyboardEvent, idx: number) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      setOpenIdx(openIdx === idx ? null : idx);
    }
  };

  return (
    <section className="relative bg-black min-h-screen py-16 px-4 md:px-0">
      <div className="max-w-3xl mx-auto space-y-6">
        {categories.map((cat, idx) => (
          <div
            key={cat.name}
            id={`category-${idx}`}
            className="rounded-2xl border border-gold/20 bg-black/80 shadow-lg overflow-hidden"
          >
            {/* Accordion Header */}
            <button
              className={clsx(
                "w-full flex items-center justify-between px-6 py-6 cursor-pointer group transition-all",
                openIdx === idx ? "bg-gold/10" : "hover:bg-gold/5"
              )}
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              aria-expanded={openIdx === idx}
              aria-controls={`panel-${idx}`}
              tabIndex={0}
              onKeyDown={e => handleKeyDown(e, idx)}
              aria-label={cat.name}
            >
              <span className="flex items-center gap-3 text-2xl md:text-3xl font-display text-gold">
                {cat.emoji}
                <span className="text-white text-lg md:text-2xl font-display tracking-wide">{cat.name}</span>
              </span>
              {/* Chevron Icon */}
              <motion.span
                animate={{ rotate: openIdx === idx ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-2"
              >
                <svg width={28} height={28} viewBox="0 0 24 24" fill="none" className="text-gold">
                  <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </motion.span>
            </button>

            {/* Accordion Panel */}
            <AnimatePresence initial={false}>
              {openIdx === idx && (
                <motion.div
                  id={`panel-${idx}`}
                  initial="collapsed"
                  animate="open"
                  exit="collapsed"
                  variants={{
                    open: { height: "auto", opacity: 1 },
                    collapsed: { height: 0, opacity: 0 },
                  }}
                  transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
                  className="overflow-hidden"
                  aria-labelledby={`category-${idx}`}
                  role="region"
                >
                  <ul className="divide-y divide-gold/10">
                    {cat.services.map((service, sIdx) => (
                      <li
                        key={service}
                        className={clsx(
                          "group flex items-center justify-between px-8 py-5 transition-all duration-200",
                          "hover:bg-gold/5 hover:shadow-gold/20"
                        )}
                        tabIndex={0}
                        aria-label={service}
                      >
                        <span className="text-white text-lg md:text-xl font-medium font-display group-hover:underline group-hover:decoration-gold group-hover:underline-offset-4 transition-all">
                          {service}
                        </span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </section>
  );
} 