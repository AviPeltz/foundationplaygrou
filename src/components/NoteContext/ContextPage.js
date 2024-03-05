import Heading from './Heading';
import Section, { ProfilePage, AllPosts} from './Section';

//import { LevelContext } from './LevelContext';

export default function ContextPage(){
    return(
        <Section>
            <Heading>Avi's Blog</Heading>
            <ProfilePage />
            <AllPosts />
        </Section>
    );
}