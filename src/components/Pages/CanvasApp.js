import MovingDot from "../MovingDot";
import MyNavBar from "../MyNavBar";




export default function CanvasApp() {
    return(
    <>
        <MyNavBar />
        <h1 className="text-3xl font-bold text-center">Canvas App</h1>
        <div>
            <MovingDot />
        </div>
    </>
    );

}