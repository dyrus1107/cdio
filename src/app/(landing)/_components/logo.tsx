import { cn } from "@/lib/utils";

const Logo = ({ color = "default" }: { color?: "default" | "white" }) => {
  return (
    <div
      className={cn(
        "font-extrabold text-primary text-4xl mb-1",
        color === "white" && "text-background dark:text-foreground"
      )}
    >
      StuMate
    </div>
  );
};

export default Logo;
