"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import { ArrowRight, MapPin, Sparkles } from "lucide-react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth mouse motion
  const springX = useSpring(mouseX, {
    stiffness: 50,
    damping: 20,
  });

  const springY = useSpring(mouseY, {
    stiffness: 50,
    damping: 20,
  });

  // Mouse movement
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();

    const x = (e.clientX - left - width / 2) / (width / 2);

    const y = (e.clientY - top - height / 2) / (height / 2);

    mouseX.set(x);
    mouseY.set(y);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="
        relative
        min-h-screen
        w-full
        overflow-hidden
        bg-[#030303]
        flex
        items-center
        justify-center
      "
    >
      {/* ================= BACKGROUND NOISE ================= */}

      <div
        className="
          absolute
          inset-0
          z-0
          opacity-[0.03]
          pointer-events-none
          mix-blend-overlay
        "
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* ================= AMBIENT LIGHT ================= */}

      <motion.div
        className="
          absolute
          inset-0
          z-0
          pointer-events-none
          opacity-40
        "
        style={{
          background: useTransform(
            [springX, springY],
            ([x, y]) =>
              `radial-gradient(circle 800px at calc(50% + ${
                Number(x) * 300
              }px) calc(50% + ${
                Number(y) * 300
              }px), rgba(255,255,255,0.08), transparent 80%)`,
          ),
        }}
      />

      {/* ================= FLOATING BADGES ================= */}

      <ParallaxLayer
        springX={springX}
        springY={springY}
        multiplier={-15}
        className="
          absolute
          top-[20%]
          left-[10%]
          hidden
          lg:flex
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/5
            bg-white/[0.02]
            px-4
            py-2
            backdrop-blur-md
            shadow-2xl
          "
        >
          <MapPin className="h-3.5 w-3.5 text-neutral-400" />

          <span className="text-xs font-medium text-neutral-400">
            Lakhimpur, Assam, India
          </span>
        </div>
      </ParallaxLayer>

      <ParallaxLayer
        springX={springX}
        springY={springY}
        multiplier={20}
        className="
          absolute
          top-[30%]
          right-[12%]
          hidden
          lg:flex
        "
      >
        <div
          className="
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/5
            bg-white/[0.02]
            px-4
            py-2
            backdrop-blur-md
            shadow-2xl
          "
        >
          <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />

          <span className="text-xs font-medium text-neutral-400">
            Available for work
          </span>
        </div>
      </ParallaxLayer>

      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative
          z-10
          flex
          w-full
          max-w-7xl
          flex-col
          items-center
          px-4
          pt-32
          pb-40     /* Increased padding to prevent overlap with scroll indicator */
          md:px-8
        "
      >
        {/* ================= INTRO PILL ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-10
            flex
            items-center
            gap-2
            rounded-full
            border
            border-white/10
            bg-white/5
            px-4
            py-2
            backdrop-blur-md
          "
        >
          <Sparkles className="h-4 w-4 text-neutral-300" />

          <span
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-neutral-300
            "
          >
            Creative Developer
          </span>
        </motion.div>

        {/* ================= HERO HEADLINE ================= */}

        <div
          className="
    pb-6 /* Increased from pb-2 to give the descenders breathing room */
    overflow-visible
    flex
    w-full
    flex-col
    justify-center
  "
        >
          <MaskedText
            text="Engineering"
            delay={0.3}
            className="
      text-[clamp(3.5rem,10vw,8rem)]
      font-black
      tracking-[-0.06em]
      leading-tight /* Changed from leading-none to prevent cropping */
      text-white
    "
          />

          <MaskedText
            text="Digital Beauty."
            delay={0.4}
            className="
      text-[clamp(3.5rem,10vw,8rem)]
      font-black
      tracking-[-0.06em]
      leading-tight /* Changed from leading-none to prevent cropping */
      text-transparent
      bg-clip-text
      bg-gradient-to-r
      from-white
      via-neutral-200
      to-neutral-500
    "
          />
        </div>

        {/* ================= DESCRIPTION ================= */}

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.6,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-14
            max-w-2xl
            text-center
            text-lg
            font-medium
            leading-relaxed
            text-neutral-400
            md:text-xl
          "
        >
          Bridging the gap between award-winning interface design and
          high-performance frontend architecture.
        </motion.p>

        {/* ================= CTA ================= */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            flex
            flex-col
            items-center
            gap-4
            sm:flex-row
          "
        >
          <MagneticWrapper>
            <button
              className="
                group
                relative
                flex
                items-center
                justify-center
                gap-3
                overflow-hidden
                rounded-full
                bg-white
                px-8
                py-4
                text-sm
                font-semibold
                text-black
                transition-transform
                active:scale-95
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
                  from-neutral-200
                  to-white
                "
              />

              <span className="relative z-10">Explore Work</span>

              <ArrowRight
                className="
                  relative
                  z-10
                  h-4
                  w-4
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />
            </button>
          </MagneticWrapper>

          <MagneticWrapper>
            <button
              className="
                group
                relative
                flex
                items-center
                justify-center
                gap-3
                rounded-full
                border
                border-white/10
                bg-white/5
                px-8
                py-4
                text-sm
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                hover:bg-white/10
                active:scale-95
              "
            >
              <span>View Resume</span>
            </button>
          </MagneticWrapper>
        </motion.div>
      </div>

      {/* ================= SCROLL INDICATOR ================= */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          delay: 1.2,
          duration: 1,
        }}
        className="
          absolute
          bottom-8
          left-1/2
          flex
          -translate-x-1/2
          flex-col
          items-center
          gap-2
          z-20
        "
      >
        <span
          className="
            text-[10px]
            font-semibold
            uppercase
            tracking-[0.3em]
            text-neutral-500
          "
        >
          Scroll
        </span>

        <div
          className="
            h-12
            w-[1px]
            bg-gradient-to-b
            from-neutral-500
            to-transparent
          "
        />
      </motion.div>
    </section>
  );
}

/* ================= MASKED TEXT ================= */

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
    // FIX: Increased pb to stop clipping, added negative mb so the lines stay tight
    <div className="overflow-hidden pb-8 -mb-8 pt-2 w-full flex justify-center">
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: "0%" }}
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

/* ================= PARALLAX LAYER ================= */

function ParallaxLayer({
  children,
  className,
  springX,
  springY,
  multiplier,
}: {
  children: React.ReactNode;
  className?: string;
  springX: any;
  springY: any;
  multiplier: number;
}) {
  const x = useTransform(springX, (val: number) => val * multiplier);

  const y = useTransform(springY, (val: number) => val * multiplier);

  return (
    <motion.div className={className} style={{ x, y }}>
      {children}
    </motion.div>
  );
}

/* ================= MAGNETIC WRAPPER ================= */

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
    >
      {children}
    </motion.div>
  );
}
