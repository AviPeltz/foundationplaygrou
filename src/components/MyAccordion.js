import { useState } from 'react';

function Panel({title, children}){
    const [show, setShow] = useState(false);
    return(
        <div className=''>
            <h2>{title}</h2>
            {!show ? 
                <button className="bg-blue-200 border rounded p-1"
                        onClick={() => setShow(true)}>
                show
                </button> : 
                <div>{children}
                    <button className="bg-blue-200 border rounded p-1"
                                        onClick={() => setShow(false)}>
                                hide
                    </button>
                </div>}
        </div>
    );
}
export default function MyAccordion() {
    return(
        <div>
            <Panel title="About">Some fuckin content</Panel>
            <Panel title="Other">some othercontent</Panel>
        </div>
    );

}