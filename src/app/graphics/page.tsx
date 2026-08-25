"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { X, ExternalLink } from "lucide-react";
import GlassmorphismCard from "@/components/glassmorphism-card";
import { Badge } from "@/components/ui/badge";
import CTASection from "@/components/CTASection";
import {
  getGraphicsByCategory,
  getGraphicCategoriesWithCountIncludingAll,
} from "@/lib/helper";
import type { GraphicPost } from "@/types/graphics";

const categories = getGraphicCategoriesWithCountIncludingAll();

export default function GraphicsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [posts, setPosts] = useState<GraphicPost[]>([]);
  const [activePost, setActivePost] = useState<GraphicPost | null>(null);

  useEffect(() => {
    setPosts(getGraphicsByCategory(selectedCategory));
  }, [selectedCategory]);

  // Close lightbox on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setActivePost(null);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 relative"
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-blue-500/20 blur-[100px] rounded-full pointer-events-none" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white relative z-10">
            Graphics
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto relative z-10">
            A collection of social media posts, banners, and static designs
            I've created for clients and brands.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map(({ category, count }) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`
                relative px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300
                ${
                  selectedCategory === category
                    ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)] scale-105"
                    : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/5"
                }
              `}
            >
              {category}
              <span
                className={`
                  ml-2 text-[10px] px-1.5 py-0.5 rounded-full transition-colors
                  ${
                    selectedCategory === category
                      ? "bg-black text-white"
                      : "bg-white/10 text-gray-400"
                  }
                `}
              >
                {count}
              </span>
            </button>
          ))}
        </motion.div>

        {/* Graphics Grid */}
        {posts.length > 0 ? (
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 mb-16"
          >
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
              >
                <button
                  onClick={() => setActivePost(post)}
                  className="block w-full text-left"
                >
                  <GlassmorphismCard className="h-full group hover:shadow-2xl hover:shadow-blue-900/10">
                    <div className="flex flex-col h-full p-5">
                      <div className="relative overflow-hidden rounded-2xl aspect-square mb-5 shadow-lg bg-white/5">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px] z-10">
                          <span className="text-white text-sm font-medium border border-white/30 rounded-full px-4 py-2 bg-white/10">
                            View Full
                          </span>
                        </div>
                      </div>

                      <div className="flex-1 flex flex-col">
                        <h3 className="text-lg font-bold mb-2 text-white group-hover:text-blue-400 transition-colors line-clamp-2 leading-tight">
                          {post.title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4 line-clamp-2 leading-relaxed">
                          {post.description}
                        </p>

                        <div className="mt-auto pt-4 border-t border-white/5 flex items-center justify-between">
                          {post.client_name && (
                            <span className="text-xs font-medium text-white">
                              {post.client_name}
                            </span>
                          )}
                          <div className="flex gap-1">
                            {post.category.slice(0, 2).map((cat) => (
                              <Badge
                                key={cat}
                                variant="secondary"
                                className="bg-white/5 hover:bg-white/10 text-gray-400 text-[10px] font-normal border-none"
                              >
                                {cat}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </GlassmorphismCard>
                </button>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <div className="text-center text-gray-400 mb-16">
            No graphics in this category yet.
          </div>
        )}

        {/* CTA Section */}
        <CTASection
          title="Need Eye-Catching Graphics?"
          description="From social media posts to full branding kits, I can help your content stand out."
          buttonText="Get In Touch"
          href="/contact"
        />
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setActivePost(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            >
              <GlassmorphismCard hover={false} className="p-4 sm:p-6">
                <button
                  onClick={() => setActivePost(null)}
                  className="absolute top-4 right-4 z-20 w-9 h-9 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-white hover:bg-black/80 transition-colors"
                  aria-label="Close"
                >
                  <X size={18} />
                </button>

                <div className="relative w-full aspect-square sm:aspect-video rounded-2xl overflow-hidden mb-6 bg-white/5">
                  <Image
                    src={activePost.image}
                    alt={activePost.title}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">
                  {activePost.title}
                </h3>
                <p className="text-gray-300 mb-4">{activePost.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {activePost.category.map((cat) => (
                    <Badge
                      key={cat}
                      variant="secondary"
                      className="bg-white/5 text-gray-300 border-none"
                    >
                      {cat}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-white/5">
                  {activePost.client_name && (
                    <div className="flex items-center gap-3">
                      {activePost.client_image && (
                        <div className="w-8 h-8 rounded-full overflow-hidden border border-white/10 bg-white/5 p-1 relative">
                          <Image
                            src={activePost.client_image}
                            alt={activePost.client_name}
                            fill
                            className="object-contain rounded-full"
                          />
                        </div>
                      )}
                      <span className="text-sm text-white">
                        {activePost.client_name}
                      </span>
                    </div>
                  )}

                  {activePost.link && (
                    <a
                      href={activePost.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Live Post <ExternalLink size={14} />
                    </a>
                  )}
                </div>
              </GlassmorphismCard>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
