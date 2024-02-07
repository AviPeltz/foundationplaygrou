import { useState  } from 'react';


export default function ContactForm() {
    const [person, setPerson] = useState({
        firstName: 'Barbara',
        lastName: 'Hepworth',
        email: 'bhepworth@sculpture.com',
    });
    /*
    function handleFirstNameChange(e){
        setPerson({...person, firstName: e.target.value});
    }
    function handleLastNameChange(e){
        setPerson({...person, lastName: e.target.value});
    }
    function handleEmailChange(e){
        setPerson({...person, email: e.target.value});
    }*/
    function handleChange(e){
        setPerson({
            ...person,
            [e.target.name]: e.target.value
        });
    }


    return(
        <div className='w-full max-w-xs'>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>First Name: </label>
                    <input className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='text' 
                            name='firstName'
                            placeholder='First Name' 
                            value={person.firstName} 
                            onChange={handleChange}/>
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Last Name: </label>
                    <input className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='text' 
                            name='lastName'
                            placeholder='Last Name' 
                            value={person.lastName} 
                            onChange={handleChange}/>
                </div>
                <div className='mb-8'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Email: </label>
                    <input className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='email' 
                            name='email'
                            placeholder='Email' 
                            value={person.email} 
                            onChange={handleChange}/>
                </div>
                <p className='font-semibold'>{person.firstName+ " " + person.lastName + " " + person.email}</p>
            </form>
        </div>
    );
}