"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  ServiceType,
  SERVICE_INFO,
  calculateROI,
  formatCurrency,
  formatNumber,
  COST_PER_EMPLOYEE_PER_YEAR,
  HOURS_WASTED_PER_WEEK,
} from "@/lib/calculations";
import ROIChart from "./ROIChart";
import Tooltip from "./Tooltip";

export default function Calculator() {
  const [serviceType, setServiceType] = useState<ServiceType>("workshop");
  const [teamSize, setTeamSize] = useState<number>(50);

  const results = useMemo(
    () => calculateROI(teamSize, serviceType),
    [teamSize, serviceType]
  );

  const service = SERVICE_INFO[serviceType];
  const improvementPercent = Math.round(service.improvementRate * 100);

  const handleTeamSizeChange = (value: string) => {
    const num = parseInt(value, 10);
    if (!isNaN(num) && num >= 1) {
      setTeamSize(Math.min(num, 10000));
    } else if (value === "") {
      setTeamSize(1);
    }
  };

  return (
    <section id="calculator" className="py-20 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-[var(--font-oswald)] text-3xl md:text-5xl font-bold text-white mb-4">
            CALCULATE YOUR <span className="text-copper">POTENTIAL SAVINGS</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            See how much your organization could save by improving communication
            through targeted training and keynotes.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Input Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8"
          >
            {/* Service Type Selection */}
            <div className="mb-8">
              <label className="block text-white font-semibold mb-4 text-lg">
                Select Service Type
              </label>
              <div className="grid gap-3">
                {(Object.keys(SERVICE_INFO) as ServiceType[]).map((type) => {
                  const svc = SERVICE_INFO[type];
                  const isSelected = serviceType === type;
                  return (
                    <button
                      key={type}
                      onClick={() => setServiceType(type)}
                      className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
                        isSelected
                          ? "border-copper bg-copper/10"
                          : "border-card-border hover:border-copper/50 bg-transparent"
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <div>
                          <p
                            className={`font-semibold ${
                              isSelected ? "text-copper" : "text-white"
                            }`}
                          >
                            {svc.name}
                          </p>
                          <p className="text-text-secondary text-sm mt-1">
                            {svc.description}
                          </p>
                        </div>
                        <span className="text-xs text-text-secondary bg-background px-2 py-1 rounded">
                          {svc.duration}
                        </span>
                      </div>
                      <div className="mt-2">
                        <span className="text-xs text-copper">
                          Est. {Math.round(svc.improvementRate * 100)}% improvement
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Team Size Input */}
            <div>
              <label className="block text-white font-semibold mb-4 text-lg">
                Team / Audience Size
              </label>
              <div className="flex items-center gap-4">
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={Math.min(teamSize, 1000)}
                  onChange={(e) => setTeamSize(parseInt(e.target.value, 10))}
                  className="flex-1 h-2 bg-card-border rounded-lg appearance-none cursor-pointer accent-copper"
                  style={{
                    background: `linear-gradient(to right, #C9A75B 0%, #C9A75B ${
                      ((Math.min(teamSize, 1000) - 10) / 990) * 100
                    }%, #262626 ${((Math.min(teamSize, 1000) - 10) / 990) * 100}%, #262626 100%)`,
                  }}
                />
                <div className="relative">
                  <input
                    type="number"
                    min="1"
                    max="10000"
                    value={teamSize}
                    onChange={(e) => handleTeamSizeChange(e.target.value)}
                    className="w-24 bg-background border border-card-border rounded-lg px-3 py-2 text-white text-center focus:outline-none focus:border-copper"
                  />
                </div>
              </div>
              <p className="text-text-secondary text-sm mt-2">
                Employees impacted by training
              </p>
            </div>
          </motion.div>

          {/* Results Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-card-bg border border-card-border rounded-2xl p-6 md:p-8"
          >
            <h3 className="text-white font-semibold text-lg mb-6">
              Your Potential Annual Savings
            </h3>

            {/* Main Savings Number */}
            <div className="mb-8">
              <div className="flex items-start">
                <motion.p
                  key={results.potentialAnnualSavings}
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="font-[var(--font-oswald)] text-5xl md:text-6xl font-bold text-copper"
                >
                  {formatCurrency(results.potentialAnnualSavings)}
                </motion.p>
                <Tooltip
                  content={`${teamSize} employees × $${COST_PER_EMPLOYEE_PER_YEAR.toLocaleString()}/year × ${improvementPercent}% improvement = ${formatCurrency(results.potentialAnnualSavings)}`}
                />
              </div>
              <p className="text-text-secondary mt-2">
                potential savings per year
              </p>
            </div>

            {/* Additional Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="bg-background rounded-xl p-4">
                <div className="flex items-start">
                  <p className="font-[var(--font-oswald)] text-2xl font-bold text-white">
                    {formatNumber(results.hoursRecoveredPerWeek)}
                  </p>
                  <Tooltip
                    content={`${teamSize} employees × ${HOURS_WASTED_PER_WEEK} hrs/week wasted × ${improvementPercent}% improvement = ${formatNumber(results.hoursRecoveredPerWeek)} hrs/week saved`}
                  />
                </div>
                <p className="text-text-secondary text-sm">hours saved/week</p>
              </div>
              <div className="bg-background rounded-xl p-4">
                <div className="flex items-start">
                  <p className="font-[var(--font-oswald)] text-2xl font-bold text-white">
                    {formatNumber(results.hoursRecoveredPerYear)}
                  </p>
                  <Tooltip
                    content={`${formatNumber(results.hoursRecoveredPerWeek)} hrs/week × 52 weeks = ${formatNumber(results.hoursRecoveredPerYear)} hrs/year saved`}
                  />
                </div>
                <p className="text-text-secondary text-sm">hours saved/year</p>
              </div>
            </div>

            {/* Current Cost Display */}
            <div className="bg-background/50 rounded-xl p-4 mb-6 border border-card-border">
              <p className="text-text-secondary text-sm mb-1">
                Your current cost of poor communication:
              </p>
              <div className="flex items-start">
                <p className="font-[var(--font-oswald)] text-xl font-bold text-white">
                  {formatCurrency(results.annualCostOfPoorCommunication)}
                  <span className="text-text-secondary font-normal text-sm ml-2">
                    /year
                  </span>
                </p>
                <Tooltip
                  content={`${teamSize} employees × $${COST_PER_EMPLOYEE_PER_YEAR.toLocaleString()}/employee/year = ${formatCurrency(results.annualCostOfPoorCommunication)} (based on Grammarly + Harris Poll research)`}
                />
              </div>
            </div>

            {/* Chart */}
            <ROIChart data={results.monthlyBreakdown} />
          </motion.div>
        </div>

        {/* Methodology Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-text-secondary/60 text-xs text-center mt-8 max-w-2xl mx-auto"
        >
          * Calculations based on $12,506 annual cost per employee from{" "}
          <a
            href="https://www.grammarly.com/business/learn/state-of-business-communications-2023/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-text-secondary"
          >
            Grammarly + Harris Poll research
          </a>
          . Improvement rates are conservative estimates based on typical outcomes
          from communication training programs.
        </motion.p>
      </div>
    </section>
  );
}
