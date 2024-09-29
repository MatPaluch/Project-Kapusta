import React from 'react';
import styles from './ReportChart.module.css';
import { VictoryAxis, VictoryBar, VictoryChart, VictoryLabel } from 'victory';
import { useSelector } from 'react-redux';

export const ReportChart = () => {
  const selectedCategory = useSelector(state => state.reports.selectedCategory);
  const selectedType = useSelector(state => state.reports.selectedType);

  const categoryData = useSelector(state => {
    if (selectedType === 'expense' && selectedCategory) {
      return state.reports.expenseCategories.expensesData[selectedCategory];
    } else if (selectedType === 'income' && selectedCategory) {
      return state.reports.incomeCategories.incomeData[selectedCategory];
    } else {
      return null;
    }
  });

  const formattedData = Object.entries(categoryData)
    .filter(([key]) => key !== 'total')
    .map(([productName, amount]) => ({
      x: productName,
      y: amount,
    }));

  return (
    <div className={styles.reportContainer}>
      {selectedCategory ? (
        <>
          <VictoryChart
            style={{ width: 635, height: 314 }}
            domainPadding={{ x: 25 }}
          >
            {/* Oś X z nazwami produktów */}
            <VictoryAxis
              style={{
                axis: { stroke: 'var(--light-grey)' },
                tickLabels: {
                  fontSize: 12, // Zmień rozmiar czcionki nazw produktów
                  padding: 10, // Odstęp od osi
                  fill: 'var(--dark-grey)', // Kolor czcionki
                },
              }}
              tickFormat={formattedData.map(data => data.x)} // Nazwy produktów na osi
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
                  dy={-10} // Przesunięcie kwoty nad słupek
                  style={{ fill: 'var(--dark-grey)', fontSize: 12 }} // Styl kwoty
                />
              }
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
