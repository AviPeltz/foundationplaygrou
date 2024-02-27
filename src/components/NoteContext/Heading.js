import { useContext } from 'react';
import { LevelContext } from './LevelContext';

export default function Heading({children }) {
    const level = useContext(LevelContext);
    switch (level) {
      case 1:
        return <h1 className='font-bold text-3xl'>{children}</h1>;
      case 2:
        return <h2 className='font-semibold text-2xl'>{children}</h2>;
      case 3:
        return <h3 className='font-semibold text-xl'>{children}</h3>;
      case 4:
        return <h4 className='font-semibold text-lg'>{children}</h4>;
      case 5:
        return <h5 className='font-semibold text-md'>{children}</h5>;
      case 6:
        return <h6 className='font-semibold text-base'>{children}</h6>;
      default:
        console.log('Unknown <Heading> level: ' + level);
        return <h1 className='font-semibold text-3xl'>{children}</h1>;
    }
  }