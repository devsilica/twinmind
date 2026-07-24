"use client";

import { useMemo } from "react";

import { BaseBody } from "./BaseBody";
import { getActiveOrgans } from "./anatomy-map";
import { OrganId } from "./types";

import { Brain } from "./organs/Brain";
import { Mouth } from "./organs/Mouth";
import { Heart } from "./organs/Heart";
import { LeftLung } from "./organs/LeftLung";
import { RightLung } from "./organs/RightLung";
import { Liver } from "./organs/Liver";
import { Stomach } from "./organs/Stomach";
import { LeftKidney } from "./organs/LeftKidney";
import { RightKidney } from "./organs/RightKidney";

interface Props {
  systems: string[];
  selectedOrgan: OrganId | string | null;
  onOrganSelect?: (organ: OrganId) => void;
}

export function HumanBody({
  systems,
  selectedOrgan,
  onOrganSelect,
}: Props) {
  const active = useMemo(
    () => getActiveOrgans(systems),
    [systems]
  );

  const handleSelect = (organ: OrganId) => {
    console.log("Clicked:", organ);
    onOrganSelect?.(organ);
  };

  return (
    <svg
      viewBox="0 0 300 700"
      className="mx-auto h-full w-full max-w-sm"
    >
      <BaseBody />

      <Brain
        active={active.has("brain")}
        selected={selectedOrgan === "brain"}
        onClick={() => handleSelect("brain")}
      />

      <Mouth
        active={active.has("mouth")}
        selected={selectedOrgan === "mouth"}
        onClick={() => handleSelect("mouth")}
      />

      <Heart
        active={active.has("heart")}
        selected={selectedOrgan === "heart"}
        onClick={() => handleSelect("heart")}
      />

      <LeftLung
        active={active.has("left-lung")}
        selected={selectedOrgan === "left-lung"}
        onClick={() => handleSelect("left-lung")}
      />

      <RightLung
        active={active.has("right-lung")}
        selected={selectedOrgan === "right-lung"}
        onClick={() => handleSelect("right-lung")}
      />

      <Liver
        active={active.has("liver")}
        selected={selectedOrgan === "liver"}
        onClick={() => handleSelect("liver")}
      />

      <Stomach
        active={active.has("stomach")}
        selected={selectedOrgan === "stomach"}
        onClick={() => handleSelect("stomach")}
      />

      <LeftKidney
        active={active.has("kidney-left")}
        selected={selectedOrgan === "kidney-left"}
        onClick={() => handleSelect("kidney-left")}
      />

      <RightKidney
        active={active.has("kidney-right")}
        selected={selectedOrgan === "kidney-right"}
        onClick={() => handleSelect("kidney-right")}
      />
    </svg>
  );
}