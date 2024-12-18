import { ForecastCard } from "../forecasts/forecast-card";
import { ComparisonChart } from "../comparison/comparison-chart";
import ConsultationCard from "../consultation/consultation-card";

export function InsightsCard() {
  return (
    <div className="grid gap-4 lg:grid-cols-[1.5fr,1fr,1fr]">
      <ConsultationCard />
      <ComparisonChart />
      <ForecastCard />
    </div>
  );
}
