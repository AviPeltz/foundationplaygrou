import TensorIcon from "../../assets/TensorIcon";
import PixelWiseIcon from "../../assets/PixelWiseIcon";
import EllipseIcon from "../../assets/EllipseIcon";
import "../../App.css";
import { Button } from "../Buttons";
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
        projectImage: "https://s3-alpha-sig.figma.com/img/3d21/1975/1baf0e0aa42a2ccacdd502ce48e9ecde?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTsHe5LNaG6HIFDvJHW79xQFbNxM2tR3Ft8vXfIXqG5cA5Pg5XwbHa0MiK-yWG31VBeQRuAmnBltwdyrG5mjxXoRiSv1r5zJx1eCOi~XQCObw1FuFmYQhSjHQA87tGjUMb99sT4XQy0GV353ed9MWMhk92fTCfzOby1AsCtLwyED4AacRTtnjKolWq~wwMnR8bq9nAwZ5AGmHoiMStZKHWfOZaX40yowZ3Wj5L9rtx85h~Y9Vqwt-d5Se4AF-I2dgJrI2ay3LDOYDaF-nTYwzyWwuwYisVQzYWaY5YcsnZL3VrH52adbiAtydpZgoGH5qOuy5Jk4Iz2~6G154MfJcA__",

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
            <AvatarDropdown />
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
export function AvatarDropdown({ Name, AvatarURL, navItems }){
    return(
    <div className="avatarDropdown">
        <a href="#">Avi Peltz</a>
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
        <Button>Add Project</Button>
    </div>
    );
}
export function NewProjectButton({handleClick}){
    return(
    <button onClick={handleClick}></button>
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
            <PixelWiseIcon />
            <h2 className="projectCardContent">{project.name}</h2>
            <EllipseButton />
            <p className="projectCardContent">last edited: '1 month ago'</p>

        </div>
    </div>
    );
}