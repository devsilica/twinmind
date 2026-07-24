import { OrganId } from "./types";

export const SYSTEM_TO_ORGANS: Record<string, OrganId[]> = {
  respiratory: [
    "left-lung",
    "right-lung",
  ],

  cardiovascular: [
    "heart",
  ],

  neurological: [
    "brain",
  ],

  dental_oral: [
    "mouth",
  ],

  digestive: [
    "liver",
    "stomach",
  ],

  renal: [
    "kidney-left",
    "kidney-right",
  ],
};