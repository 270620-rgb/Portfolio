"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import GlassmorphismCard from "@/components/glassmorphism-card";

const graphics = [
  {
    id: 1,
    src: "/graphicpost/graphic1.jpeg",
    title: "Creative Design 01",
  },
  {
    id: 2,
    src: "/graphicpost/graphic2.jpeg",
    title: "Creative Design 02",
  },
  {
    id: 3,
    src: "/graphicpost/graphic3.jpeg",
    title: "Creative Design 03",
  },
  {
    id: 4,
    src: "/graphicpost/graphic4.jpeg",
    title: "Creative Design 04",
  },
  {
    id: 5,
    src: "/graphicpost/graphic5.jpeg",
    title: "Creative Design 05",
  },
  {
    id: 6,
    src: "/graphicpost/graphic6.jpeg",
    title: "Creative Design 06",
  },
  {
    id: 7,
    src: "/graphicpost/graphic7.jpeg",
    title: "Creative Design 07",
  },
  {
    id: 8,
    src: "/graphicpost/graphic8.jpeg",
    title: "Creative Design 08",
  },
];

export default function GraphicsPage() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isOpen = selectedIndex !== null;

  const goToPrevious = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === 0 ? graphics.length - 1 : selectedIndex - 1
    );
  };

  const goToNext = () => {
    if (selectedIndex === null) return;

    setSelectedIndex(
      selectedIndex === graphics.length - 1 ? 0 : selectedIndex + 1
    );
  };

  const closeGallery = () => {
    setSelectedIndex(null);
  };

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        goToPrevious();
      }

      if (event.key === "ArrowRight") {
        goToNext();
      }

      if (event.key === "Escape") {
        closeGallery();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    // Prevent background scrolling
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen, selectedIndex]);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Graphics & Designs
          </h1>

          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A collection of creative graphics, social media designs,
            thumbnails, posters, and visual concepts crafted with
            creativity and attention to detail.
          </p>
        </motion.div>

        {/* Gallery */}
        <GlassmorphismCard className="p-6 md:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {graphics.map((graphic, index) => (
              <motion.div
                key={graphic.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                whileHover={{ y: -6 }}
                className="group cursor-pointer"
                onClick={() => setSelectedIndex(index)}
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-black/30 border border-white/10">
                  <Image
                    src={graphic.src}
                    alt={graphic.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-300 flex items-end">
                    <div className="w-full p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="text-white font-semibold text-lg">
                        {graphic.title}
                      </h3>

                      <p className="text-gray-300 text-sm mt-1">
                        Click to view
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </GlassmorphismCard>

        {/* CTA */}
        <div className="mt-16">
          <CTASection
            title="Need Creative Graphics?"
            description="Let's create something visually stunning for your brand, social media, campaign, or project."
            buttonText="Get In Touch"
            href="/contact"
          />
        </div>
      </div>

      {/* Fullscreen Gallery */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md"
            onClick={closeGallery}
          >
            {/* Image */}
            <motion.div
              key={selectedIndex}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              className="absolute inset-0 flex items-center justify-center p-6 md:p-16"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full max-w-6xl">
                <Image
                  src={graphics[selectedIndex].src}
                  alt={graphics[selectedIndex].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-50
                w-12 h-12 md:w-14 md:h-14
                rounded-full
                bg-white/10 hover:bg-white/20
                border border-white/10
                backdrop-blur-md
                flex items-center justify-center
                text-white
                transition-all duration-300
                hover:scale-110"
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-50
                w-12 h-12 md:w-14 md:h-14
                rounded-full
                bg-white/10 hover:bg-white/20
                border border-white/10
                backdrop-blur-md
                flex items-center justify-center
                text-white
                transition-all duration-300
                hover:scale-110"
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>

            {/* Bottom Left Controls */}
            <div
              className="absolute bottom-5 left-5 md:bottom-8 md:left-8 z-50 flex items-center gap-3"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close */}
              <button
                onClick={closeGallery}
                className="flex items-center gap-2
                  px-4 py-2.5
                  rounded-full
                  bg-white/10 hover:bg-white/20
                  border border-white/10
                  backdrop-blur-md
                  text-white
                  transition-all duration-300
                  hover:scale-105"
              >
                <X size={20} />
                <span className="text-sm font-medium">Close</span>
              </button>

              {/* Counter */}
              <div className="px-4 py-2.5 rounded-full bg-white/10 border border-white/10 backdrop-blur-md text-gray-300 text-sm">
                {selectedIndex + 1} / {graphics.length}
              </div>
            </div>

            {/* Image Title */}
            <div className="absolute bottom-6 md:bottom-9 left-1/2 -translate-x-1/2 z-50 hidden sm:block">
              <p className="text-white/80 text-sm md:text-base">
                {graphics[selectedIndex].title}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
