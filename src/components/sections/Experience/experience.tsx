"use client";

import React, { useRef } from "react";

import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";

import { Sparkles } from "lucide-react";

import { experienceData } from "@/app/data/experienceData";

export default function Experience() {
  const containerRef =
    useRef<HTMLDivElement>(null);

  // Track overall scroll progress

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Smooth physics spring

  const smoothProgress = useSpring(
    scrollYProgress,
    {
      stiffness: 100,
      damping: 20,
      mass: 0.5,
    },
  );

  return (
    <section
      id="experience"
      className="
        relative
        w-full
        bg-[#030303]
      "
    >
      {/* Background Texture */}

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
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* ====================================================== */}
      {/* HEADER */}
      {/* ====================================================== */}

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          px-6
          pt-32
          pb-20
          text-center
          md:px-8
        "
      >
        {/* Top Pill */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            mb-6
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
              tracking-[0.2em]
              text-neutral-400
            "
          >
            {experienceData.badge}
          </span>
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-100px",
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            max-w-5xl
            text-center
            text-4xl
            font-bold
            tracking-tighter
            leading-[1.05]
            text-white
            md:text-6xl
            lg:text-7xl
          "
        >
          {experienceData.heading.first}

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
            {experienceData.heading.second}
          </span>
        </motion.h2>
      </div>

      {/* ====================================================== */}
      {/* STACKING CARDS WRAPPER */}
      {/* ====================================================== */}

      <div
        ref={containerRef}
        className="
          relative
          w-full
          pb-32
        "
        style={{
          height: `${experienceData.experiences.length * 100}vh`,
        }}
      >
        <div
          className="
            sticky
            top-0
            flex
            h-screen
            w-full
            items-center
            justify-center
            overflow-hidden
          "
        >
          <div
            className="
              relative
              flex
              h-full
              w-full
              max-w-5xl
              items-center
              px-4
              md:px-8
            "
          >
            {experienceData.experiences.map(
              (exp, index) => {
                const targetScale =
                  1 -
                  ((experienceData.experiences.length -
                    index) *
                    0.04);

                const range = [
                  index *
                    (1 /
                      experienceData.experiences.length),

                  (index + 1) *
                    (1 /
                      experienceData.experiences.length),
                ];

                return (
                  <StackedCard
                    key={index}
                    experience={exp}
                    index={index}
                    progress={smoothProgress}
                    range={range}
                    targetScale={
                      targetScale
                    }
                    total={
                      experienceData.experiences.length
                    }
                  />
                );
              },
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// ======================================================
// STACKED CARD
// ======================================================

interface StackedCardProps {
  experience:
    typeof experienceData.experiences[0];

  index: number;

  progress: any;

  range: number[];

  targetScale: number;

  total: number;
}

function StackedCard({
  experience,
  index,
  progress,
  range,
  targetScale,
  total,
}: StackedCardProps) {

  const Icon = experience.icon;

  const step = 1 / total;

  const startOfNextCard =
    index * step;

  const endOfNextCard =
    (index + 1) * step;

  const delayedRange = [
    startOfNextCard +
      step * 0.5,

    endOfNextCard,
  ];

  // Motion transforms

  const scale = useTransform(
    progress,
    range,
    [1, targetScale],
  );

  const opacity = useTransform(
    progress,
    delayedRange,
    [1, 0],
  );

  const blur = useTransform(
    progress,
    delayedRange,
    ["blur(0px)", "blur(24px)"],
  );

  const yRange = [
    (index - 1) * step,
    index * step,
  ];

  const yOffset = useTransform(
    progress,
    yRange,
    ["150%", "0%"],
  );

  return (
    <motion.div
      style={{
        scale,
        opacity,
        filter: blur,

        y:
          index === 0
            ? "0%"
            : yOffset,

        zIndex: index * 10,
      }}
      className="
        pointer-events-none
        absolute
        top-1/2
        left-4
        right-4
        flex
        -translate-y-1/2
        justify-center
        origin-top
        md:left-8
        md:right-8
      "
    >
      <div
        className="
          group
          relative
          flex
          w-full
          max-w-4xl
          min-h-[400px]
          flex-col
          items-start
          gap-8
          overflow-hidden
          rounded-[2.5rem]
          border
          border-white/10
          bg-[#0A0A0A]/95
          p-8
          backdrop-blur-3xl
          pointer-events-auto
          shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.15)]
          md:min-h-[450px]
          md:flex-row
          md:gap-12
          md:p-12
        "
      >
        {/* Glow */}

        <div
          className={`
            absolute
            top-0
            right-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-gradient-to-br
            ${experience.gradient}
            pointer-events-none
            translate-x-1/3
            -translate-y-1/2
            blur-[120px]
            opacity-50
          `}
        />

        {/* Left Column */}

        <div
          className="
            relative
            z-10
            flex
            w-full
            shrink-0
            flex-col
            gap-6
            md:w-1/3
          "
        >
          <div
            className="
              flex
              h-16
              w-16
              items-center
              justify-center
              rounded-2xl
              border
              border-white/10
              bg-white/[0.05]
              shadow-inner
            "
          >
            <Icon className="h-8 w-8 text-white" />
          </div>

          <div>
            <div
              className="
                mb-2
                font-mono
                text-sm
                uppercase
                tracking-widest
                text-neutral-500
              "
            >
              {experience.year}
            </div>

            <div
              className="
                text-xl
                font-bold
                tracking-tight
                text-white
              "
            >
              {experience.entity}
            </div>
          </div>
        </div>

        {/* Right Column */}

        <div
          className="
            relative
            z-10
            flex
            h-full
            w-full
            flex-col
            justify-between
            md:w-2/3
          "
        >
          <div>
            <h3
              className="
                mb-6
                text-3xl
                font-bold
                tracking-tighter
                text-transparent
                bg-clip-text
                bg-gradient-to-r
                from-white
                to-neutral-400
                md:text-4xl
              "
            >
              {experience.role}
            </h3>

            <p
              className="
                mb-8
                text-lg
                font-medium
                leading-relaxed
                text-neutral-400
              "
            >
              {experience.description}
            </p>
          </div>

          {/* Tags */}

          <div
            className="
              mt-auto
              flex
              flex-wrap
              gap-2
            "
          >
            {experience.tags.map(
              (tag) => (
                <span
                  key={tag}
                  className="
                    rounded-full
                    border
                    border-white/5
                    bg-white/[0.03]
                    px-4
                    py-2
                    text-xs
                    font-semibold
                    text-neutral-300
                    backdrop-blur-md
                  "
                >
                  {tag}
                </span>
              ),
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}