import TensorIcon from "../../assets/TensorIcon";
import PixelWiseIcon from "../../assets/PixelWiseIcon";
import EllipseIcon from "../../assets/EllipseIcon";
import "../../App.css";
import { Button } from "../Buttons";
import NewProject from "./NewProject";
 /**  -ProjectNav
 *      - NavBrand
 *      - NavLinks
 *      - AvatarDropdown
 * - ProjectsHeading
 *      - NewProjectButton
 * - ProjectsGallery
 *  - ProjectCard
 * 
 */
const projectTypes = [
    {
        0: "Instance Segmentation",
        1: "Semantic Segmentation",
        2: "Bounding Box Detection",
        3: "Binary Classification",
        4: "Multi-label Classification",
    }
]
const navItems =[
    {
        name: "Projects",
        link: "/project",
        isSelected: true,
    },
    {
        name: "Docs",
        link: "/docs",
        isSelected: false,
    },
    {
        name: "Forums",
        link: "/forums",
        isSelected: false,
    },
    {
        name: "Help",
        link: "/help",
        isSelected: false,
    },
]
const projects = [
    {
        id: 0,
        name: "My FirstProject",
        type: "PIXELWISE LABELS",
        lastEdited: "January 27, 2024",
        projectImage: "https://i.imgur.com/RCwLEoQm.jpg",

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

export default function ProjectsPage(){
    return(
        <>
            <ProjectNav navItems={navItems}/>
            <ProjectsContent>
                <ProjectsHeading />
                <ProjectsGallery>
                    <ProjectCard project={projects[0]} />
                </ProjectsGallery>
            </ProjectsContent>
        </>
    );
}
export function ProjectNav({ navItems }){
    return(
        <nav className='projectNav'>
            <NavBrand />
            <NavLinks navItems={navItems} />
            <AvatarDropdown avatar={userAvatar[0]} />
        </nav>
    );
}
export function NavBrand(){
    return(
        <a href="/project">
            <TensorIcon />
        </a>
    );
}
export function NavLinks({ navItems }){
    return(
        <div className="navLinks">
            {navItems.map((item) => (
                item.isSelected ? <a key={item.id} href="#" className="navLink_selected">{item.name}</a> : <a key={item.id} href="#" className="navLink">{item.name}</a>
            ))}
        </div>
    );
}
export function AvatarDropdown({ avatar, navItems }){
    return(
    <div className="avatarDropdown">
        <img src={avatar.avatarURL} alt="avatar" className="w-6 rounded"/> 
        <a href="#">{avatar.name}</a>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="17" viewBox="0 0 16 17" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.64645 6.15967C3.84171 5.94678 4.15829 5.94678 4.35355 6.15967L7.64645 9.75C7.84171 9.9629 8.15829 9.9629 8.35355 9.75L11.6464 6.15968C11.8417 5.94678 12.1583 5.94678 12.3536 6.15968C12.5488 6.37257 12.5488 6.71775 12.3536 6.93065L9.06066 10.521C8.47487 11.1597 7.52513 11.1597 6.93934 10.521L3.64645 6.93065C3.45118 6.71775 3.45118 6.37257 3.64645 6.15967Z" fill="black"/>
        </svg>
    </div>
    );
}
export function ProjectsContent({ children }){
    return(
    <div className="projectContent">
        {children}
    </div>
    );
}
export function ProjectsHeading(){
    return(
    <div className="projectHeading">
        <h1 className="projectHeading">Projects</h1>
        <NewProjectButton  />
    </div>
    );
}
export function NewProjectButton({ handleClick }){
    return(
    <button className="projectHeading" onClick={handleClick}>
        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
            <path d="M8 3.07692V4.92308H4.92308V8H3.07692V4.92308H0V3.07692H3.07692V0H4.92308V3.07692H8Z" fill="white"/>
        </svg>
        New Project
    </button>
    );
}
export function ProjectsGallery({ children, projects }){
    return(
    <div className="projectGallery">
        {children}
    </div>
    );
}
export function EllipseButton({handleClick}){
    return(
    <button onClick={handleClick}>
        <EllipseIcon />
    </button>
    );
}
export function ProjectCard({ project }){
    return(
    <div className="projectCard">
        <img className="projectCard" src={project.projectImage} alt="projectImage" />
        <div className="projectCardContent">
            <h3 className="projectCardContent">{project.type}</h3>
            <div className="flex gap-1">
                <PixelWiseIcon />
                <h2 className="projectCardContent w-48">{project.name}</h2>
                <EllipseButton />
            </div>
            <p className="projectCardContent">last edited: '1 month ago'</p>
        </div>
    </div>
    );
}