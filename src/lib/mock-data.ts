import { ComparisonData, InsightData, MetricData, Order } from "./types";

export const metrics: MetricData[] = [
  {
    icon: "/AtGlance/consultation.png",
    label: "CONSULTATIONS",
    value: 24,
    format: "number" as const,
    change: { value: 15, type: "increase" as const },
  },
  {
    icon: "/AtGlance/sales.png",
    label: "ORDERS PLACED",
    value: 12,
    format: "number" as const,
    change: { value: 15, type: "decrease" as const },
  },
  {
    icon: "/AtGlance/conversion.png",
    label: "CONVERSION",
    value: 50,
    format: "percentage" as const,
    change: { value: 15, type: "decrease" as const },
  },
  {
    icon: "/AtGlance/totalSales.png",
    label: "TOTAL SALES VALUE",
    value: 2400,
    format: "currency" as const,
    change: { value: 15, type: "increase" as const },
  },
  {
    icon: "/AtGlance/totalSales.png",
    label: "AVG ORDER VALUE",
    value: 240,
    format: "currency" as const,
    change: { value: 15, type: "increase" as const },
  },
  {
    icon: "/AtGlance/piggyBank.png",
    label: "COMMISSION PAID",
    value: 240,
    format: "currency" as const,
    change: { value: 15, type: "increase" as const },
  },
];

export const insightData: InsightData[] = [
  { day: "Mon", incoming: 30, answered: 25, expertsOnline: 5 },
  { day: "Tue", incoming: 35, answered: 28, expertsOnline: 6 },
  { day: "Wed", incoming: 40, answered: 32, expertsOnline: 7 },
  { day: "Thu", incoming: 45, answered: 36, expertsOnline: 8 },
  { day: "Fri", incoming: 42, answered: 34, expertsOnline: 7 },
  { day: "Sat", incoming: 38, answered: 30, expertsOnline: 6 },
  { day: "Sun", incoming: 35, answered: 28, expertsOnline: 5 },
];

export const comparisonData: ComparisonData[] = [
  { period: "This week", consultations: 24, ordersClosed: 12 },
  { period: "Last week", consultations: 20, ordersClosed: 10 },
];

export const generateOrders: Order[] = Array.from({ length: 50 }, (_, i) => ({
  id: `order-${i + 1}`,
  productName: `Product Name ${i + 1}`,
  productImage: "/Orders/earphone.png",
  date: `24 Apr 2024`,
  timeSpent: `${Math.floor(Math.random() * 5)}h ${Math.floor(
    Math.random() * 60
  )}m`,
  orderValue: parseFloat((Math.random() * (300 - 50) + 50).toFixed(2)),
  commission: parseFloat((Math.random() * (100 - 30) + 30).toFixed(2)),
}));

export const consultationsData = [
  { day: "Mon", incoming: 32, answered: 28, expertsOnline: 5 },
  { day: "Tue", incoming: 35, answered: 29, expertsOnline: 5 },
  { day: "Wed", incoming: 40, answered: 32, expertsOnline: 6 },
  { day: "Thu", incoming: 45, answered: 42, expertsOnline: 6 },
  { day: "Fri", incoming: 43, answered: 38, expertsOnline: 5 },
  { day: "Sat", incoming: 48, answered: 36, expertsOnline: 5 },
  { day: "Sun", incoming: 52, answered: 38, expertsOnline: 5 },
];
