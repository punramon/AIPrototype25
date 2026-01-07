import pickle
from sklearn.datasets import load_iris
from sklearn.ensemble import RandomForestClassifier
from sklearn.model_selection import train_test_split

# 1. Load the dataset
iris = load_iris()
X = iris.data
y = iris.target

# 2. Split the data (optional, but good practice)
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# 3. Initialize and train the Random Forest Classifier
clf = RandomForestClassifier(n_estimators=100, random_state=42)
clf.fit(X_train, y_train)

# 4. Save the trained model to a file
with open('iris_model.pkl', 'wb') as f:
    pickle.dump(clf, f)

print("Model trained and saved as 'iris_model.pkl'")