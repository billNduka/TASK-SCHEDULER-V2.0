import TaskCard from './components/TaskCard'
import type { Task } from './types'

const sampleTask: Task = {
  id: 1,
  title: "Finish React + FastAPI integration",
  description: "Set up frontend and backend connection with task endpoints.",
  due_date: "2025-10-20T17:00:00",
  parent_id: undefined,
  category: "Work",
  scheduled_at: "2025-10-18T09:00:00",
  is_recurring: false,
  progress: 60,
  email_reminder: true,
  completed: false,
  created_at: "2025-10-15T10:00:00",
  completed_at: null,
  user_id: 1
};

function App() {

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <TaskCard task={sampleTask} />
    </div>
  )
}

export default App
