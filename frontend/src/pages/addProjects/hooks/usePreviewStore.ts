import { create } from "zustand";

interface details {
  title: string;
  description: string;
  tags: string;
  image: string;
}

interface Store {
  details: details;
  changeDetails: (option: details) => void;
}

export const usePreviewStore = create<Store>()((set) => ({
  details: {
    title: "Project Name",
    description: "It's basically a sentence on the project.",
    tags: "#Theme",
    image: "",
  },
  changeDetails: (option) => set(() => ({ details: option })),
}));
