new Chartist.Line('.chart3', {
  labels: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май'],
  series: [
    [2, 1, 3.5, 3, 8],
    [3, 6, 3, 6, 3]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 50
  }
});