import TensorIcon from "../../assets/TensorIcon";
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
        name: "myFirstProject",
        type: "Instance Segmentation",
        lastEdited: "January 27, 2024",
        projectImage: "https://s3-alpha-sig.figma.com/img/3d21/1975/1baf0e0aa42a2ccacdd502ce48e9ecde?Expires=1710115200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RTsHe5LNaG6HIFDvJHW79xQFbNxM2tR3Ft8vXfIXqG5cA5Pg5XwbHa0MiK-yWG31VBeQRuAmnBltwdyrG5mjxXoRiSv1r5zJx1eCOi~XQCObw1FuFmYQhSjHQA87tGjUMb99sT4XQy0GV353ed9MWMhk92fTCfzOby1AsCtLwyED4AacRTtnjKolWq~wwMnR8bq9nAwZ5AGmHoiMStZKHWfOZaX40yowZ3Wj5L9rtx85h~Y9Vqwt-d5Se4AF-I2dgJrI2ay3LDOYDaF-nTYwzyWwuwYisVQzYWaY5YcsnZL3VrH52adbiAtydpZgoGH5qOuy5Jk4Iz2~6G154MfJcA__",

    }
]
export default function ProjectsPage(){
    return(
        <>
            <ProjectNav />
            <ProjectsContent>
                <ProjectsHeading />
                <ProjectsGallery>
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                    <ProjectCard />
                </ProjectsGallery>
            </ProjectsContent>

        </>
    );
}
export function ProjectNav(){
    return(
        <nav className='projectNav'>
            <NavBrand />
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
            {}
        </div>
    );
}
export function AvatarDropdown({ Name, AvatarURL, navItems }){
    return(
    <div>
        <p>{Name}</p>
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
export function ProjectCard({ project }){
    return(
    <div className="projectCard">
        <div className="projectCardContent">
            <h2>My First Project</h2>
            <p>last edited: '1 month ago'</p>
        </div>
    </div>
    );
}