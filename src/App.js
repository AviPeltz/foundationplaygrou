import React from 'react';
import './App.css';

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
  return (
    <section className='mx-auto grid justify-center'>
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
    </section>
  );
}