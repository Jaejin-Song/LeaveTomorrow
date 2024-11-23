import { ChangeEventHandler } from "react";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";

export type Task = {
  id: string;
  isChecked: boolean;
  title: string;
  content: string;
};

export function TaskItem({
  taskInfo,
  onCheckedChange,
}: {
  taskInfo: Task;
  onCheckedChange: (val: boolean, id: string) => void;
}) {
  const { id } = taskInfo;

  const onCheckboxChange = (checked: boolean | "indeterminate") => {
    if (checked === "indeterminate") return;

    onCheckedChange(checked, id);
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log((e.target as HTMLInputElement).value);
  };

  return (
    <div className="px-2 py-1.5">
      <div className="px-3 rounded-md flex items-center hover:bg-accent hover:text-accent-foreground">
        <Checkbox
          checked={taskInfo.isChecked}
          onCheckedChange={onCheckboxChange}
          style={{ width: "16px", height: "16px" }}
        />
        <Input
          className="border-none shadow-none focus-visible:shadow-none focus-visible:outline-0 focus-visible:ring-transparent"
          value={taskInfo.title}
          size={15}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
}
