import { useState } from "react";
import { Button } from "./buttons";
import { sculptureList } from "../data/sample_people";

export default function Gallery() {
    const [index, setIndex] = useState(0);
    const [showMore, setShowMore] = useState(false);
    //const numberOfSculptures = sculptureList.length;
    function handleNext(){
        if(index < (sculptureList.length - 1)){
            setIndex(index + 1);
        }
        else{
            setIndex(index);
        }
    }
    function handleBack(){
        if(index > 0){
            setIndex(index - 1);
        }
        else{
            setIndex(index);
        }
    }
    function handleShowMore(){
        setShowMore(!showMore);
    }

    const sculpture = sculptureList[index];
    return(
        <div className="container p-3 border rounded m-1 bg-neutral-50">
            <h2 className="text-xl font-semibold bg-white border rounded p-1 my-2">
                <i>{sculpture.name}</i> 
                by {sculpture.artist}
            </h2>

            <center>
                <img 
            className="rounded-md shadow-md w-36"
            src={sculpture.url} 
            alt={sculpture.alt}
            />
            </center>
            <center>
            {showMore ? <p className=" px-4 py-1 text-base">{sculpture.description}</p> : null }
            <Button onClick={handleShowMore}>
                {showMore ? "Show Less" : "Show More"}
            </Button>
            </center>
            <center>
            <div className="container">
                <Button onClick={handleBack}>
                    Back
                </Button>
                <span className="text-md ">  
                    ({index + 1} of {sculptureList.length})
                </span>
                <Button onClick={handleNext}>
                Next
                </Button>
            </div>
            </center>
        </div>
    );
}