"use client";
import { useState, useEffect, createContext, ReactNode } from "react";

interface TodoContextProp {
  task: string;
  completed: boolean;
}

export type TodoContext = {
  todos: TodoContextProp[];
  setTodos: React.Dispatch<React.SetStateAction<TodoContextProp[]>>;
};

export const todoContext = createContext<TodoContext | null>(null);

export function TodoProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<TodoContextProp[]>(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("todos") as string) || []
      : undefined
  );

  useEffect(() => {
    typeof window !== "undefined"
      ? localStorage.setItem("todos", JSON.stringify(todos))
      : undefined;
  }, [todos]);

  return (
    <todoContext.Provider value={{ todos, setTodos }}>
      {children}
    </todoContext.Provider>
  );
}
