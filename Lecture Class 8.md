# Train LLM
## Basic AI
### What is AI?
* Computer Vision (See)
* NLP (Communicate)
* Machine Learning (Learn)
* Expert System (Decide)
* Robotics (Work)

ML = DATA + COM POWERAI <br/>
AI → 99% based on ML


# ML 
## Supervised Learning
To learn from examples
> สร้าง f(x) ที่ map input ไปที่ output ได้ เช่น regression (x ทำนาย y) หาเส้นที่ loss น้อยสุด
รูป เสียง ข้อความ ค่าจากสารต่างๆ เอามา train ได้แค่มี label

# CV
![My Image](https://drive.google.com/uc?id=1l0G5MsxckSpOCp9smFe6MKQud3wAd9Ly)
> แปลงรูปเป็นขอบของแต่ละจุดในภาพนี้ – แบ่งเป็นส่วนประกอบของเส้นเฉียง → สร้าง histogram ได้ (นับความถี่ของเส้นได้) – แต่ก่อนนิยม แล้วจากนั้นก็เข้า Algorithm

 ## Unsupervised Learning
> เอาตัวเลข * รูปภาพ = ข้อสรุปแต่ละจุดในรูปภาพ 
เป็นตัวเลขแล้วก็ทำนาย

![My Image](https://drive.google.com/uc?id=1CFJspYcUVvn0MFUshIkbuR4_rN8qh96V)

> ถ้าเรามี data มากพอ (ใหญ่มาก) ให้คอมเรียนดูเองว่าจะดูจากอะไร
imagenet dataset – เอาไป train ได้ (มีประมาณ 100 class)

![My Image](https://drive.google.com/uc?id=1SdB0scjWi63DvyeZw3TrFwqmshiNGoDp)

![My Image](https://drive.google.com/uc?id=1xs-FrDK9lzL4ajHBvjItTC6-YwzokNla)

> สอนทั่วไปก่อน → เรียนแคบลงเรื่อยๆ (specific) <br/>
เริ่มเอา imagenet มาสอน ภาพทั่วๆ ไปของโรค (pretrain) <br/>
พอแม่นก็ให้แยกได้ (fine tune) – ใช้ data ที่เฉพาะเจาะจง <br/>

# LLM
## LLM Training & Deployment Architecture
อยากให้เข้าใจภาษา → รวบรวมข้อมูล text ทั้งหมด → tranformer เอาปย. 1 ปย.มา ปิดคำทาย ทำนายคำสุดท้าย เช่น 9 คำ input tag คืออันที่ 10 (ให้มันเดา) = next token prediction
> Base model เช่นพวก GPT

1. Pre-training
2. Continued Pre-trained
ถ้าอยากให้เก่งเรื่อง code มา train ในส่วนนี้ได้ 
Next token prediction แต่เป็นภาษา code
3. Instruction Fine-tune ให้ llm ทำตามที่เราต้องการได้ (เฉพาะทาง)
Agentic มา fine tune ในส่วนนี้ 
Input นัดหมาย
มีเครื่องมือ – calendar … 
ก็เรียกใช้เครื่องมือได้
4. Preference Fine-Tuning ทำให้ตอบได้ตรงใจเรา (แปลว่าคำตอบจะถูก แต่ถูกใจ)
การ train เป็น reinforecment learning from human feedback = ได้ model ตรงใจ
5. RAG Deployment
คำถาม + ข้อมูลที่เกี่ยวข้อง = คำตอบ
Vector database (อาจเลือกผิดมาตั้งแต่แรกก็ได้)
เปลี่ยนคำถามเป็น vector และวัด vector (คำถาม vs เนื้อหา) ดูว่าคล้ายกันไหม 
Llm รับ query กับ context → Answer

**3. + 5. ส่วนที่เราทำได้ (ไม่ได้มีคอมที่มี power/ data เยอะ)** 

