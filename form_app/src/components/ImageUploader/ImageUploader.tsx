import React from 'react';
import styled from 'styled-components';
import {inputStyles} from "../../providers/ThemeProvider/themeStyles";
import {Theme} from "../../providers/ThemeProvider/themes";

const DefaultContainer = styled.div<{ theme: Theme }>`${ inputStyles }`;
const UploadContainer = styled(DefaultContainer)<{ theme: Theme }>`
    display: flex;
    justify-content: center;
    align-items: center;
    border: ${({ theme }) => theme.borders.width} dashed ${({ theme }) => theme.colors.border};
    border-radius: ${({ theme }) => theme.borders.radius};
    cursor: pointer;
    padding: 0;
    height: 50px;
    
    &:hover > label{
        color: ${({ theme }) => theme.colors.input.hover.text};
    }
`;

const HiddenInput = styled.input`
    display: none;
`;

const Label = styled.label`
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`;

type ImageUploaderProps = {
    onFileSelected: (file: File | null) => void;
    label: string;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onFileSelected, label }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        onFileSelected(file);
    };

    return (
        <UploadContainer>
            <HiddenInput
                id="photo-upload"
                type="file"
                accept="image/*"
                multiple
                onChange={handleChange}
            />
            <Label htmlFor="photo-upload">{label}</Label>
        </UploadContainer>
    );
};