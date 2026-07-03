import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "dark",
  className,
  priority,
}: {
  variant?: "dark" | "light";
  className?: string;
  priority?: boolean;
}) {
  const src =
    variant === "dark" ? "/brand/logo-dark.png" : "/brand/logo-light.png";

  return (
    <Link
      href="/"
      aria-label="Last Mile Lease - naar homepage"
      className={cn("inline-flex items-center", className)}
    >
      <Image
        src={src}
        alt="Last Mile Lease"
        width={1120}
        height={297}
        priority={priority}
        className="h-9 w-auto sm:h-10"
      />
    </Link>
  );
}
