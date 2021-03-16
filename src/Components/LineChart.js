import React, { useState } from 'react';
import DateButton from './DateButton';
import { Line } from 'react-chartjs-2';

const chartData = [
  {
    x: '2020-11-16',
    y: '6.39',
  },
  {
    x: '2020-11-17',
    y: '13.36',
  },
  {
    x: '2020-11-18',
    y: '19.93',
  },
  {
    x: '2020-11-19',
    y: '30.89',
  },
  {
    x: '2020-11-20',
    y: '45.62',
  },
  {
    x: '2020-11-21',
    y: '62.46',
  },
  {
    x: '2020-11-22',
    y: '76.45',
  },
  {
    x: '2020-11-23',
    y: '98.25',
  },
  {
    x: '2020-11-24',
    y: '107.45',
  },
  {
    x: '2020-11-25',
    y: '111.51',
  },
  {
    x: '2020-11-26',
    y: '110.46',
  },
  {
    x: '2020-11-27',
    y: '119.07',
  },
  {
    x: '2020-11-28',
    y: '132.52',
  },
  {
    x: '2020-11-29',
    y: '151.60',
  },
  {
    x: '2020-11-30',
    y: '179.02',
  },
  {
    x: '2020-12-01',
    y: '188.93',
  },
  {
    x: '2020-12-02',
    y: '208.68',
  },
  {
    x: '2020-12-03',
    y: '232.79',
  },
  {
    x: '2020-12-04',
    y: '228.63',
  },
  {
    x: '2020-12-05',
    y: '251.88',
  },
  {
    x: '2020-12-06',
    y: '268.03',
  },
  {
    x: '2020-12-07',
    y: '277.23',
  },
  {
    x: '2020-12-08',
    y: '272.09',
  },
  {
    x: '2020-12-09',
    y: '293.56',
  },
  {
    x: '2020-12-10',
    y: '298.20',
  },
  {
    x: '2020-12-11',
    y: '301.06',
  },
  {
    x: '2020-12-12',
    y: '326.26',
  },
  {
    x: '2020-12-13',
    y: '351.00',
  },
  {
    x: '2020-12-14',
    y: '364.80',
  },
  {
    x: '2020-12-15',
    y: '382.79',
  },
  {
    x: '2020-12-16',
    y: '431.83',
  },
  {
    x: '2020-12-17',
    y: '453.32',
  },
  {
    x: '2020-12-18',
    y: '477.34',
  },
  {
    x: '2020-12-19',
    y: '496.83',
  },
  {
    x: '2020-12-20',
    y: '497.07',
  },
  {
    x: '2020-12-21',
    y: '490.87',
  },
  {
    x: '2020-12-22',
    y: '526.46',
  },
  {
    x: '2020-12-23',
    y: '502.04',
  },
  {
    x: '2020-12-24',
    y: '545.36',
  },
  {
    x: '2020-12-25',
    y: '577.93',
  },
  {
    x: '2020-12-26',
    y: '606.42',
  },
  {
    x: '2020-12-27',
    y: '734.88',
  },
  {
    x: '2020-12-28',
    y: '812.15',
  },
  {
    x: '2020-12-29',
    y: '842.75',
  },
  {
    x: '2020-12-30',
    y: '896.88',
  },
  {
    x: '2020-12-31',
    y: '954.23',
  },
  {
    x: '2021-01-01',
    y: '993.88',
  },
  {
    x: '2021-01-02',
    y: '1106.37',
  },
  {
    x: '2021-01-03',
    y: '1443.15',
  },
  {
    x: '2021-01-04',
    y: '1581.19',
  },
  {
    x: '2021-01-05',
    y: '1722.45',
  },
  {
    x: '2021-01-06',
    y: '1926.00',
  },
  {
    x: '2021-01-07',
    y: '2010.79',
  },
  {
    x: '2021-01-08',
    y: '2039.22',
  },
  {
    x: '2021-01-09',
    y: '2197.15',
  },
  {
    x: '2021-01-10',
    y: '2215.60',
  },
  {
    x: '2021-01-11',
    y: '1961.50',
  },
  {
    x: '2021-01-12',
    y: '1923.87',
  },
  {
    x: '2021-01-13',
    y: '2114.91',
  },
  {
    x: '2021-01-14',
    y: '2326.91',
  },
  {
    x: '2021-01-15',
    y: '2283.51',
  },
  {
    x: '2021-01-16',
    y: '2469.44',
  },
  {
    x: '2021-01-17',
    y: '2524.04',
  },
  {
    x: '2021-01-18',
    y: '2743.74',
  },
  {
    x: '2021-01-19',
    y: '3166.77',
  },
  {
    x: '2021-01-20',
    y: '3399.73',
  },
  {
    x: '2021-01-21',
    y: '2792.04',
  },
  {
    x: '2021-01-22',
    y: '3148.57',
  },
  {
    x: '2021-01-23',
    y: '3216.96',
  },
  {
    x: '2021-01-24',
    y: '3705.49',
  },
  {
    x: '2021-01-25',
    y: '3572.86',
  },
  {
    x: '2021-01-26',
    y: '3737.42',
  },
  {
    x: '2021-01-27',
    y: '3489.70',
  },
  {
    x: '2021-01-28',
    y: '3814.28',
  },
  {
    x: '2021-01-29',
    y: '4018.88',
  },
  {
    x: '2021-01-30',
    y: '4085.48',
  },
  {
    x: '2021-01-31',
    y: '3968.32',
  },
  {
    x: '2021-02-01',
    y: '4209.67',
  },
  {
    x: '2021-02-02',
    y: '4712.94',
  },
  {
    x: '2021-02-03',
    y: '5272.43',
  },
  {
    x: '2021-02-04',
    y: '5214.37',
  },
  {
    x: '2021-02-05',
    y: '5697.20',
  },
  {
    x: '2021-02-06',
    y: '5647.56',
  },
  {
    x: '2021-02-07',
    y: '5534.01',
  },
  {
    x: '2021-02-08',
    y: '6113.46',
  },
  {
    x: '2021-02-09',
    y: '6288.88',
  },
  {
    x: '2021-02-10',
    y: '6299.91',
  },
  {
    x: '2021-02-11',
    y: '6596.55',
  },
  {
    x: '2021-02-12',
    y: '6949.76',
  },
  {
    x: '2021-02-13',
    y: '6937.97',
  },
  {
    x: '2021-02-14',
    y: '6972.72',
  },
  {
    x: '2021-02-15',
    y: '6967.38',
  },
  {
    x: '2021-02-16',
    y: '7070.34',
  },
  {
    x: '2021-02-17',
    y: '7433.91',
  },
  {
    x: '2021-02-18',
    y: '7903.20',
  },
  {
    x: '2021-02-19',
    y: '8113.19',
  },
  {
    x: '2021-02-20',
    y: '8045.46',
  },
  {
    x: '2021-02-21',
    y: '8250.12',
  },
  {
    x: '2021-02-22',
    y: '8033.44',
  },
  {
    x: '2021-02-23',
    y: '7204.94',
  },
  {
    x: '2021-02-24',
    y: '7502.34',
  },
  {
    x: '2021-02-25',
    y: '6873.24',
  },
  {
    x: '2021-02-26',
    y: '6815.54',
  },
  {
    x: '2021-02-27',
    y: '6970.81',
  },
  {
    x: '2021-02-28',
    y: '6836.55',
  },
  {
    x: '2021-03-01',
    y: '7609.01',
  },
  {
    x: '2021-03-02',
    y: '7285.49',
  },
  {
    x: '2021-03-03',
    y: '7775.45',
  },
  {
    x: '2021-03-04',
    y: '7658.35',
  },
  {
    x: '2021-03-05',
    y: '7670.01',
  },
  {
    x: '2021-03-06',
    y: '8362.16',
  },
  {
    x: '2021-03-07',
    y: '8846.25',
  },
  {
    x: '2021-03-08',
    y: '9478.96',
  },
  {
    x: '2021-03-09',
    y: '9766.34',
  },
  {
    x: '2021-03-10',
    y: '9471.48',
  },
  {
    x: '2021-03-11',
    y: '9732.46',
  },
  {
    x: '2021-03-12',
    y: '9538.41',
  },
  {
    x: '2021-03-13',
    y: '10497.47',
  },
  {
    x: '2021-03-14',
    y: '10265.18',
  },
  {
    x: '2021-03-15',
  },
];

export default function LineChart() {
  const [viewState, setViewState] = useState('showAll');
  const [tickState, setTickState] = useState('2020-11-16');
  const [yTickState, setyTickState] = useState(0);
  const [timeState, setTimeState] = useState({
    unit: 'month',
    displayFormats: { month: 'MMM YYYY' },
  });

  const data = {
    datasets: [
      {
        label: 'Portoflio Value',
        data: chartData,
        fill: false,
        borderColor: 'rgb(55, 155, 255)',
        lineTension: 0,
        pointRadius: 1,
        pointHitRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
    },
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: false,
    },
    scales: {
      xAxes: [
        {
          type: 'time',
          time: timeState,
          gridLines: {
            offsetGridLines: false,
            color: 'rgba(0, 0, 0, .21)',
          },
          ticks: {
            autoSkip: true,
            min: tickState,
          },
        },
      ],
      yAxes: [
        {
          gridLines: {
            color: 'rgba(0, 0, 0, 0)',
          },
          ticks: {
            padding: 20,
            min: yTickState,
          },
        },
      ],
    },
  };

  const showAll = () => {
    if (viewState !== 'showAll') {
      setViewState('showAll');
      setTickState('2020-11-16');
      setyTickState(0);
      setTimeState({
        unit: 'month',
        displayFormats: { month: 'MMM YYYY' },
      });
    }
  };

  const showMonth = () => {
    if (viewState !== 'showMonth') {
      setViewState('showMonth');
      setTickState('2021-02-15');
      setyTickState(4000);
      setTimeState({
        unit: 'week',
        displayFormats: { week: 'MMM DD' },
      });
    }
  };

  const showWeek = () => {
    if (viewState !== 'showWeek') {
      setViewState('showWeek');
      setTickState('2021-03-07');
      setyTickState(8000);
      setTimeState({
        unit: 'day',
        displayFormats: { day: 'MMM DD' },
      });
    }
  };

  return (
    <div>
      <DateButton onClick={showAll}>All</DateButton>
      <DateButton onClick={showMonth}>Month</DateButton>
      <DateButton onClick={showWeek}>Week</DateButton>
      <Line data={data} options={options} />
    </div>
  );
}
