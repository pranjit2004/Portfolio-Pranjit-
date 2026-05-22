"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import { ArrowUpRight, Copy } from "lucide-react";

export default function CTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [copied, setCopied] = useState(false);

  // Smooth scroll tracking for the background typography parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["20%", "0%"]);

  const textOpacity = useTransform(scrollYProgress, [0.5, 1], [0, 0.03]);

  // Mouse tracking for the ambient lighting
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics applied to the mouse coordinates for buttery smooth lighting
  const smoothX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const { left, top } = containerRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("hello@yourdomain.com");

    setCopied(true);

    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#030303] py-32"
    >
      {/* 1. Film Grain Overlay */}
      <div
        className="pointer-events-none absolute inset-0 z-10 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* 2. Interactive Spotlight */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 opacity-60"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              800px circle at ${smoothX}px ${smoothY}px,
              rgba(255,255,255,0.05),
              transparent 60%
            )
          `,
        }}
      />

      {/* Bottom Ambient Glow */}
      <div className="pointer-events-none absolute bottom-[-20%] left-1/2 z-0 h-[50vh] w-[150vw] -translate-x-1/2 bg-gradient-to-t from-white/[0.05] to-transparent blur-[100px]" />

      {/* 3. Massive Parallax Watermark */}
      <motion.div
        style={{
          y: backgroundY,
          opacity: textOpacity,
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 w-[110%] -translate-x-1/2 -translate-y-1/2 overflow-visible text-center"
      >
        <span className="block overflow-visible text-center text-[22.5vw] font-black leading-none tracking-tighter whitespace-nowrap text-white">
          FUTURE
        </span>
      </motion.div>

      {/* 4. Main Content Container */}
      <div className="relative z-20 flex w-full max-w-7xl flex-col items-center px-4 text-center md:px-8">
        {/* Availability Pill */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-12 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 backdrop-blur-md shadow-[0_0_30px_rgba(255,255,255,0.05)]"
        >
          <div className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500"></span>
          </div>

          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Available for Q3
          </span>
        </motion.div>

        {/* Cinematic Typography */}
        <div className="mb-10 flex w-full flex-col items-center justify-center">
          <MaskedText
            text="Let's build the"
            className="m-0 text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.85] tracking-tighter text-white"
            delay={0.1}
          />

          <MaskedText
            text="extraordinary."
            className="m-0 bg-gradient-to-r from-neutral-200 via-white to-neutral-500 bg-clip-text text-[clamp(3rem,10vw,8rem)] font-bold leading-[0.85] tracking-tighter text-transparent"
            delay={0.2}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="mb-16 max-w-2xl text-lg font-medium leading-relaxed text-neutral-400 md:text-xl"
        >
          Turning ambitious ideas into immersive digital experiences. Whether
          you&apos;re a visionary startup or an established brand, let&apos;s
          engineer something unforgettable.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="flex flex-col items-center gap-6 sm:flex-row"
        >
          {/* Primary CTA */}
          <MagneticButton>
            <a
              href="mailto:hello@yourdomain.com"
              className="group relative flex h-[84px] min-w-[260px] items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-10 py-5 text-lg font-semibold text-black shadow-[0_0_40px_rgba(255,255,255,0.2)] transition-transform active:scale-95"
            >
              <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-neutral-200 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <span className="relative z-10">Start a Project</span>

              <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </MagneticButton>

          {/* Secondary CTA */}
          <MagneticButton>
            <button
              onClick={handleCopyEmail}
              className="group relative flex h-[84px] min-w-[260px] items-center justify-center gap-3 rounded-full border border-white/10 bg-white/5 px-10 py-5 text-lg font-semibold text-white backdrop-blur-md transition-all hover:bg-white/10 active:scale-95"
            >
              <span className="relative z-10 w-[120px] text-center">
                {copied ? "Copied!" : "Copy Email"}
              </span>

              <Copy
                className={`relative z-10 h-4 w-4 transition-all duration-300 ${
                  copied ? "scale-50 opacity-0" : "scale-100 opacity-100"
                }`}
              />
            </button>
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

// ======================================================
// Sub-components
// ======================================================

function MaskedText({
  text,
  className,
  delay,
}: {
  text: string;
  className: string;
  delay: number;
}) {
  return (
    <div className="flex w-full justify-center overflow-visible pb-2">
      <motion.div
        initial={{ y: "100%" }}
        whileInView={{ y: "0%" }}
        viewport={{
          once: true,
          margin: "-50px",
        }}
        transition={{
          duration: 1.2,
          delay,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
      >
        {text}
      </motion.div>
    </div>
  );
}

/**
 * Magnetic Button
 */
function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;

    const { height, width, left, top } = ref.current!.getBoundingClientRect();

    const middleX = clientX - (left + width / 2);

    const middleY = clientY - (top + height / 2);

    setPosition({
      x: middleX * 0.15,
      y: middleY * 0.15,
    });
  };

  const reset = () => {
    setPosition({
      x: 0,
      y: 0,
    });
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{
        x: position.x,
        y: position.y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
}
