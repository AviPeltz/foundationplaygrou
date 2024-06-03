import {useState, useRef} from 'react';


export default function UpdateAfterSend(){
    const [text, setText] = useState('');
    let textRef = useRef(text);

    function handleChange(e){
        setText(e.target.value);
        textRef.current = e.target.value;
    }
    function handleClick(){
        setTimeout(() => {
            alert('You sent: ' + textRef.current);
        }, 3000);

    }
    return(
        <div cl>
            <h1>Chat updates also after sent</h1>
            <input 
                className='rounded p-2'
                value={text}
                onChange={handleChange}
                />
            <button className='bg-green-400 rounded p-2 m-2' onClick={handleClick}>Send</button>
        </div>

    );
}