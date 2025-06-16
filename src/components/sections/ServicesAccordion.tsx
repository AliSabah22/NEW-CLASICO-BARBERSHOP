"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const services = [
  {
    category: "Clasico Services",
    items: [
      { name: "Clasico Haircut", price: "$35" },
      { name: "Clasico Haircut & Beard", price: "$45" },
      { name: "Clasico Haircut & Beard & Face Wax", price: "$55" },
      { name: "Clasico Haircut & Beard & Face Wax & Threading", price: "$65" },
      { name: "Clasico Haircut & Beard & Face Wax & Threading & Hair Color", price: "$75" },
      { name: "Clasico Haircut & Beard & Face Wax & Threading & Hair Color & Hair Treatment", price: "$85" },
      { name: "Clasico Haircut & Beard & Face Wax & Threading & Hair Color & Hair Treatment & Hair Styling", price: "$95" },
    ],
  },
  {
    category: "Side Fades",
    items: [
      { name: "Side Fade", price: "$30" },
      { name: "Side Fade & Beard", price: "$40" },
      { name: "Side Fade & Beard & Face Wax", price: "$50" },
      { name: "Side Fade & Beard & Face Wax & Threading", price: "$60" },
      { name: "Side Fade & Beard & Face Wax & Threading & Hair Color", price: "$70" },
      { name: "Side Fade & Beard & Face Wax & Threading & Hair Color & Hair Treatment", price: "$80" },
      { name: "Side Fade & Beard & Face Wax & Threading & Hair Color & Hair Treatment & Hair Styling", price: "$90" },
    ],
  },
  {
    category: "Face Waxing/Threading",
    items: [
      { name: "Face Wax", price: "$20" },
      { name: "Face Threading", price: "$25" },
      { name: "Face Wax & Threading", price: "$35" },
    ],
  },
  {
    category: "Beard Services",
    items: [
      { name: "Beard Trim", price: "$15" },
      { name: "Beard Trim & Shape", price: "$25" },
      { name: "Beard Trim & Shape & Color", price: "$35" },
    ],
  },
];

export default function ServicesAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const headerRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [headerHeights, setHeaderHeights] = useState<number[]>([]);
  const [contentHeights, setContentHeights] = useState<number[]>([]);

  useLayoutEffect(() => {
    setHeaderHeights(
      headerRefs.current.map((el) => (el ? el.offsetHeight : 0))
    );
    setContentHeights(
      contentRefs.current.map((el) => (el ? el.scrollHeight : 0))
    );
  }, [openCategory]);

  const handleCategoryClick = (category: string) => {
    setOpenCategory(openCategory === category ? null : category);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((category, idx) => {
          const isOpen = openCategory === category.category;
          const headerHeight = headerHeights[idx] || 64; // fallback to 64px
          const contentHeight = contentHeights[idx] || 0;
          return (
            <motion.div
              key={category.category}
              layout
              animate={{
                height: isOpen ? headerHeight + contentHeight : headerHeight,
                boxShadow: isOpen
                  ? '0 8px 32px 0 rgba(212,175,55,0.15)'
                  : '0 2px 8px 0 rgba(212,175,55,0.05)',
                borderColor: isOpen ? '#D4AF37' : 'rgba(212,175,55,0.2)',
                scale: isOpen ? 1.02 : 1,
              }}
              transition={{
                type: 'spring',
                stiffness: 300,
                damping: 30,
              }}
              className={clsx(
                'w-full bg-black/95 rounded-lg shadow-xl border overflow-hidden',
                isOpen ? 'border-gold/40' : 'border-gold/20 hover:border-gold/30'
              )}
              style={{ minHeight: 0, paddingBottom: 0 }}
            >
              <button
                ref={el => { headerRefs.current[idx] = el; }}
                onClick={() => handleCategoryClick(category.category)}
                className={clsx(
                  'w-full px-6 py-4 flex items-center justify-between text-left transition-all duration-300',
                  isOpen && 'bg-gold/5'
                )}
                aria-expanded={isOpen}
                style={{ borderRadius: 'inherit' }}
              >
                <motion.h3
                  layout="position"
                  className="font-playfair text-xl text-gold"
                >
                  {category.category}
                </motion.h3>
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.4, ease: 'easeInOut' }}
                >
                  <ChevronDown className="w-5 h-5 text-gold" />
                </motion.div>
              </button>
              <div
                ref={el => { contentRefs.current[idx] = el; }}
                style={{
                  opacity: isOpen ? 1 : 0,
                  pointerEvents: isOpen ? 'auto' : 'none',
                  transition: 'opacity 0.3s',
                }}
              >
                {isOpen && (
                  <motion.div
                    key="content"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="px-6 pb-4 space-y-3"
                  >
                    {category.items.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.05,
                          ease: 'easeOut',
                        }}
                        className="flex justify-between items-center py-2 border-b border-gold/10 last:border-0"
                      >
                        <span className="text-white/90 font-inter">{item.name}</span>
                        <span className="text-gold font-inter">{item.price}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
} 