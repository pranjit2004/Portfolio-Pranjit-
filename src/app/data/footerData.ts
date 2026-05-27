import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import Link from "next/link";

export const NAV_LINKS1 = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#skills" },
  { name: "Projects", href: "#Projects" },
  { name: "Contact", href: "#contact" },
];

export const NAV_LINKS2 = [
  { name: "Elevate E-commerce", href: "https://elevate-ecommerce-project2.vercel.app/" },
];

export const SOCIAL_LINKS = [
  {
    name: "Twitter",
    icon: FaTwitter,
    href: "#",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    href: "#",
  },
  {
    name: "LinkedIn",
    target: "_blank",
    icon: FaLinkedinIn,
    href: "#",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    href: "#",
  },
];