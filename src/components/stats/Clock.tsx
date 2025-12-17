import { cn } from "@/lib/utils";
import { fromatTime } from "@/utils/timeFormatter";
import { useEffect, useState } from "react";

type ClockProps = {
  className?: string;
};

function Clock({ className }: ClockProps) {
  const [clock, setClock] = useState(fromatTime(new Date()));

  useEffect(() => {
    const interval = setInterval(() => {
      setClock(fromatTime(new Date()));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <p className={cn("text-text", className)}>{clock}</p>;
}

export default Clock;
