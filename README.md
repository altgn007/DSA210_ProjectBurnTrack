# BurnTrack: Running Insights with Apple Watch

## Description
**Sabanci University – Mehmet Ali Atagün, 29481**  
**DSA210 Introduction to Data Science Course Project**  

This project aims to explore and analyze my daily running habits using data collected from the **Apple Watch Fitness** app. By focusing on **calories burned**, **distance covered**, and **time spent** running, I plan to uncover trends and insights that can help improve my fitness routine.  

In this repository, we maintain both a **Python-based analysis** (`analysis.py`) and a **web-based visualization** (`script.js` + Chart.js). The data covers a 7-week period, specifically from **November 15** to **December 29**, with the **first week** consisting of 3 days (Nov 15–17) and the subsequent **6 weeks** consisting of 5 days each (Mon–Fri).

---

### Web Demo & Key Files

- **Project Website**: [**BurnTrack Web Visualization**](https://example-link-to-website.com)
- **Key Files**:
  - [`index.html`](index.html)
  - [`style.css`](style.css)
  - [`script.js`](script.js)
  - [`analysis.py`](analysis.py)

---

## Table of Contents
- [Motivation](#motivation)
- [Tools](#tools)
- [Data Source](#data-source)
- [Project Plan](#project-plan)
- [Data Structure](#data-structure)
- [Analysis Overview](#analysis-overview)
- [Future Work](#future-work)

---

## Motivation
Running is a core part of my daily routine, and I have always been curious about how my efforts translate into measurable fitness outcomes. With this project, I aim to:

- Understand trends in my **calorie burn**, **running distance**, and **time spent**.  
- Leverage these insights to **improve the consistency** and **effectiveness** of my workouts.  
- Develop a **data-driven approach** to monitor and enhance my physical performance.

---

## Tools
- **Apple Watch Fitness App:** For collecting data during each running session.  
- **Python (analysis.py):**  
  - *Pandas* and *Matplotlib/Seaborn* for data cleaning and statistical plots.  
  - Exports `.png` graphs for final presentation.  
- **JavaScript (script.js + Chart.js):**  
  - Interactive web-based graphs for daily/weekly distance, calorie, and weight-loss trends.

---

## Data Source
The data is **manually logged** from the **Apple Watch Fitness** app, which provides detailed metrics such as **date**, **distance**, **calories burned**, **duration**, and (optionally) **weight** every Friday to track weight changes.

- **Date:** The date of each run.  
- **Distance (km):** The total distance covered.  
- **Duration (minutes):** The running time (optional in this example).  
- **Calories Burned:** As tracked by the Watch.  
- **Weight (kg):** Measured every Friday to monitor weekly changes.

---

## Project Plan
1. **Data Collection**  
   - Log the Apple Watch Fitness data for each run (Mon–Fri, skipping weekends).  
   - Store the data in CSV format (or input arrays in `analysis.py` / `script.js`).

2. **Data Processing**  
   - Clean and format the raw data for consistency.  
   - Filter out incomplete or anomalous entries.

3. **Exploratory Data Analysis (EDA)**  
   - Compute summary statistics (e.g., average daily distance, total weekly distance).  
   - Identify patterns in calorie burn and distance over the 7-week period.

4. **Visualization**  
   - **Python**: Generate `.png` plots (line charts, bar charts, scatter with regression) using `Matplotlib`/`Seaborn`.  
   - **JavaScript** (`script.js` + [Chart.js](https://www.chartjs.org/)): Produce dynamic charts in a web page (e.g., “Daily Distance,” “Daily Calorie,” “Weekly Distance,” “Weekly Calorie,” “Weight Loss”).

5. **Expected Outcomes**  
   - Gain insights into weekly and daily trends (distance, calories, weight changes).  
   - Confirm whether increasing weekly distance correlates with faster weight loss.

---

## Data Structure
Due to the calendar layout, the **first week** (Nov 15–17) has 3 days, and **Weeks 2–7** each have 5 days (Mon–Fri). In total, **33 running days** across 7 weeks.

| Week  | Days (Count)                  | Example Dates                  |
|-------|-------------------------------|--------------------------------|
| **1** | 3 (Wed–Fri)                  | Nov 15, Nov 16, Nov 17         |
| **2** | 5 (Mon–Fri)                  | Nov 20–24                      |
| **3** | 5 (Mon–Fri)                  | Nov 27 – Dec 1                 |
| **4** | 5 (Mon–Fri)                  | Dec 4–8                        |
| **5** | 5 (Mon–Fri)                  | Dec 11–15                      |
| **6** | 5 (Mon–Fri)                  | Dec 18–22                      |
| **7** | 5 (Mon–Fri)                  | Dec 25–29                      |
| **Total** | 33 Days                  | *Ending on* Dec 29             |

In both **analysis.py** and **script.js**, this exact distribution is preserved. We then compute **weekly totals** (distance, calories) where Week 1 sums the first 3 days, and Weeks 2–7 sum the next 5 days each.

---

## Analysis Overview
1. **analysis.py**  
   - We define a **DataFrame** of 33 records, each with `Day`, `Date`, `Distance_km`, etc.  
   - Convert dates with `pd.to_datetime()`.  
   - Use a **custom logic** to assign `WeekNo=1` for days 1–3, `WeekNo=2` for days 4–8, etc.  
   - Group data by `WeekNo` to find weekly sums and weight changes.  
   - Produce graphs: “Daily Distance,” “Daily Calorie,” “Weekly Distance,” “Weekly Calorie,” “Weekly Distance vs. Weight Loss,” etc.

2. **script.js**  
   - We define arrays for daily labels (`dailyLabels`), daily distances, and daily calories.  
   - We sum them in blocks (Day 0..2 => Week 1, Day 3..7 => Week 2, etc.) to get `weeklyDistances` and `weeklyCalories`.  
   - Use Chart.js to render:
     - Line chart for **Daily Distance**  
     - Bar chart for **Daily Calorie**  
     - Bar/Line chart for **Weekly Distance**  
     - Line chart for **Weekly Calorie**  
     - Mixed chart for **Weight Loss** (optional)

3. **Findings**  
   - We see that **Week 7** has the highest distance (~8+ km daily) and thus the highest total calorie burn.  
   - The initial weeks show a steady progression from 2–3 km daily up to ~8 km daily in the final week, correlating with faster weight loss.

---

## Future Work
- **Longer Data Span**: Extending the log beyond 7 weeks to see if trends persist.  
- **Automated Data Extraction**: Directly from **Apple Health** (XML → CSV) or 3rd party apps.  
- **Additional Metrics**: Heart rate, resting energy, VO₂ max, or step count.  
- **Machine Learning**: Predicting weight changes based on distance, calorie intake, sleep, etc.

---

### Notes
- This README and code structure reflect the final stage of the project, with **first-week-3-days** and **subsequent-weeks-5-days** explicitly enforced.  
- If you need exactly 5 days in Week 1, you’d add 2 more days before Nov 15 or adjust the date range.

---
