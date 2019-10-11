export const data = {
  labels: ['System-T1', 'System-T2', 'March'],
  datasets: [{
      label: 'Amount',
      type:'line',
      data: [31, 55, 40],
      fill: false,
      borderColor: '#EC932F',
      backgroundColor: '#EC932F',
      pointBorderColor: '#EC932F',
      pointBackgroundColor: '#EC932F',
      pointHoverBackgroundColor: '#EC932F',
      pointHoverBorderColor: '#EC932F'
    },{
      type: 'bar',
      label: 'Price',
      data: [200, 185, 590],
      fill: false,
      backgroundColor: '#71B37C',
      borderColor: '#71B37C',
      hoverBackgroundColor: '#71B37C',
      hoverBorderColor: '#71B37C'
    }]
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
        barThickness: 42,
        maxBarThickness: 40,
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
