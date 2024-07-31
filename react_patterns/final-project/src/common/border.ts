export type BorderWidth = 1 | 2 | 3 | 'none';
export type BorderRadius = 'normal' | 'round' | 'none';

type TBorder = {
    width: Record<BorderWidth, string>,
    radius: Record<BorderRadius, string>
}
export const border: TBorder = {
    width: {
        1: "1px",
        2: "2px",
        3: "3px",
        none: "0"
    },
    radius: {
        none: "0",
        normal: "5px",
        round: "50%"
    }
}