export type Task = {
  id: string;
  title: string;
  onDelete: (id: string) => void;
};

export type Tasks = Task[];
