"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TestimonialCard } from "./TestimonialCard";
import { Button } from "./ui/button";
import { getTopTestimonials, testimonialsData } from "@/data/testimonials";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "all", label: "Recovery Stories" },
  { id: "knee-pain", label: "Knee" },
  { id: "back-pain", label: "Back & Spine" },
  { id: "frozen-shoulder", label: "Shoulder" },
  { id: "neck-pain", label: "Neck" },
  { id: "sprained-ankle", label: "Ankle & Foot" },
  { id: "wrist-pain", label: "Hand & Wrist" },
];

export function TestimonialGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTestimonials = useMemo(() => {
    if (activeCategory === "all") {
      // Use helper to get the 15 most comprehensive cases
      return getTopTestimonials(15);
    }
    return testimonialsData.filter(t => t.slug === activeCategory || t.slug.includes(activeCategory.split('-')[0]));
  }, [activeCategory]);

  return (
    <div className="space-y-16">
      {/* Category Filter Navigation */}
      <nav className="flex flex-wrap justify-center gap-4 mb-20">
        {CATEGORIES.map((cat) => (
          <Button
            key={cat.id}
            variant={activeCategory === cat.id ? "default" : "outline"}
            onClick={() => setActiveCategory(cat.id)}
            className={cn(
              "rounded-full px-8 py-6 text-xs font-bold uppercase tracking-widest transition-all",
              activeCategory === cat.id 
                ? "bg-brand-teal text-white shadow-lg scale-105" 
                : "border-brand-teal/20 text-brand-teal hover:bg-brand-teal/5"
            )}
          >
            {cat.label}
          </Button>
        ))}
      </nav>

      {/* Masonry Layout using CSS Columns */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8 lg:gap-12 [column-fill:_balance]">
        <AnimatePresence mode="popLayout">
          {filteredTestimonials.map((testimonial, idx) => (
            <motion.div
              key={testimonial.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ 
                duration: 0.5, 
                delay: idx * 0.05,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="break-inside-avoid-column mb-8 lg:mb-12"
            >
              <TestimonialCard 
                testimonial={testimonial} 
                isHero={activeCategory === "all" && idx < 3}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {filteredTestimonials.length === 0 && (
        <div className="text-center py-20 bg-white rounded-[3rem] border border-brand-teal/5 shadow-inner">
          <p className="text-lg font-medium text-brand-teal/40 italic">
            No specific cases found for this category yet. Select another to see more results.
          </p>
        </div>
      )}
    </div>
  );
}
