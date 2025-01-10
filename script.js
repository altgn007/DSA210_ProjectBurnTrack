const week1Days = [
    "November 15", 
    "November 16", 
    "November 17"
  ];

  const week2Days = [
    "November 20", 
    "November 21", 
    "November 22", 
    "November 23", 
    "November 24"
  ];

  const week3Days = [
    "November 27", 
    "November 28", 
    "November 29", 
    "November 30", 
    "December 1"
  ];

  const week4Days = [
    "December 4", 
    "December 5", 
    "December 6", 
    "December 7", 
    "December 8"
  ];

  const week5Days = [
    "December 11", 
    "December 12", 
    "December 13", 
    "December 14", 
    "December 15"
  ];

  const week6Days = [
    "December 18", 
    "December 19", 
    "December 20", 
    "December 21", 
    "December 22"
  ];

  const week7Days = [
    "December 25", 
    "December 26", 
    "December 27", 
    "December 28", 
    "December 29"
  ];
  
  const dailyLabels = [
    ...week1Days,
    ...week2Days,
    ...week3Days,
    ...week4Days,
    ...week5Days,
    ...week6Days,
    ...week7Days
  ];
  
  const dailyDistances = [
    // Week1 
    2.0, 2.3, 2.1,
  
    // Week2 
    3.0, 3.2, 3.1, 3.0, 3.2,
  
    // Week3 
    4.0, 4.3, 4.0, 4.2, 4.3,
  
    // Week4 
    5.0, 5.2, 5.1, 5.0, 5.2,
  
    // Week5 
    6.0, 6.3, 6.1, 6.0, 6.3,
  
    // Week6 
    7.0, 7.3, 7.1, 7.0, 7.3,
  
    // Week7 
    8.0, 8.3, 8.1, 8.2, 8.3
  ];
  
  const dailyCalories = dailyDistances.map(dist => dist * 78);
  
  const weekNumberLabels = ["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7"];
  
  const week1Dist = dailyDistances[0] + dailyDistances[1] + dailyDistances[2]; 
  const week2Dist = dailyDistances[3] + dailyDistances[4] + dailyDistances[5] + dailyDistances[6] + dailyDistances[7];
  const week3Dist = dailyDistances[8] + dailyDistances[9] + dailyDistances[10] + dailyDistances[11] + dailyDistances[12];
  const week4Dist = dailyDistances[13] + dailyDistances[14] + dailyDistances[15] + dailyDistances[16] + dailyDistances[17];
  const week5Dist = dailyDistances[18] + dailyDistances[19] + dailyDistances[20] + dailyDistances[21] + dailyDistances[22];
  const week6Dist = dailyDistances[23] + dailyDistances[24] + dailyDistances[25] + dailyDistances[26] + dailyDistances[27];
  const week7Dist = dailyDistances[28] + dailyDistances[29] + dailyDistances[30] + dailyDistances[31] + dailyDistances[32];
  
  const weeklyDistances = [
    week1Dist,
    week2Dist,
    week3Dist,
    week4Dist,
    week5Dist,
    week6Dist,
    week7Dist
  ];
  
  const weeklyCalories = weeklyDistances.map(dsum => dsum * 78);
  
  const weeklyWeightLoss = [0, -0.3, -0.4, -0.45, -0.45, -0.55, -0.65];
  
  const ctxDailyDist = document.createElement('canvas');
  document.getElementById('charts').appendChild(ctxDailyDist);
  
  const myDailyDistanceChart = new Chart(ctxDailyDist, {
    type: 'line',
    data: {
      labels: dailyLabels,
      datasets: [
        {
          label: 'Daily Distance (km)',
          data: dailyDistances,
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 2,
          fill: false,
          pointRadius: 4,
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Distance (km)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Date'
          }
        }
      }
    }
  });
  
  const ctxDailyCal = document.createElement('canvas');
  document.getElementById('charts').appendChild(ctxDailyCal);
  
  const myDailyCalorieChart = new Chart(ctxDailyCal, {
    type: 'bar',
    data: {
      labels: dailyLabels,
      datasets: [
        {
          label: 'Daily Calorie (kcal)',
          data: dailyCalories,
          backgroundColor: 'rgba(150, 255, 200, 0.6)',
          borderColor: 'rgba(150, 255, 200, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Calorie (kcal)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Date'
          }
        }
      }
    }
  });
  
  
  const ctxWeeklyDist = document
    .getElementById('myWeeklyDistanceChart')
    .getContext('2d');
  
  const myWeeklyDistanceChart = new Chart(ctxWeeklyDist, {
    type: 'bar',
    data: {
      labels: weekNumberLabels,
      datasets: [
        {
          label: 'Weekly Distance (km)',
          data: weeklyDistances,
          backgroundColor: 'rgba(169, 229, 200, 0.7)',
          borderColor: 'rgba(169, 229, 200, 1)',
          borderWidth: 1
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Distance (km)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Week'
          }
        }
      }
    }
  });
  
  const ctxWeeklyCal = document
    .getElementById('myWeeklyCalorieChart')
    .getContext('2d');
  
  const myWeeklyCalorieChart = new Chart(ctxWeeklyCal, {
    type: 'line',
    data: {
      labels: weekNumberLabels,
      datasets: [
        {
          label: 'Weekly Calorie (kcal)',
          data: weeklyCalories,
          borderColor: 'rgba(255, 136, 136, 1)',
          backgroundColor: 'rgba(255, 136, 136, 0.2)',
          borderWidth: 2,
          fill: true,
          pointRadius: 4,
          tension: 0.2
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Calorie (kcal)'
          }
        },
        x: {
          title: {
            display: true,
            text: 'Week'
          }
        }
      }
    }
  });
  
  
  const ctxLoss = document
    .getElementById('myWeeklyLossChart')
    .getContext('2d');

  const myWeeklyLossChart = new Chart(ctxLoss, {
    type: 'bar',
    data: {
      labels: weekNumberLabels,
      datasets: [
        {
          type: 'bar',
          label: 'Weekly Distance (km)',
          data: weeklyDistances,
          backgroundColor: 'rgba(169, 229, 200, 0.7)',
          borderColor: 'rgba(169, 229, 200, 1)',
          borderWidth: 1,
          yAxisID: 'y'
        },
        {
          type: 'line',
          label: 'Weight Loss (kg)',
          data: weeklyWeightLoss,
          borderColor: 'rgba(255, 136, 136, 1)',
          backgroundColor: 'rgba(255, 136, 136, 0.2)',
          fill: false,
          tension: 0.2,
          yAxisID: 'y1'
        }
      ]
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Distance (km)'
          }
        },
        y1: {
          beginAtZero: true,
          position: 'right',
          title: {
            display: true,
            text: 'Weight Loss (kg)'
          }
        }
      }
    }
  });
  