import { H3 } from "./headers";
import { InfoText } from "./InfoText";
import Input from "./Input";
import { Layers } from "./Layers";
import { space as spaceSchema } from '../common/spacing';
import { ColumnsCell, Columns } from "./Columns";
import { MediaWrapper } from "./MediaWrapper";
import profileImg from "../assets/profile-img.jpg";
import styled from "styled-components";
import { border, ColorType } from "../common";
import { PrimaryButton } from "./Button";
import { InlineBundle } from "./InlineBundle";

export default function MainPageContent() {
    return (
        <Layers space={6}>
            <H3>General Information</H3>
            <Columns columnCount={4} space={4}>
                <ColumnsCell size={4}><InfoText>This information will required for the basic verification of profile.</InfoText></ColumnsCell>
                <ColumnsCell size={3} style={{ display: 'flex', justifyContent: 'space-between', flexDirection: 'column'}}>
                    <VerticalInput label="Username"/>
                    <VerticalInput label="About"/>
                </ColumnsCell>
                <ColumnsCell>
                <Input style={{display: 'flex', flexDirection: 'column'}}>
                    <Input.Label>Image</Input.Label>
                    <MediaWrapper>
                        <ProfileImg src={profileImg} alt="profile"/>
                    </MediaWrapper>
                </Input>
                </ColumnsCell>
                <ColumnsCell size={4}><InfoText>Tell a brief introduction about yourself</InfoText></ColumnsCell>
                <ColumnsCell size={2}>
                    <VerticalInput label="First Name"/>
                </ColumnsCell>
                <ColumnsCell size={2}>
                    <VerticalInput label="Last Name"/>
                </ColumnsCell>
                <ColumnsCell size={2}>
                    <VerticalInput label="LinkedIn"/>
                </ColumnsCell>
                <ColumnsCell size={2}>
                    <VerticalInput label="Employer"/>
                </ColumnsCell>
            </Columns>

            <InlineBundle space={5} justify="flex-end">
                <PrimaryButton type={ColorType.error}>Cancel</PrimaryButton>
                <PrimaryButton>Save</PrimaryButton>
            </InlineBundle>
        </Layers>
    );
}

type VerticalInputProps = {
    label: string
}
function VerticalInput({ label }: VerticalInputProps) {
    return(
        <Input style={{display: 'flex', flexDirection: 'column', gap: spaceSchema[3]}} >
            <Input.Label>{label}</Input.Label>
            <Input.Field/>
            <Input.Info></Input.Info>
        </Input>
    );
}

const ProfileImg = styled.img`
    border-radius: ${border.radius.round};
`