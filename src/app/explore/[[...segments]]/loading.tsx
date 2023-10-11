import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="w-full py-4 px-10 space-y-4">
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
  );
}
