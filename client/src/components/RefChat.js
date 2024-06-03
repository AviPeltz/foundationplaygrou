import {useState, useRef} from 'react';

export default function RefChat(){
    const [messages, setMessages] = useState([]);
    const [isSending, setIsSending] = useState(false);
    
    let timeoutIDRef = useRef(null);

    return(
    <div>

    </div>
    );
}