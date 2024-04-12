import {ChangeEvent, useCallback, useState} from "react";


export function useInput(
    initialValue: string,
    validator: (value: string) => string
) {
    const [value, setValue] = useState<string>(initialValue);
    const [isModified, setIsModified] = useState<boolean>(false);

    const handleInputChange = useCallback(function (e: ChangeEvent<HTMLInputElement>) {
        setValue(e.target.value);
        setIsModified( false);
    }, []);

    const handleInputBlur = useCallback(function () {
        setIsModified(true);
    }, []);

    const error = isModified ? validator(value) : '';

    return {
        value,
        error,
        handleInputChange,
        handleInputBlur
    };
}