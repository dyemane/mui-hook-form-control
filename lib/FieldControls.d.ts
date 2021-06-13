/// <reference types="react" />
declare type FIXME = any;
export declare const CheckboxControl: ({ onChange, color, disabled, className, label, control, error, name, defaultValue, ...rest }: FIXME) => JSX.Element;
export declare const SwitchControl: ({ onChange, helperText, disabled, className, label, control, error, name, defaultValue, ...rest }: FIXME) => JSX.Element;
interface RadioGroupOption {
    label: string;
    value: FIXME;
    className?: string;
}
export declare const RadioGroupControl: ({ helperText, required, color, onChange, options, control, error, name, defaultValue, ...rest }: any) => JSX.Element;
export declare const FileButtonControl: ({ onChange, required, className, helperText, control, error, name, label, defaultValue, ...rest }: FIXME) => JSX.Element;
interface SelectOption {
    label: string;
    value: FIXME;
    disabled?: boolean;
}
export declare const SelectControl: ({ required, label, onChange, className, options, control, error, name, defaultValue, ...rest }: any) => JSX.Element;
export {};
