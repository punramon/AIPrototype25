import numpy as np
import pickle
from flask import Flask, request, render_template_string, render_template, jsonify, url_for

# Initialize the Flask app
app = Flask(__name__)

# Load the trained model
with open('iris_model.pkl', 'rb') as f:
    model = pickle.load(f)

class_names = ['Setosa', 'Versicolor', 'Virginica']

# --- HTML TEMPLATE STORED AS A STRING ---
# HTML_TEMPLATE = """
# <!DOCTYPE html>
# <html lang="en">
# <head>
#     <meta charset="UTF-8">
#     <meta name="viewport" content="width=device-width, initial-scale=1.0">
#     <title>Iris Classification</title>
#     <style>
#         body { font-family: sans-serif; max-width: 600px; margin: 40px auto; padding: 20px; }
#         label { display: block; margin-top: 10px; }
#         input { width: 100%; padding: 8px; margin-top: 5px; box-sizing: border-box; }
#         button { margin-top: 20px; padding: 10px 20px; background-color: #28a745; color: white; border: none; cursor: pointer; }
#         button:hover { background-color: #218838; }
#         .result { margin-top: 20px; padding: 15px; background-color: #f8f9fa; border: 1px solid #ddd; }
#     </style>
# </head>
# <body>
#     <h1>Iris Flower Predictor (Single File)</h1>
    
#     <form action="/predict" method="post">
#         <label for="sepal_length">Sepal Length (cm):</label>
#         <input type="text" name="sepal_length" required placeholder="e.g. 5.1">

#         <label for="sepal_width">Sepal Width (cm):</label>
#         <input type="text" name="sepal_width" required placeholder="e.g. 3.5">

#         <label for="petal_length">Petal Length (cm):</label>
#         <input type="text" name="petal_length" required placeholder="e.g. 1.4">

#         <label for="petal_width">Petal Width (cm):</label>
#         <input type="text" name="petal_width" required placeholder="e.g. 0.2">

#         <button type="submit">Predict</button>
#     </form>

#     {% if prediction_text %}
#     <div class="result">
#         <h3>{{ prediction_text }}</h3>
#     </div>
#     {% endif %}
# </body>
# </html>
# """

@app.route('/')
def home():
    # Use render_template_string instead of render_template
    return render_template('first.html')

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        vals = [float(data[k]) for k in ['sepal_length', 'sepal_width', 'petal_length', 'petal_width']]
        features = np.array([vals])

        # Predict
        prediction = model.predict(features)
        result_name = class_names[prediction[0]]
        
        # --- NEW LOGIC FOR JSON IMAGE ---
        # 1. Create the filename (e.g., 'images/setosa.jpg')
        filename = f"images/{result_name.lower()}.jpg"
        
        # 2. Generate the full URL using Flask's url_for
        # This creates: "/static/images/setosa.jpg"
        image_url = url_for('static', filename=filename)

        # 3. Send the URL back in the JSON
        return jsonify({
            'prediction': result_name, 
            'image_url': image_url, 
            'status': 'success'
        })
    
    except Exception as e:
        return jsonify({'error': str(e), 'status': 'error'})

if __name__ == "__main__":   # run code 
    app.run(host='localhost',debug=True,port=5002)