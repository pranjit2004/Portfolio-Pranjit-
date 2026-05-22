"use client";

import React, { useRef } from "react";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { Quote, Star, Sparkles } from "lucide-react";

// --- Data & Configuration ---
const TESTIMONIALS = [
  {
    name: "Sarah Jenkins",
    role: "Chief Technology Officer, Voxel",
    text: "An absolute masterclass in frontend architecture. They didn't just build a website; they engineered an experience. The physics and fluid motion are unmatched.",
    avatarGradient: "from-blue-500 to-cyan-400"
  },
  {
    name: "Marcus Lin",
    role: "Lead Designer, Stripe",
    text: "Bridged the gap between our design team's wild Figma concepts and a buttery-smooth reality. The obsessive attention to micro-interactions is what sets them apart.",
    avatarGradient: "from-purple-500 to-indigo-500"
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Aura UX",
    text: "Working with them felt like collaborating with an entire product agency. They possess a rare hybrid of deep technical logic and raw cinematic creativity.",
    avatarGradient: "from-emerald-400 to-teal-500"
  },
  {
    name: "David Chen",
    role: "VP of Engineering, Nexus",
    text: "Our conversion rates skyrocketed after the rebuild. The code is immaculate, highly modular, and the site performs flawlessly even under heavy WebGL loads.",
    avatarGradient: "from-orange-500 to-rose-500"
  },
  {
    name: "Aisha Patel",
    role: "Creative Director, Lumina",
    text: "They possess an intrinsic understanding of digital luxury. Every spacing detail, every easing curve, and every hover state was executed with surgical precision.",
    avatarGradient: "from-pink-500 to-fuchsia-500"
  }
];

// Duplicate the array to ensure a seamless infinite scroll loop
const SCROLL_ITEMS = [...TESTIMONIALS, ...TESTIMONIALS];

export default function Testimonials() {
  return (
    <section className="relative w-full py-32 bg-[#030303] overflow-hidden flex flex-col items-center">
      
      {/* Cinematic Background Noise */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.02] pointer-events-none mix-blend-screen"
        style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E")' }} 
      />

      {/* Header Section */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 mb-24 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/[0.03] backdrop-blur-md"
        >
          <Sparkles className="w-4 h-4 text-neutral-400" />
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-neutral-300">
            Social Proof
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter leading-[1.1] mb-6"
        >
          Don't just take <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-600">
            my word for it.
          </span>
        </motion.h2>
      </div>

      {/* The Interactive Marquee Container 
        Using a massive CSS mask to fade the left and right edges into the void.
      */}
      <div className="relative z-10 w-full mask-edges pb-12">
        <div className="track-container flex flex-col gap-6 w-full">
          
          {/* Row 1 - Scrolling Left */}
          <div className="flex w-max animate-marquee pause-on-hover">
            {SCROLL_ITEMS.map((testimonial, idx) => (
              <TestimonialCard key={`row1-${idx}`} data={testimonial} />
            ))}
          </div>

          {/* Row 2 - Scrolling Right (Staggered offset) */}
          <div className="flex w-max animate-marquee-reverse pause-on-hover ml-[-50vw]">
            {SCROLL_ITEMS.map((testimonial, idx) => (
              <TestimonialCard key={`row2-${idx}`} data={testimonial} />
            ))}
          </div>

        </div>
      </div>

      {/* Global CSS for ultra-smooth animations, masking, and the Depth-of-Field hover effect */}
      <style dangerouslySetInnerHTML={{__html: `
        /* Fades the left and right edges of the marquee container */
        .mask-edges {
          mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent);
        }

        /* 120fps Hardware Accelerated Marquee Animations */
        @keyframes marquee {
          0% { transform: translate3d(0, 0, 0); }
          100% { transform: translate3d(-50%, 0, 0); }
        }
        @keyframes marquee-reverse {
          0% { transform: translate3d(-50%, 0, 0); }
          100% { transform: translate3d(0, 0, 0); }
        }

        .animate-marquee {
          animation: marquee 60s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 60s linear infinite;
        }

        /* Pause scroll on hover */
        .track-container:hover .pause-on-hover {
          animation-play-state: paused;
        }

        /* --- THE DEPTH OF FIELD PHYSICS --- */
        /* 1. When hovering the container, push ALL cards back (blur, dim, shrink) */
        .track-container:hover .testimonial-card {
          opacity: 0.3;
          filter: blur(4px);
          transform: scale(0.95);
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
        
        /* 2. Overwrite the specific hovered card to pull it into sharp forward focus */
        .track-container .testimonial-card:hover {
          opacity: 1;
          filter: blur(0px);
          transform: scale(1.02);
          z-index: 20;
          border-color: rgba(255, 255, 255, 0.2);
          box-shadow: 0 20px 40px -10px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.2);
        }

        /* Default smooth transition for cards */
        .testimonial-card {
          transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }
      `}} />
    </section>
  );
}

// --- Sub-component: Individual Glass Testimonial Card ---

interface TestimonialData {
  name: string;
  role: string;
  text: string;
  avatarGradient: string;
}

function TestimonialCard({ data }: { data: TestimonialData }) {
  // Setup for the Mouse Spotlight effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  function handleMouseMove({ currentTarget, clientX, clientY }: React.MouseEvent) {
    const { left, top } = currentTarget.getBoundingClientRect();
    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div 
      onMouseMove={handleMouseMove}
      className="testimonial-card relative w-[350px] md:w-[450px] shrink-0 rounded-3xl bg-white/[0.02] border border-white/5 p-8 md:p-10 mx-3 overflow-hidden group shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
    >
      {/* The Dynamic Mouse Spotlight 
        Follows the cursor inside the card to illuminate the background and borders
      */}
      <motion.div
        className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
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

      {/* Inner Content - Z-10 keeps it above the spotlight */}
      <div className="relative z-10 flex flex-col h-full">
        
        {/* Top: Icon & Stars */}
        <div className="flex items-center justify-between mb-8">
          <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shadow-inner">
            <Quote className="w-4 h-4 text-neutral-400" />
          </div>
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-neutral-600 text-neutral-600" />
            ))}
          </div>
        </div>

        {/* Middle: Editorial Quote */}
        <p className="text-lg md:text-xl text-neutral-300 font-medium leading-relaxed mb-10 flex-grow tracking-tight">
          "{data.text}"
        </p>

        {/* Bottom: Reviewer Identity */}
        <div className="flex items-center gap-4 mt-auto pt-6 border-t border-white/5">
          {/* Abstract Gradient Avatar */}
          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${data.avatarGradient} shadow-inner shrink-0`} />
          
          <div className="flex flex-col">
            <span className="text-white font-bold tracking-tight">
              {data.name}
            </span>
            <span className="text-xs text-neutral-500 uppercase tracking-widest font-semibold mt-1">
              {data.role}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}