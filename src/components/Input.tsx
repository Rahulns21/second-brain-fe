type InputTypes = "text" | "email" | "password" | "search" | "number";

interface InputProps {
    type: InputTypes;
    onChange?: () => void;
    placeholder?: string;
    value?: string;
    customStyles?: string;
    disabled?: boolean;
    required?: boolean;
    name?: string;
}

const defaultStyle = "px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-gray-100";

export const Input = (props: InputProps) => {
    return <div>
        <input 
        type={props.type} 
        className={`${defaultStyle} ${props.customStyles || ' '}`}
        onChange={props.onChange}
        placeholder={props.placeholder}
        value={props.value}
        disabled={props.disabled}
        required={props.required}
        name={props.name} />
    </div>
}