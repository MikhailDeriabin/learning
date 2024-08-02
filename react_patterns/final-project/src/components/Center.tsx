import styled from "styled-components"

type Props = {
    centerText?: boolean,
    centerChildren?: boolean
}
export const Center = styled.div<Props>`
    margin-inline-start: auto;
    margin-inline-end: auto;

    ${({centerText}) => (centerText && 'text-align: center;')}

    ${({centerChildren}) => (centerChildren && `
        display: flex;
        align-items: center;
        justify-content: center;
    `)}
`;