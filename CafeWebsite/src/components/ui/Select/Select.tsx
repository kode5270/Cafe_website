import styles from './Select.module.css'
interface Option{
    value: string;
    label: string;
}
interface selectProps{
    label?: string;
    name?: string;
    id?: string;
    required?: boolean;
    className?: string;
    options: Option[];
}

const Select = (Props : selectProps) => {
    const {
        label,
        required = false
        ,id
        ,name
        ,className,
        options
    } = Props;
    return (
        <label htmlFor={label} className={styles.Label}>
            {label}
            <select 
            name={name}
            id={id}
            required={required}
            className={`${styles.select}${className}`}
            >
                {options.map((option : Option) => ( 
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ) )}
            </select>
        </label>

    )


}

export default Select;