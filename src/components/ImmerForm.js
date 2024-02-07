import { useImmer } from "use-immer";

export default function ImmerForm(){
    const [person, updatePerson] = useImmer({
        name:'Niki de Saint Phalle',
        artwork: {
          title: 'Blue Nana',
          city: 'Hamburg',
          image: 'https://i.imgur.com/Sd1AgUOm.jpg',
        }
    });
    function handleNameChange(e){
        updatePerson(draft => {
            draft.name = e.target.value;
        });
    }
    function handleTitleChange(e){
        updatePerson(draft =>{
            draft.artwork.title = e.target.value;
        });
    }
    function handleCityChange(e){
        updatePerson(draft =>{
            draft.artwork.city = e.target.value;
        });
    }
    function handleImageChange(e){
        updatePerson(draft =>{
            draft.artwork.image = e.target.value;
        });
    }
    /*
    for now this Idk how to make this work
    function handleChange(e){
        
        updatePerson(draft =>{
            [draft.e.target.name] = e.target.value;
        });
    }
    */


    return(
        <div className='w-full max-w-xs'>
            <form className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
                <div className='mb-4'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Name: </label>
                    <input className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='text' 
                            name='name'
                            placeholder='Name' 
                            value={person.name} 
                            onChange={handleNameChange}/>
                </div>
                <div className='mb-6'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Title: </label>
                    <input className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            type='text' 
                            name='artwork.title'
                            placeholder='Artwork title' 
                            value={person.artwork.title} 
                            onChange={handleTitleChange}/>
                </div>
                <div className='mb-8'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>City: </label>
                    <input className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            name='artwork.city'
                            placeholder='City' 
                            value={person.artwork.city} 
                            onChange={handleCityChange}/>
                </div>
                <div className='mb-8'>
                    <label className='block text-gray-700 text-sm font-bold mb-2'>Image: </label>
                    <input className='shadow appearance-none border rounded-md w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' 
                            name='artwork.image'
                            placeholder='Image Url' 
                            value={person.artwork.image} 
                            onChange={handleImageChange}/>
                </div>
                <p className='font-bold'>{person.name}</p>
                <p className='font-semibold'> {person.artwork.title + " " + person.artwork.city}</p>
                <img src={person.artwork.image} width='200' height='200' alt="persons artwork"/>
            </form>
        </div>
    );
    
}