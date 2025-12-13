import React from 'react';
import RiskStatusIndicator from '@/components/RiskStatusIndicator';
import { fetchDailySupplyChainSummary } from '@/services/summaryService';

// 1. Make the component async
export default async function Page() {
  
  const dashboardData = await fetchDailySupplyChainSummary();

  // We can assume data exists here because if it fails, error.tsx handles it
  const { riskStatus, dailySummary } = dashboardData;

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 sm:px-6 lg:px-8 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      {/* Header */}
      <header className="w-full max-w-4xl text-center mb-10">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-indigo-700 dark:text-indigo-400 leading-tight">
          The Sentinel: Supply Chain Dashboard
        </h1>
        <p className="mt-3 text-lg sm:text-xl text-gray-600 dark:text-gray-400">
          Intelligent Insights for Proactive Inventory Management
        </p>
      </header>

      {/* Dashboard Content */}
      <main className="w-full max-w-4xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-6 sm:p-8 lg:p-10">
        {/* Risk Status Section */}
        <section className="mb-8 flex flex-col sm:flex-row justify-between items-center pb-6 border-b border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4 sm:mb-0">Current Risk Overview</h2>
          <RiskStatusIndicator status={riskStatus} />
        </section>

        {/* Daily Summary Section */}
        <section>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-4">Daily Summary</h2>
          <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg border border-gray-200 dark:border-gray-600">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {dailySummary.riskSummary}
            </p>
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-right">
              Last updated: {new Date(dailySummary.timestamp).toLocaleString()}
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-center text-gray-500 dark:text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} The Sentinel. All rights reserved. Powered by Kestra & Google Gemini.
      </footer>
    </div>
  );
}