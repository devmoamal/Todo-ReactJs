import { cn } from "@/utils/merge";
import * as React from "react";

interface XButtonProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const XButton = (props: XButtonProps) => {
  return (
    <button
      className={cn(
        "p-2 bg-primary border border-secondary text-secondary hover:bg-accent",
        props.className,
      )}
      onClick={props.onClick}
    >
      {props.text}
    </button>
  );
};

export default XButton;
