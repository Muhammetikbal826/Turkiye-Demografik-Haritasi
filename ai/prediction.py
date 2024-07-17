# prediction.py
import joblib
import pandas as pd

def predict_population(previous_year_population, crime_rate):
    model = joblib.load('ai/model.pkl')
    input_data = pd.DataFrame({
        'previous_year_population': [previous_year_population],
        'crime_rate': [crime_rate]
    })
    prediction = model.predict(input_data)
    return prediction[0]

if __name__ == "__main__":
    # Örnek kullanım
    previous_year_population = 15000000
    crime_rate = 35
    prediction = predict_population(previous_year_population, crime_rate)
    print(f"Tahmin edilen mevcut yıl nüfusu: {prediction}")
