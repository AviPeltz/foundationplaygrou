import { useState } from "react";

export function ButtonPropagator({onClick, children}) {
    return (
      <button onClick={onClick} className='bg-blue-500 hover:bg-blue-700 m-1 text-white font-bold py-2 px-4 rounded'>
        {children}
      </button>
    );
}

export function Button({onClick, isDisabled = false, children}) {
  const [disabled, setDisabled] = useState(isDisabled);
  const buttonStyleOne = "bg-white hover:bg-slate-50 rounded-md px-2 py-1 m-1 border shadow active:shadow-none hover:bg-slate-5 disabled:shadow-none disabled:bg-gray-300";  
  
  function handleDisabled(){
    setDisabled(isDisabled);
  }

  return (
    // fix the disabled thing -> also maybe move away from tailwind or just get really good at it?
    // or make your own components style library
    // or radix ui
    <button className={buttonStyleOne} 
            disabled={disabled}
            onClick={e =>{
              e.stopPropagation();
              onClick();
              handleDisabled();
    }}
    >
      {children}
    </button>
  );
}

export function PlayButton({movieName}){
  function handlePlayButtonClick(){
    alert(`Playing ${movieName}`);
  }
  return(
    <Button onClick={handlePlayButtonClick}>
      Play {movieName}
    </Button>
  );
}
export function AlertButton({ message, children }){
  return(
    <button onClick={() =>alert(message)} className="border shadow rounded-md p-2 m-1 active:shadow-none hover:bg-slate-50">
      {children}
    </button>
  );

}