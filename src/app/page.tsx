"use client";
import { todoContext } from "@/context/todoContext";
import Link from "next/link";
import { useContext, useEffect } from "react";

export default function Home() {
  const { todos, setTodos } = useContext(todoContext)!;

  const totalTodos = todos?.length
  const completedTodos = todos?.filter(({completed}) => completed === true).length


  const handleChange = (id: number) => {
    const updateTodo = todos.map((todo, index) => {
      if (id === index) {
        return { ...todo, completed: !todo.completed };
      } else {
        return todo;
      }
    });

    setTodos(updateTodo);
  };

  const handleDeleteTodo = (id: number) =>{
    const newTodos = todos.filter((todo, index) => index !== id);
    setTodos(newTodos);
  }

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="uppercase font-bold text-xl md:text-3xl tracking-widest">
          Todo List
        </h1>
        <Link
          className="border rounded p-1.5 md:p-2 font-bold tracking-widest hover:border-yellow-500 hover:bg-yellow-500 focus-within:text-white outline-none hover:text-slate-900"
          href="new"
        >
          ADD TODO
        </Link>
      </div>

      <div className="mt-20">
        {todos.map(({ task, completed }, index) => (
          <div className="mb-5" key={index}>
            <input
              id={`check-box-${index}`}
              type="checkbox"
              name={`check-box-${index}`}
              checked={completed}
              onChange={() => handleChange(index)}
              className="cursor-pointer mr-2"
            />
            <label
              className={`cursor-pointer ${
                completed ? "line-through text-slate-500" : "hover:text-slate-500"
              }`}
              htmlFor={`check-box-${index}`}
            >
              {task}
            </label>
            <button onClick={() => handleDeleteTodo(index)} className="bg-red-500 hover:bg-red-600 tracking-wider rounded p-1 ml-2 text-sm inline-block">
              del
            </button>
          </div>
        ))}
      </div>

      <div className="flex items-center gap-2 text-sm">
      <p>({totalTodos}) tasks</p>
      .
      <p>({completedTodos}) completed</p>
      </div>
    </main>
  );
}
