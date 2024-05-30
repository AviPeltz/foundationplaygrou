import { useState } from 'react';
/// Counter -> with different Styles
/// ScoreBoard -> Switch off players ScoreBoard app
/// 

export default function App(){
    const [showB, setShowB] = useState(true);

    return(
        <div className='container'>
            <Counter />
            {showB && <Counter />}
            
        </div>
    );

}
function Counter(){
    const [score, setScore] = useState(0);
    const [hover, setHover] = useState(false);
    
    let className = 'counter';
    if(hover){
        className+= ' hover';
    }
    return(
        <div 
        className={className}
        onPointerEnter={() => setHover(true)}
        onPointerLeave={() => setHover(false)}>
            <h2>{score}</h2>
            <button
                onClick={() => setScore(score + 1)}>
                Add one
            </button>
        </div>
    );
}