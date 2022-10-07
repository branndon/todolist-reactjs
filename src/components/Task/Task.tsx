import { Trash } from 'phosphor-react';
import { ChangeEvent } from 'react';

import { TaskProps } from '../../global/types';

import styles from './Task.module.scss'

export function Task({ label, id, isCompleted, removeTask, completeTask }: TaskProps) {

    function handleRemoveTask() {
        removeTask(id)
    }

    function handleCompleteTask(event: ChangeEvent<HTMLInputElement>) {
        completeTask({ id: id, isCompleted: event.target.checked})
    }

    return (
        <div
            className={`${styles.task} ${isCompleted ? styles.taskCompleted : ''}`}
        >
            <input
                name="task"
                type="checkbox"
                id={ JSON.stringify(id) }
                onChange={handleCompleteTask}
            />

            <label htmlFor={ JSON.stringify(id) }>
                {label}
            </label>

            <button title="Remover tarefa" onClick={handleRemoveTask}>
                <Trash size={26} />
            </button>
        </div>
    )
}