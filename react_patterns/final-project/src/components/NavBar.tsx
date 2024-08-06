import { MediaWrapper } from "./MediaWrapper";
import reactImg from '../assets/react.svg';
import billingImg from '../assets/billing.svg';
import profileImg from '../assets/profile-img.jpg';
import { InlineBundle } from "./InlineBundle";
import NavBarLink from "./NavBarLink";
import styled from "styled-components";
import { border, color, ColorType } from "../common";
import Input from "./Input";
import { IconButton } from "./Button";
import { Pad } from "./Pad";

const Wrapper = styled(Pad).attrs(() => ({padding: [5, 7] }))`
    background-color: ${color.primary[100]};
    border-bottom: ${border.width[1]} solid ${color.neutral[100]};
`;

export default function NavBar() {
    return(
        <Wrapper>
            <InlineBundle align="center" justify="space-between">
                <InlineBundle space={3} align="center" justify="flex-start">
                    <MediaWrapper ratio={[1, 1]} style={{width: '50px'}}>
                        <img src={reactImg} alt='logo'/>
                    </MediaWrapper>
                    <NavBarLink isActive>Overview</NavBarLink>
                    <NavBarLink>Position</NavBarLink>
                    <NavBarLink>Candidates</NavBarLink>
                    <NavBarLink>Employer</NavBarLink>
                </InlineBundle>

                <InlineBundle space={3} align="center" justify="flex-end">
                    <Input theme="dark">
                        <Input.Field placeholder='Search'/>
                    </Input>
                    <IconButton type={ColorType.alert} size="small" iconPath={billingImg}/>
                    <MediaWrapper ratio={[1, 1]} style={{width: '50px'}}>
                        <img src={profileImg} alt='logo' style={{maxWidth: '50px', borderRadius: border.radius.round}}/>
                    </MediaWrapper>
                </InlineBundle>
            </InlineBundle>
        </Wrapper>
    );
}