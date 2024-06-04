import { useState, useRef } from 'react';
import MyNavBar from "../MyNavBar";


const sequenceExamples = [
    {
    id: 0,
    sequence: 'MVHLTPEEKSAVTALWGKVNVDEVGGEALGRLLVVYPWTQRFFESFGDLSTPDAVMGNPKVKAHGKKVLGAFSDGLAHLDNLKGTFATLSELHCDKLHVDPENFRLLGNVLVCVLAHHFGKEFTPPVQAAYQKVVAGVANALAHKYH',
    },
    {
    id: 1,
    sequence: 'MTEYKLVVVGAGGVGKSALTIQLIQNHFVDEYDPTIEDSYRKQVVIDGETCLLDILDTAGQEEYSAMRDQYMRTGEGFLCVFAINNTKSFEDIHQYREQIKRVKDSDDVPMVLVGNKCDLAARTVESRQAQDLARSYGIPYIETSAKTRQGVEDAFYTLVREIRQHKLRKLNPPDESGPGCMSCKCVLS',
    },
    {
    id: 2,
    sequence: 'MQIFVKTLTGKTITLEVEPSDTIENVKAKIQDKEGIPPDQQRLIFAGKQLEDGRTLSDYNIQKESTLHLVLRLRGG',
    },
];

export default function BioPredictor(){
    const [sequenceInput, setSequenceInput] = useState('');
    const [predictionStatus, setPredictionStatus] = useState('empty'); // 'empty', 'typing', 'submitting', 'modelrunning', 'success'
    let sequenceInputRef = useRef(sequenceInput);

    function handleClick(){
        setPredictionStatus('submitting');
        sequenceInputRef.current = sequenceInput;
        setTimeout(() => {
            setPredictionStatus('modelrunning');
            alert('Model is running');
            setTimeout(() => {
                setPredictionStatus('success');
                alert('Prediction Successful');
            }, 5000);
        }, 2000);
    }
    return(
        <>
        <MyNavBar />
        <div>
        <div className="flex justify-center items-center p-4">
            <h1 className="text-4xl font-semibold">BioGlyph</h1>
        </div>
        <div className='grid grid-cols-2'>
            <div className='p-2 border rounded bg-slate-100 m-4'>
                <h2 className='text-2xl font-semibold'>Monomer Structure prediction</h2>
                <p className='font-medium text-md p-2 text-gray-600'>
                    Enter the sequence of the protein monomer to predict its structure using <b>AlphaFold</b> an ML Model developed by DeepMind.
                </p>
                <h2 className='text-md font-semibold'>Chain Sequence:</h2>

                <textarea
                className='border rounded-md p-2  h-32 w-full'
                onChange={(e) => setSequenceInput(e.target.value)}
                placeholder='MALKSLVLLSLLVLVLLLVRVQPSLGKETAAAKFERQHMDSSTSAASSSNYCNQMMKSRNLTKDRCKPVNTFVHESLADVQAVCSQKNVACKNGQTNCYQSYSTMSITDCRETGSSKYPNCAYKTTQANKHIIVACEGNPYVPVHFDASV'
                value={sequenceInput}/>
                <button 
                className='bg-blue-500 hover:bg-blue-600 text-white p-2 font-semibold rounded-md m-2'
                onClick={handleClick}
                >Predict
                </button>

            </div>
            <div className='p-2 border rounded bg-slate-100 m-4'>
                <h2 className=' text-2xl font-semibold'>Predicted output</h2>
            </div>
        </div>
        </div>
        </>
    );

}

export function SequenceForm(){
    const [sequenceInput, setSequenceInput] = useState('');
    const [status, setStatus] = useState('typing'); // 'typing', 'submitting', 'modelrunning', 'success'  
    return(
        <div>

        </div>
    );
}