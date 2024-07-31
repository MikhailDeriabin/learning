//Fonts from Carbon design system by IBM
export type FontSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17;
export type FontWeight = 'light' | 'normal' | 'bold';

type TFont = {
    family: string,
    size: Record<FontSize, string>,
    weight: Record<FontWeight, string>
}
export const font: TFont = {
    family: 'Helvetica sans-serif',
    size: {
        1: '0.75rem',
        2: '0.875rem',
        3: '1rem',
        4: '1.125rem',
        5: '1.25rem',
        6: '1.5rem',
        7: '1.75rem',
        8: '2rem',
        9: '2.25rem',
        10: '2.625rem',
        11: '3rem',
        12: '3.375rem',
        13: '3.75rem',
        14: '4.25rem',
        15: '4.75rem',
        16: '5.25rem',
        17: '5.75rem'
    },
    weight: {
        light: '300',
        normal: '400',
        bold: '500'
    }
}