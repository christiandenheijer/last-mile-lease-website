import { cn } from "@/lib/utils";

export function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-3xl border border-navy-100 bg-white p-8 shadow-card transition-all duration-300",
        className
      )}
    >
      {children}
    </div>
  );
}
