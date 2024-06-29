import { useState, useRef } from "react";

export default function UndoChat(){
    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);

    function handleSend(){

    }
    function handleUndo(){

    }
    return(
        <div className="">
            <h1 className="font-bold text-xl">Undo Chat</h1>
            <input type="text" 
                    value={text}
                    onChange={e => setText(e.target.value)}
                    className="" 
            />
            <button className=""
                    onClick={handleSend}>
            {isSending ? "Sending..." : "Sent"}
            </button>
            {isSending && 
            <button className=""
                    onClick={handleUndo}>
            Undo
            </button>}
        </div>
    );
}