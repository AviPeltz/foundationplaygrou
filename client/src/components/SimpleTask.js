import { useState } from 'react';
import AddSimpleTask from './AddSimpleTask';

export default function SimpleTask(){
    const [tasks, setTasks] = useState(initialTasks);
    
    function handleAddTask(newTask){
        setTasks([
            ...tasks,
            {
                id: nextId++,
                text: newTask.text,
                done: false,
            },
        ]);
    }
    function handleEditTask(task){
        setTasks(tasks.map((t) => {
            if(t.id === task.id){
                return task;
            }
            else{
                return t;
            }
        }))
    }
    
    function handleDeleteTask(taskId){
        setTasks(tasks.filter((t) => t.id !== taskId));
    }

    return(
    <div className='block  text-center items-center justify-center p-1 m-2 border rounded-xl bg-gray-100'>
        <h2 className='text-lg font-semibold'>To do list App: </h2>
        <AddSimpleTask handleClick={handleAddTask}/>
    </div>
    );
}
let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];