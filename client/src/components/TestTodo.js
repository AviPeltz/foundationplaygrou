import { useState } from 'react';
import { useReducer } from 'react';

export default function TestTodo() {
    const [tasks, dispatch] = useReducer();

}
export function TaskList({ 
    tasks,
    onChangeTask,
    onDeleteTask
}){

}
export function Task({ 
    task,
    onChange,
    onDelete
}){

}
export function AddTask({ onAddTask}){

}