import { useContext } from 'react';
import { LevelContext } from '../contexts/LevelContext';

export default function SectionLevel({ children }) {
    const level = useContext(LevelContext);
    return (
        <section className='border-2 rounded-md p-2 m-1'>
            <LevelContext.Provider value={level + 1}>
                {children}
            </LevelContext.Provider>
        </section>
    );
}