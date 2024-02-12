import React from 'react';
import TeaGathering from '../TeaGathering';
import Clock from '../Clock';
import Gallery from '../Gallery';
import  { Button, AlertButton, PlayButton, ButtonPropagator }  from '../Buttons';
import { sample_people } from '../../data/sample_people';

import { getImageUrl } from '../../utils/utils';
import Signup from '../Signup';
import Form from '../Form';
import LevelPage from './LevelPage';
import Textbox from '../Textbox';
import ContactForm from '../ContactForm';

import  BadStateCounter, { GoodStateCounter } from '../StateCounter';
import Accordion from '../SharedState';
import MyNavBar from '../MyNavBar';
import ImmerForm from '../ImmerForm';
import SpreadList from '../SpreadList';
import TripleSlider from '../TripleSlider';
import CityQuiz from '../CityQuiz';

import '../../App.css';


function ChemistList(){
  const chemists = sample_people.filter(chemist => chemist.profession === 'chemist');
  const chemistList = chemists.map(chemist => 
    <li 
      key={chemist.id}
      className='p-4 items-center grid grid-cols-[100px_1fr]  shadow-sm m-2 border rounded-md border-gray-200 '>
      <img 
        className='rounded-full w-24 h-24'
        src={getImageUrl(chemist.imageId)}
        alt={chemist.name}
        />
      <p className=''><b className='text-bold'>{chemist.name}</b>:
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
function ToolBarEventPropagator(){
  return(
    <div className="container p-3 rounded-md m-2 bg-slate-200" onClick={() => {alert('You clicked the toolbar :)')}}>
      <h1 className='font-bold text-xl text-fuchsia-500'>Event propagating buttons:</h1>
      <button className="bg-blue-300 shadow-md hover:shadow-none hover:bg-blue-400 rounded p-1" onClick={()=>alert("you clicked a button")}>
        vanilla button
      </button>
      <ButtonPropagator onClick={() => alert('Custom button!')}>
        new button
      </ButtonPropagator>
    </div>
  );
}
function ToolBarEventStopped(){
  return(
    <div className="container p-3 rounded-md m-2 bg-slate-200" onClick={() => {alert('You clicked the toolbar :)')}}>
      <h1 className='font-bold text-xl text-fuchsia-500'>Event stopped buttons:</h1>
      <Button onClick={() => alert('Custom button!')}>
        Custom button
      </Button>
      <Button onClick={() => alert('new button')}>
        new button
      </Button>
    </div>


  );
}

export default function MainApp() {
  return (
    <>
    <MyNavBar />
    <section className='mx-auto grid justify-center'>
      <ToolBarEventStopped />
      <ToolBarEventPropagator />
      <div className='container p-3'>
        <Button onClick={() => alert('Custom button!')}>
          my custom button
        </Button>
        <PlayButton movieName="Kung fu panda" />
        <AlertButton message='Hello World!'>
          Click me
        </AlertButton>
        <AlertButton message='world wassup!'>
          No Click me!
        </AlertButton>
      </div>
      <div className='container p-3'>
        <Clock />
      </div>
      <Form />
      <BadStateCounter />
      <GoodStateCounter />
      <Gallery />
      <Signup />
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
      <LevelPage />  
      <div className='container p-3'>
        <Textbox />
      </div>
      <div className='container p-3'>
        <Accordion />
      </div>
      <div className='container p-3'>
        <ContactForm /> 
      </div>
      <div className='container p-3'>
         <ImmerForm />
      </div>
      <div className='container p-3'>
        <SpreadList />
      </div>
      <div className='container p-3'>
        <TripleSlider />
      </div>
      <div className='container p-3'>
        <CityQuiz />
      </div>
      

    </section>
    </>
  );
}