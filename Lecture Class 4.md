# Managing Environment Conda
 Conda สามารถติดตั้งได้จาก
- **Miniconda** 👉 [https://docs.conda.io/en/latest/miniconda.html](https://docs.conda.io/en/latest/miniconda.html)
- **Anaconda** 👉 [https://www.anaconda.com/products/distribution](https://www.anaconda.com/products/distribution)
```
conda --version #ตรวจสอบว่าติดตั้งสำเร็จหรือไม่?
```
## Create Environment
โหลด conda - (base)
สร้าง Environment ใหม่ 
```
- conda create --name <ชื่อ env> python=<versionที่ต้องการ>
```
Check environment ว่าตรงกับที่ตั้งไหม
```
python 
```
ใช้งาน env -> Activate environment 
```
conda activate <ชื่อ env> #conda activate testpy38
```
ถ้าสำเร็จจะขึ้น (ตามชื่อที่ตั้ง)
```
(testpy38) ilysbeam@ilysbeam:~/Codes/AIPrototype25$ python
```
เลิกใช้ env กลับเป็น (base)
```
conda deactivate 
```
ลบ env
```
conda remove --name <ชื่อ env> --all
#conda remove --name ai_project --all 
```
ดู list ชื่อ env ทั้งหมดของ Conda
```
conda env list
```
## Install package
> อยู่ใน VM และเข้า env แล้ว

ติดตั้ง Package
```
conda install <package_name>
#conda install pandas
```
>  import package ที่ไม่มี จะ error

แสดง package ทั้งหมด
```
conda list
```
---
# Github Commandline
## Setting owner Github (ทำครั้งเดียว)
```
git config --global user.name "Username"
git config --global user.email "email"
```
> มันจะมีให้ใส่ username กับ password = Token #ทำทุกรอบที่ push

## การโคลน Github
```
git clone <https ของ Github ที่เราต้องการโคลน>
```
![My Image](https://drive.google.com/uc?id=1zkeH86aDtQFIply7kFqD23DGf-PG-6RY)

## Save code on Github
> เมื่อมีการแก้ไขไฟล์<br>
1. Update Local (ดึงเวอร์ชันล่าสุด ป้องกันการเกิดกรณีที่แก้แล้ว version ไม่ตรงกับที่ push ขึ้นไปบน git ล่าสุด)
  ```
  git pull
  ```
2. แก้ไขไฟล์
3. เลือกไฟล์ที่จะส่งขึ้นไป
  ```
  git add <ชื่อไฟล์>
  ```
4. commit การเปลี่ยนแปลง
  ```
  git commit -m “your_describtion”
  ```
5. ส่งโค้ดที่ Commit แล้วขึ้นไปบน GitHub
  ```
  git push
  ```
## Check Status
```
git status
```
> * ถ้าขึ้นสีแดงแสดงว่าไม่เคยมีใน git มาก่อน<br>
> * ถ้า add แล้วจะขึ้นสีเขียว (ใส่หลายไฟล์ได้)<br>
> * ถ้าไม่ขึ้นอะไรแสดงว่า track ครบละ<br>
> * ถ้า Git push ของ path คนอื่นจะเจ๊ง<br>
> * Ctrl-r ดูคำสั่งล่าสุดที่เกี่ยวข้อง<br>

### Password for commit on Github
> Profile Github Setting → Developer Settings → Personal access tokens (classic) → Generate new token (classic)<br>
> *Password (token) จะแสดงครั้งเดียว ต้อง save ไว้ใช้ ถ้าลืมต้องสร้างใหม่*
