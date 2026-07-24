import { Organ } from "../Organ";

interface Props {
  active: boolean;
  selected?: boolean;
  onClick?: () => void;
}

export function Brain({
  active,
  selected,
  onClick,
}: Props) {
  return (
    <Organ
      active={active}
      selected={selected}
      onClick={onClick}
    >
      <ellipse
        cx="150"
        cy="65"
        rx="18"
        ry="14"
        fill={active ? "#8B5CF6" : "#CBD5E1"}
      />
    </Organ>
  );
}