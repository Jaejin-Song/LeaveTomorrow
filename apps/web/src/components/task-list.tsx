import { ScrollArea } from "./ui/scroll-area";
import type { Task } from "./task";
import { TaskItem } from "./task";
import { useTask } from "@/hooks/task";

export default function TaskList({
  tasks,
  onCheckedChange,
}: {
  tasks: Task[];
  onCheckedChange: (checked: boolean, id: string) => void;
}) {
  const [selectedTask, setSelectedTask] = useTask();

  return (
    <ScrollArea>
      {tasks.map((task) => {
        return (
          <TaskItem
            task={task}
            key={task.id}
            onCheckedChange={(checked) => onCheckedChange(checked, task.id)}
            selected={selectedTask.selected?.id === task.id}
            onClick={() => setSelectedTask({ ...selectedTask, selected: task })}
          />
        );
      })}
    </ScrollArea>
  );
}
