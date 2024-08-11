'use client';
import { ChangeEvent, useRef, useState } from 'react';
import classes from './ImagePicker.module.css';
import Image from 'next/image';

type Props = Readonly<{
    label?: string,
    id: string,
    required?: boolean
}>

export default function ImagePicker({ label, id, required }: Props) {
    const [image, setImage] = useState<string | null>(null);

    const inputRef = useRef<HTMLInputElement>(null);

    function handleAddImage() {
        inputRef.current?.click();
    }

    function handleSetImage(e: ChangeEvent<HTMLInputElement>) {
        if(!e?.target?.files)
            return setImage(null);

        const imageToSet = e.target.files[0];

        const fileReader = new FileReader();
        fileReader.readAsDataURL(imageToSet);

        fileReader.onload = () => {
            setImage(fileReader.result as string);
        }
    }

    return (
        <div className={classes.picker}>
            <label htmlFor={id}>{label}</label>
            <div className={classes.controls}>
                <div className={classes.preview}>
                    {!image && <p>Add your image</p>}
                    {image && <Image src={image} alt='user meal' fill/>}
                </div>
                <input 
                    ref={inputRef}
                    className={classes.input} 
                    type='file' 
                    id={id} 
                    accept='image/png, image/jpeg' 
                    name={id} 
                    onChange={handleSetImage}
                    required={required}
                />
                <button type='button' className={classes.button} onClick={handleAddImage}>Add Image</button>
            </div>
            
        </div>
    );
}