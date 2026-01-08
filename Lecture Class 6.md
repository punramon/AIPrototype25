# Web Service
> มีหน้าที่ประมวลผลระหว่างโปรแกรม
> รับมา แล้ว ส่งเครดิตไปให้ปลายทาง

# Web Service for Sending Messages
> เป็น Web Service ที่สามารถส่งข้อความระหว่างผู้ใช้ได้ โดยประกอบไปด้วย 2 ส่วนหลัก:

## 1. **สคริปต์ฝั่งผู้ใช้**
> ช่วยให้ผู้ใช้ป้อนข้อความและเลือกผู้รับเพื่อส่งข้อความ
สคริปต์ฝั่งผู้ใช้จะติดต่อกับ API ฝั่งเซิร์ฟเวอร์เพื่อส่งข้อความ โดยมีขั้นตอนดังนี้:
- ผู้ใช้จะป้อนข้อความที่ต้องการส่ง
- ผู้ใช้สามารถเลือกผู้รับได้จาก IP Address
- ส่งข้อความที่เลือกไปยังเซิร์ฟเวอร์ผ่านคำขอ HTTP POST

สคริปต์จะส่งข้อมูลต่อไปนี้ไปยังเซิร์ฟเวอร์:
- `msg`: ข้อความที่ผู้ใช้ป้อน
- `ผู้รับ`: ชื่อของผู้รับข้อความ
- `ip`: ที่อยู่ IP ของผู้รับ
- `ผู้ส่ง`: ชื่อของผู้ส่งข้อความ

```python
import requests
import json

url = 'http://localhost:5001/request_POSTGET'
myobj = {'name':'Punramon',
         'age':21
         }

x = requests.post(url, data = json.dumps(myobj))
output = json.loads(x.text)
print(output['y'])
```

## 2. **API ฝั่งเซิร์ฟเวอร์** [`myfirstflask.py`](https://github.com/punramon/AIPrototype25/blob/main/myfirstflask.py): 
> รับข้อความจากผู้ใช้ บันทึกรายละเอียด และส่งคำตอบกลับไปยืนยันการรับข้อความ

```python
@app.route('/receive_get',methods=['GET']) # ไม่ค่อยปลอดภัยเพราะส่งผ่าน url เลย
def web_service_API_GET():

    msg = request.args.get('msg')
    name = request.args.get('name')

    print(f'the input message from GET is {msg} from {name}.')

    return f'{msg} from {name} received !'
```

### เขียนฟังก์ชันให้รับได้ทั้ง GET และ POST
#### Test methods = GET
> ส่งมากกว่าหนึ่งตัวแปรโดยใช้ &<br>
```
http://localhost:5001/function_name?msg=hi&name=beam
```
![My Image](https://drive.google.com/uc?id=1omJfsSCAbbYj7-ZwlkWlQ2JNSX4SgKrU)

#### Test POST<br>
> **[`test_post.py`](https://github.com/punramon/AIPrototype25/blob/main/test_post.py)** <br>
> ถ้าเราเปลี่ยนชื่อฟังก์ชันต้องไปแก้ไฟล์ test ให้ชื่อฟังก์ชันตรงกัน
![My Image](https://drive.google.com/uc?id=1EjChLPsmVPWdV3cvbR2fLA31qJpHFqVt)
![My Image](https://drive.google.com/uc?id=1Q2Ch6bnt7LE6Xywxri9GVrKI2l8YiLKa)

