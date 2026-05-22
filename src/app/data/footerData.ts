import {
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
  FaDiscord,
} from "react-icons/fa";
import Link from "next/link";

export const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Expertise", href: "#skills" },
  { name: "Projects", href: "#Projects" },
  
  
  { name: "Contact", href: "#contact" },
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
    href: "https://github.com/pranjit2004",
  },
  {
    name: "LinkedIn",
    target: "_blank",
    icon: FaLinkedinIn,
    href: "https://www.linkedin.com/in/pranjit-hazarika-92297b357?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  },
  {
    name: "Discord",
    icon: FaDiscord,
    href: "#",
  },
];