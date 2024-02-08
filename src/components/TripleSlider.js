import { useState } from 'react';

let initialSettings = [50, 50, 50];
export default function TripleSlider(){
    const [writingSettings, setWritingSettings] = useState(initialSettings);

    return(
        <aside>
            <div>
                <input type="range" min="0" max="100" value={writingSettings[0]} name="consciseness"/>
                <label>Consciseness</label>
            </div>
            <div>
                <input type="range" min="3" max="100" value={writingSettings[0]} name="consciseness"/>
                <label>Reading Age</label>
            </div>
            <div>
                <input type="range" min="0" max="100" value={writingSettings[0]} name="consciseness"/>
                <label>Consciseness</label>
            </div>
            

        </aside>
    );
}