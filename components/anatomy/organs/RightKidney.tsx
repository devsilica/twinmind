"use client";

import { Organ } from "../Organ";

interface Props {
  active: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export function RightKidney({
  active,
  selected = false,
  onClick,
}: Props) {
  return (
    <Organ active={active} selected={selected} onClick={onClick}>
      <ellipse
        cx="170"
        cy="315"
        rx="10"
        ry="18"
        fill={active ? "#ec4899" : "#CBD5E1"}
      />
    </Organ>
  );
}