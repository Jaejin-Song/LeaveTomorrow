"use client";

import TaskList from "@/components/task-list";
import type { Task } from "@/components/task";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

export default function Page() {
  const [newTask, setNewTask] = useState("");

  const createTodos = (): Task[] => {
    return [];
  };
  const [todos, setTodos] = useState(() => createTodos());
  const handleCheck = (val: boolean, id: string) => {
    const foundIndex = todos.findIndex((todo) => todo.id === id);

    const copy = [...todos];
    copy[foundIndex] = {
      ...copy[foundIndex],
      isChecked: val,
    };

    setTodos(copy);
  };

  const onKeydown: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === "Enter") {
      const MAX = 100000;
      const randomNumber = Math.floor(Math.random() * MAX);

      const newTodo: Task = {
        id: randomNumber.toString(),
        isChecked: false,
        title: (e.target as HTMLInputElement).value,
        content: "",
      };

      setTodos([...todos, newTodo]);

      setNewTask("");
    }
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setNewTask((e.target as HTMLInputElement).value);
  };

  return (
    <div className="flex flex-col">
      <div className="h-12 flex items-center px-4 py-2">
        <h1 className="text-xl font-bold">Today</h1>
      </div>
      <Separator />
      <div className="add-task p-4">
        <Input
          value={newTask}
          placeholder="+ 할 일 추가"
          onChange={onChange}
          onKeyDown={onKeydown}
        />
      </div>
      <div className="task-list">
        <TaskList tasks={todos} onCheckedChange={handleCheck} />
      </div>
    </div>
  );
}
