import { cn } from "@/utils/merge";

type InputProps = {
  value?: string;
  className?: string;
  placeholder?: string;
  onChange?: (value: string) => void;
};

const Input = (props: InputProps) => {
  return (
    <input
      className={cn(
        "w-full p-1 text-secondary border border-secondary focus:border-accent focus:outline-none",
        props.className,
      )}
      type="text"
      placeholder={props.placeholder}
      value={props.value}
      onChange={(e) => props.onChange?.(e.target.value)}
    />
  );
};

export default Input;
