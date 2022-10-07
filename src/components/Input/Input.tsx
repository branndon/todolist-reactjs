import { InputProps } from '../../global/types'
import styles from './Input.module.scss'

export function Input({ ...props }: InputProps) {
    return (
        <input
            {...props}
            type="text"
            className={styles.input}
        />
    )
}