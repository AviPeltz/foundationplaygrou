const projects =[{
    id: 0,
    name: 'LoRa Weather Station',
    description: 'This is a project description.',
    imageUri: 'https://i.imgur.com/RCwLEoQm.jpg',
    dateCreated: '2024-10-01',
    tags: ['tag1', 'tag2', 'tag3'],
    alt: 'This is a project image.' 
    },
    {
    id: 1,
    name: 'Strawberry Quality Assesment Machine',
    description: 'This is a project description.',
    imageUri: 'https://i.imgur.com/RCwLEoQm.jpg',
    dateCreated: '2024-10-01',
    tags: ['tag1', 'tag2', 'tag3'],
    alt: 'This is a project image.' 
    },
    {
    id: 2,  
    name: 'Ultrasonic levitator',
    description: 'This is a project description.',
    imageUri: 'https://i.imgur.com/RCwLEoQm.jpg',
    dateCreated: '2024-10-01',
    tags: ['tag1', 'tag2', 'tag3'],
    alt: 'This is a project image.' 
    },
    {
    id: 3,
    name: 'LoRa Weather Station',
    }
]

export function Project(){
    return(
        <div>
            <h1 className="font-semibold text-lg">Project #1</h1>
        </div>
    );
}

export default function Projects(){
    return(
        <div>
            <h1 className="font-bold text-xl">Projects</h1>
        </div>
    );
}
