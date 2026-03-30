export type MotionPreset = {
  fastMs: number;
  mediumMs: number;
  slowMs: number;
  easingStandard: string;
  easingEntrance: string;
  distancePx: number;
  staggerMs: number;
};

export const MOTION_PRESET: MotionPreset = {
  fastMs: 140,
  mediumMs: 220,
  slowMs: 360,
  easingStandard: "cubic-bezier(0.2, 0.8, 0.2, 1)",
  easingEntrance: "cubic-bezier(0.16, 1, 0.3, 1)",
  distancePx: 10,
  staggerMs: 70,
};

