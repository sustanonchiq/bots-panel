import { ButtonHTMLAttributes, FC } from "react";


const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return ( 
      <button {...props} className="bg-blue-500 bg-primary text-white font-bold py-2 px-4 rounded-md hover:bg-primary-dark focus:outline-none"> {props.children} </button> 
    );
}
 
export default Button;