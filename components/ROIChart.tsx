"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { MonthlyDataPoint, formatCurrency } from "@/lib/calculations";

interface ROIChartProps {
  data: MonthlyDataPoint[];
}

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    dataKey: string;
  }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: CustomTooltipProps) {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card-bg border border-card-border rounded-lg p-3 shadow-xl">
        <p className="text-text-secondary text-sm">{label}</p>
        <p className="text-copper font-semibold">
          {formatCurrency(payload[0].value)}
        </p>
        <p className="text-text-secondary text-xs">cumulative savings</p>
      </div>
    );
  }
  return null;
}

export default function ROIChart({ data }: ROIChartProps) {
  const maxValue = Math.max(...data.map((d) => d.cumulativeSavings));
  
  // Format Y-axis values
  const formatYAxis = (value: number) => {
    if (value >= 1000000) {
      return `$${(value / 1000000).toFixed(1)}M`;
    }
    if (value >= 1000) {
      return `$${(value / 1000).toFixed(0)}K`;
    }
    return `$${value}`;
  };

  return (
    <div>
      <h4 className="text-white font-semibold text-sm mb-4">
        Cumulative Savings Over 12 Months
      </h4>
      <div className="h-48 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorSavings" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#C9A75B" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#C9A75B" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 11 }}
              dy={10}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#9CA3AF", fontSize: 11 }}
              tickFormatter={formatYAxis}
              width={50}
              domain={[0, maxValue * 1.1]}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="cumulativeSavings"
              stroke="#C9A75B"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorSavings)"
              animationDuration={500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

