import {
  GraduationCap,
  Code2,
  Rocket,
  BrainCircuit,
} from "lucide-react";

export const experienceData = {
  badge: "Evolution",

  heading: {
    first: "The journey from",
    second: "logic to systems.",
  },

  experiences: [
    {
      year: "2020 — 2022",

      role: "Computer Science Foundations",

      entity: "Early Programming Journey",

      description:
        "Started learning computer science during higher secondary education, building strong foundations in C++, algorithms, problem solving, and database management systems.",

      icon: Code2,

      gradient:
        "from-blue-500/20 to-purple-500/20",

      tags: [
        "C++",
        "Algorithms",
        "DBMS",
        "Problem Solving",
      ],
    },

    {
      year: "2023 — Present",

      role: "Computer Science Engineering",

      entity: "Systems Foundation",

      description:
        "Expanding expertise in data structures, systems thinking, software architecture, and scalable engineering principles through academic and practical development.",

      icon: GraduationCap,

      gradient:
        "from-emerald-500/20 to-teal-500/20",

      tags: [
        "Data Structures",
        "System Design",
        "Software Engineering",
        "OOP",
      ],
    },

    {
      year: "2023 — Present",

      role: "Full-Stack & Product Engineering",

      entity: "Building Digital Systems",

      description:
        "Transitioned into modern web engineering by building scalable frontend and backend applications with a focus on performance, usability, and clean architecture.",

      icon: Rocket,

      gradient:
        "from-orange-500/20 to-amber-500/20",

      tags: [
        "React",
        "Next.js",
        "Node.js",
        "postgreSQL",
      ],
    },

    {
      year: "2025 — Present",

      role: "Creative Engineering & AI Systems",

      entity: "Engineering the Future",

      description:
        "Exploring machine learning, intelligent systems, and immersive digital experiences by combining software engineering with AI-driven product development.",

      icon: BrainCircuit,

      gradient:
        "from-fuchsia-500/20 to-pink-500/20",

      tags: [
        "Machine Learning",
        "AI Systems",
        "Deep Learning",
        "NLP",
      ],
    },
  ],
};