import { cn } from "@/utils/merge";
import { Button as ShadcnButton } from "../ui/button";
type ButtonProps = {
  className?: string;
  onClick?: () => void;
  children?: React.ReactNode;
};

const Button = ({ children, className, onClick }: ButtonProps) => {
  return (
    <ShadcnButton
      className={cn(
        "p-2 px-4 bg-primary border border-secondary text-text hover:bg-primary-foreground",
        className
      )}
      onClick={onClick}
    >
      {children}
    </ShadcnButton>
  );
};

export default Button;
