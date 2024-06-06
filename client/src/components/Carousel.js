import { useRef } from 'react';

export default function Carousel() {
    let cardOne = useRef(null);
    let cardTwo = useRef(null);
    let cardThree = useRef(null);

    function handleCardOne(){
        cardOne.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'center'
        })
    }
    function handleCardTwo(){
        cardTwo.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'center'
        })
    }
    function handleCardThree(){
        cardThree.current.scrollIntoView({
            behavior: 'smooth',
            block: 'end',
            inline: 'center'
          });
    }
    return(
        <div>
            <button 
                onClick={handleCardOne}
                className='bg-gray-300 hover:bg-gray-400 p-2 rounded m-2'>
                Card One
            </button>
            <button 
                onClick={handleCardTwo}
                className='bg-gray-300 hover:bg-gray-400 p-2 rounded m-2'>
                Card Two
            </button>
            <button 
                onClick={handleCardThree}
                className='bg-gray-300 hover:bg-gray-400 p-2 rounded m-2'>
                Card Three
            </button>
            <div className='block'>
                <ul className='block  whitespace-nowrap overflow-hidden'>
                    <li className='p-2 m-2 rounded'>
                        <img 
                            src="https://placehold.co/200/blue/green" 
                            alt="Card One" 
                            ref={cardOne}/>
                    </li>
                    <li className='p-2 m-2 rounded'>
                        <img 
                            src="https://placehold.co/200/blue/red" 
                            alt="Card Two" 
                            ref={cardTwo}/>

                    </li>
                    <li className='p-2 m-2 rounded'>
                        <img 
                            src="https://placehold.co/200/blue/yellow" 
                            alt="Card Three" 
                            ref={cardThree}/>
                    </li>
                </ul>
            </div>
        </div>
    );
}