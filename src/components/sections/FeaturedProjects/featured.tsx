"use client";

import React, { useRef } from "react";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";

import { ArrowUpRight, Sparkles, Layers3 } from "lucide-react";

import { FeaturedProjectsData } from "@/app/data/featuredprojectsData";

// Duplicate for infinite marquee

const SCROLL_ITEMS = [
  ...FeaturedProjectsData.projects,
  ...FeaturedProjectsData.projects,
];

export default function FeaturedProjects() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const amount = direction === "left" ? -500 : 500;

    row1Ref.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });

    row2Ref.current?.scrollBy({
      left: amount,
      behavior: "smooth",
    });
  };
  return (
    <section
      id="Projects"
      className="
        relative
        flex
        w-full
        flex-col
        items-center
        overflow-hidden
        bg-[#030303]
        py-32
      "
    >
      {/* Cinematic Noise */}

      <div
        className="
          absolute
          inset-0
          z-0
          opacity-[0.02]
          pointer-events-none
          mix-blend-screen
        "
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")',
        }}
      />

      {/* Header */}

      <div
        className="
          relative
          z-10
          mx-auto
          mb-24
          flex
          max-w-5xl
          flex-col
          items-center
          px-6
          text-center
        "
      >
        <div
          className="
    relative
    z-20
    mb-10
    flex
    items-center
    gap-4
  "
        ></div>
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
          }}
          transition={{
            duration: 0.8,
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
          <Sparkles className="h-4 w-4 text-neutral-400" />

          <span
            className="
              text-xs
              font-semibold
              uppercase
              tracking-[0.2em]
              text-neutral-300
            "
          >
            {FeaturedProjectsData.badge}
          </span>
        </motion.div>

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
          }}
          transition={{
            duration: 0.8,
            delay: 0.1,
          }}
          className="
            text-4xl
            font-bold
            leading-[1.05]
            tracking-tighter
            text-white
            md:text-6xl
            lg:text-7xl
          "
        >
          {FeaturedProjectsData.heading.first}

          <br />

          <span
            className="
              bg-gradient-to-r
              from-neutral-300
              to-neutral-600
              bg-clip-text
              text-transparent
            "
          >
            {FeaturedProjectsData.heading.second}
          </span>
        </motion.h2>
      </div>

      {/* Marquee */}

      <div
        className="
          mask-edges
          relative
          z-10
          w-full
          pb-12
        "
      >
        <div
          className="
            track-container
            flex
            w-full
            flex-col
            gap-6
          "
        >
          {/* Row 1 */}

          <div
            className="
              pause-on-hover
              flex
              w-max
              animate-marquee
            "
          >
            {SCROLL_ITEMS.map((project, idx) => (
              <ProjectCard key={`row1-${idx}`} data={project} />
            ))}
          </div>

          {/* Row 2 */}

          <div
            className="
              pause-on-hover
              ml-[-50vw]
              flex
              w-max
              animate-marquee-reverse
            "
          >
            {SCROLL_ITEMS.map((project, idx) => (
              <ProjectCard key={`row2-${idx}`} data={project} />
            ))}
          </div>
        </div>
      </div>

      {/* Styles */}

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

            @keyframes marquee {
              0% {
                transform: translate3d(0,0,0);
              }

              100% {
                transform: translate3d(-50%,0,0);
              }
            }

            @keyframes marquee-reverse {
              0% {
                transform: translate3d(-50%,0,0);
              }

              100% {
                transform: translate3d(0,0,0);
              }
            }

            .animate-marquee {
              animation: marquee 60s linear infinite;
            }

            .animate-marquee-reverse {
              animation: marquee-reverse 60s linear infinite;
            }

            .track-container:hover .pause-on-hover {
              animation-play-state: paused;
            }

            .track-container:hover .project-card {
              opacity: 0.3;
              filter: blur(4px);
              transform: scale(0.95);

              transition:
                all 0.5s cubic-bezier(
                  0.16,
                  1,
                  0.3,
                  1
                );
            }

            .track-container .project-card:hover {
              opacity: 1;
              filter: blur(0px);
              transform: scale(1.02);
              z-index: 20;

              border-color:
                rgba(255,255,255,0.2);

              box-shadow:
                0 20px 40px -10px rgba(0,0,0,0.8),
                inset 0 1px 0 rgba(255,255,255,0.2);
            }

            .project-card {
              transition:
                all 0.5s cubic-bezier(
                  0.16,
                  1,
                  0.3,
                  1
                );
            }
          `,
        }}
      />
    </section>
  );
}

// ======================================================
// Types
// ======================================================

interface ProjectData {
  title: string;
  category: string;
  description: string;
  tech: string[];
  image: string;
}

// ======================================================
// Project Card
// ======================================================

function ProjectCard({ data }: { data: ProjectData }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div
      onMouseMove={handleMouseMove}
      className="
        project-card
        relative
        mx-3
        w-[320px]
        shrink-0
        overflow-hidden
        rounded-3xl
        border
        border-white/5
        bg-white/[0.03]
        md:w-[400px]
      "
    >
      {/* Image */}

      <div
        className="
          relative
          h-[200px]
          overflow-hidden
        "
      >
        <img
          src={data.image}
          alt={data.title}
          className="
            h-full
            w-full
            object-cover
          "
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/20
            to-transparent
          "
        />
      </div>

      {/* Mouse Spotlight */}

      <motion.div
        className="
          pointer-events-none
          absolute
          -inset-px
          z-0
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
                rgba(255,255,255,0.08),
                transparent 40%
              )
            `,
        }}
      />

      {/* Content */}

      <div
        className="
          relative
          z-10
          p-8
        "
      >
        <div
          className="
            mb-5
            flex
            items-center
            justify-between
          "
        >
          <div
            className="
              flex
              items-center
              gap-2
            "
          >
            <Layers3 className="h-4 w-4 text-neutral-400" />

            <span
              className="
                text-xs
                font-semibold
                uppercase
                tracking-[0.2em]
                text-neutral-500
              "
            >
              {data.category}
            </span>
          </div>

          <ArrowUpRight className="h-5 w-5 text-neutral-500" />
        </div>

        <h3
          className="
            mb-4
            text-3xl
            font-bold
            tracking-tight
            text-white
          "
        >
          {data.title}
        </h3>

        <p
          className="
            mb-6
            leading-relaxed
            text-neutral-400
          "
        >
          {data.description}
        </p>

        <div
          className="
            flex
            flex-wrap
            gap-2
          "
        >
          {data.tech.map((item) => (
            <span
              key={item}
              className="
                rounded-full
                border
                border-white/10
                bg-white/[0.03]
                px-3
                py-1
                text-xs
                text-neutral-300
              "
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
