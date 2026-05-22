"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
  useSpring,
} from "framer-motion";

import {
  ArrowUpRight,
  Sparkles,
  Code2,
  Cpu,
} from "lucide-react";

// ======================================================
// Tech Stack - Updated to match your exact tools + ML
// ======================================================

const TECH_STACK = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "Machine Learning",
  "Python",
  "Framer Motion",
  "C++",
];

// ======================================================
// About Section
// ======================================================

export default function About() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Background Parallax
  const backgroundY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-15%", "15%"]
  );

  const textOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0, 0.08, 0]
  );

  // Mouse Tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 80,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 80,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const { left, top } = containerRef.current.getBoundingClientRect();

    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        bg-[#030303]
        py-32
      "
    >
      {/* ====================================================== */}
      {/* Background Noise */}
      {/* ====================================================== */}

      <div
        className="
          absolute
          inset-0
          z-0
          opacity-[0.03]
          pointer-events-none
          mix-blend-screen
        "
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.8%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* ====================================================== */}
      {/* Massive Background Typography */}
      {/* ====================================================== */}

      <motion.div
        style={{
          y: backgroundY,
          opacity: textOpacity,
        }}
        className="
          pointer-events-none
          absolute
          left-1/2
          top-1/2
          z-0
          w-full
          -translate-x-1/2
          -translate-y-1/2
          text-center
        "
      >
        <span
          className="
            select-none
            whitespace-nowrap
            text-[18vw]
            font-black
            tracking-[-0.08em]
            text-white
          "
        >
          ENGINEER
        </span>
      </motion.div>

      {/* ====================================================== */}
      {/* Ambient Mouse Glow */}
      {/* ====================================================== */}

      <motion.div
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-40
        "
        style={{
          background: useMotionTemplate`
            radial-gradient(
              700px circle at ${smoothX}px ${smoothY}px,
              rgba(255,255,255,0.06),
              transparent 60%
            )
          `,
        }}
      />

      {/* ====================================================== */}
      {/* Main Container */}
      {/* ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          grid
          w-full
          max-w-7xl
          grid-cols-1
          gap-20
          px-6
          md:px-8
          lg:grid-cols-2
          lg:gap-12
        "
      >
        {/* ====================================================== */}
        {/* LEFT SIDE: Typography & Identity */}
        {/* ====================================================== */}

        <div
          className="
            flex
            flex-col
            justify-center
          "
        >
          {/* Label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="
              mb-8
              flex
              items-center
              gap-3
            "
          >
            <Sparkles className="h-5 w-5 text-neutral-400" />
            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-neutral-400
              "
            >
              CS & Engineering
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="
              mb-10
              text-5xl
              font-black
              tracking-[-0.06em]
              leading-[0.95]
              text-white
              md:text-6xl
              lg:text-7xl
            "
          >
            Building scalable
            <br />
            <span
              className="
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-neutral-300
                to-neutral-600
              "
            >
              digital products.
            </span>
          </motion.h2>

          {/* Paragraphs - Updated to your actual bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="
              max-w-2xl
              text-lg
              font-medium
              leading-relaxed
              text-neutral-400
              md:text-xl
              flex flex-col gap-6
            "
          >
            <p>
              I am a passionate Web Developer and Computer Science student focused on building modern, scalable, and user-friendly applications.
            </p>
            <p>
              My goal is to create impactful digital products and continuously push the boundaries of my skills in software engineering and artificial intelligence.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12"
          >
            <button
              className="
                group
                relative
                flex
                items-center
                gap-3
                overflow-hidden
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-7
                py-4
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:bg-white/[0.08]
              "
            >
              <div
                className="
                  absolute
                  inset-0
                  opacity-0
                  transition-opacity
                  duration-300
                  group-hover:opacity-100
                  bg-gradient-to-r
                  from-white/[0.05]
                  to-transparent
                "
              />
              <span className="relative z-10">
                Explore My Work
              </span>
              <ArrowUpRight
                className="
                  relative
                  z-10
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            </button>
          </motion.div>
        </div>

        {/* ====================================================== */}
        {/* RIGHT SIDE: The Glass Display */}
        {/* ====================================================== */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="
            relative
            flex
            min-h-[700px]
            items-center
            justify-center
          "
        >
          {/* Glass Container */}
          <div
            className="
              relative
              h-full
              w-full
              overflow-hidden
              rounded-[2.5rem]
              border
              border-white/10
              bg-white/[0.03]
              backdrop-blur-3xl
              shadow-[0_20px_80px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]
            "
          >
            {/* Animated Orb */}
            <motion.div
              animate={{
                scale: [1, 1.15, 1],
                rotate: [0, 120, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="
                absolute
                left-1/2
                top-1/2
                h-[500px]
                w-[500px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                opacity-60
                blur-[100px]
              "
              style={{
                background:
                  "conic-gradient(from 180deg at 50% 50%, #111 0deg, #444 120deg, #fff 240deg, #111 360deg)",
              }}
            />

            {/* Grid Overlay */}
            <div
              className="
                absolute
                inset-0
                opacity-[0.04]
              "
              style={{
                backgroundImage: `
                  linear-gradient(to right, white 1px, transparent 1px),
                  linear-gradient(to bottom, white 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Floating Cards - Updated for Web Dev & ML */}
            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
                justify-between
                p-8
              "
            >
              {/* Top Row */}
              <div className="flex justify-between">
                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/30
                    px-4
                    py-3
                    backdrop-blur-md
                  "
                >
                  <div
                    className="
                      mb-1
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-neutral-500
                    "
                  >
                    Focus
                  </div>
                  <div className="text-sm font-semibold text-white">
                    Full-Stack & ML
                  </div>
                </div>

                <div
                  className="
                    rounded-2xl
                    border
                    border-white/10
                    bg-black/30
                    px-4
                    py-3
                    backdrop-blur-md
                  "
                >
                  <div
                    className="
                      mb-1
                      text-xs
                      uppercase
                      tracking-[0.2em]
                      text-neutral-500
                    "
                  >
                    Stack
                  </div>
                  <div className="text-sm font-semibold text-white">
                    MERN & Next.js
                  </div>
                </div>
              </div>

              {/* Center Icon */}
              <div className="flex justify-center">
                <motion.div
                  animate={{ y: [-10, 10, -10] }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="
                    flex
                    h-36
                    w-36
                    items-center
                    justify-center
                    rounded-full
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                  "
                >
                  <Cpu className="h-14 w-14 text-white" />
                </motion.div>
              </div>

              {/* Bottom Philosophy */}
              <div
                className="
                  rounded-[2rem]
                  border
                  border-white/10
                  bg-black/30
                  p-6
                  backdrop-blur-xl
                "
              >
                <div
                  className="
                    mb-4
                    text-xs
                    font-semibold
                    uppercase
                    tracking-[0.2em]
                    text-neutral-500
                  "
                >
                  Philosophy
                </div>
                <p
                  className="
                    text-lg
                    font-medium
                    leading-relaxed
                    text-neutral-300
                  "
                >
                  Code should not just function; it should solve real problems and create a meaningful impact on the end user.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ====================================================== */}
      {/* Bottom Tech Marquee */}
      {/* ====================================================== */}

      <div
        className="
          relative
          z-10
          mt-28
          overflow-hidden
        "
      >
        <div className="mask-edges">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 35,
              repeat: Infinity,
              ease: "linear",
            }}
            className="
              flex
              whitespace-nowrap
              gap-4
            "
          >
            {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
              <div
                key={index}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.03]
                  px-6
                  py-4
                  backdrop-blur-md
                "
              >
                <div className="h-2 w-2 rounded-full bg-neutral-500" />
                <span
                  className="
                    text-sm
                    font-semibold
                    tracking-wide
                    text-neutral-300
                  "
                >
                  {tech}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* Mask CSS */}
      {/* ====================================================== */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .mask-edges {
              mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
              -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
            }
          `,
        }}
      />
    </section>
  );
}