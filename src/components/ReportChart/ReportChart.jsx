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
        .sort((a, b) => a.y - b.y)
    : [];

  return (
    <div className={styles.reportContainer}>
      {selectedCategory && formattedData ? (
        <>
          <div className={styles.verticalChart}>
            <VictoryChart domainPadding={{ x: 25 }}>
              <VictoryAxis
                style={{
                  axis: { stroke: 'var(--light-grey)' },
                  tickLabels: {
                    fontSize: 12,
                    padding: 10,
                    fill: 'var(--grey)',
                  },
                }}
                tickFormat={formattedData.map(data => data.x)}
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
                barWidth={38}
                barRatio={2}
                alignment="middle"
                labels={({ datum }) => `${datum.y} PLN`}
                labelComponent={
                  <VictoryLabel
                    dy={-10}
                    style={{
                      fill: 'var(--grey)',
                      fontSize: 12,
                      fonrFamily: 'Roboto',
                    }}
                  />
                }
                cornerRadius={{ topLeft: 10, topRight: 10 }}
                style={{
                  data: {
                    // Ustawienie koloru słupka na podstawie indeksu
                    fill: ({ index }) =>
                      index % 3 === 0
                        ? 'var(--orange)'
                        : 'var(--chart-orange-light)',
                    width: 38,
                  },
                }}
              />
            </VictoryChart>
          </div>

          {/* Horizontal Chart */}
          <div className={styles.horizontalChart}>
            <VictoryChart horizontal>
              <VictoryAxis
                style={{
                  axis: { stroke: 'none' },
                }}
                tickLabelComponent={
                  <VictoryLabel
                    dy={-23}
                    dx={10}
                    textAnchor="start"
                    style={{
                      fill: 'var(--grey)',
                      fontSize: 17,
                      fontFamily: 'Roboto',
                    }}
                  />
                }
              />

              <VictoryBar
                data={formattedData}
                barWidth={22}
                barRatio={0.65}
                labels={({ datum }) => `${datum.y} PLN`}
                labelComponent={
                  <VictoryLabel
                    dy={-23}
                    dx={-25}
                    style={{
                      fill: 'var(--grey)',
                      fontSize: 17,
                      fontFamily: 'Roboto',
                    }}
                  />
                }
                cornerRadius={{
                  topLeft: 11,
                  topRight: 11,
                }}
                style={{
                  data: {
                    fill: ({ index }) =>
                      index % 3 === 0
                        ? 'var(--orange)'
                        : 'var(--chart-orange-light)',
                  },
                }}
              />
            </VictoryChart>
          </div>
        </>
      ) : (
        <p>Select category to display the data</p>
      )}
    </div>
  );
};
