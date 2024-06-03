import { useRef, useState } from 'react';

export default function Stopwatch(){
    const [startTime, setStartTime] = useState(null);
    const [currentTime, setCurrentTime] = useState(null);
    const intervalRef = useRef(null);
    
    function handleStart(){
        setStartTime(Date.now());
        setCurrentTime(Date.now());

        clearInterval(intervalRef.current);
        intervalRef.current = setInterval(() => {
            setCurrentTime(Date.now());
        }, 10);
    }
    function handleStop(){
        clearInterval(intervalRef.current);
    }
    let secondsPassed = 0;
    if(startTime !== null && currentTime !== null){
        secondsPassed = (currentTime - startTime) / 1000;
    }
    return(
        <div className='p-2 border-double border-4 border-indigo-600 rounded'>
            <h1 className='text-xl font-semibold'>Stopwatch</h1>
            <h2 className='text-lg font-medium'>Time Passed: {secondsPassed.toFixed(3)}</h2>
            <div>
                <button className='rounded bg-green-500 p-2 m-1' onClick={handleStart}>
                    Start
                </button>
                <button className='rounded bg-red-500 p-2 m-1' onClick={handleStop}>
                    Stop
                </button>
                <button className='rounded bg-blue-500 p-2 m-1'>
                    Lap
                </button>
                <button className='rounded bg-gray-400 p-2 m-1'>
                    Reset
                </button>
                
            </div>
        </div>
    );
}