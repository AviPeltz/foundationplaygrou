import { useState } from 'react';
import { useTasksDispatch } from '../contexts/TaskContext';

export default function AddTask() {
  const [text, setText] = useState('');
  const dispatch = useTasksDispatch();
  return (
    <div className="text-center">
      <input
        className="border m-1 p-1 rounded"
        placeholder="Add task"
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <button className="bg-blue-300 rounded mx-1 py-1 px-2" onClick={() => {
        setText('');
        dispatch({
          type: 'added',
          id: nextId++,
          text: text,
        }); 
      }}>Add</button>
    </div>
  );
}

let nextId = 3;
