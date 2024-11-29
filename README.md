# BurnTrack: Running Insights with Apple Watch

## Description
**Sabanci University - Mehmet Ali Atagün, 29481, DSA210 Introduction to Data Science Course Project.**  
This project was created as part of a data analysis initiative to gain insights into my daily running habits. Using data collected from the **Apple Watch Workout app**, I analyzed trends in calories burned, distance covered, and time spent running. The project provides an overview of my fitness routine and aims to uncover areas for improvement and optimization.

---

## Table of Contents
- [Motivation](#motivation)
- [Tools](#tools)
- [Data Source](#data-source)
- [Data Processing](#data-processing)
- [Data Visualizations](#data-visualizations)
- [Data Analysis](#data-analysis)
- [Findings](#findings)
- [Limitations](#limitations)
- [Future Work](#future-work)

---

## Motivation
Running is a core part of my daily routine, and I wanted to better understand the impact of my efforts on my fitness progress. By analyzing my workout data, I aim to:
- Identify trends in calories burned, distance, and time.
- Improve the consistency of my runs.
- Leverage these insights to create a more effective fitness plan.

---

## Tools
- **Apple Watch Workout App**: For data collection during running sessions.

---

## Data Source
The data was collected using the **Apple Watch Workout app**, which tracks running metrics in real-time. After each run, I manually logged the following variables into a CSV file:
- **Date**: The date of the run.
- **Distance (km)**: The total distance covered.
- **Duration (minutes)**: The time spent running.
- **Calories Burned**: The estimated calories burned during the workout.

---

## Data Processing
The raw data collected from the Apple Watch was processed as follows:
1. Cleaned and structured into a CSV file for easy manipulation.
2. Converted date and time fields into a unified format.
3. Filtered out any incomplete or outlier data entries.

---

## Data Visualizations
Visualizations were created to make sense of the data and uncover trends:
- A line graph showing calorie burn over time.
- A scatter plot analyzing the relationship between distance and calories burned.
- A bar chart summarizing weekly calorie trends.

---

## Data Analysis
1. **Trends in Calories Burned**:
   - Weekly and monthly calorie burn patterns were analyzed to identify peak performance periods.
2. **Correlation Analysis**:
   - Explored how distance and duration impacted calorie burn.
3. **Consistency Tracking**:
   - Analyzed run frequency and duration over time.

---

## Findings
- **Consistent Habits**: Regular running sessions result in a steady calorie burn.
- **Impact of Distance**: Longer distances showed a significant increase in calories burned.
- **Weekly Patterns**: Calorie burn is higher during weekdays compared to weekends.

---

## Limitations
- **Data Sourcing Limitations**: Manually logging data may introduce errors.
- **Personal Limitations**: The findings are specific to my fitness routine and may not apply universally.

---

## Future Work
1. Automate data collection by integrating directly with the Apple Health app.
2. Add additional metrics such as heart rate or elevation gain for more comprehensive insights.
3. Develop a machine learning model to predict calorie burn based on input parameters like distance and time.

---
