import { create } from "zustand";

interface AppState {
  pages: Page[];
  suggestedLinks: SuggestedLink[];
  addPage: (newPage: Page) => void;
  setSuggestedLinks: (links: SuggestedLink[]) => void;
}

type Page = {
  url: string;
  title: string;
  subTitle: string;
  content: string;
  suggestedLinks: SuggestedLink[];
};

export type SuggestedLink = {
  href: string;
  text: string;
};

export const useStore = create<AppState>()((set) => ({
  pages: [],
  suggestedLinks: [],
  addPage: (newPage) => set((state) => ({ pages: [...state.pages, newPage] })),
  setSuggestedLinks: (links) => set(() => ({ suggestedLinks: links })),
}));
