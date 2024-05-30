export default function Signup() {
    return(
        <form className="bg-gray-100 rounded-md p-2" 
            onSubmit={e=>{
                e.preventDefault();
                alert('Form submitted!');
            }}>
            <label className="block text-gray-700 text-sm font-bold my-1">input:</label>
            <input placeholder="input text here..." className="block flex-1 border-0 shadow shadow-[inset_0_1px_1px_1px_rgba(0,0,0,0.2)] rounded py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
            <button className="bg-gray-700  text-white rounded px-2 my-1 hover:bg-gray-800 shadow-[inset_1px_1px_1px_1px_rgba(255,255,255,0.3)]">
                Send
            </button>
        </form>
    );
}