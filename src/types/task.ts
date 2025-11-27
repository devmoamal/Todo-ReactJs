export type Task = {
  id: string;
  title: string;
  onDelete: (id: string) => void;
};

export type Tasks = Task[];
export type TaskForm = Partial<Task>;
