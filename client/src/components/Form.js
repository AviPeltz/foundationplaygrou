import { useState } from 'react';
import { Button } from "./Buttons";

export default function Form(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    function handleFirstNameChange(e){
        setFirstName(e.target.value);
    }
    function handleLastNameChange(e){
        setLastName(e.target.value);
    }
    function handleReset(){
        setFirstName('');
        setLastName('');
    }
    
    return(
        <div className='container border rounded p-2 shadow'>
            <form className='flex flex-col'>
            <h1 className='font-semibold'>Form:</h1>
            <input
                className='border rounded-md p-2 m-1'
                placeholder="First name"
                value={firstName}
                onChange={handleFirstNameChange}
            />
            <input
                className='border rounded-md p-2 m-1'
                placeholder="Last name"
                value={lastName}
                onChange={handleLastNameChange}
            />
            <h1 className='font-semibold'>Hi, {firstName} {lastName}</h1>
            <Button onClick={handleReset}>Reset</Button>
            </form>
        </div>
    );
}