new Chartist.Line('.chart2', {
  labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май'],
  series: [
    [3, 3, 2, 6, 9],
    [2, 1, 3.5, 3, 8],
    [3, 7, 2, 1, 3]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 50
  }
});