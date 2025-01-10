import pandas as pd
import numpy as np
import matplotlib.pyplot as plt
import seaborn as sns

data = [  
    {"Day": 1,  "Date": "2023-11-15", "Distance_km": 2.0, "Calorie": 156, "Weight_kg": np.nan},
    {"Day": 2,  "Date": "2023-11-16", "Distance_km": 2.3, "Calorie": 179, "Weight_kg": np.nan},
    {"Day": 3,  "Date": "2023-11-17", "Distance_km": 2.1, "Calorie": 164, "Weight_kg": 77.8},

    {"Day": 4,  "Date": "2023-11-20", "Distance_km": 3.0, "Calorie": 234, "Weight_kg": np.nan},
    {"Day": 5,  "Date": "2023-11-21", "Distance_km": 3.2, "Calorie": 250, "Weight_kg": np.nan},
    {"Day": 6,  "Date": "2023-11-22", "Distance_km": 2.9, "Calorie": 226, "Weight_kg": np.nan},
    {"Day": 7,  "Date": "2023-11-23", "Distance_km": 3.1, "Calorie": 242, "Weight_kg": np.nan},
    {"Day": 8,  "Date": "2023-11-24", "Distance_km": 3.0, "Calorie": 234, "Weight_kg": 77.5},

    {"Day": 9,  "Date": "2023-11-27", "Distance_km": 4.0, "Calorie": 312, "Weight_kg": np.nan},
    {"Day":10,  "Date": "2023-11-28", "Distance_km": 4.3, "Calorie": 335, "Weight_kg": np.nan},
    {"Day":11,  "Date": "2023-11-29", "Distance_km": 3.8, "Calorie": 296, "Weight_kg": np.nan},
    {"Day":12,  "Date": "2023-11-30", "Distance_km": 4.2, "Calorie": 328, "Weight_kg": np.nan},
    {"Day":13,  "Date": "2023-12-01", "Distance_km": 4.0, "Calorie": 312, "Weight_kg": 77.1},

    {"Day":14,  "Date": "2023-12-04", "Distance_km": 5.0, "Calorie": 390, "Weight_kg": np.nan},
    {"Day":15,  "Date": "2023-12-05", "Distance_km": 5.2, "Calorie": 406, "Weight_kg": np.nan},
    {"Day":16,  "Date": "2023-12-06", "Distance_km": 4.8, "Calorie": 374, "Weight_kg": np.nan},
    {"Day":17,  "Date": "2023-12-07", "Distance_km": 5.1, "Calorie": 398, "Weight_kg": np.nan},
    {"Day":18,  "Date": "2023-12-08", "Distance_km": 5.0, "Calorie": 390, "Weight_kg": 76.65},

    {"Day":19,  "Date": "2023-12-11", "Distance_km": 6.0, "Calorie": 468, "Weight_kg": np.nan},
    {"Day":20,  "Date": "2023-12-12", "Distance_km": 6.3, "Calorie": 491, "Weight_kg": np.nan},
    {"Day":21,  "Date": "2023-12-13", "Distance_km": 5.9, "Calorie": 460, "Weight_kg": np.nan},
    {"Day":22,  "Date": "2023-12-14", "Distance_km": 6.1, "Calorie": 476, "Weight_kg": np.nan},
    {"Day":23,  "Date": "2023-12-15", "Distance_km": 6.0, "Calorie": 468, "Weight_kg": 76.20},

    {"Day":24,  "Date": "2023-12-18", "Distance_km": 7.0, "Calorie": 546, "Weight_kg": np.nan},
    {"Day":25,  "Date": "2023-12-19", "Distance_km": 7.3, "Calorie": 569, "Weight_kg": np.nan},
    {"Day":26,  "Date": "2023-12-20", "Distance_km": 6.8, "Calorie": 530, "Weight_kg": np.nan},
    {"Day":27,  "Date": "2023-12-21", "Distance_km": 7.2, "Calorie": 562, "Weight_kg": np.nan},
    {"Day":28,  "Date": "2023-12-22", "Distance_km": 7.0, "Calorie": 546, "Weight_kg": 75.65},

    {"Day":29,  "Date": "2023-12-25", "Distance_km": 8.0, "Calorie": 624, "Weight_kg": np.nan},
    {"Day":30,  "Date": "2023-12-26", "Distance_km": 8.3, "Calorie": 647, "Weight_kg": np.nan},
    {"Day":31,  "Date": "2023-12-27", "Distance_km": 8.5, "Calorie": 663, "Weight_kg": np.nan}, 
    {"Day":32,  "Date": "2023-12-28", "Distance_km": 8.1, "Calorie": 632, "Weight_kg": np.nan},
    {"Day":33,  "Date": "2023-12-29", "Distance_km": 8.0, "Calorie": 624, "Weight_kg": 75.00},
]

df = pd.DataFrame(data)
df['Date'] = pd.to_datetime(df['Date'], format="%Y-%m-%d")

def custom_week_no(day):
    if 1 <= day <= 3:
        return 1
    elif 4 <= day <= 8:
        return 2
    elif 9 <= day <= 13:
        return 3
    elif 14 <= day <= 18:
        return 4
    elif 19 <= day <= 23:
        return 5
    elif 24 <= day <= 28:
        return 6
    elif 29 <= day <= 33:
        return 7
    else:
        return np.nan

df['WeekNo'] = df['Day'].apply(custom_week_no)

df['Calorie'] = df['Distance_km'] * 78

weekly_sum = df.groupby('WeekNo').agg({
    'Distance_km': 'sum',
    'Calorie': 'sum',
    'Weight_kg': 'last'
}).reset_index()

weekly_sum['WeightLoss_kg'] = weekly_sum['Weight_kg'] - weekly_sum['Weight_kg'].shift(1)
weekly_sum['WeightLoss_kg'] = weekly_sum['WeightLoss_kg'].fillna(0)

sns.set(style="whitegrid")
plt.rcParams['figure.facecolor'] = '#2b395c'   
plt.rcParams['axes.facecolor']   = '#2b395c'
plt.rcParams['axes.edgecolor']   = '#cbe8d5'
plt.rcParams['axes.labelcolor']  = '#cbe8d5'
plt.rcParams['xtick.color']      = '#cbe8d5'
plt.rcParams['ytick.color']      = '#cbe8d5'
plt.rcParams['text.color']       = '#cbe8d5'
plt.rcParams['grid.color']       = '#cbe8d5'
plt.rcParams['legend.edgecolor'] = '#cbe8d5'
plt.rcParams['legend.fontsize']  = 9

plt.figure(figsize=(10,4))
sns.lineplot(data=df, x='Date', y='Distance_km', marker='o', color='#cbe8d5')
plt.title("Date vs. Daily Distance")
plt.xlabel("Date")
plt.ylabel("Distance (km)")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("daily_distance.png", dpi=150)
plt.close()

plt.figure(figsize=(10,4))
sns.barplot(data=df, x='Date', y='Calorie', color='#a9e5c8')
plt.title("Date vs. Daily Calorie")
plt.xlabel("Date")
plt.ylabel("Calorie (kcal)")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("daily_calories.png", dpi=150)
plt.close()

fig, ax1 = plt.subplots(figsize=(10,4))
ax1.set_facecolor('#2b395c')

ax1.set_xlabel("Week No")
ax1.set_ylabel("Total Distance (km)", color='#a9e5c8')
ax1.bar(weekly_sum['WeekNo'], weekly_sum['Distance_km'], color='#a9e5c8', alpha=0.7)
ax1.tick_params(axis='y', labelcolor='#a9e5c8')

ax2 = ax1.twinx()
ax2.set_ylabel("Weight Loss (kg)", color='#ff8888')
ax2.plot(weekly_sum['WeekNo'], weekly_sum['WeightLoss_kg'], marker='o', color='#ff8888', linewidth=2)
ax2.tick_params(axis='y', labelcolor='#ff8888')

plt.title("Weekly Total Distance vs. Weekly Weight Loss")
plt.tight_layout()
plt.savefig("weekly_distance_weightloss.png", dpi=150)
plt.close()

plt.figure(figsize=(10,4))
plt.gca().set_facecolor('#2b395c')

sns.lineplot(data=weekly_sum, x='WeekNo', y='Calorie', marker='s', color='#a9e5c8', label='Total Calorie (kcal)')
plt.legend(loc='upper left')

plt.xlabel("Week No")
plt.ylabel("Total Calorie (kcal)", color='#a9e5c8')
plt.title("Weekly Total Calorie vs. Weekly Weight Loss")

ax2 = plt.gca().twinx()
sns.lineplot(data=weekly_sum, x='WeekNo', y='WeightLoss_kg', marker='o', color='#ff8888', label='Weight Loss (kg)', ax=ax2)
ax2.set_ylabel("Weight Loss (kg)", color='#ff8888')
ax2.tick_params(axis='y', labelcolor='#ff8888')

plt.tight_layout()
plt.savefig("weekly_calorie_weightloss.png", dpi=150)
plt.close()

df_friday = df.dropna(subset=['Weight_kg'])
plt.figure(figsize=(10,4))
sns.lineplot(data=df_friday, x='Date', y='Weight_kg', marker='o', color='#cbe8d5')
plt.title("Date vs. Weekly Weight (Fridays)")
plt.xlabel("Date")
plt.ylabel("Weight (kg)")
plt.xticks(rotation=45)
plt.tight_layout()
plt.savefig("weekly_weight.png", dpi=150)
plt.close()

df_scatter = df_friday.copy()

plt.figure(figsize=(6,5))
plt.gca().set_facecolor('#2b395c')
sns.regplot(data=df_scatter, x='Distance_km', y='Weight_kg', color='#a9e5c8',
            scatter_kws={'s':80, 'edgecolor':'#cbe8d5'}, line_kws={'color':'#ff8888','linewidth':2})
plt.title("Daily Distance vs. Daily Weight (Fridays)")
plt.xlabel("Distance (km)")
plt.ylabel("Weight (kg)")
plt.tight_layout()
plt.savefig("daily_distance_vs_weight_scatter.png", dpi=150)
plt.close()

plt.figure(figsize=(6,5))
plt.gca().set_facecolor('#2b395c')
sns.regplot(data=df_scatter, x='Calorie', y='Weight_kg', color='#a9e5c8',
            scatter_kws={'s':80, 'edgecolor':'#cbe8d5'}, line_kws={'color':'#ff8888','linewidth':2})
plt.title("Daily Calorie vs. Daily Weight (Fridays)")
plt.xlabel("Calorie (kcal)")
plt.ylabel("Weight (kg)")
plt.tight_layout()
plt.savefig("daily_calorie_vs_weight_scatter.png", dpi=150)
plt.close()

print("All charts have been saved as .png!")
