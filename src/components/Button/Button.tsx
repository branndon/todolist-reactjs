import { PlusCircle } from 'phosphor-react';

import styles from './Button.module.scss'

interface ButtonProps {
    label: string;
    type: "button" | "submit",
}

export function Button({ label, type }: ButtonProps) {
    return (
        <button
            type={type}
            className={styles.button}
        >
            {label}

            <PlusCircle size={16} />
        </button>
    )
}