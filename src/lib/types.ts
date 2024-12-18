export interface Order {
  id: string;
  productName: string;
  productImage: string;
  date: string;
  timeSpent: string;
  orderValue: number;
  commission: number;
}

export interface InsightData {
  day: string;
  incoming: number;
  answered: number;
  expertsOnline: number;
}

export interface ComparisonData {
  period: string;
  consultations: number;
  ordersClosed: number;
}

export interface MetricData {
  icon: string;
  label: string;
  value: number;
  format: "number" | "currency" | "percentage";
  change: {
    value: number;
    type: "increase" | "decrease";
  };
}

export type TimeFilter = "7" | "14" | "30";
