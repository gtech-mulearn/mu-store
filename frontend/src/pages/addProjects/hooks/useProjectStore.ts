import { create } from "zustand";

interface Store {
  selectedOption: string;
  changeOption: (option: string) => void;
}

export const useProjectStore = create<Store>()((set) => ({
  selectedOption: "info",
  changeOption: (option: string) => set(() => ({ selectedOption: option })),
}));
