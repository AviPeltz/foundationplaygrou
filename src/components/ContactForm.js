import { useState  } from 'react';


export default function ContactForm() {
    const [name, setName] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',
    });
    function handleFirstNameChange(e){
        setName({...name, firstName: e.target.value});
    }
    function handleLastNameChange(e){
        setName({...name, lastName: e.target.value});
    }
    function handleEmailChange(e){
        setName({...name, email: e.target.value});
    }

    return(
        <div className='w-full max-w-xs'>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>First Name: </label>
                    <input className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='text' 
                            placeholder='First Name' 
                            value={name.firstName} 
                            onChange={handleFirstNameChange}/>
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>First Name: </label>
                    <input className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='text' 
                            placeholder='Last Name' 
                            value={name.lastName} 
                            onChange={handleLastNameChange}/>
                </div>
                <div className='mb-8'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>First Name: </label>
                    <input className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='email' 
                            placeholder='Email' 
                            value={name.email} 
                            onChange={handleEmailChange}/>
                </div>
            </form>
            <div>
                <p></p>
            </div>
        </div>
    );
}