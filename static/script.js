document.getElementById('predict-form').addEventListener('submit', async function(e) {
    e.preventDefault(); // Stop the page from reloading

    // 1. Get UI elements
    const btn = document.getElementById('btn-submit');
    const spinner = document.getElementById('spinner');
    const resultArea = document.getElementById('result-area');
    const predictionText = document.getElementById('prediction-text');
    const flowerImage = document.getElementById('flower-image'); // Get the image tag

    // 2. Show loading state
    btn.disabled = true;
    spinner.style.display = 'block';
    resultArea.classList.add('hidden'); // Hide previous result
    flowerImage.style.display = 'none'; // Hide previous image

    // 3. Gather data from inputs
    const formData = {
        sepal_length: document.getElementById('sepal_length').value,
        sepal_width: document.getElementById('sepal_width').value,
        petal_length: document.getElementById('petal_length').value,
        petal_width: document.getElementById('petal_width').value
    };

    try {
        // 4. Send data to Python (AJAX)
        const response = await fetch('/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        // 5. Update UI with result
        if (data.status === 'success') {
            // Update Text
            predictionText.innerText = data.prediction;
            
            // Update Image
            flowerImage.src = data.image_url;  // Set the source from Python
            flowerImage.style.display = 'block'; // Show the image
            
            // Show the result box
            resultArea.classList.remove('hidden');
        } else {
            alert("Error: " + data.error);
        }

    } catch (error) {
        console.error('Error:', error);
        alert("Something went wrong!");
    } finally {
        // 6. Reset button state
        btn.disabled = false;
        spinner.style.display = 'none';
    }
});