import { cn } from "@/lib/utils";

type ErrorMessageProps = {
  message?: string;

  className?: string;
};

function ErrorMessage({ message, className }: ErrorMessageProps) {
  return (
    message && <p className={cn("text-text mt-2 ", className)}>{message}</p>
  );
}

export default ErrorMessage;
