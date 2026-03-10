import { Brush } from "lucide-react";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-2 px-4", className)}>
      <h1 className="text-xl font-bold font-headline tracking-tight group-data-[state=collapsed]/sidebar-wrapper:hidden">
        Craft Connect
      </h1>
    </div>
  );
}
