export interface Task {
  id: number;
  title: string;
  description?: string;
  due_date?: string;
  parent_id?: number;
  category: string;
  scheduled_at?: string;
  is_recurring?: boolean;
  recurrence_pattern?: "daily" | "weekly" | "monthly" | null;
  quota?: number;
  progress?: number;
  email_reminder?: boolean;
  completed: boolean;
  created_at: string;
  completed_at?: string | null;
  user_id: number;
}
