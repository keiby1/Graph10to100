new Chartist.Line('.chart1', {
  labels: [0,10, 20, 30, 40, 50,60, 70,80,90,100],
  series: [
    [0, 20, 45, 73],
    [0, 17, 39, 59, 90],
    [0, 11.5, 14.5, 18, 23.5, 28, 42, 45, 49, 58, 65]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 50
  }
});