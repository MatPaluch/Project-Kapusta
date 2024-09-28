import React from 'react';
import styles from './ReportChart.module.css';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';

export const ReportChart = () => {
  return (
    <div className={styles.reportContainer}>
      <VictoryChart
        style={{ width: 635, height: 314 }}
        domainPadding={{ x: 25 }} // Padding dla osi X, by wyśrodkować kolumny
      >
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: 'none' }, // Ukrycie osi Y
            ticks: { stroke: 'none' }, // Ukrycie znaczników na osi Y
            tickLabels: { fill: 'none' }, // Ukrycie etykiet na osi Y
            grid: {
              stroke: 'var(--light-grey)', // Kolor linii siatki
              strokeWidth: 1,
            },
          }}
          tickCount={9} // Liczba linii siatki na osi Y
          barWidth={38} // Szerokość kolumn
          alignment="middle" // Wyrównanie do środka
        />
        <VictoryBar
          //   x={transactions.data}
          cornerRadius={{ topLeft: 10, topRight: 10 }}
          style={{
            data: {
              fill: ({ datum }) =>
                datum.x === 3 ? 'var(--orange)' : 'var(--chart-orange-light)',
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
    </div>
  );
};
