import { Link } from 'react-router-dom';

export default function MyNavBar(){
    return(
        <section>
            <div className='px-1 py-2 m-1 border rounded bg-blue-100'>
                <span className="font-bold px-3 hover:text-gray-600"><Link to="/">Home</Link></span>
                <Link className="font-medium bg-white text-gray-700 hover:text-blue-600 hover:bg-slate-100 border m-1 p-1 rounded"to="/task">tasks</Link>
                <Link className="font-medium bg-white text-gray-700 hover:text-blue-600 border m-1 p-1 rounded"to="/level">Level App</Link>
                <Link className="font-medium bg-white text-gray-700 hover:text-blue-600 border m-1 p-1 rounded"to="/canvas">Canvas App</Link>
                <Link className="font-medium bg-white text-gray-700 hover:text-blue-600 border m-1 p-1 rounded"to="/project">TensorMaker</Link>
                <Link className="font-medium bg-white text-gray-700 hover:text-blue-600 border m-1 p-1 rounded"to="/generate">Generate</Link>

            </div>
        </section>
    );
}