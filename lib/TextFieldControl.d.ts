/// <reference types="react" />
import { Control } from "react-hook-form";
declare type FIXME = any;
interface TextFieldControlProps {
    label?: string;
    control: Control<FIXME>;
    error: FIXME;
    name: string;
    defaultValue?: FIXME;
    fullWidth?: boolean;
    [key: string]: FIXME;
}
export declare const TextFieldControl: ({ control, error, name, defaultValue, fullWidth, ...rest }: TextFieldControlProps) => JSX.Element;
export {};
