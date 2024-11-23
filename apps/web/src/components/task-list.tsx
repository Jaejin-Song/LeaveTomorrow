import { ScrollArea } from "./ui/scroll-area";
import type { Task } from "./task";
import { TaskItem } from "./task";

export default function TaskList({
  tasks,
  onCheckedChange,
}: {
  tasks: Task[];
  onCheckedChange: (checked: boolean, id: string) => void;
}) {
  return (
    <ScrollArea>
      {tasks.map((task) => {
        return (
          <TaskItem
            taskInfo={task}
            key={task.id}
            onCheckedChange={(checked) => onCheckedChange(checked, task.id)}
          />
        );
      })}
    </ScrollArea>
  );
}
