import { z } from "zod";

export const taskSchema = z.object({
  title: z.string().min(1, "Minimum at least 1 characters"),
});

export type TaskInput = z.infer<typeof taskSchema>;
