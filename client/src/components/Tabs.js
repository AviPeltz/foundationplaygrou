import { useState } from 'react';

const tabs = [
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
    }
];
export default function Tabs(){
    const [selectedTab, setSelectedTab] = useState(tabs[0]);
    return(
        <div className='sliderContainer'>
            <div className='tabSlider'>
                <div className='tabLinkSelected'>
                    <button>Featured</button>
                </div>
                <div className='tabLinkUnselected'>
                    <button>Recent</button>
                </div>
                <div className='tabLinkUnselected'>
                    <button>Trending</button>
                </div>
                <div className='tabLinkUnselected'>
                    <button>Your Work</button>
                </div>
            </div>
        </div>
    );
    
}
