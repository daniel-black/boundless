import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full flex">
      <div className="flex-1 border-x py-3 px-10 space-y-4">
        <Skeleton className="h-[30px] w-2/5" />
        <Skeleton className="h-[24px] w-4/5" />
        <Skeleton className="h-[24px] w-1/5" />

        {/* divider line */}
        <Skeleton className="w-full h-[2px]" />

        {/* text */}
        <div className="space-y-4">
          <Skeleton className="w-full h-[16px] w-full" />
          <Skeleton className="w-full h-[16px] w-[96%]" />
          <Skeleton className="w-full h-[16px] w-[95%]" />
          <Skeleton className="w-full h-[16px] w-[94%]" />
          <Skeleton className="w-full h-[16px] w-[93%]" />
          <Skeleton className="w-full h-[16px] w-[99%]" />
          <Skeleton className="w-full h-[16px] w-[92%]" />
        </div>
      </div>
      <section className="w-56 p-3 space-y-3">
        <h3>Recommended Links</h3>
        <ul className="space-y-2">
          <Skeleton className="h-[16px] w-4/5" />
          <Skeleton className="h-[16px] w-4/5" />
          <Skeleton className="h-[16px] w-4/5" />
          <Skeleton className="h-[16px] w-4/5" />
          <Skeleton className="h-[16px] w-4/5" />
        </ul>
      </section>
    </div>
  );
}
