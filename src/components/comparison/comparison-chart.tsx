import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { comparisonData } from "@/lib/mock-data";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export function ComparisonChart() {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <img src="/AtGlance/vsProgress.png" />
          VS PAST PERIOD
        </div>
      </CardHeader>
      <CardContent className="mt-5">
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            data={comparisonData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="period"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[0, 20]}
              ticks={[0, 5, 10, 15, 20]}
            />
            <Tooltip />
            <Bar
              dataKey="consultations"
              fill="#CCFBEF"
              radius={[4, 4, 0, 0]}
              barSize={30}
            />
            <Bar
              dataKey="ordersClosed"
              fill="#134E48"
              radius={[4, 4, 0, 0]}
              barSize={30}
            />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-gray-200" />
            <span className="text-muted-foreground">Consultations</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-3 w-3 rounded bg-[#0F4C44]" />
            <span className="text-muted-foreground">Orders closed</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
