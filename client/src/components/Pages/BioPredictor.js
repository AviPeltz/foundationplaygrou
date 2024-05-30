import { useState } from 'react';
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
                <p className='font-medium text-lg p-2 text-gray-600'>
                    Enter the sequence of the protein monomer to predict its structure using <b>AlphaFold</b> an ML Model developed by DeepMind.
                </p>
                <h2 className='text-lg font-semibold'>Input Sequence:</h2>
                <form className=''>
                    <textarea
                    className='border rounded-md p-2  h-32 w-full'
                    value='MALKSLVLLSLLVLVLLLVRVQPSLGKETAAAKFERQHMDSSTSAASSSNYCNQMMKSRNLTKDRCKPVNTFVHESLADVQAVCSQKNVACKNGQTNCYQSYSTMSITDCRETGSSKYPNCAYKTTQANKHIIVACEGNPYVPVHFDASV'/>
                </form>
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