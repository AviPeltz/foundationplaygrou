import { useRef } from 'react';

export default function RefCounter(){
    let ref = useRef(0);

    function handleClick(){
        ref.current++;
        alert('You clicked the button ' + ref.current + ' times!');
    }
    return(
        <div>
        <button onClick={handleClick} className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Click me!
        </button>
        </div>
    );
}