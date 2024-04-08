import {FormField} from "./Form";

export type Validator<T=any> = (value: T) => null | string;

export type ValidatorList = {
    [field in FormField]: Validator;
};

export type Validation = {
    validator: Validator;
    validationTrigger: boolean;
    field: FormField;
}