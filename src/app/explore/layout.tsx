import { LayoutProps } from "../layout";

export default function ExploreLayout({ children }: LayoutProps) {
  return (
    <div className="flex">
      <div className="w-56 p-3 min-h-screen h-full space-y-3">
        <h2>Previously Explored</h2>
        <ul>
          <li>link</li>
          <li>link</li>
          <li>link</li>
          <li>link</li>
          <li>link</li>
        </ul>
      </div>

      {children}
    </div>
  );
}
