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
    JSON.parse(localStorage.getItem("todos") as string) || []
  );

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <todoContext.Provider value={{ todos, setTodos }}>
      {children}
    </todoContext.Provider>
  );
}
