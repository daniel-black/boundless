import { LayoutProps } from "../layout";
import { Sidebar } from "./Sidebar";

export default function ExploreLayout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <Sidebar />
      {children}
    </div>
  );
}
