import { useState } from 'react';
import { useTasks, useTasksDispatch } from '../contexts/TaskContext';

export default function TaskList() {
  const tasks = useTasks();
  return (
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
  );
}

function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useTasksDispatch();
  let taskContent;
  if (isEditing) {
    taskContent = (
      <>
        <input
          className=''
          value={task.text}
          onChange={e => {
            dispatch({
              type: 'changed',
              task: {
                ...task,
                text: e.target.value
              }
            });
          }} />
        <button className='px-1 mx-1 bg-green-300 font-semibold text-sm rounded' onClick={() => setIsEditing(false)}>
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        <span className='mx-2 font-mono font-medium'>{task.text}</span>
        <button className="px-1 mx-1 bg-blue-300 font-semibold text-sm rounded "onClick={() => setIsEditing(true)}>
          Edit
        </button>
      </>
    );
  }
  return (
    <div className='bg-green-100 rounded m-1 min-w-fit'>
    <label>
      <input
        className='accent-inherit mx-1'
        type="checkbox"
        checked={task.done}
        onChange={e => {
          dispatch({
            type: 'changed',
            task: {
              ...task,
              done: e.target.checked
            }
          });
        }}
      />
      {taskContent}
      <button className="px-1 mx-1 bg-red-300 font-semibold text-sm rounded" onClick={() => {
        dispatch({
          type: 'deleted',
          id: task.id
        });
      }}>
        Delete
      </button>
    </label>
    </div>
  );
}
