import React from 'react';
import TeaGathering from './TeaGathering';
import Clock from './Clock';
import './App.css';


function FriendsList(){
  const friends = [
    'Creola Katherine Johnson: mathematician',
    'Mario José Molina-Pasquel Henríquez: chemist',
    'Mohammad Abdus Salam: physicist',
    'Percy Lavon Julian: chemist',
    'Subrahmanyan Chandrasekhar: astrophysicist'
  ];
  const friendsList = friends.map(friend => <li className='text-semibold font-serif'>{friend}</li>);
  return(
    <div className='border rounded border-cyan-600 px-4'>
      <ol className='list-decimal p-2'>{friendsList}</ol>
    </div>
  );
}

function Recipe({ drinkers }){
  return(
    <ol className='p-4 list-decimal'>
      <li>Boil {drinkers} cups of water.</li>
      <li>Add {drinkers} spoons of tea and {0.5 * drinkers} spoons of spice.</li>
      <li>Add {0.5 * drinkers} cups of milk to boil and sugar to taste.</li>
    </ol>
  );
}

export default function App() {
  const time = new Date();
  return (
    <section className='mx-auto grid justify-center'>
      <div className='container p-3'>
        <Clock time = {time}/>
      </div>
      <div className='container p-4'>
        <h1 className='text-3xl font-bold'>Spiced Chai Recipe</h1>
      </div>
      <div className='container p-3'>
        <h2 className='text-xl font-semibold'>For two</h2>
        <Recipe drinkers={2} />
      </div>
      <div className='container p-3'>
        <h2 className='text-xl font-semibold'>For a gathering</h2>
        <Recipe drinkers={4} />
      </div>
      <div className='container p-3'>
        <h2 className='text-xl font-semibold'>Product List for Tea Set:</h2>
        <TeaGathering />
      </div>
      <FriendsList />
      
    </section>
  );
}