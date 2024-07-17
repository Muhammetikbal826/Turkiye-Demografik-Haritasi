# model.py
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
import joblib

# Veri yükleme ve işleme
def load_data():
    data = pd.read_csv('dosya.csv')  # Şehir verilerini içeren CSV dosyası
    return data

# Modeli eğitme
def train_model(data):
    X = data[['previous_year_population', 'crime_rate']]
    y = data['current_year_population']
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)
    
    model = LinearRegression()
    model.fit(X_train, y_train)
    
    joblib.dump(model, 'ai/model.pkl')
    print("Model başarıyla eğitildi ve kaydedildi.")

if __name__ == "__main__":
    data = load_data()
    train_model(data)
