import { Organ } from "../Organ";

export function Mouth({
  active,
}: {
  active: boolean;
}) {
  return (
    <Organ active={active}>
      <ellipse
        cx="150"
        cy="105"
        rx="10"
        ry="4"
        fill={active ? "#06B6D4" : "#CBD5E1"}
      />
    </Organ>
  );
}