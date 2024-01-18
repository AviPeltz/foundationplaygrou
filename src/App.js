import React from 'react';
import TeaGathering from './components/TeaGathering';
import Clock from './components/Clock';
import { sample_people } from './data/sample_people';
import { getImageUrl } from './utils/utils';
import './App.css';


function ChemistList(){
  const chemists = sample_people.filter(chemist => chemist.profession === 'chemist');
  const chemistList = chemists.map(chemist => 
    <li className='p-4 shadow-sm m-2 border rounded-md border-gray-200'>
      <img 
        className='rounded-full w-24 h-24'
        src={getImageUrl(chemist.imageId)}
        alt={chemist.name}
        />
      <p><b className='text-bold'>{chemist.name}</b>:
      {' ' + chemist.profession + ' '}
      known for {chemist.accomplishment}
      </p>
    </li>
  );
  return(
    <div className='container p-2'>
      <h1 className='text-xl font-bold'>Chemists of Note:</h1>
      <ul className='m-1 p-2 border rounded-md border-gray-400'>
        {chemistList}
      </ul>
    </div>
  );
}
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
    <div className='container border rounded p-4 border-cyan-600 '>
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
      <ChemistList />
    </section>
  );
}