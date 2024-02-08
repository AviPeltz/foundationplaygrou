import { useState } from 'react';

let todoIndex = 0;
export default function SpreadList(){
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])
    return(
        <div className='border rounded p-2'>
            <h1 className='font-bold text-lg'>Todo List</h1>
            <h2 className='font-base text-md'>Rendering lists with Spread</h2>
            <input 
                className='border rounded-md p-2 m-1'
                placeholder='todo list item'
                value={todo}
                onChange={(e) =>{
                    setTodo(e.target.value);
                }}
            />
            <button 
                className='bg-cyan-200 hover:bg-cyan-400 rounded py-1 px-3 m-1'
                onClick={() => {
                    setTodoList([
                        ...todoList,
                        {id: todoIndex++, todo:todo}
                    ]);
                }}>
                Add
            </button>
            <ul>
                {todoList.map(todo => (
                <div className='table'>
                    <div key={todo.id}className='table-row'>
                        <li className='table-cell' key={todo.id}>{todo.todo}</li>
                        <button 
                        key={todo.id}
                        className='table-cell bg-red-200 hover:bg-red-400 rounded py-1 px-3 m-1'
                        onClick={() => {
                            setTodoList(
                                todoList.filter(t => t.id !== todo.id)
                            );
                        }}>
                        Delete
                        </button>
                    </div>
                </div>
                ))}
            </ul>
        </div>
    );
}