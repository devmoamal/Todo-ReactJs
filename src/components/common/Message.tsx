import { cn } from "@/utils/merge";

type MessageProps = {
  message: string;
  type: string;
  className?: string;
};

const Colors: Record<string, string> = {
  info: "grey",
  success: "",
  warning: "",
  error: "error",
};

const Message = (props: MessageProps) => {
  return (
    <div className="px-2">
      <p className={cn(`text-${Colors[props.type]}`, props.className)}>
        {props.message}
      </p>
    </div>
  );
};

export default Message;
