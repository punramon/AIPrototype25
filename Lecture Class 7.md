# VM
> กรณีใช้เครื่องเดียวกันกับเพื่อนให้ใช้คนละ port ซึ่งไม่ซ้ำกัน

# Task Class 7
1. เปิด server <br/>
2. log in <br/>
3. pull web app project <br/>
4. เปิด vi แก้ localhost เป็น 0.0.0.0 แก้ port ให้ไม่ตรงกับคนที่ใช้เครื่องเดียวกัน <br/>
5. เปิด port ใน azure portal <br/> 
6. เปิด web app แล้วส่งแก้ใน sheets <br/> 
* ลง envi <br/>
* เวลาใช้ครั้งต่อไป <br/>
```
conda activate {env_name} #conda activate ai_env
```
จะได้
```
http://23.101.7.184:5002/ #อย่าลืมเปลี่ยนเลขเป็น ip เรา = 23.101.7.184
```

7. exit ออกจาก vm แล้วให้ web ยังเปิดอยู่
```
screen -S {screen name} #สร้าง
```
run ตั้งแต่ลง env ถ้ายังไม่เคยลง --> python web_app.py <br/>
- กด control A +D ออกจาก session

## เพิ่มเติม
```
screen -R {screen name} #กระโดดกลับเข้่าไปที่ screen
```
- กด control A +K+y ออกและลบ session
