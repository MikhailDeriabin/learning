import styled from "styled-components"

type Props = {
    centerText?: boolean,
    centerVertical?: boolean,
    centerHorizontal?: boolean
}
export const Center = styled.div<Props>`
    margin-inline-start: auto;
    margin-inline-end: auto;

    ${({centerText}) => (centerText && 'text-align: center;')}

    ${({centerVertical}) => (centerVertical && `
        display: flex;
        align-items: center;
    `)}

    ${({centerHorizontal}) => (centerHorizontal && `
        display: flex;
        justify-content: center;
    `)}
`;