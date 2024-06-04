import { useRef } from 'react';

export default function FocusInput(){  
    let inputRef = useRef(null);

    function handleFocusClick(){
        inputRef.current.focus();
    }
    function handleBlurClick(){
        inputRef.current.blur();
    }
    return(
        <div>
            <input ref={inputRef} className='rounded p-2' />
            <button className='bg-green-400 rounded p-2 m-2' onClick={handleFocusClick}>Focus</button>
            <button className='bg-red-400 rounded p-2 m-2' onClick={handleBlurClick}>Blur</button>
        </div>
    );
}