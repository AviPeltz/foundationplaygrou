import Heading from './Heading';
import Section, { ProfilePage, AllPosts} from './Section';

//import { LevelContext } from './LevelContext';

export default function ContextPage(){
    return(
        <Section>
            <Heading>Context Test Page</Heading>
            <ProfilePage />
            <AllPosts />
        </Section>
    );
}