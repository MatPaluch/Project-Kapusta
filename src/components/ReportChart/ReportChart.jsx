import React from 'react';
import styles from './ReportChart.module.css';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';
import { useSelector } from 'react-redux';

export const ReportChart = () => {
  const selectedCategory = useSelector(state => state.reports.selectedCategory);

  const categoryData = useSelector(state => state.reports.categoryData);
  const selectedCategoryData =
    categoryData[selectedCategory]?.expensesData || {};

  console.log('Selected Category:', selectedCategory);
  console.log('Category Data:', categoryData);

  // Sprawdzanie, czy dane dla wybranej kategorii są dostępne
  const formattedData = Object.entries(selectedCategoryData).flatMap(
    ([categoryName, data]) => {
      return Object.entries(data)
        .filter(([productName]) => productName !== 'total')
        .map(([productName, amount]) => ({
          x: productName,
          y: amount,
        }));
    }
  );

  return (
    <div className={styles.reportContainer}>
      {selectedCategory ? (
        <>
          <VictoryChart
            style={{ width: 635, height: 314 }}
            domainPadding={{ x: 25 }}
          >
            <VictoryAxis
              dependentAxis
              style={{
                axis: { stroke: 'none' },
                ticks: { stroke: 'none' },
                tickLabels: { fill: 'none' },
                grid: {
                  stroke: 'var(--light-grey)',
                  strokeWidth: 1,
                },
              }}
              tickCount={9}
              barWidth={38}
              alignment="middle"
            />
            <VictoryBar
              data={formattedData}
              cornerRadius={{ topLeft: 10, topRight: 10 }}
              style={{
                data: {
                  fill: ({ datum }) =>
                    datum.x === 3
                      ? 'var(--orange)'
                      : 'var(--chart-orange-light)',
                  width: 38,
                },
              }}
              animate={{
                onEnter: {
                  duration: 50,
                  before: () => ({
                    _y: 0,
                    fill: 'orange',
                  }),
                },
              }}
            />
          </VictoryChart>
        </>
      ) : (
        <p>Select category to display the data</p>
      )}
    </div>
  );
};
