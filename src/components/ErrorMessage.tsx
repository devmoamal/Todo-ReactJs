import { cn } from "@/lib/utils";

type ErrorMessageProps = {
  message?: string;

  className?: string;
};

function ErrorMessage({ message, className }: ErrorMessageProps) {
  return <p className={cn("mt-2", className)}>{message}</p>;
}

export default ErrorMessage;
