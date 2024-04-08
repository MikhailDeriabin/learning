import {FC, memo, useState} from "react";
import {InputLabel} from "../InputLabel/InputLabel";
import {ErrorText} from "../ErrorText/ErrorInput";
import styled from "styled-components";
import {Theme} from "../../providers/ThemeProvider/themes";
import {Validation} from "../../types/Validation";
import {ImageUploader} from "../ImageUploader/ImageUploader";

type LabeledImageUploaderProps = {
    onImageUpload: (imageUrl: string, file: File) => void;
    label: string;
    uploaderLabel: string;
    validation?: Validation;
    name: string;
    className?: string;
    id?: string;
}

const Div = styled.div<{ theme: Theme }>`
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.small};
    `;

export const LabeledFileUploader: FC<LabeledImageUploaderProps> = memo(({
    label,
    onImageUpload,
    uploaderLabel,
    validation,
    name,
    className,
    id
}) => {
    const [error, setError] = useState<string | null>(null);
    const [imageUrl, setImageUrl] = useState<string | null>(null);

    const handleFileSelected = (file: File | null) => {
        if (file) {
            const url = URL.createObjectURL(file);
            setImageUrl(url);
            onImageUpload(url, file);
        }
    }

    return (
        <Div className={className} id={id}>
            <InputLabel
                htmlFor={name}
                label={label}
            />
            <ImageUploader onFileSelected={handleFileSelected} label={uploaderLabel}
            />
            {imageUrl && <img src={imageUrl} alt="Uploaded" style={{ maxWidth: '100%', marginTop: '10px' }} />}
            <ErrorText
                error={error}
            />
        </Div>
    );
});