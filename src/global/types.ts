import { InputHTMLAttributes } from 'react'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement>{}

export interface TaskInterface {
    id: number;
    label: string;
    isCompleted: boolean;
}

export interface TaskToUpdate {
    id: number;
    isCompleted: boolean;
}

export interface TaskProps extends TaskInterface {
    removeTask: (taskId: number) => void;
    completeTask: ({id, isCompleted} : TaskToUpdate) => void;
}