# Command Line on terminal
### 1. list คำสั่งที่ใช้สำหรับแสดงแฟ้มข้อมูล
แสดง file/folder ที่อยู่ใน folder ปัจจุบัน
```
ls
```
```
ls -l #แสดง Permission/จำนวน user/ขนาดไฟล์ไบต์/วันเวลา/ชื่อไฟล์ (list long format)
```
> rwxrwxrwx 1 ilysbeam ilysbeam  18683777 Jun 27 20:28 '(แบบร่าง) Glumii Slide.pdf'<br>
> เลข → จำนวน Users ที่เป็นเจ้าของ<br>
> วันที่และเวลา → วันและเวลาที่สร้างไฟล์ขึ้นมา<br>
```
ls -lh #บอกรายละเอียดยาวๆที่สื่อสารได้ Permission/จำนวน user/ขนาดไฟล์ไบต์(แบบอ่านง่าย)/วันเวลา/ชื่อไฟล์ (long human-readable)
```
> rwxrwxrwx 1 ilysbeam ilysbeam  18M Jun 27 20:28 '(แบบร่าง) Glumii Slide.pdf'
```
ls -ltr #เรียงไฟล์ตามเวลาที่แก้ไขล่าสุด โดยเอาไฟล์ใหม่ที่สุดไว้ล่างสุด
```
> -t เรียงตามเวลา<br>
> -r กลับลำดับ<br>
> ดังนั้น ไฟล์ล่าสุดจะอยู่ล่างสุด<br>
Permission
> R → read<br>
> W → write<br>
> X → excuse<br>
```
ls + PgUp [ลูกศรชี้ขึ้น] #ไปที่คำสั่งที่เราใช้ไปก่อนหน้า
```
### 2. Change directory
```
cd #ถอยออกมาสุด กลับ ~ (home)
```
```
cd .. #ถอยออกมาจากโฟลเดอร์ปัจจุบัน 1 ครั้ง
```
```
cd ../.. #ถอยออกมาจากโฟลเดอร์ปัจจุบัน 2 ครั้ง
```
```
cd .. หรือ <ชื่อโฟลเดอร์> / → Tab #ขอดูชื่อโฟล์เดอร์และไฟล์ที่อยู่ในโฟลเดอร์นั้น ๆ
```
```
cd ../../mnt/c/<ชื่อโฟลเดอร์> #เข้าไปในโฟล์เดอร์ที่ต้องการ
```
### 3. file/Folder Management
สร้าง Folder (makedirectory)
```
mkdir <folder_name> 
```
Create file *ใช้บ่อย
```
vi <ชื่อไฟล์> # สร้างและเปิดไฟล์ → เข้าหน้าเขียนไฟล์ กด i เขียนไฟล์/แก้ไขได้
vi <ชื่อไฟล์.py> #python 
```
Edit file
```
vi i <ชื่อไฟล์>
```
> Esc แล้ว :wq กดออกแล้วบันทึก<br>
> Esc แล้ว :q! กดออกแล้วไม่บันทึก<br>
ลบไฟล์ (Delete file)
```
rm <ชื่อไฟล์>
```
ลบทุกอย่างในโฟล์เดอร์
```
rm -r <ชื่อโฟล์เดอร์> #ให้มัน recursive ลบทุกไฟล์ที่มีอยู่ในโฟลเดอร์ เพื่อลบทั้งโฟลเดอร์
```
Open file
```
cat <ชื่อไฟล์> #เวลาเราสั่งไม่จำเป็นต้องเข้าไปอยู่ใน folder นั้น ๆ
```

**Path Folder**
![My Image](https://drive.google.com/uc?id=10SAi58Tfo-yJEIWxef_kJPMYItE_rAn7)

### 4. Move file
วิธีที่ 1 อยู่ตรงไหนของเครื่องก็ได้ แต่เราต้องระบุที่อยู่ไฟล์ให้ถูก
```
mv  ที่อยู่ไฟล์ที่จะย้าย/<ชื่อไฟล์>   โฟล์เดอร์ปลายทาง/.
```
- เริ่มที่หน้า home → cd ก่อน 
- อยากย้ายไป test_lv2
```
ilysbeam@ilysbeam:~/test/test_lv2$ cd
ilysbeam@ilysbeam:~$ mv test/test_lv2/test2_lv3/abc.txt test/test_lv2/.
ilysbeam@ilysbeam:~$ ls
test
ilysbeam@ilysbeam:~$ cd test/test_lv2/
ilysbeam@ilysbeam:~/test/test_lv2$ ls
abc.txt  test2_lv3  test_lv3
ilysbeam@ilysbeam:~/test/test_lv2$
```
วิธีที่ 2 เข้าไปในโฟล์เดอร์ที่อยากจะย้ายเข้าไป แล้วใช้คำสั่ง
```
mv  ที่อยู่ไฟล์ที่ต้องการย้าย/<ชื่อไฟล์>  .
```
> . หมายถึงตรงนี้
- อยู่ในไฟล์ที่ต้องการเป็นปลายทาง อยากย้าย abc ไป test_lv3
```
mv ../abc.txt . 
```
![My Image](https://drive.google.com/uc?id=1zCsRwPDcKcTT4RCTndZzvWfOUTK3Y7m9)

### 5. Copy file/Folder
Copy file – ไฟล์ต้นทางไม่หาย
```
Cp ที่อยู่ไฟล์ที่จะคัดลอก/<ชื่อไฟล์>  ที่อยู่ปลายทาง/.
```
Copy Folder 
- ถ้าจัดการเกี่ยวกับ folder ต้องมี -r ด้วย 
```
Cp -r ที่อยู่โฟลเดอร์ที่ต้องการคัดลอก/<ชื่อโฟลเดอร์>  + . ที่อยู่ปลายทาง/.
```
Cp  test_lv3 ไป test_lv4
เอาตัวไปอยู่ ปลายทาง  (test_lv4)
test_lv3 อยู่ใน test_lv2
```
ilysbeam@ilysbeam:~/test/test_lv2/test_lv3$ cd ..
ilysbeam@ilysbeam:~/test/test_lv2$ ls
test2_lv3  test_lv3
```
> ../.. ออก 2 ครั้ง
```
ilysbeam@ilysbeam:~/test/test_lv2/test2_lv3/test_lv4$ cp -r ../../test_lv3 .
ilysbeam@ilysbeam:~/test/test_lv2/test2_lv3/test_lv4$ ls
test_lv3
ilysbeam@ilysbeam:~/test/test_lv2/test2_lv3/test_lv4$
```
### 6. Manual page
```
man #ดูเอกสารคำสั่งและโปรแกรมต่าง ๆ ในรูปแบบ "หน้าคู่มือ" 
man ls #ใช้ดูรายการไฟล์ #ใช้ได้กับทุกคำสั่ง ที่เขาเขียน Instruction มาให้
```
### 7. Check Systems Preference
```
htop #เอาไว้ดูว่ามี RAM อยู่เท่าไหร่ ดูการใช้งานของเครื่อง
# ต้อง Install ก่อน
```
