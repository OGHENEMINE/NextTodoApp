"use client";
import { todoContext } from "@/context/todoContext";
import Link from "next/link";
import { useContext, useState, ChangeEvent } from "react";

export default function New() {
  const [todoInput, setTodoInput] = useState<string>("");
  const {todos, setTodos} = useContext(todoContext)!;

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTodoInput(value);
  };

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (todoInput !== "") {
      const uniqueTodo = !todos.some((todo) => todo.task === todoInput);

      if (uniqueTodo) {
        setTodos([...todos, { task: todoInput, completed: false }]);
        setTodoInput("");
      } else {
        console.log("todo already exist!", todos);
      }
    } else {
      console.log("Input field cannot be blank!");
    }
  };


  return (
    <main>
      <div className="flex items-center">
        <Link
          className="border rounded p-2 font-bold tracking-widest hover:border-yellow-500 hover:bg-yellow-500 focus-within:text-white outline-none hover:text-slate-900"
          href="/"
        >
          Home
        </Link>

        <h1 className="uppercase w-full text-center font-bold text-3xl tracking-widest">
          ADD A NEW TODO
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-20 flex w-full md:w-1/2 mx-auto"
      >
        <label htmlFor="todo-input" className="sr-only">
          TODO
        </label>
        <input
          id="todo-input"
          name="todo"
          type="text"
          value={todoInput}
          placeholder="Enter a todo..."
          onChange={handleChange}
          className="w-full placeholder:italic placeholder:tracking-widest outline-none py-2 px-5 text-slate-900"
        />
        <button className="border px-6 tracking-widest hover:border-yellow-500  hover:bg-yellow-500 hover:text-slate-900 font-bold">
          submit
        </button>
      </form>
    </main>
  );
}
