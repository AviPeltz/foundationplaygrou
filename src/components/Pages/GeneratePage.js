import { useState, useEffect } from 'react';
import TensorIcon from "../../assets/TensorIcon";
import "../../App.css";
import { Button } from "../Buttons";
import { ProjectNav } from './ProjectsPage';
/**
 * - ✅ NavBar
 *      - ✅ NavBrand
 *      - ✅ NavLinks
 *      - AvatarDropdown 
 * - GenerateSection
 *    - GenerateHeading
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
]
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

export default function GeneratePage(){
    return(
        <>
            <ProjectNav navItems={navItems}/>
            <GenerateSection heroSection={heroSection[0]} />
        </>
    );

}

export function GenerateSection({ heroSection }){
    
    return(
        <div>
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
            <div>
                <GenerateForm />
            </div>
        </div>
    );
}
export function GenerateForm(){


}




