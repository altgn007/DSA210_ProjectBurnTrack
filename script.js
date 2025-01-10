/****************************************** 
 * 1) Günlük Veri (Labels & Distances)
 ******************************************/

// Hafta dağılımı tam istediğin gibi:
// 1. Hafta (3 gün)
const week1Days = [
    "November 15", 
    "November 16", 
    "November 17"
  ];
  // 2. Hafta (5 gün)
  const week2Days = [
    "November 20", 
    "November 21", 
    "November 22", 
    "November 23", 
    "November 24"
  ];
  // 3. Hafta (5 gün)
  const week3Days = [
    "November 27", 
    "November 28", 
    "November 29", 
    "November 30", 
    "December 1"
  ];
  // 4. Hafta (5 gün)
  const week4Days = [
    "December 4", 
    "December 5", 
    "December 6", 
    "December 7", 
    "December 8"
  ];
  // 5. Hafta (5 gün)
  const week5Days = [
    "December 11", 
    "December 12", 
    "December 13", 
    "December 14", 
    "December 15"
  ];
  // 6. Hafta (5 gün)
  const week6Days = [
    "December 18", 
    "December 19", 
    "December 20", 
    "December 21", 
    "December 22"
  ];
  // 7. Hafta (5 gün)
  const week7Days = [
    "December 25", 
    "December 26", 
    "December 27", 
    "December 28", 
    "December 29"
  ];
  
  // Tek bir dizi: Toplam 33 gün (3 + 5*6)
  const dailyLabels = [
    ...week1Days,
    ...week2Days,
    ...week3Days,
    ...week4Days,
    ...week5Days,
    ...week6Days,
    ...week7Days
  ];
  
  // Günlük mesafeler (km) - 1. hafta 3 gün, 2-7. hafta 5 gün
  // Son haftada (week7) değerleri en yüksek tutarak en fazla total mesafe elde edeceğiz.
  const dailyDistances = [
    // Week1 (3 gün)
    2.0, 2.3, 2.1,
  
    // Week2 (5 gün)
    3.0, 3.2, 3.1, 3.0, 3.2,
  
    // Week3 (5 gün)
    4.0, 4.3, 4.0, 4.2, 4.3,
  
    // Week4 (5 gün)
    5.0, 5.2, 5.1, 5.0, 5.2,
  
    // Week5 (5 gün)
    6.0, 6.3, 6.1, 6.0, 6.3,
  
    // Week6 (5 gün)
    7.0, 7.3, 7.1, 7.0, 7.3,
  
    // Week7 (5 gün) - en yüksek değerler
    8.0, 8.3, 8.1, 8.2, 8.3
  ];
  
  // Günlük kalori = distance * 78 (örnek)
  const dailyCalories = dailyDistances.map(dist => dist * 78);
  
  /****************************************** 
   * 2) Haftalık Hesaplamalar
   ******************************************/
  
  // Hafta etiketleri (örnek)
  const weekNumberLabels = ["Week 1","Week 2","Week 3","Week 4","Week 5","Week 6","Week 7"];
  
  // Haftalık Toplam Mesafe: 
  // Week 1 => ilk 3 gün, Week2 => sonraki 5 gün, vb.
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
  
  // Haftalık Toplam Kalori = weeklyDistances * 78
  const weeklyCalories = weeklyDistances.map(dsum => dsum * 78);
  
  // Örnek haftalık kilo kaybı (opsiyonel). 
  // Mesela her hafta 0.2-0.3 kg kayıp. 
  // Sıfırla başla, sonra yavaş yavaş artan negatif rakam:
  const weeklyWeightLoss = [0, -0.3, -0.4, -0.45, -0.45, -0.55, -0.65];
  
  /****************************************** 
   * 3) Günlük Grafikleri (Distance & Calorie)
   ******************************************/
  
  // (A) Günlük Mesafe (Line Chart)
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
  
  // (B) Günlük Kalori (Bar Chart)
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
  
  /****************************************** 
   * 4) Haftalık Grafikleri (Distance & Calorie)
   ******************************************/
  
  // (A) Haftalık Mesafe (Bar Chart)
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
  
  // (B) Haftalık Kalori (Line Chart)
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
  
  /****************************************** 
   * 5) Haftalık Weight Loss (Opsiyonel Mixed Chart)
   ******************************************/
  
  // Örneğin <canvas id="myWeeklyLossChart"></canvas> ekleyebilirsin
  const ctxLoss = document
    .getElementById('myWeeklyLossChart')
    .getContext('2d');
  
  // Mixed chart: bar for distance, line for weight loss
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
  