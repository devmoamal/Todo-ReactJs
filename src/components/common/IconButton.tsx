import type { LucideIcon } from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

type IconButtonProps = {
  Icon: LucideIcon;

  onClick?: () => void;
  className?: string;
};

function IconButton({ Icon, onClick, className }: IconButtonProps) {
  return (
    <Button
      className={cn("bg-background hover:bg-hover", className)}
      onClick={onClick}
    >
      <Icon />
    </Button>
  );
}

export default IconButton;
