import { useState } from 'react';


export default function Textbox(){
    const [isSent, setIsSent] = useState(false);
    const [message, setMessage] = useState('Hi!');
    if(isSent){
        return<h1>Your message is on its way!</h1>
    }
    return(
        <form className="bg-gray-100 border rounded-md p-2 m-1" onSumbit = {(e) => {
            e.preventDefault();
            setIsSent(true);
            sendMessage(message);
        }}>
            <textarea 
                className="border rounded-md p-2 m-1"
                placeholder="Message"
                value={message}
                onChange={(e) => {setMessage(e.target.value)}}
                />
            <button className="bg-blue-100 m-1 rounded px-1" type="submit">Send</button>
        </form>
    );


}

function sendMessage(){

}