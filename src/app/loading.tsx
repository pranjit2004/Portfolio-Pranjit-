"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Loading() {
  const text = "INITIALIZING";

  return (
    <div className="relative flex min-h-[100dvh] w-full flex-col items-center justify-center overflow-hidden bg-[#030303] selection:bg-white/20 selection:text-white">
      {/* Subtle Cinematic Noise Texture */}
      <div
        className="pointer-events-none absolute inset-0 z-30 opacity-[0.02] mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Minimal Architectural Grid */}
      <div className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Floating Blurred Orbs for Depth */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.2, 0.4, 0.2] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[20%] top-[30%] h-72 w-72 rounded-full bg-white/[0.015] blur-[80px]"
      />
      <motion.div
        animate={{ y: [0, 30, 0], opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-[20%] right-[20%] h-[24rem] w-[24rem] rounded-full bg-white/[0.02] blur-[100px]"
      />

      {/* Main Loader Content */}
      <div className="relative z-20 flex flex-col items-center justify-center">
        
        {/* Cinematic Loader Graphic */}
        <div className="relative mb-12 flex h-40 w-40 items-center justify-center sm:h-48 sm:w-48">
          
          {/* Outer Dashed Ring (Slow Clockwise) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 rounded-full border border-dashed border-white/10"
          />

          {/* Middle Accent Ring (Counter-Clockwise) */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="absolute inset-4 rounded-full border border-white/5 border-t-white/30 border-l-white/30"
          />

          {/* Inner Sharp Ring (Fast Clockwise) */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="absolute inset-10 rounded-full border border-white/5 border-b-white/50"
          />

          {/* Center Glass Core */}
          <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-white/10 bg-[#0a0a0a]/80 shadow-[0_0_30px_rgba(255,255,255,0.02)] backdrop-blur-xl">
            {/* Pulsing Core Dot */}
            <motion.div
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="h-2 w-2 rounded-full bg-white shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            />
          </div>
          
        </div>

        {/* Animated Typography */}
        <div className="flex flex-col items-center gap-3 text-center">
          <div className="flex space-x-2">
            {text.split("").map((letter, index) => (
              <motion.span
                key={index}
                initial={{ opacity: 0.2, y: 5 }}
                animate={{ opacity: [0.2, 1, 0.2], y: [5, 0, 5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.1,
                }}
                className="text-[0.65rem] font-semibold tracking-[0.3em] text-white/80 sm:text-xs"
              >
                {letter}
              </motion.span>
            ))}
          </div>
          
          {/* Subtle Progress Line */}
          <div className="mt-4 h-[1px] w-32 overflow-hidden rounded-full bg-white/10">
            <motion.div
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="h-full w-1/2 rounded-full bg-gradient-to-r from-transparent via-white/40 to-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
}