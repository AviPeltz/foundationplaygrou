import { useState, useRef, useEffect } from 'react';

function VideoPlayer({ src, isPlaying }){
    const ref = useRef(null);

    useEffect(() => {
        if(isPlaying){
            ref.current.play();
        }
        else{
            ref.current.pause();
        }
    }, [isPlaying]);
    return(<video ref={ref} src={src} loop playsInline />);
}

export default function EffectPlayer(){
    const [isPlaying, setIsPlaying] = useState(false);
    return(
        <div className='m-1 p-1'>
            <button onClick={() => setIsPlaying(!isPlaying)} className='m-1 p-1 px-2 bg-blue-300 rounded'>
                {isPlaying ? 'Pause' : 'Play'}
            </button>
            <VideoPlayer isPlaying={isPlaying} src="https://www.w3schools.com/html/mov_bbb.mp4" />
        </div>
    );
}