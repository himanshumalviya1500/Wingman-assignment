import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TimeFilter } from "@/lib/types";
import { Sidebar } from "./layout/sidebar";
import { MetricCard } from "./metrics/metric-card";
import { InsightsCard } from "./insights/insights-card";
import { OrdersTable } from "./orders/orders-table";
import { generateOrders, metrics } from "@/lib/mock-data";

export default function DashboardPage() {
  const [timeFilter, setTimeFilter] = useState<TimeFilter>("7");
  const [orders, setOrders] = useState(() => generateOrders);

  const handleTimeFilterChange = (value: TimeFilter) => {
    setTimeFilter(value);
    setOrders(generateOrders);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="pl-16">
        <header className="border-b">
          <div className="px-6 h-16">
            <Tabs defaultValue="summary" className="h-full">
              <div className="flex items-center justify-between h-full">
                <TabsList className="h-full bg-white">
                  <TabsTrigger value="sales" className="gap-2 bg-[#CCFBEF]">
                    <img src="/Navbar/summary.png" className="w-4 h-4" />
                    Summary
                  </TabsTrigger>
                  <TabsTrigger value="sales" className="gap-2">
                    <img src="/Navbar/sales.png" className="w-4 h-4" />
                    Sales
                  </TabsTrigger>
                  <TabsTrigger value="chats" className="gap-2">
                    <img src="/Navbar/chats.png" className="w-4 h-4" />
                    Chats
                  </TabsTrigger>
                </TabsList>
              </div>
            </Tabs>
          </div>
        </header>
        <div className="p-6">
          <main className="p-[16px] border border-gray-200 rounded-lg">
            <div className="mb-6 flex items-center justify-between">
              <h1 className="text-2xl font-semibold">At a glance</h1>
              <Select value={timeFilter} onValueChange={handleTimeFilterChange}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Select time period" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="7">7 days</SelectItem>
                  <SelectItem value="14">14 days</SelectItem>
                  <SelectItem value="30">30 days</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <Tabs defaultValue="summary" className="space-y-6">
              <TabsContent value="summary" className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  {metrics.map((metric) => (
                    <MetricCard key={metric.label} {...metric} />
                  ))}
                </div>
                <h1 className="text-2xl font-semibold">Insights</h1>
                <InsightsCard />

                <OrdersTable
                  orders={orders}
                  timeFilter={timeFilter}
                  onTimeFilterChange={handleTimeFilterChange}
                />
              </TabsContent>
            </Tabs>
          </main>
        </div>
      </div>
    </div>
  );
}
