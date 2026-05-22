"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import {
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import Link from "next/link";

// ======================================================
// Navigation Links
// ======================================================

const NAV_LINKS = [
  { name: "Work", href: "#work" },
  { name: "Expertise", href: "#expertise" },
  { name: "About", href: "#about" },
  { name: "Journal", href: "#journal" },
];

// ======================================================
// Header
// ======================================================

export default function Header() {
  const { scrollY } = useScroll();

  const [isScrolled, setIsScrolled] =
    useState(false);

  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  const [hoveredIndex, setHoveredIndex] =
    useState<number | null>(null);

  // Scroll Detection
  useMotionValueEvent(
    scrollY,
    "change",
    (latest) => {
      setIsScrolled(latest > 80);
    }
  );

  return (
    <>
      {/* ====================================================== */}
      {/* HEADER */}
      {/* ====================================================== */}

      <motion.header
        initial={{ y: -120, opacity: 0 }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          flex
          justify-center
          pointer-events-none

          transition-[padding]
          duration-700
          ease-[cubic-bezier(0.22,1,0.36,1)]

          ${
            isScrolled
              ? "px-0 pt-0"
              : "px-4 pt-6 md:px-8"
          }
        `}
      >
        {/* ====================================================== */}
        {/* NAVBAR */}
        {/* ====================================================== */}

        <motion.nav
          layout
          transition={{
            type: "spring",
            stiffness: 70,
            damping: 18,
            mass: 0.8,
          }}
          className={`
            pointer-events-auto
            relative
            flex
            items-center
            justify-between
            overflow-hidden

            border
            border-white/10

            bg-black/30
            backdrop-blur-2xl

            shadow-[0_8px_40px_rgba(0,0,0,0.45)]

            before:absolute
            before:inset-0
            before:pointer-events-none
            before:bg-gradient-to-b
            before:from-white/[0.08]
            before:to-transparent

            transition-[width,border-radius,padding,background]
            duration-700
            ease-[cubic-bezier(0.22,1,0.36,1)]

            ${
              isScrolled
                ? `
                  w-screen
                  rounded-none
                  border-x-0
                  border-t-0
                  px-6
                  py-3
                  md:px-10
                `
                : `
                  w-[94vw]
                  max-w-7xl
                  rounded-[28px]
                  px-6
                  py-4
                  md:px-8
                `
            }
          `}
        >
          {/* Ambient Glow */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/[0.02] via-transparent to-white/[0.02]" />

          {/* ====================================================== */}
          {/* LOGO */}
          {/* ====================================================== */}

          <Link
            href="/"
            className="group relative z-10 flex items-center gap-3"
          >
            <motion.div
              whileHover={{
                scale: 1.08,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
              className="
                relative
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-white/10
                bg-white
                shadow-[0_0_25px_rgba(255,255,255,0.12)]
              "
            >
              <motion.div
                layoutId="logo-dot"
                className="h-2.5 w-2.5 rounded-full bg-black"
              />
            </motion.div>

            <div className="flex flex-col leading-none">
              <span className="text-lg font-semibold tracking-tight text-white">
                Pranjit
              </span>

              <span className="text-[11px] uppercase tracking-[0.2em] text-neutral-500">
                Creative Developer
              </span>
            </div>
          </Link>

          {/* ====================================================== */}
          {/* DESKTOP NAV */}
          {/* ====================================================== */}

          <div className="relative z-10 hidden items-center gap-2 md:flex">
            {NAV_LINKS.map((link, index) => (
              <Link
                key={link.name}
                href={link.href}
                onMouseEnter={() =>
                  setHoveredIndex(index)
                }
                onMouseLeave={() =>
                  setHoveredIndex(null)
                }
                className="
                  relative
                  px-5
                  py-3
                  text-sm
                  font-medium
                  tracking-wide
                "
              >
                {/* Hover Pill */}
                {hoveredIndex === index && (
                  <motion.div
                    layoutId="navbar-pill"
                    className="
                      absolute
                      inset-0
                      rounded-full
                      border
                      border-white/10
                      bg-white/[0.06]
                      backdrop-blur-xl
                    "
                    transition={{
                      type: "spring",
                      stiffness: 350,
                      damping: 30,
                    }}
                  />
                )}

                <span
                  className={`
                    relative
                    z-10
                    transition-colors
                    duration-300

                    ${
                      hoveredIndex === index
                        ? "text-white"
                        : "text-neutral-400"
                    }
                  `}
                >
                  {link.name}
                </span>
              </Link>
            ))}
          </div>

          {/* ====================================================== */}
          {/* CTA */}
          {/* ====================================================== */}

          <div className="relative z-10 hidden md:block">
            <MagneticButton>
              <Link
                href="#contact"
                className="
                  group
                  relative
                  flex
                  items-center
                  gap-2
                  overflow-hidden
                  rounded-full
                  bg-white
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-black
                  transition-all
                  duration-300
                  hover:scale-[1.02]
                  active:scale-[0.98]
                "
              >
                {/* Hover Gradient */}
                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-neutral-100
                    via-white
                    to-neutral-200
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <span className="relative z-10">
                  Start a project
                </span>

                <ArrowUpRight
                  className="
                    relative
                    z-10
                    h-4
                    w-4
                    transition-transform
                    duration-300
                    group-hover:-translate-y-0.5
                    group-hover:translate-x-0.5
                  "
                />
              </Link>
            </MagneticButton>
          </div>

          {/* ====================================================== */}
          {/* MOBILE BUTTON */}
          {/* ====================================================== */}

          <button
            onClick={() =>
              setIsMobileMenuOpen(true)
            }
            className="
              relative
              z-10
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              p-2.5
              text-neutral-300
              transition-colors
              hover:text-white
              md:hidden
            "
          >
            <Menu className="h-5 w-5" />
          </button>
        </motion.nav>
      </motion.header>

      {/* ====================================================== */}
      {/* MOBILE MENU */}
      {/* ====================================================== */}

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/95
              backdrop-blur-3xl
            "
          >
            {/* Top */}
            <div className="flex items-center justify-between px-6 pt-6">
              <span className="text-xl font-semibold text-white">
                Studio
              </span>

              <button
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-3
                  text-neutral-300
                "
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Links */}
            <nav className="mt-24 flex flex-col px-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{
                    opacity: 0,
                    x: -30,
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    delay: i * 0.08,
                    duration: 0.6,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Link
                    href={link.href}
                    onClick={() =>
                      setIsMobileMenuOpen(false)
                    }
                    className="
                      block
                      border-b
                      border-white/5
                      py-6
                      text-4xl
                      font-medium
                      tracking-tight
                      text-neutral-300
                      transition-colors
                      hover:text-white
                    "
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Bottom CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="
                absolute
                bottom-8
                left-6
                right-6
              "
            >
              <Link
                href="#contact"
                onClick={() =>
                  setIsMobileMenuOpen(false)
                }
                className="
                  flex
                  items-center
                  justify-center
                  gap-2
                  rounded-full
                  bg-white
                  py-4
                  text-lg
                  font-semibold
                  text-black
                "
              >
                Start a project

                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

/* ====================================================== */
/* MAGNETIC BUTTON */
/* ====================================================== */

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
      width,
      height,
      left,
      top,
    } = ref.current!.getBoundingClientRect();

    const x =
      clientX - (left + width / 2);

    const y =
      clientY - (top + height / 2);

    setPosition({
      x: x * 0.15,
      y: y * 0.15,
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