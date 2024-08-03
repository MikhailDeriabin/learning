import styled from "styled-components";
import { Pad } from "./Pad";
import { border, color } from "../common";
import { InlineBundle } from "./InlineBundle";

type LinkWrapperProps = {
    isActive?: boolean
}
const LinkWrapper = styled(Pad).attrs(() => ({padding: [2, 3]}))<LinkWrapperProps>`
    border-left: ${border.width[3]} solid #FFFFFF00;
    ${({isActive}) => isActive && `
        border-left: ${border.width[3]} solid ${color.primary[300]};
        background-color: ${color.neutral[100]};
    `}

    &:hover{
        border-left: ${border.width[3]} solid ${color.primary[200]};
        background-color: ${color.neutral[200]};
    }
`;

type Props = {
    text: string,
    iconPath: string,
    isActive?: boolean
}
export default function MainMenuLink({ text, iconPath, isActive }:Props) {
    return(
        <LinkWrapper isActive={isActive}>
            <InlineBundle space={4} align="center">
                <img src={iconPath} alt=""/>
                <span>{text}</span>
            </InlineBundle>
        </LinkWrapper>
    );
}