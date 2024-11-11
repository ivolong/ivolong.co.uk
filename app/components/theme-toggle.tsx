"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import {
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export function ThemeToggle() {
  const { setTheme } = useTheme();

  return (
    <MenubarMenu>
      <MenubarTrigger>
        <svg viewBox="0 0 512 512" fill="currentColor" height="1em" width="1em">
          <path
            fill="none"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={32}
            d="M430.11 347.9c-6.6-6.1-16.3-7.6-24.6-9-11.5-1.9-15.9-4-22.6-10-14.3-12.7-14.3-31.1 0-43.8l30.3-26.9c46.4-41 46.4-108.2 0-149.2-34.2-30.1-80.1-45-127.8-45-55.7 0-113.9 20.3-158.8 60.1-83.5 73.8-83.5 194.7 0 268.5 41.5 36.7 97.5 55 152.9 55.4h1.7c55.4 0 110-17.9 148.8-52.4 14.4-12.7 11.99-36.6.1-47.7z"
          />
          <path d="M176 208 A32 32 0 0 1 144 240 A32 32 0 0 1 112 208 A32 32 0 0 1 176 208 z" />
          <path d="M184 311 A32 32 0 0 1 152 343 A32 32 0 0 1 120 311 A32 32 0 0 1 184 311 z" />
          <path d="M256 144 A32 32 0 0 1 224 176 A32 32 0 0 1 192 144 A32 32 0 0 1 256 144 z" />
          <path d="M304 367 A48 48 0 0 1 256 415 A48 48 0 0 1 208 367 A48 48 0 0 1 304 367 z" />
          <path d="M360 144 A32 32 0 0 1 328 176 A32 32 0 0 1 296 144 A32 32 0 0 1 360 144 z" />
        </svg>
      </MenubarTrigger>
      <MenubarContent>
        <MenubarItem onClick={() => setTheme("light")}>Light</MenubarItem>
        <MenubarItem onClick={() => setTheme("dark")}>Dark</MenubarItem>
        <MenubarSeparator />
        <MenubarItem onClick={() => setTheme("system")}>Use system</MenubarItem>
      </MenubarContent>
    </MenubarMenu>
  );
}
