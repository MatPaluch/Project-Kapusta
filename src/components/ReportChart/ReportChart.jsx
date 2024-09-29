import React from 'react';
import styles from './ReportChart.module.css';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';

export const ReportChart = () => {
  return (
    <div className={styles.reportContainer}>
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
