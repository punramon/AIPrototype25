# Cloud Virtual machines
### iaas infrastructure as a service
มีรูปแบบการบริการคลาวด์หลักๆ อยู่สามแบบ :<br>
> Infrastructure as a Service (IaaS)<br>
> Platform as a Service (PaaS)<br>
> Software as a Service (SaaS)<br>

สมัครใช้ผ่าน: [Microsoft Azure](https://azure.microsoft.com/en-us/free/students)<br>
Short cut to [Portal Azure: ai_prototype_25](https://portal.azure.com/#@kkumail.onmicrosoft.com/resource/subscriptions/8380f4c6-a1ca-4bd7-8e75-7a7691e9c05f/resourcegroups/ai_prototype_25/providers/Microsoft.Compute/virtualMachines/aiprototype/overview)

# Virtual Machine
* Create VM<br>
เข้า Portal Azure >>> Education >>> VM >>> Create a virtual machine
### 1. การเข้า Server ด้วย `ssh ย่อมาจาก Secure Shell` 
`#คิดเหมือนเปลือกหอย ค่อยๆ หุ้ม ค่อยๆ เข้า`
```
ssh username@IPaddress
```

### 2. เพิ่ม `User` เพื่อนให้เข้า server ของเราได้
```
sudo adduser friendusername
```

### 3. ใช้ดูการเคลื่อนไหวใน server ของเรา
```
htop
```

### 4. ย้าย group
```
sudo usermod ชื่อเพื่อน ชื่อเรา #ชื่อเพื่อน = group ชื่อเรา = folder
```
```
sudo groups ชื่อเรา #เช็คว่ามีใครอยู่ใน server
```
### 5. เพิ่มเพื่อนให้เป็น SuperUser Do `sudo`
```
sudo adduser ชื่อเพื่อน sudo 
```
### 6. scp = secure copy 
รูปแบบ
  ```
  scp <path ต้นทาง> <path ปลายทาง>
  ```
การส่งและดึงไฟล์ระหว่างเครื่องและCloud (ต้องรันบนเครื่องเรา)
 - คัดลอกจากเครื่องไปบน Cloud
  ```
  scp <path ไฟล์ต้นทาง>/<ชื่อไฟล์> username@IP:~<ชื่อโฟล์เดอร์>/.
  ```
 - คัดลอกจาก Cloud ไปบนเครื่อง
  ```
  scp username@IP:<path ไฟล์ต้นทาง>/<ชื่อไฟล์> <path ปลายทาง>/.
  ```
การส่งและดึงโฟล์เดอร์ระหว่างเครื่องและCloud (ต้องรันบนเครื่องเรา)
 - คัดลอกจากเครื่องไปบน Cloud
  ```
  scp <path ไฟล์ต้นทาง>/<ชื่อโฟล์เดอร์> username@IP:~<ชื่อโฟล์เดอร์>/.
  ```
 - คัดลอกจาก Cloud ไปบนเครื่อง
  ```
   scp username@IP:<path ไฟล์ต้นทาง>/<ชื่อไฟล์> <path ปลายทาง>/.
  ```
### 7. ออกจาก function e.g. python
```
exit()
```
### 8. Log out from VM
```
exit
```
---
### `EX: เอาไฟล์ testtext จากเครื่องเราไปไว้ในเครื่อง VM folder myfiles` 
> scp บนเครื่องเรา

![My Image](https://drive.google.com/uc?id=1Xyv5YU50ihOZmsaExYcYRIYrXs8R27r4)

> เช็คว่า  scp เรียบร้อย --> ls ดูบนเครื่อง VM

![My Image](https://drive.google.com/uc?id=13bx3iDL5rm26sEbNAy8eAJVbAdDDWD6j)

### `EX: สร้าง vmfile เก็บชื่อ ip ชื่อเครื่อง แล้วย้าย vmfile จาก VM ไปเครื่องเรา` 
> สร้าง vmfile เก็บชื่อ ip ชื่อเครื่อง

![My Image](https://drive.google.com/uc?id=10SaMA-fYLjoC1_snNAvz3Iq8C7jAyKpv)

> scp บนเครื่อง VM (Quiz 1)

![My Image](https://drive.google.com/uc?id=1TYp9xuT07-CrOJFbnJnrcypknqRgOtNv)

