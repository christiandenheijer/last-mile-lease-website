import { cn } from "@/lib/utils";

export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-green-700",
        className
      )}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  light = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl lg:text-[2.75rem]",
          light ? "text-white" : "text-navy-950"
        )}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-4 text-lg leading-relaxed",
            light ? "text-white/70" : "text-navy-700/80"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
