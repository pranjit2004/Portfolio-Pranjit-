"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { ArrowUp, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";

import { NAV_LINKS1, NAV_LINKS2, SOCIAL_LINKS } from "@/app/data/footerData";

export default function Footer() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Parallax effect for the massive background text
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"],
  });

  // Spring physics for smooth text rising
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 20,
  });

  const textY = useTransform(smoothProgress, [0, 1], ["50%", "0%"]);
  const textOpacity = useTransform(smoothProgress, [0.5, 1], [0, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={containerRef}
      className="relative w-full bg-[#030303] pt-32 pb-8 overflow-hidden flex flex-col items-center"
    >
      {/* Cinematic Background Noise */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Top Glow Divider */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-sm" />

      {/* Main Grid */}
      <div className="relative z-10 w-full max-w-7xl px-6 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6 mb-32">
        {/* Left */}
        <div className="md:col-span-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Image
                src="/logo.svg"
                alt="Pranjit Logo"
                width={32}
                height={32}
                className="object-contain"
              />
            </div>

            <h3 className="text-2xl md:text-3xl font-medium text-neutral-300 leading-tight tracking-tight max-w-md">
              Built with precision. <br />
              <span className="text-neutral-500">Designed for impact.</span>
            </h3>
          </div>

          <div className="mt-12 md:mt-24">
            <a
              href="mailto:hello@domain.com"
              className="text-lg font-semibold text-white hover:text-neutral-300 transition-colors inline-block relative group"
            >
              example@gmail.com
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full" />
            </a>
          </div>
        </div>

        {/* Center */}
        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-600 mb-2">
            Navigation
          </span>

          <nav className="flex flex-col gap-3">
            {NAV_LINKS1.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-neutral-400 hover:text-white transition-colors w-fit font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-neutral-600 mb-2">
            Other Projects
          </span>

          <nav className="flex flex-col gap-3">
            {NAV_LINKS2.map((link) => (
              <a
                key={link.name}
                target="_blank"
                  rel="noopener noreferrer"
                href={link.href}
                className="text-neutral-400 hover:text-white transition-colors w-fit font-medium"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end">
          <div className="flex flex-col items-start md:items-end gap-2 text-left md:text-right">
            <span className="text-xs font-semibold uppercase tracking-widest text-neutral-600">
              Local Time
            </span>

            <div className="flex items-center gap-2 text-neutral-300 font-medium">
              <MapPin className="w-4 h-4 text-neutral-500" />
              <span>Lakhimpur, Assam, India</span>
            </div>

            <LiveTime />
          </div>

          {/* Socials */}
          <div className="mt-12 md:mt-24 flex items-center gap-6">
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => {
                const Icon = social.icon;

                return (
                  <MagneticWrapper key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-12 h-12 rounded-full bg-white/[0.03] border border-white/10 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-white/10 transition-colors shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  </MagneticWrapper>
                );
              })}
            </div>

            <MagneticWrapper>
              <button
                onClick={scrollToTop}
                aria-label="Back to top"
                className="group w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-[0_0_40px_rgba(255,255,255,0.2)]"
              >
                <ArrowUp className="w-6 h-6 transition-transform duration-300 group-hover:-translate-y-1" />
              </button>
            </MagneticWrapper>
          </div>
        </div>
      </div>

      {/* Bottom Typography */}
      <div className="relative w-full h-[20vw] overflow-hidden flex items-center justify-center pointer-events-none mt-auto">
        <div className="absolute bottom-[-50%] left-1/2 -translate-x-1/2 w-[100vw] h-[100vw] rounded-full bg-gradient-to-t from-white/[0.08] to-transparent blur-[120px] z-0" />

        <motion.div
          style={{ y: textY, opacity: textOpacity }}
          className="relative z-10 w-full text-center"
        >
          <h1 className="text-[18vw] font-black text-white/[0.04] leading-[0.75] tracking-tighter uppercase select-none">
            thinker
          </h1>
        </motion.div>
      </div>

      {/* Copyright */}
      <div className="relative z-20 w-full max-w-7xl px-6 md:px-8 mt-12 flex flex-col md:flex-row items-center justify-between pt-6 border-t border-white/5 text-sm font-medium text-neutral-500">
        <p>© {new Date().getFullYear()} PH. All rights reserved.</p>

        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span>Crafted by</span>

          <Sparkles className="w-3 h-3 text-emerald-500" />

          <span className="text-neutral-300">Pranjit Hazarika</span>
        </div>
      </div>
    </footer>
  );
}

// Live Time Component
function LiveTime() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const formattedTime = now.toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });

      setTime(`${formattedTime} IST`);
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  if (!time) {
    return <div className="h-6 w-32 animate-pulse bg-white/5 rounded" />;
  }

  return (
    <div className="font-mono text-white text-lg tracking-tight">{time}</div>
  );
}

// Magnetic Wrapper
function MagneticWrapper({ children }: { children: React.ReactNode }) {
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
      x: middleX * 0.2,
      y: middleY * 0.2,
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
