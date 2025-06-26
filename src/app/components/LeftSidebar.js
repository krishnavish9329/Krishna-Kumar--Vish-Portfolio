import React from "react";
import Link from "next/link";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Instagram,
  FileText,
  ExternalLink,
} from "lucide-react";

export default function LeftSidebar() {
  const socialLinks = [
    {
      href: "https://github.com",
      icon: Github,
      label: "GitHub",
    },
    {
      href: "https://twitter.com",
      icon: Twitter,
      label: "Twitter",
    },
    {
      href: "https://linkedin.com",
      icon: Linkedin,
      label: "LinkedIn",
    },
    {
      href: "mailto:contact@example.com",
      icon: Mail,
      label: "Email",
    },
    {
      href: "https://instagram.com",
      icon: Instagram,
      label: "Instagram",
    },
    {
      href: "/resume",
      icon: FileText,
      label: "Resume",
    },
    {
      href: "https://portfolio.com",
      icon: ExternalLink,
      label: "Portfolio",
    },
  ];

  return (
    <div className="fixed left-0 top-0 h-[130%] w-20 bg-slate-900 z-40 flex flex-col items-center justify-center">
      <div className="flex flex-col items-center space-y-6">
        {socialLinks.map((link, index) => {
          const IconComponent = link.icon;
          const isExternal = link.href.startsWith("http") || link.href.startsWith("mailto:");

          return (
            <Link
              key={index}
              href={link.href}
              target={isExternal ? "_blank" : "_self"}
              rel={isExternal ? "noopener noreferrer" : undefined}
              className="text-gray-400 hover:text-teal-400 transition-colors duration-200"
              aria-label={link.label}
            >
              <IconComponent className="w-5 h-5" />
            </Link>
          );
        })}
      </div>

      {/* Vertical Line */}
      <div className="mt-8 w-px h-24 bg-gray-600"></div>
    </div>
  );
}
