import type { Task } from "../types"
import TaskCard from "./TaskCard"

interface TaskContainerProps{
    tasks: Task[]
}

export default function TaskContainer({ tasks }: TaskContainerProps ) {
    return (
        <div className="grid">
            {tasks.map((task, i) => (
                <TaskCard key={i} task={task} />
            ))}
        </div>
    )
}