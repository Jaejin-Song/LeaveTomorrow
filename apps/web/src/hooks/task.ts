import { Task } from "@/components/task";
import { atom, useAtom } from "jotai";

type Config = {
  selected: Task | null;
};

const configAtom = atom<Config>({
  selected: null,
});

export function useTask() {
  return useAtom(configAtom);
}
