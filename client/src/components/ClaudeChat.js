import { useState } from "react";
import ScrollToBottom from 'react-scroll-to-bottom';


export default function ClaudeChat(){
    const [query, setQuery] = useState("");
    const [chatStatus, setChatStatus] = useState("idle"); // idle, loading, success, error
    const [chatHistory, setChatHistory] = useState([{type: "system", text: "hey there"}]);

    function handleSend(){
        if(query === "") return;
        setChatHistory([...chatHistory, {type: "user", text: query}]);
        setQuery("");
    }
    function handleKeyPress(event) {
        if (event.key === 'Enter') {
            handleSend();
        }
    }

    return(
        <div className="m-2">
            <h1 className="font-md text-lg text-center">Claude Chat</h1>
            <div>
                <ScrollToBottom className="border border-gray-300 flex flex-col rounded h-96 my-2 p-2 bg-white overflow-y-scroll">
                    {chatHistory.map((chat, index) => {
                        if(chat.type === "user"){
                            return(
                            <div key={index} className="text-right m-1">
                                <span className="bg-blue-500 text-white py-0.5 px-1 rounded">
                                    {chat.text}
                                </span>
                            </div>);
                        } else {
                            return(
                                <div key={index} className="text-left m-1">
                                    <span className="bg-gray-300 py-0.5 px-1 rounded">
                                        {chat.text}
                                    </span>
                                </div>
                            );
                        }
                    })}
                </ScrollToBottom>
            </div>
            {/* Input Section */}
            <div className="flex">
                <input className="border border-gray-300 rounded w-full p-2"
                    type="text" 
                    placeholder="ask something" 
                    value={query} 
                    onChange={(e) => setQuery(e.target.value)} 
                    onKeyPress={handleKeyPress}
                />
                <button className="bg-blue-500 mx-2 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded"
                    onClick={handleSend}>
                    Send
                </button>
            </div>
        </div>
    );
}