import { ChangeEventHandler } from "react";
import { Checkbox } from "./ui/checkbox";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";

export type Task = {
  id: string;
  isChecked: boolean;
  title: string;
  content: string;
};

export function TaskItem({
  task,
  onCheckedChange,
  onClick,
  selected = false,
}: {
  task: Task;
  onCheckedChange: (val: boolean, id: string) => void;
  onClick: () => void;
  selected?: boolean;
}) {
  const { id, isChecked, title } = task;

  const onCheckboxChange = (checked: boolean | "indeterminate") => {
    if (checked === "indeterminate") return;

    onCheckedChange(checked, id);
  };

  const onInputChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    console.log((e.target as HTMLInputElement).value);
  };

  return (
    <div className="px-2 py-1.5" onClick={onClick}>
      <div
        className={cn(
          "px-3 rounded-md flex items-center hover:bg-accent hover:text-accent-foreground",
          selected && "bg-muted"
        )}
      >
        <Checkbox
          checked={isChecked}
          onCheckedChange={onCheckboxChange}
          style={{ width: "16px", height: "16px" }}
        />
        <Input
          className="border-none shadow-none focus-visible:shadow-none focus-visible:outline-0 focus-visible:ring-transparent"
          value={title}
          size={15}
          onChange={onInputChange}
        />
      </div>
    </div>
  );
}
