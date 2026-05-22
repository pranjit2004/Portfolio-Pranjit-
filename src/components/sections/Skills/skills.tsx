"use client";

import React, { useRef, useState } from "react";

import {
  motion,
  useScroll,
  useTransform,
  useMotionTemplate,
  useMotionValue,
} from "framer-motion";

import { Code2 } from "lucide-react";

import { skillsData } from "@/app/data/skillsData";

// ======================================================
// Types
// ======================================================

interface Pillar {
  title: string;
  description: string;
  icon: React.ElementType;
  tech: string[];
}

// ======================================================
// Main Component
// ======================================================

export default function Skills() {
  const containerRef = useRef<HTMLDivElement>(null);

  const [hoveredPillar, setHoveredPillar] =
    useState<number | null>(null);

  // Background parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["-10%", "10%"],
  );

  return (
    <section
      ref={containerRef}
      id="skills"
      className="
        relative
        flex
        min-h-screen
        w-full
        items-center
        justify-center
        overflow-hidden
        bg-[#030303]
        py-32
      "
    >
      {/* Ambient Background */}

      <motion.div
        style={{ y: bgY }}
        className="
          pointer-events-none
          absolute
          inset-0
          z-0
          flex
          items-center
          justify-center
          opacity-40
        "
      >
        <div
          className="
            h-[80vw]
            w-[80vw]
            max-h-[1000px]
            max-w-[1000px]
            rounded-full
            bg-white/[0.02]
            blur-[120px]
          "
        />
      </motion.div>

      <div
        className="
          relative
          z-10
          mx-auto
          w-full
          max-w-7xl
          px-6
          md:px-8
        "
      >
        {/* Header */}

        <div className="mb-24 flex flex-col items-center text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
            }}
            className="
              mb-8
              flex
              items-center
              gap-2
              rounded-full
              border
              border-white/10
              bg-white/[0.03]
              px-4
              py-2
              backdrop-blur-md
            "
          >
            <Code2 className="h-4 w-4 text-neutral-400" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-neutral-300
              "
            >
              {skillsData.badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              duration: 0.8,
              delay: 0.1,
              ease: "easeOut",
            }}
            className="
              max-w-3xl
              text-4xl
              font-bold
              leading-[1.1]
              tracking-tighter
              text-white
              md:text-6xl
              lg:text-7xl
            "
          >
            {skillsData.heading.first}

            <br className="hidden md:block" />

            <span
              className="
                bg-gradient-to-r
                from-neutral-300
                to-neutral-600
                bg-clip-text
                text-transparent
              "
            >
              {" "}
              {skillsData.heading.second}
            </span>
          </motion.h2>
        </div>

        {/* Pillars Grid */}

        <div
          className="
            mb-24
            grid
            grid-cols-1
            gap-6
            md:grid-cols-3
          "
          onMouseLeave={() => setHoveredPillar(null)}
        >
          {skillsData.pillars.map((pillar, index) => {
            const isHovered = hoveredPillar === index;

            const isDimmed =
              hoveredPillar !== null && !isHovered;

            return (
              <PillarCard
                key={pillar.title}
                pillar={pillar}
                isHovered={isHovered}
                isDimmed={isDimmed}
                onMouseEnter={() =>
                  setHoveredPillar(index)
                }
                index={index}
              />
            );
          })}
        </div>

        {/* Infinite Streams */}

        <div
          className="
            mask-edges
            relative
            flex
            w-full
            flex-col
            gap-4
          "
        >
          {/* Background Text */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2
              z-10
              -translate-x-1/2
              -translate-y-1/2
            "
          >
            <span
              className="
                whitespace-nowrap
                text-[10vw]
                font-black
                uppercase
                tracking-tighter
                text-white/[0.03]
              "
            >
              {skillsData.backgroundText}
            </span>
          </div>

          <InfiniteStream
            items={skillsData.streams.first}
            direction={1}
            speed={40}
          />

          <InfiniteStream
            items={skillsData.streams.second}
            direction={-1}
            speed={45}
          />
        </div>
      </div>

      {/* Global Styles */}

      <style
        dangerouslySetInnerHTML={{
          __html: `
            .mask-edges {
              mask-image: linear-gradient(
                to right,
                transparent,
                black 15%,
                black 85%,
                transparent
              );

              -webkit-mask-image: linear-gradient(
                to right,
                transparent,
                black 15%,
                black 85%,
                transparent
              );
            }

            .bg-grid-pattern {
              background-size: 30px 30px;

              background-image:
                linear-gradient(
                  to right,
                  rgba(255,255,255,0.05) 1px,
                  transparent 1px
                ),
                linear-gradient(
                  to bottom,
                  rgba(255,255,255,0.05) 1px,
                  transparent 1px
                );
            }
          `,
        }}
      />
    </section>
  );
}

// ======================================================
// Pillar Card
// ======================================================

interface PillarProps {
  pillar: Pillar;
  isHovered: boolean;
  isDimmed: boolean;
  onMouseEnter: () => void;
  index: number;
}

function PillarCard({
  pillar,
  isHovered,
  isDimmed,
  onMouseEnter,
  index,
}: PillarProps) {

  const Icon = pillar.icon;

  // Mouse glow position

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove(
    e: React.MouseEvent<HTMLDivElement>,
  ) {
    const { currentTarget, clientX, clientY } = e;

    const { left, top } =
      currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.7,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      animate={{
        scale: isHovered ? 1.02 : isDimmed ? 0.98 : 1,
        opacity: isDimmed ? 0.4 : 1,
      }}
      className="
        group
        relative
        h-full
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.02]
        p-8
        shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]
        transition-colors
        hover:border-white/20
        hover:bg-white/[0.04]
      "
    >
      {/* Mouse Glow */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -inset-px
          rounded-3xl
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          background: useMotionTemplate`
            radial-gradient(
              400px circle at ${mouseX}px ${mouseY}px,
              rgba(255,255,255,0.1),
              transparent 40%
            )
          `,
        }}
      />

      {/* Hidden Grid */}

      <motion.div
        className="
          bg-grid-pattern
          pointer-events-none
          absolute
          inset-0
          z-0
          opacity-0
          transition-opacity
          duration-500
          group-hover:opacity-100
        "
        style={{
          maskImage:
            useMotionTemplate`
              radial-gradient(
                300px circle at ${mouseX}px ${mouseY}px,
                black,
                transparent
              )
            ` as any,

          WebkitMaskImage:
            useMotionTemplate`
              radial-gradient(
                300px circle at ${mouseX}px ${mouseY}px,
                black,
                transparent
              )
            ` as any,
        }}
      />

      <div className="relative z-10 flex h-full flex-col">

        {/* Icon */}

        <div
          className="
            mb-8
            flex
            h-12
            w-12
            items-center
            justify-center
            rounded-2xl
            border
            border-white/10
            bg-white/10
            shadow-inner
          "
        >
          <Icon className="h-6 w-6 text-neutral-300" />
        </div>

        {/* Title */}

        <h3
          className="
            mb-3
            text-2xl
            font-semibold
            tracking-tight
            text-white
          "
        >
          {pillar.title}
        </h3>

        {/* Description */}

        <p
          className="
            mb-10
            flex-grow
            font-medium
            leading-relaxed
            text-neutral-400
          "
        >
          {pillar.description}
        </p>

        {/* Tech Stack */}

        <div className="mt-auto flex flex-wrap gap-2">
          {pillar.tech.map((tech) => (
            <span
              key={tech}
              className="
                rounded-md
                border
                border-white/5
                bg-black/50
                px-3
                py-1.5
                text-xs
                font-semibold
                text-neutral-300
                backdrop-blur-sm
              "
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// ======================================================
// Infinite Stream
// ======================================================

interface InfiniteStreamProps {
  items: string[];
  direction: 1 | -1;
  speed: number;
}

function InfiniteStream({
  items,
  direction,
  speed,
}: InfiniteStreamProps) {

  return (
    <div
      className="
        relative
        z-20
        flex
        w-full
        overflow-x-hidden
      "
    >
      <motion.div
        animate={{
          x:
            direction === 1
              ? (["0%", "-50%"] as any)
              : (["-50%", "0%"] as any),
        }}
        transition={{
          duration: speed,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex whitespace-nowrap py-2"
      >
        {[...items, ...items].map((item, idx) => (
          <div
            key={`${item}-${idx}`}
            className="
              mr-4
              flex
              items-center
              gap-3
              rounded-2xl
              border
              border-white/5
              bg-white/[0.01]
              px-6
              py-4
              shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]
              backdrop-blur-md
              transition-colors
              hover:border-white/10
              hover:bg-white/[0.05]
            "
          >
            <div className="h-2 w-2 rounded-full bg-neutral-600" />

            <span
              className="
                text-sm
                font-semibold
                tracking-wide
                text-neutral-400
              "
            >
              {item}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}