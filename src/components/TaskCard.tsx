import type { Task } from "../types"

interface TaskCardProps{
  task: Task
}


export default function TaskCard({ task }:TaskCardProps ) {
   const due = task.due_date ? new Date(task.due_date).toLocaleString() : "No due date";

   return (
    <div className="bg-stone-700 shadow-md rounded-2xl p-4 mb-3 w-full max-w-md">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-semibold">{task.title}</h2>
        <span
          className={`text-sm px-3 py-1 rounded-full ${
            task.completed ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"
          }`}
        >
          {task.completed ? "Completed" : "In Progress"}
        </span>
      </div>

      <p className="text text-emerald-600 mb-3">{task.description}</p>

      <div className="text-sm text-gray-500">
        <p><strong>Category:</strong> {task.category}</p>
        <p><strong>Due:</strong> {due}</p>
        <p><strong>Progress:</strong> {task.progress ?? 0}%</p>
      </div>

      <div className="mt-3">
        <button
          className={`px-4 py-2 rounded-lg text-white ${
            task.completed ? "bg-gray-400" : "bg-blue-500 hover:bg-blue-600"
          }`}
        >
          {task.completed ? "Undo" : "Mark as Done"}
        </button>
      </div>
    </div>
  );
}
