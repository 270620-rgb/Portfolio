"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X } from "lucide-react";
import CTASection from "@/components/CTASection";
import GlassmorphismCard from "@/components/glassmorphism-card";

const graphics = [
  {
    id: 1,
    src: "/graphicpost/image1.png",
    title: "Creative Design 01",
  },
  {
    id: 2,
    src: "/graphicpost/image2.png",
    title: "Creative Design 02",
  },
  {
    id: 3,
    src: "/graphicpost/image3.png",
    title: "Creative Design 03",
  },
  {
    id: 4,
    src: "/graphicpost/image4.jpg",
    title: "Creative Design 04",
  },
  // Add more images here
];

export default function GraphicsPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

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
                onClick={() => setSelectedImage(graphic.src)}
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

        {/* Empty State */}
        {graphics.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No graphics available yet.
          </div>
        )}

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

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-5 right-5 z-50 text-white/70 hover:text-white transition-colors"
              aria-label="Close image"
            >
              <X size={32} />
            </button>

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="relative w-full max-w-5xl h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Graphic preview"
                fill
                className="object-contain"
                sizes="100vw"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
