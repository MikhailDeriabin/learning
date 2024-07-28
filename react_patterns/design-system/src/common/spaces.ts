export type Gutter = 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'none';
export const spaceSchema : Record<Gutter, string> = {
  xs: "0.125rem",
  s: "0.25rem",
  m: "0.5rem",
  l: "1rem",
  xl: "2rem",
  xxl: "4rem",
  none: "0",
};
