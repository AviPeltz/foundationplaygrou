import { useState } from 'react';

export default function BadStateCounter(){
    const [count, setCount] = useState(0);

    return(
        <div className="container border rounded m-2">
            <p className="font-bold text-lg p-2">Bad State Counter</p>
            <button className="bg-blue-100 m-1 shadow border hover:shadow-none rounded py-1 px-5" 
                    onClick={() => {
                        setCount(count + 1);
                        setCount(count + 1);
                        setCount(count + 1);
                        }}>
                        +3
            </button>
            <h1 className="font-bold text-lg p-2">Count: {count}</h1>
        </div>
    );

}
export function GoodStateCounter(){
    const [count, setCount] = useState(0);

    return(
        <div className="container border rounded m-2">
            <p className="font-bold text-lg p-2">Good State Counter</p>
            <button className="bg-blue-100 m-1 shadow border hover:shadow-none rounded py-1 px-5" 
                    onClick={() => {
                        setCount(count + 3);
                        }}>
                        +3
            </button>
            <h1 className="font-bold text-lg p-2">Count: {count}</h1>
        </div>
    );

}