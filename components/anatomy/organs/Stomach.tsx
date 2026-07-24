"use client";

import { Organ } from "../Organ";

interface StomachProps {
  active: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export function Stomach({
  active,
  selected,
  onClick,
}: StomachProps) {
  return (
    <Organ
      active={active}
      selected={selected}
      onClick={onClick}
    >
      <ellipse
        cx="165"
        cy="305"
        rx="18"
        ry="28"
      />
    </Organ>
  );
}