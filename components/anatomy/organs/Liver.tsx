"use client";

import { Organ } from "../Organ";

interface Props {
  active: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export function Liver({
  active,
  selected = false,
  onClick,
}: Props) {
  return (
    <Organ active={active} selected={selected} onClick={onClick}>
      <ellipse
        cx="160"
        cy="255"
        rx="28"
        ry="18"
        fill={active ? "#f97316" : "#CBD5E1"}
      />
    </Organ>
  );
}