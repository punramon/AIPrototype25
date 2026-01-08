```
HW3/
│
├── web_app.py
├── train.py
├── templates/
│   └── frist.html
└── static/
    ├── style.css
    └── images/           
        ├── setosa.jpg
        ├── versicolor.jpg
        └── virginica.jpg
```
# Iris Classification Web App
### ขั้นตอนที่ 1 : สร้าง script สำหรับเทรนโมเดล
**Code :** **[`train.py`](https://github.com/punramon/AIPrototype25/blob/main/train.py)**
> เมื่อเราเทรนโมเดลสำเร็จ<br>
> save as iris_model.pkl

### ขั้นตอนที่ 2 : สร้าง Flask server
**Code :** **[`web_app.py`](https://github.com/punramon/AIPrototype25/blob/main/web_app.py)**

### ขั้นตอนที่ 3 : สร้าง Web Frontend
> เขียน html ได้ 2 แบบ
#### 1.📄 HTML Inline
> เขียน HTML, CSS และ JavaScript รวมอยู่ในไฟล์เดียว<br>
> แทรกอยู่ใน python ได้<br>
> ทุกอย่างอยู่ในไฟล์เดียว ไม่ต้องจัดการโครงสร้างไฟล์<br>
#### 2.📄 HTML แบบแยกไฟล์
> แยกไฟล์ตามหน้าที่ของโค้ด<br>
> โครงสร้างทั่วไป : <br>
```
index.html — โครงสร้างหน้าเว็บ

style.css — การตกแต่ง

script.js — การทำงานของระบบ
```
#### ตัวอย่างหน้าเว็บ
![My Image](https://drive.google.com/uc?id=1jr3M-lIIuMMnXS8Ih0NL9NdLHZtYmwYz)

### ทำให้หน้าเว็บของเราดูดีขึ้นด้วย CSS และ JavaScript
**CSS Code :** **[`style.css`](https://github.com/punramon/AIPrototype25/blob/main/static/style.css)**<br>
**javascript Code :** **[`script.js`](https://github.com/punramon/AIPrototype25/blob/main/static/script.js)**<br>
#### **🖼️ ตัวอย่างหน้าเว็บ**
![My Image](https://drive.google.com/uc?id=1irFGWFZU4EbIuTzfhc9RHSEQpg_RSfRu)
- display prediction answer

![My Image](https://drive.google.com/uc?id=1vGfuUsQowtN95P6LUrqpM7cM6FCVGyDU)
- click image to read more details
  
![My Image](https://drive.google.com/uc?id=1hzvcg47aspDkRHkK-oA9G4dF4MfRyRou)
- link to wikipedia
  
![My Image](https://drive.google.com/uc?id=16MSairAj6HDR6l4euJIshBT4HD2JCvau)


**🛠️ Tech Stack**
```
Frontend: HTML5, CSS3 (Custom Glassmorphism), JavaScript
Backend: Python (Flask)
Machine Learning: Scikit-Learn (Random Forest)
Data Processing: Pandas, Numpy
```

