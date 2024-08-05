import styled from "styled-components"
import { Space, space as spaceSchema } from "../common"

type Fraction = '1/2' | '1/3' | '1/4' | '1/5' | '2/3' | '3/4' | 'auto-start' | 'auto-end';
const fractions: Record<Fraction, string> = {
    '1/2': '1fr 1fr',
    "1/3": '1fr 2fr',
    "1/4": '1fr 3fr',
    "1/5": '1fr 4fr',
    "2/3": "2fr 1fr",
    "3/4": "3fr 1fr",
    "auto-start": "auto 1fr",
    "auto-end": "1fr auto"
}
type Props = {
    space?: Space,
    fraction?: Fraction
}
export const Split = styled.div<Props>`
    display: grid;
    gap: ${({space}) => space ? spaceSchema[space] : '0'};
    grid-template-columns: ${({fraction}) => fraction ? fractions[fraction] : fractions['1/2']};
`;