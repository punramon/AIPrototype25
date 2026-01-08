// --- 1. Global Variables (ตัวแปรสำหรับเก็บข้อมูลที่จะโชว์ใน Popup) ---
let currentDesc = "";
let currentLink = "";
let currentName = "";

document.getElementById('predict-form').addEventListener('submit', async function(e) {
    e.preventDefault(); // Stop the page from reloading

    // Get UI elements
    const btn = document.getElementById('btn-submit');
    const spinner = document.getElementById('spinner');
    const resultArea = document.getElementById('result-area');
    const predictionText = document.getElementById('prediction-text');
    const flowerImage = document.getElementById('flower-image');

    // Show loading state
    btn.disabled = true;
    spinner.style.display = 'block';
    
    // Hide previous results while loading
    resultArea.classList.add('hidden'); 
    flowerImage.style.display = 'none';

    // Gather data from inputs
    const formData = {
        sepal_length: document.getElementById('sepal_length').value,
        sepal_width: document.getElementById('sepal_width').value,
        petal_length: document.getElementById('petal_length').value,
        petal_width: document.getElementById('petal_width').value
    };

    try {
        // Send data to Python (AJAX)
        const response = await fetch('/predict', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        // Update UI with result
        if (data.status === 'success') {
            // Update Text
            predictionText.innerText = data.prediction;
            
            // Update Image
            flowerImage.src = data.image_url;
            flowerImage.style.display = 'block';
            
            // Show the result box
            resultArea.classList.remove('hidden');

            // --- 2. SAVE DATA FOR POPUP (เก็บข้อมูลลงตัวแปร) ---
            currentName = data.prediction;
            currentDesc = data.description; // รับมาจาก app.py
            currentLink = data.link;        // รับมาจาก app.py

            // --- ✨ SURPRISE EFFECT ✨ ---
            confetti({
                particleCount: 150,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#a78bfa', '#f472b6', '#ffffff']
            });

        } else {
            alert("Error: " + data.error);
        }

    } catch (error) {
        console.error('Error:', error);
        alert("Something went wrong!");
    } finally {
        // Reset button state
        btn.disabled = false;
        spinner.style.display = 'none';
    }
});

// --- 3. POPUP MODAL LOGIC (ระบบเปิด-ปิด Popup) ---

const modal = document.getElementById("info-modal");
const img = document.getElementById("flower-image");
const closeBtn = document.querySelector(".close-btn");

// เมื่อคลิกที่รูปดอกไม้ -> เปิด Popup
img.addEventListener('click', function() {
    // อัปเดตข้อมูลใน Modal
    document.getElementById("modal-title").innerText = currentName;
    document.getElementById("modal-desc").innerText = currentDesc;
    document.getElementById("modal-link").href = currentLink;
    
    // แสดง Modal
    modal.style.display = "flex"; 
});

// เมื่อคลิกปุ่ม X -> ปิด Popup
closeBtn.addEventListener('click', function() {
    modal.style.display = "none";
});

// เมื่อคลิกพื้นที่ว่างๆ นอกกล่อง -> ปิด Popup
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}