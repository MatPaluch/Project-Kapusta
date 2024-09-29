import React, { useEffect } from 'react';
import styles from './ReportChart.module.css';
import { VictoryAxis, VictoryBar, VictoryChart } from 'victory';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategoryData } from '../../redux/reports/reportsActions';

export const ReportChart = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector(state => state.reports.selectedCategory);
  const selectedType = useSelector(state => state.reports.selectedType);
  const categoryData = useSelector(state => state.reports.categoryData);
  const selectedPeriod = useSelector(state => state.period.selectedPeriod);

  useEffect(() => {
    if (selectedCategory && selectedPeriod) {
      dispatch(
        fetchCategoryData({
          category: selectedCategory,
          type: selectedType,
          period: selectedPeriod,
        })
      );
    }
  }, [dispatch, selectedCategory, selectedType, selectedPeriod]);

  const formattedData = Object.entries(categoryData).map(
    ([description, amount]) => ({
      x: description,
      y: amount,
    })
  );
  console.log('categoryData: ', categoryData);
  console.log('formatted data:', formattedData);
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
          data={formattedData}
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
