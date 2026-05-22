"use client";

import React, { useEffect, useState } from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#030303] selection:bg-white/20 selection:text-white">
      {/* Subtle Cinematic Noise Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-30 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Interactive Cursor Spotlight Glow */}
      <motion.div
        className="pointer-events-none absolute -inset-px z-10 opacity-40 transition-opacity duration-300"
        animate={{
          background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.04), transparent 40%)`,
        }}
      />

      {/* Minimal Architectural Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Blurred Orbs */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[15%] top-[20%] h-96 w-96 rounded-full bg-white/[0.015] blur-[100px]"
      />
      <motion.div
        animate={{ y: [0, 40, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[10%] right-[15%] h-[32rem] w-[32rem] rounded-full bg-white/[0.02] blur-[120px]"
      />

      {/* Main Content */}
      <div className="relative z-20 flex w-full max-w-5xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Typographic 404 Monument */}
          <motion.div
            variants={itemVariants}
            className="relative mb-12 flex items-center justify-center"
          >
            <h1 className="absolute select-none text-[40vw] font-black tracking-tighter md:text-[22rem]">
              <span className="bg-gradient-to-b from-white/[0.07] to-transparent bg-clip-text text-transparent">
                404
              </span>
            </h1>
            
            {/* Center Focal Point Object */}
            <div className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a]/80 shadow-[0_0_40px_rgba(255,255,255,0.03)] backdrop-blur-xl sm:h-24 sm:w-24">
              <div className="h-2 w-2 animate-pulse rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]" />
              {/* Outer rings */}
              <div className="absolute inset-0 rounded-full border border-white/5" />
              <div className="absolute inset-[-10px] rounded-full border border-white/[0.02]" />
            </div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-8 text-3xl font-medium tracking-tight text-white/90 sm:text-4xl md:text-5xl"
          >
            This page disappeared into the void.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-6 max-w-md text-base leading-relaxed text-neutral-400 sm:text-lg"
          >
            The signal has been lost. The page you are looking for has been moved, renamed, or no longer exists in this timeline.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row"
          >
            {/* Primary Action */}
            <Link href="/" passHref>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative flex h-12 items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 text-sm font-medium text-black transition-colors hover:bg-neutral-200"
              >
                Return Home
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.button>
            </Link>

            {/* Secondary Action */}
            <Link href="/contact" passHref>
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: "rgba(255, 255, 255, 0.08)" }}
                whileTap={{ scale: 0.98 }}
                className="group flex h-12 items-center justify-center gap-3 rounded-full border border-white/10 bg-white/[0.03] px-8 text-sm font-medium text-white shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] backdrop-blur-md transition-colors"
              >
                Contact Me
                <Mail className="h-4 w-4 text-neutral-400 transition-colors duration-300 group-hover:text-white" />
              </motion.button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer System Status */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 z-20 text-xs font-semibold tracking-[0.2em] text-neutral-600 uppercase"
      >
        System Error &middot; 404 Not Found
      </motion.div>
    </div>
  );
}