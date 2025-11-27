import { cn } from "@/utils/merge";

type XInputProps = {
  onChangeText: (value: string) => void;
  className?: string;
  placeholder?: string;
};

const XInput = (props: XInputProps) => {
  return (
    <input
      className={cn(
        "w-full p-1 text-secondary border border-secondary focus:border-accent focus:outline-none",
        props.className,
      )}
      type="text"
      placeholder={props.placeholder}
      onChange={(e) => props.onChangeText(e.target.value)}
    />
  );
};

export default XInput;
