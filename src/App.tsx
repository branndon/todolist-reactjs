import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react'

import './assets/css/global.scss'
import styles from './App.module.scss'

// interfaces
import { TaskInterface, TaskToUpdate } from './global/types'

// components
import { Task } from './components/Task/Task'
import { Input } from './components/Input/Input'
import { Header } from './components/Header/Header'
import { Button } from './components/Button/Button'
import { EmptyList } from './components/EmptyList/EmptyList'

export function App() {

    const [tasks, setTasks] = useState([])
    const [newTask, setNewTask] = useState('')

    function addTask(event: FormEvent) {
        event.preventDefault()
        
        const newTaskToAdd = {
            id: tasks.length + 1,
            label: newTask,
            isCompleted: false
        }
        const newListOfTasks = [...tasks, newTaskToAdd]

        setTasks(newListOfTasks)
        setNewTask('');
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        event.target.setCustomValidity('');
        setNewTask(event.target.value);
    }

    function removeTask(taskId: number) {
        setTasks((state) => state.filter((task: TaskInterface) => task.id !== taskId))
    }

    function completeTask(taskToUpdate: TaskToUpdate) {
        setTasks(state => {
            return state.map((task: TaskInterface) => {
                if (task.id === taskToUpdate.id) {
                    task.isCompleted = taskToUpdate.isCompleted
                }

                return task
            })
        })
    }

    function getTotalTasksIsCompleted() {
        return tasks.filter((task: TaskInterface) => task.isCompleted).length
    }

    function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
        event.target.setCustomValidity('Esse campo é obrigatório!');
    }

    return (
        <main className={styles.home}>
            <Header />

            <div className={styles.home__container}>

                <form onSubmit={addTask} className={styles.home__addTask}>
                    <Input
                        required
                        value={newTask}
                        onChange={handleNewTaskChange}
                        onInvalid={handleNewTaskInvalid}
                        placeholder="Adicione uma nova tarefa"
                    />
                    <Button type="submit" label="Criar" />
                </form>
                
                <header className={styles.home__tasksHeader}>
                    <div>
                        <h2>Tarefas criadas <span>{tasks.length}</span></h2>
                    </div>

                    <div>
                        {
                            tasks.length === 0
                            ?
                                ''
                            :
                                <h2 className={styles.textPurple}>
                                    Tarefas concluídas
                                    <span>{getTotalTasksIsCompleted()} de {tasks.length}</span>
                                </h2>
                        }
                    </div>
                </header>

                <div className={styles.home__tasks}>
                    {
                        tasks.length === 0
                        ?
                            <EmptyList />
                        :
                            tasks.map((task: TaskInterface) => {
                                return (
                                    <Task
                                        id={task.id}
                                        key={task.id}
                                        label={task.label}
                                        removeTask={removeTask}
                                        completeTask={completeTask}
                                        isCompleted={task.isCompleted}
                                    />
                                )
                            })
                    }
                </div>
            </div>
        </main>
    )
}