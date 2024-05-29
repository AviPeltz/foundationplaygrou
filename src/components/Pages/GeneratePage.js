import { useState, useEffect } from 'react';
import TensorIcon from "../../assets/TensorIcon";
import "../../App.css";
import { Button } from "../Buttons";
import { ProjectNav } from './ProjectsPage';

import Tabs from '../Tabs';
/**
 * - ✅ NavBar
 *      - ✅ NavBrand
 *      - ✅ NavLinks
 *      - AvatarDropdown 
 * - GenerateSection
 *    - ✅ GenerateHeading
 *    - GenerateForm
 *      - GenerateInput
 *      - GenerateTabs
 *      - GeneratePublicButton
 *      - GenerateSubmitButton
 *         
 * - ExploreSection
 *     - ExploreHeading
 *          - ExploreSearch
 *          - FilterTabs
 *     - ExploreGallery
 *          - ProjectCard
 *              - 
 */



const navItems =[
    {
        name: "Generate",
        link: "/generate",
        isSelected: true,
    },
    {
        name: "Explore",
        link: "/explore",
        isSelected: false,
    },
    {
        name: "Forums",
        link: "/forums",
        isSelected: false,
    },
    {
        name: "Pricing",
        link: "/pricing",
        isSelected: false,
    },
];



const heroSection = [
    {
        id: 0,
        title: "Generate. Iterate. Ship.",
        description: "Generate UI with shadcn/ui from simple text prompts",
    }
];
const userAvatar = [
    {
        id: 0,
        name: "Avi Peltz",
        avatarURL:"https://i.imgur.com/RCwLEoQm.jpg",
        navItems: null,
    }
];
const userPrompt = [{
    id: 0,
    prompt: "A SaaS admin dashboard",
    dateCreated: "2024-05-07 14:36:19.842312",
    lastEdited: "2024-05-07 14:36:19.842312",
}];

export default function GeneratePage(){
    return(
        <>
        <ProjectNav navItems={navItems}/>
        <GenerateSection heroSection={heroSection[0]} />
        <ExploreSection />
        </>
    );

}

export function ExploreSection(){
    return(
        <div className='exploreSection'>
           <h1 className="exploreHeading">Explore</h1>
           <Tabs /> 
           <ExploreGallery />
        </div>
    );
}

export function ExploreGallery(){
    return(
        <div className='exploreGalleryContainer'>
            <div className='exploreGalleryRow'>
                <div className='genCard'>
                    <div className='genThumbnail'>
                        <img className='genThumbnail' src="#" alt='generated thumbnail image'/>
                        <div className='socials'></div>
                        
                    </div>
                    <div className='genContent'>
                        <div className='author'></div>
                        <div className='promptContent'>
                            <div className='Prompt'></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='exploreGalleryRow'>

            </div>
            
        </div>
    );
}


export function GenerateSection({ heroSection }){
    
    return(
        <div className='generateSection'>
            <GenerateHero heroSection={heroSection} />
        </div>
    );
}

export function GenerateHero({ heroSection }){

    return(
        <div className='generateHero'>
            <div>
                <h1 className='generateHero'>{heroSection.title}</h1>
            </div>
            <div>
                <h4 className='generateHero'>{heroSection.description}</h4>
            </div>
        
            <GenerateForm />
        </div>
    );
}
export function GenerateForm(){
    const [prompt, setPrompt] = useState({
        id: 0,
        prompt: "A SaaS admin dashboard",
        dateCreated: "2024-05-07 14:36:19.842312",
        lastEdited: "2024-05-07 14:36:19.842312",
        publicStatus: true,
        modelType: "Fast",

    });

    function handleChange(e){
        setPrompt({
            ...prompt,
            [e.target.name]: e.target.value,
        });
    }
    return(
        <div>
            <form className='generateForm'>
                    <input
                        className='generateInput'
                        onChange={handleChange}
                        type="text"
                        name="prompt"
                        value={prompt.prompt}
                    />
                    <div className='lowerRow'>
                        <input type="checkbox" role="switch" className="toggle"/>
                        <div>
                            {/*<input type="radio" id="fast" name="modelType" value="Fast" checked={prompt.modelType === "Fast"} onChange={handleChange}/>*/}
                            <button className='submitButton'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12.562 5.24979L19.312 11.9998L12.562 18.7498" stroke="#3E8AFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M18.3752 12H4.6877" stroke="#3E8AFB" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
            </form>
        </div>
    );


}




