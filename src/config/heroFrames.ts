/**
 * Hero Section Image Sequence Configuration
 * Auto-discovered from /public/images/ and /public/VideoProject-ezgif-split/
 * Pattern: ezgif-frame-{001..168}.jpg
 */

export const TOTAL_HERO_FRAMES = 168;

// Sorted manifest array of all 168 high-resolution frames
export const HERO_FRAMES: string[] = Array.from({ length: TOTAL_HERO_FRAMES }, (_, i) => {
  const padIndex = String(i + 1).padStart(3, '0');
  return `/images/ezgif-frame-${padIndex}.jpg`;
});

// Fallback path helper if needed
export const getFallbackFramePath = (i: number): string => {
  const padIndex = String(i + 1).padStart(3, '0');
  return `/VideoProject-ezgif-split/ezgif-frame-${padIndex}.jpg`;
};
