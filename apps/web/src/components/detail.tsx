import { useTask } from "@/hooks/task";
import { Separator } from "./ui/separator";
import { Checkbox } from "./ui/checkbox";

export function Detail() {
  const [selectedTask, setSelectedTask] = useTask();

  return (
    selectedTask.selected && (
      <div className="flex flex-col">
        <div className="h-12 px-4 py-2 flex items-center">
          <Checkbox
            className="w-4 h-4"
            checked={selectedTask.selected.isChecked}
          />
        </div>
        <Separator />
        <div className="px-4 pt-4 pb-2 font-semibold text-lg">
          {selectedTask.selected.title}
        </div>
        <div className="px-4">content</div>
      </div>
    )
  );
}
