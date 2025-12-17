import Clock from "@/components/stats/Clock";
import { Separator } from "@/components/ui/separator";
import useTask from "@/hooks/useTask";
import { cn } from "@/lib/utils";

type StatsFeatureProps = {
  className?: string;
};

function StatsFeature({ className }: StatsFeatureProps) {
  const { tasks } = useTask();
  return (
    <div className={cn("", className)}>
      <div className="flex justify-between space-x-2 p-2 px-3">
        <p className="text-text">{tasks.length} Tasks</p>
        <Separator orientation="vertical" />
        <Clock />
      </div>
      <Separator />
    </div>
  );
}

export default StatsFeature;
