import { useState } from 'react';

export default function AddSimpleTask(handleClick){
    const [text, setText] = useState("");
    return(
        <div>
            <input 
                placeholder="new task..."
                className="border m-1 p-1 rounded"
                value={text}
                onChange={e => setText(e.target.value)} />
            <button
                className="m-1 p-1 bg-blue-300 rounded"
                onClick={handleClick}
            >
                add task
            </button>
        </div>
    );

}