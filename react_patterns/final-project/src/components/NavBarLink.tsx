import styled from "styled-components"
import { border, color, space } from "../common";
import { ReactNode } from "react";
import { Pad } from "./Pad";
import { Center } from "./Center";

type LinkWrapperProps = {
    isActive?: boolean
}
const LinkWrapper = styled(Pad).attrs(() => ({padding: [3]}))<LinkWrapperProps>`
    background-color: ${({isActive}) => isActive ? color.neutral[200] : '#FFFFFF00'};
    border-radius: ${border.radius.normal};

    &:hover{
        background-color: ${color.neutral[300]}; 
    }
`;

const Link = styled.a`
    color: ${color.text.contrast};
`;

type Props = {
    children?: ReactNode,
    isActive?: boolean
}
export default function NavBarLink({ children, isActive }: Props) {
    return(
        <LinkWrapper isActive={isActive}>
            <Center centerHorizontal centerVertical centerText>
                <Link>{children}</Link>
            </Center>
        </LinkWrapper>
    );
}