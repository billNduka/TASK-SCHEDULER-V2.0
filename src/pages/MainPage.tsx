import TaskContainer from '../components/TaskContainer'
import type { Task } from '../types'

const sampleTask1: Task = {
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
const sampleTask2: Task = {
  id: 2,
  title: "Grocery Shopping",
  description: "Buy vegetables, fruits, and dairy products.",
  due_date: "2025-10-19T12:00:00",
  parent_id: undefined,
  category: "Personal",
  scheduled_at: "2025-10-19T10:00:00",
  is_recurring: false,
  progress: 100,
  email_reminder: false,
  completed: true,
  created_at: "2025-10-14T15:30:00",
  completed_at: "2025-10-18T14:00:00",
  user_id: 1  
}
const sampleTask3: Task = {
  id: 3,
  title: "Morning Jog",
  description: "Jog for at least 30 minutes in the park.",
  due_date: undefined,
  parent_id: undefined,
  category: "Health",
  scheduled_at: "2025-10-18T06:30:00",
  is_recurring: true,
  progress: 0,
  email_reminder: false,
  completed: false,
  created_at: "2025-10-10T07:00:00",
  completed_at: null,
  user_id: 1  
}
const tasks: Task[] = [sampleTask1, sampleTask2, sampleTask3];

function MainPage() {

  return (
    <div className="min-h-screen bg-stone-800 flex flex-col items-center justify-center">
      <TaskContainer tasks={tasks} />
    </div>
  )
}

export default MainPage
