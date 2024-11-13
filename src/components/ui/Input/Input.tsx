import { InputHTMLAttributes, FC } from "react";

interface InputPropsI extends InputHTMLAttributes<HTMLInputElement> {
    label?: string
}

const Input: FC<InputPropsI> = (props) => {
    return ( 
        <>
            {props.label && <label htmlFor={props.id} className="text-gray-600">{props.label}</label>}
            <input {...props} />
        </>
    );
}
 
export default Input;