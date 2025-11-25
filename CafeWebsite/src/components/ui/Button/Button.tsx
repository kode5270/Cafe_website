import styles from "./Button.module.css";
import  { type ReactNode } from "react";

interface ButtonProps {
    children:ReactNode;
    type?: "button" | "submit" | "reset";
    onClick?: () => void;
    color? : "primary" | "secondary";
    className?: string;
}
const Button = (Props: ButtonProps) => {
    const { 
        children,
        type ="button", 
        onClick,
        color = "primary",
        className = "",
    } = Props;
    return (
        <button type={type} onClick={onClick} className={`${styles.button} ${styles[`button-${color}`]} ${className}`}>
            {children}
        </button>
    )
}
export default Button;