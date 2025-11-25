import styles from './Input.module.css';

interface InputProps{
    type?: string;
    placeholder?: string;
    value?: string;
    label?: string;
    name?: string;
    id?: string;
    required?: boolean;
    className?: string;
}

const Input = (Props : InputProps) => {
    const {
        type="text",
        placeholder,
        value,label,
        required = false
        ,id
        ,name
        ,className
    } = Props;
    return (
        <label htmlFor={label} className={styles.Label}>
            {label}
            <input 
             type ={type}
             placeholder={placeholder} 
             value={value} 
             required={required} 
             className={`${className} ${styles.Input}`}
             id={id}
             name={name}
             />
        </label>

    )


}

export default Input;