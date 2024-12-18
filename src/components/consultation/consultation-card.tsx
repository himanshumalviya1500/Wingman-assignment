import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { consultationsData } from "@/lib/mock-data";
import {
  Area,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";
const ConsultationCard = () => {
  return (
    <Card>
      <CardHeader className="pb-2">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <img src="/AtGlance/consultation.png" />
          CONSULTATIONS
        </div>
      </CardHeader>
      <CardContent className="h-[455px] mt-5">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={consultationsData}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#f0f0f0"
            />
            <XAxis
              dataKey="day"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
            />
            <YAxis
              yAxisId="left"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[10, 20, 30, 40, 50, 60]}
              ticks={[10, 20, 30, 40, 50, 60]}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              stroke="#888888"
              fontSize={12}
              tickLine={false}
              axisLine={false}
              domain={[10, 20]}
              ticks={[10, 10, 10, 10, 10, 60]}
            />
            <Tooltip />
            <defs>
              <linearGradient
                id="expertsOnlineGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#ffd700" stopOpacity={0.1} />
                <stop offset="95%" stopColor="#ffd700" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Area
              yAxisId="right"
              type="monotone"
              dataKey="expertsOnline"
              stroke="none"
              fill="url(#expertsOnlineGradient)"
              fillOpacity={1}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="incoming"
              stroke="#94a3b8"
              strokeWidth={2}
              strokeDasharray="3 3"
              dot={false}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="answered"
              stroke="#10b981"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <div className="h-[4px] w-[16px] bg-slate-400" />
            <span className="text-muted-foreground">Incoming</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-[4px] w-[16px] bg-emerald-500" />
            <span className="text-muted-foreground">Answered</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="h-[4px] w-[16px] rounded bg-yellow-100" />
            <span className="text-muted-foreground">Experts online</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default ConsultationCard;
