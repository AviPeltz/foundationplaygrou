import { useRef } from 'react';

export default function RefFocus(){
    const inputRef = useRef(null);

    function handleClick(){
        inputRef.current.focus();   
    }
    return(
        <div>
            <input ref={inputRef} className='p-1 m-1 rounded'/>
            <button onClick={handleClick}  className='m-1 p-1 bg-blue-300 rounded'>
                focus input
            </button>
        </div>
    );
}