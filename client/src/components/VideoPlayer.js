import { useEffect, useRef, useState } from 'react';

export default function Video({ src, isPlaying }){
    const ref = useRef(null);

    if(isPlaying){
        ref.current.play();
    }
    else{
        ref.current.pause();
    }

    return(<video ref={ref} src={src} />);
}
export function VideoPlayer(){};