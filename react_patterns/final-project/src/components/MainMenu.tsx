import { HTMLAttributes } from "react";
import { Layers } from "./Layers";
import MainMenuLink from "./MainMenuLink";
import profileImg from '../assets/profile.svg';
import accountImg from '../assets/account-management.svg';
import passwordImg from '../assets/password-key.svg';
import notificationImg from '../assets/notification.svg';
import billingImg from '../assets/billing.svg';
import integrationImg from '../assets/integration.svg';
import { border, color } from "../common";

type Props = {

} & HTMLAttributes<HTMLDivElement>;
export default function MainMenu({...props}: Props) {
    return(
        <div style={{borderRight: `${border.width[2]} solid ${color.neutral[100]}`}} {...props}>
            <Layers space={1}>
                <MainMenuLink text="Profile" iconPath={profileImg} isActive/>
                <MainMenuLink text="Account" iconPath={accountImg} />
                <MainMenuLink text="Password" iconPath={passwordImg} />
                <MainMenuLink text="Notifications" iconPath={notificationImg} />
                <MainMenuLink text="Billing" iconPath={billingImg} />
                <MainMenuLink text="Integrations" iconPath={integrationImg} />
            </Layers>
        </div>
    );
}