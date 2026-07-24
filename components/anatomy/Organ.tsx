"use client";

import type { ReactNode } from "react";

interface OrganProps {
  active: boolean;
  selected?: boolean;
  onClick?: () => void;
  children: ReactNode;
}

export function Organ({
  active,
  selected = false,
  onClick,
  children,
}: OrganProps) {
  return (
    <g
      onClick={onClick}
      className={`
        cursor-pointer
        transition-all
        duration-300
        ${active ? "opacity-100" : "opacity-30"}
        ${selected ? "scale-105" : ""}
      `}
    >
      {children}
    </g>
  );
}