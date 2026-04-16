import { Student } from "../components/Student";
import { NewTask } from "../components/NewTask";
import { TasksList } from "../components/TasksList";


export default function MyTaskList() {
    return (
        <div>
            <Student />
            <NewTask />
            <TasksList />
        </div>
    )
}