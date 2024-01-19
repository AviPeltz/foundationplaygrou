
export function Button({onClick, children}) {
    return (
      <button onClick={onClick} className='bg-blue-500 hover:bg-blue-700 m-1 text-white font-bold py-2 px-4 rounded'>
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