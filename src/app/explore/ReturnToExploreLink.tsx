"use client";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export function ReturnToExploreLink() {
  // segment will be null if we are on /explore
  const segment = useSelectedLayoutSegment();

  return segment ? (
    <Link
      href="/explore"
      className={cn(
        buttonVariants({ variant: "link" }),
        "text-sm flex gap-1 items-center group max-w-fit px-0"
      )}
    >
      <ArrowLeftIcon className="h-[14px] w-[14px] group-hover:-translate-x-1 transition ease-in-out" />
      <span>Return to Explore</span>
    </Link>
  ) : null;
}
