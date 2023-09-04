"use client";
import { todoContext } from "@/context/todoContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

export default function Home() {
  const { todos } = useContext(todoContext)!;
  return (
    <main>
      <div className="flex items-center justify-between">
        <h1 className="uppercase font-bold text-3xl tracking-widest">
          Todo List
        </h1>
        <Link
          className="border rounded font-bold p-2 hover:border-yellow-500 hover:bg-yellow-500 focus-within:text-white outline-none hover:text-slate-900"
          href="new"
        >
          ADD TODO
        </Link>
      </div>

      <div className="mt-20">
        {todos.map(({ task, completed }, index) => (
          <div key={index} >
            <input
              id={`check-box-${index}`}
              type="checkbox"
              name={`check-box-${index}`}
              className="cursor-pointer mr-2 peer"
            />
            <label className="cursor-pointer peer-checked:line-through peer-checked:text-slate-500" htmlFor={`check-box-${index}`}>
              {task}
            </label>
          </div>
        ))}
      </div>
    </main>
  );
}
