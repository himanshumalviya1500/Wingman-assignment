import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MetricData } from "@/lib/types";

export function MetricCard({ icon, label, value, format, change }: MetricData) {
  const formattedValue =
    format === "currency"
      ? new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          maximumFractionDigits: 0,
        }).format(value)
      : format === "percentage"
      ? `${value}%`
      : value;

  return (
    <Card className="overflow-hidden">
      <CardContent className="p-6">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <img
              src={icon}
              alt={label}
              width={20}
              height={20}
              className="h-5 w-5"
            />
            <p className="text-sm text-muted-foreground uppercase tracking-wider">
              {label}
            </p>
          </div>
          <div className="space-y-2">
            <span className="text-2xl font-semibold">{formattedValue}</span>
            <div
              className={cn(
                "flex items-center text-sm font-medium",
                change.type === "increase"
                  ? "text-emerald-600"
                  : "text-rose-600"
              )}
            >
              {change.type === "increase" ? (
                <img
                  src="/AtGlance/increaseArrow.png"
                  className="mr-1 h-4 w-4"
                />
              ) : (
                <img
                  src="/AtGlance/decreaseArrow.png"
                  className="mr-1 h-4 w-4"
                />
              )}
              {change.value}% &nbsp;
              <span className="text-muted-foreground">{change.type}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
