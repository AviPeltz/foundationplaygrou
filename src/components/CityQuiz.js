import { useState } from 'react';

export default function CityQuiz(){
    const [answer, setAnswer] = useState('');
    const [error, setError] = useState(null);
    const [status, setStatus] = useState('typing'); // 'typing', 'submitting', 'success'

    if(status === 'success'){
        return(
            <div className='p-2 border rounded bg-green-100'>
                <h1 className='font-bold text-lg p-3 text-green-700'>Correct, you got it right!</h1>
            </div>
        );
    }
    async function handleSubmit(e){
        e.preventDefault();
        setStatus('submitting');
        try{
            await submitForm(answer);
            setStatus('success');
        } catch(err){
            setStatus('typing');
            setError(err);
        }
    }
    function handleTextareaChange(e){
        setAnswer(e.target.value);
    }
    return(
        <div className='p-2 border rounded bg-slate-100'>
            <h2 className='font-bold text-lg p-2'>City quiz</h2>
            <p className='font-medium p-2'>
                In which city is there a billboard that turns air into drinkable water?
            </p>
            <form onSubmit={handleSubmit}>
                <textarea
                className='border rounded-md p-2 m-1'
                value={answer}
                onChange={handleTextareaChange}
                disabled={status === 'submitting'}
                />
                <br />
                <button
                className='bg-cyan-200 disabled:bg-slate-200 hover:bg-cyan-400 rounded py-1 px-3 m-1' 
                disabled={
                answer.length === 0 ||
                status === 'submitting'
                }>
                Submit
                </button>
                {error !== null &&
                <p className="Error">
                    {error.message}
                </p>
                }
            </form>
        </div>
    );
    

}
function submitForm(answer){
    // pretend it's hitting the network.
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let shouldError = answer.toLowerCase() !== 'lima';	
            if(shouldError) {
                reject(new Error('Good guess but a worng answer, Try again!'));
            }else{
                resolve();
            }
        }, 1500); 
    });
}