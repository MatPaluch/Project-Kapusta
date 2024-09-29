import React from 'react';
import styles from './ReportChart.module.css';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel } from 'victory';
import { useSelector } from 'react-redux';

export const ReportChart = () => {
  const selectedCategory = useSelector(state => state.reports.selectedCategory);
  const selectedType = useSelector(state => state.reports.selectedType);

  const categoryData = useSelector(state => {
    if (selectedType === 'expenses' && selectedCategory) {
      return state.reports.expenseCategories.expensesData[selectedCategory];
    } else if (selectedType === 'incomes' && selectedCategory) {
      return state.reports.incomeCategories.incomeData[selectedCategory];
    } else {
      return null;
    }
  });

  const formattedData = categoryData
    ? Object.entries(categoryData)
        .filter(([key]) => key !== 'total')
        .map(([productName, amount]) => ({
          x: productName,
          y: amount,
        }))
    : [];

  return (
    <div className={styles.reportContainer} style={{ width: 635, height: 314 }}>
      {selectedCategory ? (
        <>
          <VictoryChart domainPadding={{ x: 25 }}>
            <VictoryAxis
              style={{
                axis: { stroke: 'var(--light-grey)' },
                tickLabels: {
                  fontSize: 12,
                  padding: 10,
                  fill: 'var(--dark-grey)',
                },
              }}
              tickFormat={formattedData.map(data => data.x)}
              alignment="middle"
            />

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
            />
            <VictoryBar
              data={formattedData}
              labels={({ datum }) => `${datum.y}`}
              labelComponent={
                <VictoryLabel
                  dy={-10}
                  style={{ fill: 'var(--dark-grey)', fontSize: 12 }}
                />
              }
              cornerRadius={{ topLeft: 10, topRight: 10 }}
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
