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
  const [todos, setTodos] = useState<TodoContextProp[]>([]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      return setTodos(JSON.parse(localStorage.getItem("todos") as string) || []);
    } else {
      undefined;
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      return localStorage.setItem("todos", JSON.stringify(todos));
    } else {
      return undefined;
    }
  }, [todos]);

  return (
    <todoContext.Provider value={{ todos, setTodos }}>
      {children}
    </todoContext.Provider>
  );
}
