"use client";

import type { LucideIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

interface NavProps {
  isCollapsed: boolean;
  links: {
    title: string;
    href: string;
    icon: LucideIcon;
  }[];
}

export default function Nav({ isCollapsed, links }: NavProps) {
  const pathname = usePathname();

  return (
    <nav className="grid gap-1 p-2">
      {links.map((link) =>
        isCollapsed ? (
          <Link
            key={link.title}
            href={link.href}
            className={cn(
              buttonVariants({
                variant: link.href === pathname ? "default" : "ghost",
                size: "icon",
              }),
            )}
          >
            <link.icon />
          </Link>
        ) : (
          <Link
            key={link.title}
            href={link.href}
            className={cn(
              buttonVariants({
                variant: link.href === pathname ? "default" : "ghost",
                size: "default",
              }),
            )}
          >
            <div className="flex flex-1 items-center">
              <link.icon className="mr-3" />
              <div className="flex-1 text-left font-medium">{link.title}</div>
              <span
                className={cn(
                  link.href === pathname ? "text-white" : "text-gray-500",
                )}
              >
                6
              </span>
            </div>
          </Link>
        ),
      )}
    </nav>
  );
}
