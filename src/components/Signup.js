export default function Signup() {
    return(
        <form className="bg-gray-100 rounded-md p-2" 
            onSubmit={e=>{
                e.preventDefault();
                alert('Form submitted!');
            }}>
            <input className="block flex-1 border-0 shadow shadow-[inset_0_1px_1px_1px_rgba(0,0,0,0.2)] rounded py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"/>
            <button className="bg-blue-300 font-semibold rounded px-2 my-1">
                Send
            </button>
        </form>
    );
}