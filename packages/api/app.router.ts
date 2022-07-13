import * as trpc from "@trpc/server";
import { z } from "zod";

const TodoItemScheme = z.object({
  id: z.string(),
  title: z.string().min(1),
  isComplete: z.boolean().optional(),
});

type TodoItem = z.infer<typeof TodoItemScheme>;

const todos = <TodoItem[]>[];

export const appRouter = trpc
  .router()
  .query("getTodos", {
    resolve: () => {
      return todos;
    },
  })
  .mutation("addTodo", {
    input: TodoItemScheme.omit({ id: true }),
    resolve: ({ input }) => {
      // faking an id
      const id = (1000000 * Math.random()).toString(16);

      const newItem = { ...input, id };
      todos.push(newItem);
      return newItem;
    },
  });

export type AppRouter = typeof appRouter;
