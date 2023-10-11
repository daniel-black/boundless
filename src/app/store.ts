import { create } from "zustand";

interface PagesState {
  pages: Page[];
  addPage: (newPage: Page) => void;
}

type Page = {
  url: string;
  title: string;
  subTitle: string;
  content: string;
  nextLinks: NextLink[];
};

export type NextLink = {
  href: string;
  text: string;
};

export const usePagesStore = create<PagesState>()((set) => ({
  pages: [],
  addPage: (newPage) => set((state) => ({ pages: [...state.pages, newPage] })),
}));
