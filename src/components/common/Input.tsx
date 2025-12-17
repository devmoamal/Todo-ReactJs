import { cn } from "@/utils/merge";
import { Input as ShadcnInput } from "@/components/ui/input";
type InputProps = {
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const Input = ({ className, value, placeholder, onChange }: InputProps) => {
  return (
    <ShadcnInput
      className={cn(
        "w-full p-1 text-text border border-border focus:border-accent focus:outline-none",
        className
      )}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange?.(e.target.value)}
    />
  );
};

export default Input;
