import { forwardRef, type ReactElement } from "react";

type InputTypes = "text" | "email" | "password" | "search" | "number";

interface InputProps {
    type: InputTypes;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    placeholder?: string;
    value?: string;
    customStyles?: string;
    disabled?: boolean;
    required?: boolean;
    name?: string;
    endIcon?: ReactElement;
    onIconClick?: () => void;
}

const defaultStyle = "px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-100";

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return <div className="relative w-full">
        <input
        ref={ref}
        type={props.type} 
        className={`${defaultStyle} ${props.customStyles || ' '}`}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        required={props.required}
        name={props.name} />

        {props.endIcon && (
            <button
            type="button"
            onClick={props.onIconClick}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer">
                {props.endIcon}
            </button>
        )}
    </div>
});