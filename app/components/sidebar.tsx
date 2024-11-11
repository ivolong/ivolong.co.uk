"use client";

import Link from "next/link";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";

const navigationItems = [
  {
    title: "Home",
    href: "/",
    icon: (
      <svg
        viewBox="0 0 1024 1024"
        fill="currentColor"
        height="1em"
        width="1em"
        className="mr-2 h-4 w-4"
      >
        <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 00-44.4 0L77.5 505a63.9 63.9 0 00-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0018.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z" />
      </svg>
    ),
  },
  {
    title: "Experience",
    href: "/experience",
    icon: (
      <svg
        fill="none"
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        className="mr-2 h-4 w-4"
      >
        <path
          fill="currentColor"
          fillRule="evenodd"
          d="M17 7a3 3 0 00-3-3h-4a3 3 0 00-3 3H6a3 3 0 00-3 3v8a3 3 0 003 3h12a3 3 0 003-3v-8a3 3 0 00-3-3h-1zm-3-1h-4a1 1 0 00-1 1h6a1 1 0 00-1-1zM6 9h12a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1v-8a1 1 0 011-1z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    title: "Education",
    href: "/education",
    icon: (
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        viewBox="0 0 24 24"
        height="1em"
        width="1em"
        className="mr-2 h-4 w-4"
      >
        <path stroke="none" d="M0 0h24v24H0z" />
        <path d="M22 9L12 5 2 9l10 4 10-4v6" />
        <path d="M6 10.6V16a6 3 0 0012 0v-5.4" />
      </svg>
    ),
  },
  {
    title: "Projects",
    href: "/projects",
    icon: (
      <svg
        fill="currentColor"
        viewBox="0 0 16 16"
        height="1em"
        width="1em"
        className="mr-2 h-4 w-4"
      >
        <path d="M7.752.066a.5.5 0 01.496 0l3.75 2.143a.5.5 0 01.252.434v3.995l3.498 2A.5.5 0 0116 9.07v4.286a.5.5 0 01-.252.434l-3.75 2.143a.5.5 0 01-.496 0l-3.502-2-3.502 2.001a.5.5 0 01-.496 0l-3.75-2.143A.5.5 0 010 13.357V9.071a.5.5 0 01.252-.434L3.75 6.638V2.643a.5.5 0 01.252-.434L7.752.066zM4.25 7.504L1.508 9.071l2.742 1.567 2.742-1.567L4.25 7.504zM7.5 9.933l-2.75 1.571v3.134l2.75-1.571V9.933zm1 3.134l2.75 1.571v-3.134L8.5 9.933v3.134zm.508-3.996l2.742 1.567 2.742-1.567-2.742-1.567-2.742 1.567zm2.242-2.433V3.504L8.5 5.076V8.21l2.75-1.572zM7.5 8.21V5.076L4.75 3.504v3.134L7.5 8.21zM5.258 2.643L8 4.21l2.742-1.567L8 1.076 5.258 2.643zM15 9.933l-2.75 1.571v3.134L15 13.067V9.933zM3.75 14.638v-3.134L1 9.933v3.134l2.75 1.571z" />
      </svg>
    ),
  },
];

export function Sidebar({ className }: React.HTMLAttributes<HTMLDivElement>) {
  const pathname = usePathname();

  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
            Ivo Long
          </h2>
          <div className="space-y-1">
            {navigationItems.map((item) => (
              <Link href={item.href} key={item.href}>
                <Button
                  variant={pathname === item.href ? "secondary" : "ghost"}
                  className="w-full justify-start"
                >
                  {item.icon} {item.title}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
