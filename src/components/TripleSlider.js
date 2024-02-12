import { useState } from 'react';

let initialSliderSettings = [
    {id: 0, name: "consciseness", value: 50}, 
    {id: 1, name: "formality", value: 50},
    {id: 2, name: "reading_age", value: 20}
];
export default function TripleSlider(){
    const [writingSettings, setWritingSettings] = useState(initialSliderSettings);

    function handleSliderChange(e){
        const newSettings = writingSettings.map(setting => {
            if(setting.name !== e.target.name){
                // no change
                return setting;   
            }
            else{
                // change this setting
                return {...setting, value: e.target.value};
            }
        });
        
        setWritingSettings(newSettings);
    }

    return(
        <aside className='border rounded p-2 w-fit'>
            <div className='mx-1 my-2 w-full'>
                <h2 className='font-semibold'>Consciseness: </h2>
                <label className='p-1'>Bulleted</label>
                <input type="range" 
                        min="0" max="100" 
                        name="consciseness" 
                        value={writingSettings[0].value}
                        className='w-auto h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700'
                        onChange={handleSliderChange}/>
                <label className='p-1'>Verbose</label>
            </div>

            <div className='mx-1 my-2'>
                <h2 className='font-semibold'>Formality: </h2>
                <label className='p-1'>Casual</label>
                <input type="range" 
                        min="0" max="100" 
                        name="formality" 
                        className='w-auto h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700'
                        value={writingSettings[1].value}
                        onChange={handleSliderChange}/>
                <label className='p-1'>Formal</label>
            </div>
            <div className='mx-1 my-2'>
                <h2 className='font-semibold'>Reading Age: [ <span className='font-normal text-blue-500'>{writingSettings[2].value}</span> ]</h2>
                <label className='p-1'>6</label>
                <input type="range" 
                        min="6" max="22" 
                        name="reading_age" 
                        className='w-auto h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700'
                        value={writingSettings[2].value}
                        onChange={handleSliderChange}
                        />
                <label className='p-1'>22+</label>
            </div>
        </aside>
    );
}