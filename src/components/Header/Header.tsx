import styles from './Header.module.scss'

import logoTodoList from './../../assets/images/logo-todo-list.svg'

export function Header() {
    return (
        <header className={styles.header}>
            <img src={logoTodoList} alt="Logo Todo" />
        </header>
    )
}