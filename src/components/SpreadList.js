import { useState } from 'react';

let todoIndex = 0;

export default function SpreadList(){
    const [todo, setTodo] = useState('')
    const [todoList, setTodoList] = useState([])
    
    function buttonHandler(){
        setTodoList([
            ...todoList,
            {id: todoIndex++, todo:todo}
        ]);
        setTodo('');
    }
    
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
                onClick={buttonHandler}>
                add
            </button>
            <ul>
                {todoList.map(todo => (
                <div className='table-row-group'>
                    <div key={todo.id}className='rounded table-row'>
                        <li className='table-cell' key={todo.id}>{todo.todo}</li>
                        <button 
                        key={todo.id}
                        className='table-cell bg-red-200 hover:bg-red-400 rounded py-1 px-3 m-1'
                        onClick={() => {
                            setTodoList(
                                todoList.filter(t => t.id !== todo.id)
                            );
                        }}>
                        delete
                        </button>
                        <button 
                        key={todo.id}
                        className='table-cell bg-yellow-200 hover:bg-yellow-400 rounded py-1 px-3 m-1'>
                        edit
                        </button>
                    </div>
                </div>
                ))}
            </ul>
        </div>
    );
}