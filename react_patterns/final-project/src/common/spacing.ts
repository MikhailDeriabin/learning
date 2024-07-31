//Spacing from carbon design system (IBM, open source)
export type Space = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 'none';
export const space: Record<Space, string> = {
    1: '0.125rem',
    2: '0.25rem',
    3: '0.5rem',
    4: '0.75rem',
    5: '1rem',
    6: '1.5rem',
    7: '2rem',
    8: '2.5rem',
    9: '3rem',
    10: '4rem',
    11: '5rem',
    12: '6rem',
    13: '10rem',
    none: '0'
} 