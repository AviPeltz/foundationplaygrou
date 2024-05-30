import TensorIcon from "../../assets/TensorIcon";
import "../../App.css";
import { useState } from 'react';
/**
 * - NewProjectNav
 *      - BackButton
 *      - NavBrand
 *      - AvatarDropdown -> from ProjectPage
 * - NewProjectForm 
 *      - NewProjectHeading
 *      - ProjectNameForm
 *      - ProjectTypeForm
 *      - ClassesInputForm
 *      - CreateProject Button
 */
export const projectTypes = [
    {
        id: 0,
        name: "Instance Segmentation",
        url:"url",
        description:"pixelwise labels of each objects",
    },
    {
        id: 1,
        name: "Bounding-Box Detection",
        url:"url",
        description:"pixelwise labels of each objects",
    },
    {
        id: 2,
        name: "Semantic Segmentation",
        url:"url",
        description:"pixelwise labels of each objects",
    },
    {
        id: 3,
        name: "Binary Classification",
        url:"url",
        description:"pixelwise labels of each objects",
    },
    {
        id: 4,
        name: "Multi-label Classification",
        url:"url",
        description:"pixelwise labels of each objects",
    },
]
export const newProjectFormResults = [
    {
        id: 0,
        projectName: "My First Project",
        projectType: "Instance Segmentation",
        classes: ["class1", "class2", "class3"],
        dateTimeCreated: '2024-05-07 14:36:19.842312',
    }
];

export default function NewProject(){
    const [isValid, setIsValid] = useState(false);
    const [formStates, setFormStates] = useState([false, false, false]);
    return(
        <>
            <NewProjectNav />
            <NewProjectHeading />
        
        </>
    );
}

export function NewProjectNav(){
    return(
        <div>
            {/* <- Projects (BackButton) */}
            {/* NavBrand */}
            {/* AvatarDropdown */}
        </div>
    );
}
export function NewProjectForm(){
    return(
        <div>
            <NewProjectHeading />
            <ProjectNameForm />
            <ProjectTypeForm />
            <ClassesInputForm />
            <CreateProjectButton />
        </div>
    );
}
export function NewProjectHeading({handleExit}){
    return(
        <div className="newProjectHeading">
            <h1 className="newProjectHeading">New Project</h1>
            <button className="newProjectHeading" onClick={handleExit}>
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50" fill="none">
                    <path d="M33.75 18.0125L31.9875 16.25L25 23.2375L18.0125 16.25L16.25 18.0125L23.2375 25L16.25 31.9875L18.0125 33.75L25 26.7625L31.9875 33.75L33.75 31.9875L26.7625 25L33.75 18.0125Z" fill="#212936"/>
                </svg>
            </button>
        </div>
    );
}

export function ProjectNameForm(){
    const [isValid, setIsValid] = useState(false);
    return(
        <div className="newProjectNameForm">
            <h3 className="newProjectNameForm">Project name</h3>
            {isValid ? <p>Check</p> : <p>X</p>}
            <input className="newProjectNameForm" type='text' placeholder="My First Project" />
        </div>
    );
}
export function ProjectTypeForm({ projectTypes, fornStateHandler }){
    {/* also could pass the state handler for the shared state in the parent */}
    const [isValid, setIsValid] = useState(false);
    return(
        <div>
            Project Type Form
        </div>
    );
}
export function ClassesInputForm(){
    const [text, setText] = useState("");
    return(
        <div>
            classes form
        </div>
    );
}
export function CreateProjectButton({handleClick}){
    return(
        <button onClick={handleClick}>Create Project</button>
    );
}
