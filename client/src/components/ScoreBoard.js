import { useState } from 'react';

const players = [
    {
        id: 0,
        name: "Taylor",
        score: 0,
    },
    {
        id: 0,
        name: "Sarah",
        score: 0,
    }];
export default function ScoreBoard(){
    const [scores, setScores] = useState(players);
    const [isPlayerA, setIsPlayerA] = useState(true);
    let totalScores = [0,0];
}


function Counter({ person, score }){

}