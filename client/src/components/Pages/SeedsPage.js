import { useEffect, useState } from "react";
import ClaudeChat from "../ClaudeChat";
import MyNavBar from "../MyNavBar";


export default function SeedsPage(){
    return(
        <div>
            <MyNavBar />
            <ClaudeChat />  
        </div>
    );
}