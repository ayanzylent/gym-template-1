import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function PrimaryButton({ className, variant = "default", ...props }: React.ComponentProps<typeof Button>) {
  return (
    <Button
      variant={variant}
      className={cn(
        "font-sans font-bold tracking-widest uppercase transition-all duration-300 transform",
        "hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,87,34,0.3)]",
        "active:translate-y-0 active:shadow-none",
        variant === "default" 
          ? "bg-primary border-none text-primary-foreground hover:bg-primary/90 rounded-sm px-8 py-6 text-sm" 
          : "rounded-sm px-8 py-6 text-sm",
        variant === "outline"
          ? "border border-primary text-primary hover:bg-primary hover:text-white" : "",
        className
      )}
      {...props}
    />
  );
}
