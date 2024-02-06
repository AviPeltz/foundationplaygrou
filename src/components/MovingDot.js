import { useState } from 'react';

export default function MovingDot() {
    const [position, setPosition] = useState({ 
        x: 0, 
        y: 0 
    });
    return(

        <div
            onPointerMove={ e =>{
                setPosition({
                    x: e.clientX,
                    y: e.clientY
                });
            }}
            style={{
                position: 'relative',
                width: '80vw',
                height: '80vh',
                marginLeft: 'auto',
                marginRight: 'auto',
                backgroundColor: 'lightgrey',
                borderRadius: '10px',
                border: '1px solid #b2b7bf',
            }}>
            <div style={{
                position: 'absolute',
                backgroundColor: 'red',
                borderRadius: '50%',
                transform: `translate(${position.x-100}px, ${position.y-100}px)`,
                left: -10,
                top: -10,
                width: 20,
                height: 20,
            }} />
        </div>
    );

}