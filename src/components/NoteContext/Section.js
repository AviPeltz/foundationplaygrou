import { useContext } from 'react';
import { LevelContext } from './LevelContext';
import Heading from './Heading';

export default function Section({ children, isFancy=false, isOrange=false}){
  const level = useContext(LevelContext);
  return (
        <section className={
          'border rounded m-1 p-2 ' +
          (isFancy ? 'border-double border-4 border-indigo-300 hover:bg-sky-50' : '') +
          (isOrange ? 'border-2 border-amber-600 rounded-xl' : '')
        }>
          <LevelContext.Provider value={level + 1}>
            {children}
          </LevelContext.Provider>
        </section>
      );
}
export function ProfilePage(){
  return(
    <Section>
      <Heading>My Profile</Heading>
      <Post
        title="Hello traveller!"
        body="Read about my adventures."
      />
      <RecentPosts />
    </Section>
  );
}
export function AllPosts() {
  return( 
  <Section isOrange={true}>
    <Heading>All Posts</Heading>
    <RecentPosts />
    <Post 
        title="Rhabdomyolysis"
        body="Muscles get fucked and idk why...">    
    </Post>
    <Post
        title="Learning React is powerful"
        body="context, state, reducers, hooks, components...">
    </Post>
    <Post
        title="Start Companies you truly love..."
        body="or start companies you kinda love and do work on the side...">
    </Post>
  </Section>
  );
}
export function RecentPosts(){
  return(
    <Section>
      <Heading>Recent Posts</Heading>
      <Post 
        title="Flavors of Lisbon"
        body="...those pastéis de nata!"></Post>
      <Post
        title="Buenos Aires in the rhythm of tango"
        body="I loved it!">
      </Post>
    </Section>
  );
}

export function Post({ title, body, datePosted, imgURL, link }){
  return(
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}