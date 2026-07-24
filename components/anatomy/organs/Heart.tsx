"use client";

import { Organ } from "../Organ";

interface HeartProps {
  active: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export function Heart({
  active,
  selected,
  onClick,
}: HeartProps) {
  return (
    <Organ
      active={active}
      selected={selected}
      onClick={onClick}
    >
      <circle
        cx="150"
        cy="230"
        r="15"
        fill={active ? "#EF4444" : "#EF4444"}
      />
    </Organ>
  );
}