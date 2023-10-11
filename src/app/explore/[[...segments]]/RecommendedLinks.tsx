import Link from "next/link";
import type { NextLink } from "@/app/store";

type RecommendedLinksProps = {
  links: NextLink[];
};

export function RecommendedLinks({ links }: RecommendedLinksProps) {
  return (
    <section className="w-56 p-3 space-y-3">
      <h3>Recommended Links</h3>
      {links.length > 0 ? (
        <ul className="flex flex-col">
          {links.map((link: NextLink) => (
            <Link
              href={`/explore${link.href}`}
              key={link.href}
              className="whitespace-nowrap truncate underline"
            >
              {link.text}
            </Link>
          ))}
        </ul>
      ) : null}
    </section>
  );
}
