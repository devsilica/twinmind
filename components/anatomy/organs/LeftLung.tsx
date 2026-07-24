"use client";

import { Organ } from "../Organ";

interface Props {
  active: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export function LeftLung({
  active,
  selected = false,
  onClick,
}: Props) {
  return (
    <Organ active={active} selected={selected} onClick={onClick}>
      <ellipse
        cx="132"
        cy="180"
        rx="20"
        ry="40"
        fill={active ? "#22c55e" : "#CBD5E1"}
      />
    </Organ>
  );
}