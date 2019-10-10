export const data = {
  labels: ['System-T1', 'System-T2', 'T2'],
  datasets: [
    {
      label: 'Aug, 2019',
      backgroundColor: '#e53935',
      data: [4, 2, 2]
    },
    {
      label: 'Sep, 2019',
      backgroundColor: '#FB8C00',
      data: [2, 5, 3],
    },
    {
      label: 'Oct, 2019',
      backgroundColor: '#3F51B5',
      data: [8, 5, 9],
    }
  ]
};

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  animation: false,
  legend:{ display:true, position:'top' },
  cornerRadius: 20,
  tooltips: {
    enabled: true,
    mode: 'index',
    intersect: false,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    backgroundColor: '#FFFFFF',
    titleFontColor: '#263238',
    bodyFontColor: '#546E7A',
    footerFontColor: '#546E7A'
  },
  layout: { padding: 0 },
  scales: {
    xAxes: [
      {
        barThickness: 12,
        maxBarThickness: 10,
        barPercentage: 0.5,
        categoryPercentage: 0.5,
        ticks: {
          fontColor: '#546E7A'
        },
        gridLines: {
          display: false,
          drawBorder: false
        }
      }
    ],
    yAxes: [
      {
        ticks: {
          fontColor: '#546E7A',
          beginAtZero: true,
          min: 0
        },
        gridLines: {
          borderDash: [2],
          borderDashOffset: [2],
          color: '#EEEEEE',
          drawBorder: false,
          zeroLineBorderDash: [2],
          zeroLineBorderDashOffset: [2],
          zeroLineColor: '#EEEEEE'
        }
      }
    ]
  }
};
