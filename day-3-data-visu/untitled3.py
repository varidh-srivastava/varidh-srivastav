# -*- coding: utf-8 -*-
"""Untitled3.ipynb

Automatically generated by Colaboratory.

Original file is located at
    https://colab.research.google.com/drive/1V3FPQErsJPgzclSDDLlvbv896RE8Mp9G
"""

import pandas as pd
import seaborn as sns
import matplotlib.pyplot as plt
import numpy as np
import plotly.express as px

data = pd.read_csv('https://github.com/varidh-srivastava/varidh-srivastav/blob/main/tested.csv')
data.head()
#using seaborn and matplotlib
sns.countplot(data['Survived'])
plt.title("Not survived and survived")
plt.xlabel("Survival")
plt.ylable("Count")
plt.show()
#using plotly
fig = px.line(data, x = 'Age', y = 'Pclass', title='titanic database')
fig.show()
