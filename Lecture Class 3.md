# install [miniconda](https://www.anaconda.com/docs/getting-started/miniconda/install#linux-2)

1. Run the following four commands to download and install the latest Linux installer for your chosen chip architecture. Line by line, these commands
```
mkdir -p ~/miniconda3
wget https://repo.anaconda.com/miniconda/Miniconda3-latest-Linux-x86_64.sh -O ~/miniconda3/miniconda.sh
bash ~/miniconda3/miniconda.sh -b -u -p ~/miniconda3
rm ~/miniconda3/miniconda.sh
```
2. After installing, close and reopen your terminal application or refresh it by running the following command
```
source ~/miniconda3/bin/activate
```
3. Then, initialize conda on all available shells by running the following command
```
conda init --all
```
---
## Python Commandline
> เป็น Python ที่ใช้ในการเขียน Server

เปิด VSCode ผ่าน Commandline
```
Code
```
สร้างไฟล์ใน vscode
```
Code <ชื่อไฟล์>
```
## Screen Session
```
screen -S {screen name} #สร้าง
```
> ต่อให้ปิด Terminal ไปก็ยังรันอยู่<br>
```
screen -R #กระโดดกลับเข้่าไปที่ screen
```
- กด control A +D ออกจาก session
- กด control A +K+y ออกและลบ session
- กด control A +[  freeze จอเลื่อนดูได้
- กด q และ enter ออกจากที่ freeze
- ถ้าจะหยุดการ run ทุกอย่าง ctrl+c → เผื่อรันไรผิดแล้วจะหยุด
  
เช็ค screen ทั้งหมดที่มีอยู่
```
screen -R <screen name> → Tab
```

กรณีต้องการลบ screen ที่ชื่อซ้ำ --> ให้เช็คเลขไอดีของ srceen ก่อน

> เข้าไปใน screen ที่ชื่อซ้ำด้วยไอดี
```
screen -R id.<screen name> #เช่น screen -R 12107.testscreen1
```
แล้ว control A +K+y ออกและลบ session


