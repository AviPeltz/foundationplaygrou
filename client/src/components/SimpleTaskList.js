import { useState } from 'react';


let nextId = 3;
const initialTasks = [
  {id: 0, text: 'Visit Kafka Museum', done: true},
  {id: 1, text: 'Watch a puppet show', done: false},
  {id: 2, text: 'Lennon Wall pic', done: false},
];
export default function SimpleTaskList(tasks, handleEdit, handleDelete){
    return(
        <div>
            <ul>
            {tasks.map(task => (
                <li>
                    <Task task={task} />
                </li>
            ))}
            </ul>
        </div>
    );
}
function Task(task, handleEdit, handleDelete){

    return(
        <div>

            
        </div>
    );
    /*
                {tasks.map(task => (
                <div className='table-row-group' key={task.id}>
                    <input key={task.id}type='checkbox' checked={task.done}/>
                    <button
                        className='table-cell bg-red-200 hover:bg-red-400 rounded py-1 px-3 m-1'
                        onClick={handleEdit}
                    >
                        edit
                    </button>
                    <button
                        className='table-cell bg-red-200 hover:bg-red-400 rounded py-1 px-3 m-1'
                    >
                        delete
                    </button>
                </div>
            ))}
    */
}