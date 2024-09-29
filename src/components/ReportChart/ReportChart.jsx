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
                barRatio={0.65}
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
              {/* Oś pionowa */}
              <VictoryAxis
                width={280}
                domainPadding={0}
                padding={0}
                style={{
                  axis: { stroke: 'var(--light-grey)' },
                }}
                tickLabelComponent={
                  <VictoryLabel
                    dy={-30} // Ustawienie ticków nad osią
                    dx={100}
                    style={{
                      fill: 'var(--grey)',
                      fontSize: 12,
                    }}
                  />
                }
              />
              {/* Oś pozioma */}
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
              />
              {/* Słupki */}
              <VictoryBar
                data={formattedData}
                barRatio={0.65}
                alignment="middle"
                labels={({ datum }) => `${datum.y} PLN`}
                labelComponent={
                  <VictoryLabel
                    dy={-30} // Przesunięcie etykiety w górę, aby była nad słupkiem
                    dx={-20}
                    style={{
                      fill: 'var(--grey)',
                    }}
                  />
                }
                cornerRadius={{ topLeft: 10, topRight: 10 }}
                style={{
                  data: {
                    fill: 'var(--chart-orange-light)',
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
