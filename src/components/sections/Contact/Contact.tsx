"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import { ArrowRight, Mail, Send } from "lucide-react";

import {
  FaGithub,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

// --- Configuration ---
const SOCIAL_LINKS = [
  { name: "Twitter", icon: FaTwitter, href: "#" },
  { name: "GitHub", icon: FaGithub, href: "#" },
  { name: "LinkedIn", icon: FaLinkedinIn, href: "#" },
];

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formState, setFormState] = useState<
    "idle" | "focused" | "submitted"
  >("idle");

  // Subtle parallax for the massive background typography
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  const y = useTransform(
    scrollYProgress,
    [0, 1],
    ["-20%", "0%"]
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.8, 1],
    [0, 1, 1]
  );

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-[#030303] py-32"
    >
      {/* 1. Cinematic Background Noise */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.03] mix-blend-screen"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* 2. Atmospheric Breathing Orb */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-[120px]"
      />

      {/* 3. Massive Background Typography Parallax */}
      <motion.div
        style={{ y, opacity }}
        className="pointer-events-none absolute left-0 top-[10%] z-0 flex w-full select-none justify-center overflow-hidden"
      >
        <span className="whitespace-nowrap text-[16vw] font-black leading-none tracking-tighter text-white/[0.02]">
          LET&apos;S TALK
        </span>
      </motion.div>

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-6 md:px-8">
        
        {/* --- Header Section --- */}
        <div className="mb-16 flex w-full flex-col items-center text-center md:mb-24">
          
          {/* Availability Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-8 flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 backdrop-blur-md"
          >
            <div className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>

              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </div>

            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300">
              Available for new opportunities
            </span>
          </motion.div>

          {/* Massive Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="mb-6 text-5xl font-bold leading-[1] tracking-tighter text-white md:text-7xl lg:text-8xl"
          >
            Have an idea? <br />

            <span className="bg-gradient-to-r from-neutral-400 to-neutral-600 bg-clip-text text-transparent">
              Let&apos;s build it.
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="max-w-2xl text-lg font-medium text-neutral-400 md:text-xl"
          >
            I&apos;m currently looking to join a
            cross-functional team that values
            improving people&apos;s lives through
            accessible design.
          </motion.p>
        </div>

        {/* --- The Form Architecture --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.3,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="relative w-full max-w-2xl"
        >
          {/* Form Container */}
          <div
            className={`
              relative rounded-[2rem] border border-white/10 
              bg-[#0A0A0A]/80 p-8 backdrop-blur-3xl 
              shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.1)]
              transition-all duration-500
              md:p-12
              ${
                formState === "focused"
                  ? "border-white/20 shadow-[0_0_80px_-20px_rgba(255,255,255,0.05)]"
                  : ""
              }
            `}
          >
            <form
              className="flex flex-col gap-6"
              onFocus={() => setFormState("focused")}
              onBlur={() => setFormState("idle")}
            >
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <FormInput
                  label="Name"
                  type="text"
                  placeholder="John Doe"
                />

                <FormInput
                  label="Email"
                  type="email"
                  placeholder="john@example.com"
                />
              </div>

              <div className="relative flex flex-col gap-2">
                <label className="ml-1 text-sm font-semibold text-neutral-400">
                  Message
                </label>

                <textarea
                  rows={4}
                  placeholder="Tell me about your project..."
                  className="w-full resize-none rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white placeholder:text-neutral-600 shadow-inner transition-all focus:border-white/30 focus:outline-none focus:ring-4 focus:ring-white/5"
                />
              </div>

              {/* Magnetic Submit Button */}
              <div className="mt-4 flex justify-end">
                <MagneticButton>
                  <button
                    type="button"
                    className="group relative flex items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-8 py-4 text-sm font-semibold text-black transition-transform active:scale-95"
                  >
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-neutral-200 to-white opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                    <span className="relative z-10">
                      Send Message
                    </span>

                    <Send className="relative z-10 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </MagneticButton>
              </div>
            </form>
          </div>
        </motion.div>

        {/* --- Footer --- */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 1,
            delay: 0.6,
          }}
          className="mt-16 flex w-full max-w-2xl flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row"
        >
          {/* Direct Email */}
          <a
            href="mailto:hello@example.com"
            className="group flex items-center gap-3 text-neutral-400 transition-colors hover:text-white"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 transition-colors group-hover:bg-white/10">
              <Mail className="h-4 w-4" />
            </div>

            <span className="font-medium">
              hello@example.com
            </span>
          </a>

          {/* Social Links */}
          <div className="flex items-center gap-2">
            {SOCIAL_LINKS.map((social) => {
              const Icon = social.icon;

              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-neutral-400 transition-all hover:scale-110 hover:bg-white/10 hover:text-white active:scale-95"
                >
                  <Icon className="h-4 w-4" />
                </a>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// --- Sub-components ---

function FormInput({
  label,
  type,
  placeholder,
}: {
  label: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div className="group relative flex flex-col gap-2">
      <label className="ml-1 text-sm font-semibold text-neutral-400 transition-colors group-focus-within:text-white">
        {label}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        className="w-full rounded-2xl border border-white/10 bg-black/50 px-5 py-4 text-white placeholder:text-neutral-600 shadow-inner transition-all focus:border-white/30 focus:outline-none focus:ring-4 focus:ring-white/5"
      />
    </div>
  );
}

// Premium magnetic button effect
function MagneticButton({
  children,
}: {
  children: React.ReactNode;
}) {

  const ref = useRef<HTMLDivElement>(null);

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouse = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    const { clientX, clientY } = e;

    const {
      height,
      width,
      left,
      top,
    } = ref.current!.getBoundingClientRect();

    const middleX =
      clientX - (left + width / 2);

    const middleY =
      clientY - (top + height / 2);

    setPosition({
      x: middleX * 0.2,
      y: middleY * 0.2,
    });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x, y }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      {children}
    </motion.div>
  );
}