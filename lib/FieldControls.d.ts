/// <reference types="react" />
export declare const getDirtyFieldData: (rest: any, dirtyFields: any) => {
    [x: string]: any;
};
export declare const TextFieldControl: ({ control, error, name, defaultValue, fullWidth, ...rest }: any) => JSX.Element;
export declare const CheckboxControl: ({ onChange, color, disabled, className, label, control, error, name, defaultValue, ...rest }: any) => JSX.Element;
export declare const SwitchControl: ({ onChange, helperText, disabled, className, label, control, error, name, defaultValue, ...rest }: any) => JSX.Element;
interface RadioGroupOption {
    label: string;
    value: any;
    className?: string;
}
export declare const RadioGroupControl: ({ helperText, required, color, onChange, options, control, error, name, defaultValue, ...rest }: any) => JSX.Element;
export declare const FileButtonControl: ({ onChange, required, className, helperText, control, error, name, defaultValue, ...rest }: any) => JSX.Element;
export declare const FileControl: ({ onChange, required, className, helperText, control, error, name, defaultValue, ...rest }: any) => JSX.Element;
interface SelectOption {
    label: string;
    value: any;
    disabled?: boolean;
}
export declare const SelectControl: ({ required, label, onChange, className, options, control, error, name, defaultValue, ...rest }: any) => JSX.Element;
export declare const renderFormHelper: ({ touched, error }: any) => JSX.Element;
export declare const localOptions: {
    label: string;
    value: string;
}[];
export {};
