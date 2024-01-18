function Cup({ guest }) {
    return <h2 className='text-md font-normal text-blue-500'>Tea cup for guest #{guest}</h2>;
  }
  
export default function TeaGathering() {
    let cups = [];
    for (let i = 1; i <= 12; i++) {
        cups.push(<Cup key={i} guest={i} />);
    }
    return(
        <div className="container">{cups}</div>
    );
}