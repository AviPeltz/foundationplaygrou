import TaskList from "../TaskList";
import AddTask from "../AddTask";
import { TasksProvider } from "../../contexts/TaskContext";
import MyNavBar from "../MyNavBar";

export default function TaskApp(){
    return(
        <>
        <MyNavBar />
        <center>
        <div className="border p-2 mx-96 my-4 rounded bg-slate-200 min-w-fit">
        <TasksProvider>
            <h1 className="font-bold text-center text-2xl">Avi's Todo List</h1>
            <AddTask />
            <TaskList />
        </TasksProvider>
        </div>
        </center>
        </>
    );
}