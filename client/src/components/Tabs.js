import { useState } from 'react';

const initialTabs = [
    {
        id: 0,
        name:"Featured",
        link:"link",
        isSelected: true,
    },
    {
        id: 1,
        name:"Recent",
        link:"link",
        isSelected: false,
    },
    {
        id: 2,
        name:"Trending",
        link:"link",
        isSelected: false,
    },
    {
        id: 3,
        name:"Your Work",
        link:"link",
        isSelected: false,
    },
];
export default function Tabs(){
    const [tabs, setTabs] = useState(initialTabs);
    const [selectedTab, setSelectedTab] = useState(0);

    function handleClick(e){
        setSelectedTab(e.target.key);
        const newTabs = tabs.map(tab => {
            if(tab.id === selectedTab) {
                return {
                    ...tab,
                    isSelected: true
                };
            }
            else{
                return {
                    ...tab,
                    isSelected: false
                };
            }
        });
        setTabs(newTabs);
    }
    {/* doesnt work :( */}
    return(
        <div className='sliderContainer'>
            <div className='tabSlider'>
                {tabs.map(tab => (
                    <div key={tab.id} className={(selectedTab === tab.id) ? 'tabLinkSelected' : 'tabLinkUnselected'}>
                        <button key={tab.id} onClick={handleClick}>{tab.name}</button>
                    </div>
                    
                ))}

            </div>
        </div>
    );
    
}
