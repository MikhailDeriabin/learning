import styled from "styled-components"
import { border, color, space } from "../common";
import { ReactNode } from "react";
import { Pad } from "./Pad";

//TODO: next add Center pattern to center text
const LinkWrapper = styled(Pad).attrs(() => ({padding: [3]}))`
    background-color: ${color.neutral[200]};
    border-radius: ${border.radius.normal};
`;

const Link = styled.a`
    color: ${color.text.contrast};
`;

type Props = {
    children?: ReactNode;
}
export default function NavBarLink({ children }: Props) {
    return(
        <LinkWrapper>
            <Link>{children}</Link>
        </LinkWrapper>
    );
}