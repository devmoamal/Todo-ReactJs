import { cn } from "@/utils/merge";

type ButtonProps = {
  text: string;
  className?: string;
  onClick?: () => void;
};

const Button = (props: ButtonProps) => {
  return (
    <button
      className={cn(
        "p-2 px-4 bg-primary border border-secondary text-secondary hover:bg-accent",
        props.className,
      )}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default Button;
