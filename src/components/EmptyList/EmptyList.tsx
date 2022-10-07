import { ClipboardText } from 'phosphor-react'
import styles from './EmptyList.module.scss'

export function EmptyList() {
    return (
        <div className={styles.emptyList}>
            <ClipboardText size={56} />

            <h3>Você ainda não tem tarefas cadastradas</h3>
            <p>Crie tarefas e organize seus itens a fazer</p>
        </div>
    )
}