import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-all duration-200 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        primary:
          "bg-green-400 text-navy-950 shadow-soft hover:bg-green-300 hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0",
        secondary:
          "bg-navy-700 text-white hover:bg-navy-800 hover:-translate-y-0.5 hover:shadow-lift active:translate-y-0",
        outline:
          "border border-navy-200 bg-transparent text-navy-700 hover:border-navy-700 hover:bg-navy-50",
        ghost: "text-navy-700 hover:bg-navy-50",
        "outline-light":
          "border border-white/30 bg-white/5 text-white backdrop-blur hover:bg-white/15",
      },
      size: {
        default: "h-12 px-6 py-3",
        sm: "h-10 px-4 text-sm",
        lg: "h-14 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
