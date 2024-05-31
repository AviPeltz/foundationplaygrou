import { useRef } from 'react';

export default function NewRefCounter(){
    let ref = useRef(0);

    function handleClick(){
        ref.current += 1;
        alert('You clicked ' + ref.current + ' times!');
    }

    return(
        <div className='p-2'>
            <p>Counter Value this wont update: <b className='text-bold'>{ref.current}</b></p>
            <button className='bg-blue-500 rounded p-2 text-white' onClick={handleClick}>Click +1</button>
        </div>
    );
}