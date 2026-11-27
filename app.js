(function(){
"use strict";
var I=function(n){return "img/p"+n+".jpg"};
var ICON={
  home:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M4 6h16M4 12h16M4 18h10"/></svg>',
  bed:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18V7M3 14h18v4M21 14v-2a3 3 0 0 0-3-3h-7v5"/><circle cx="7" cy="11" r="1.6"/></svg>',
  arr:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
  plane:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M2 13l8-2-3-7h2l6 6 6-1c1 0 2 .8 2 1.5s-1 1.5-2 1.5l-6-1-6 6H7l3-7-8-2z" transform="rotate(0)"/></svg>'
};
var PICS={
"Dim Sum Breakfast · OH BAY · Zhongshuge Bookstore":["pg05_59","pg05_62"],
"Qianhai Museum":["pg06_76","pg06_77","pg06_78","pg07_86","pg07_87","pg07_88","pg07_89"],
"Sea World":["pg08_102","pg08_103","pg08_104","pg08_105","pg09_116"],
"Ancerville on Minghua Ship":["pg09_119"],
"Shenzhen Natural History Museum":["pg11_144","pg12_173","pg13_181","pg13_182","pg14_191","pg14_194"],
"Upperhills":["pg15_202","pg15_211","pg15_212","pg16_221","pg16_222","pg16_227"],
"The Bay by Chef Fei, Mandarin Oriental":["pg18_254"],
"MO Bar, ชั้น 79":["pg19_270"],
"OCT LOFT & OCT HARBOUR":["pg20_287","pg20_288","pg20_289","pg20_290","pg20_291"],
"TOMOSOON Café (多么顺)":["pg21_311","pg21_312","pg21_313","pg21_314","pg21_315","pg21_316"],
"OCT Harbour Flagship":["pg22_330","pg22_331"],
"Magpie Restaurant 喜鹊派餐厅":["pg23_342","pg23_343","pg23_344","pg23_345","pg23_346","pg23_347"],
"Shenzhen Talent Park · Bay Cultural Plaza":["pg24_367","pg24_368","pg24_370","pg25_382","pg25_383","pg25_388"],
"Shenzhen Bay MixC Mall":["pg26_395","pg26_396","pg26_397","pg26_398"],
"MOCAPE":["pg27_418","pg27_427","pg27_428","pg27_429"],
"Free time shopping · MixC Luohu":["pg28_446","pg28_447","pg28_448"],
"YUN DI SI NAN":["pg29_466","pg29_467"]
};
function src(x){return typeof x==='string'?'img/'+x+'.jpg':I(x)}
function pics(list,mode){
  if(!list||!list.length)return "";
  var m=mode||(list.length==1?"one":list.length==2?"two":"three");
  return '<div class="pics '+m+'">'+list.map(function(x){return '<div class="pf"><img src="'+src(x[0])+'" alt="'+x[1]+'" loading="lazy" decoding="async"></div>'}).join("")+'</div>';
}
function chips(a){return a&&a.length?'<div class="chips">'+a.map(function(t){return "<span>"+t+"</span>"}).join("")+"</div>":""}
function item(o){
  var PP=PICS[o.name];if(PP){o.pics=PP.map(function(id){return [id,o.name]});o.pm=PP.length==1?"one":"grid"}
  var h='<div class="item">';
  if(o.time)h+='<span class="time">'+o.time+'</span><br>';
  h+='<h3>'+(o.tag?'<span class="tag '+(o.tagc||"")+'">'+o.tag+'</span>':"")+o.name+'</h3>';
  (o.p||[]).forEach(function(t){h+='<p>'+t+'</p>'});
  if(o.halls){h+='<ul class="halls">'+o.halls.map(function(t,i){return '<li><b>'+(i+1)+'</b>'+t+'</li>'}).join("")+'</ul>'}
  if(o.walk){h+='<ul class="walk">'+o.walk.map(function(w){return '<li><b>'+w[0]+'</b><span>'+w[1]+'</span></li>'}).join("")+'</ul>'}
  h+=chips(o.chips);
  if(o.note)h+='<div class="note">'+o.note+'</div>';
  h+=pics(o.pics,o.pm);
  return h+'</div>';
}
var DAYS=[
{n:1,dow:"SAT",date:"28 NOV 2026",title:"ริมอ่าวหนานซาน พิพิธภัณฑ์ใหม่ และสถาปัตยกรรมริมน้ำ",hero:2,toc:"OH BAY · Qianhai Museum · Sea World",items:[
 {time:"เช้า",note:"นัดตากล้อง 09:30 น. ณ ร้านติ่มซำ Daoxiang 稻香",name:"Dim Sum Breakfast · OH BAY · Zhongshuge Bookstore",p:["พื้นที่สาธารณะและแหล่งไลฟ์สไตล์ครบวงจร ไฮไลต์คือชิงช้าสวรรค์ยักษ์ Bay Glory สูง 128 เมตร ชมวิวทะเลและเมืองแบบ 360 องศา พร้อมสวนสาธารณะริมทะเลร่มรื่น และสถาปัตยกรรมดีไซน์ล้ำยุคอย่างร้านหนังสือจงซูเก๋อ รวมทั้งโซนช้อปปิ้งบรรยากาศริมอ่าว"]},
 {time:"กลางวัน",tag:"LUNCH",tagc:"meal",name:"GREEN SIDE Restaurant"},
 {time:"14:30",name:"Qianhai Museum",p:["แลนด์มาร์กวัฒนธรรมริมอ่าวเฉียนไห่ เปิดเมื่อ 30 ตุลาคม 2026 กลุ่มของเราได้เป็นหนึ่งในกลุ่มแรกที่เข้าชม","ออกแบบโดยสถาปนิก He Jingtang ภายใต้แนวคิด “ต้นไม้แห่งอารยธรรมและประภาคารแห่งยุคสมัย” ตัวอาคารใช้โครงสร้างเหล็กไร้เสาขนาดใหญ่ที่เปิดรับวิวผืนน้ำกว้าง และตีความชายคาซ้อนแบบจีนโบราณให้เป็นรูปทรงเรขาคณิตสมัยใหม่","ภายในจัดแสดงโบราณวัตถุกว่า 3,000 ชิ้นที่คัดสรรร่วมกับ National Museum of China เช่น เรือนสำริดราชวงศ์ฮั่นและเครื่องกระเบื้องโบราณ มีผนังกระจกพลังงานแสงอาทิตย์ และสวนลอยฟ้าหลายชั้นให้เดินรับลมชมวิวอ่าว"],note:"ผู้นำชมภาษาอังกฤษ (Museum Guide in English)",pics:[[2,"Qianhai Museum ริมอ่าวยามเย็น"],[6,"ระเบียงสวนลอยฟ้าของพิพิธภัณฑ์"],[3,"ห้องจัดแสดงภายในพิพิธภัณฑ์"]]},
 {name:"Sea World",p:["ย่านไลฟ์สไตล์ริมทะเลยอดนิยมแห่งใหม่ในเขตหนานซาน ผสมผสานความเป็นสากล ประวัติศาสตร์ และความทันสมัย จุดเด่นคือเรือสำราญหมิงหัว (Minghua Cruise Ship) เรือขนาดใหญ่ที่สร้างในฝรั่งเศส เคยมีเติ้งเสี่ยวผิงมาเยือนและจารึกชื่อ “Sea World” ไว้บนตัวเรือ ปัจจุบันปรับโฉมเป็นโรงแรม ร้านอาหาร และบาร์สุดหรู","Sea World Culture and Arts Center ออกแบบโดย Fumihiko Maki สถาปนิกชาวญี่ปุ่นผู้ได้รับรางวัลพริตซ์เกอร์ จากสำนักงาน Maki & Associates เหมาะกับการเดินเล่น ชมงานออกแบบ ถ่ายภาพ และนั่งพักชมวิวทะเล"],pics:[[7,"มุมสูงย่าน Sea World และเรือหมิงหัว"],[10,"เรือหมิงหัวยามค่ำ"]]},
 {time:"18:00",tag:"DINNER",tagc:"meal",name:"Ancerville on Minghua Ship",p:["อาหารซีฟู้ด บนเรือหมิงหัว"]},
 {tag:"HOTEL",name:"เข้าพัก Hui Hotel",p:["เข้าพักที่ Hui Hotel 3 คืน ดูรายละเอียดที่หน้า “ที่พัก”"]}
]},
{n:2,dow:"SUN",date:"29 NOV 2026",title:"พิพิธภัณฑ์ธรรมชาติวิทยา เมืองบนภูเขา และมื้อค่ำมิชลิน 2 ดาว The Bay by Chef Fei",hero:11,toc:"Natural History Museum · Upperhills · The Bay by Chef Fei",items:[
 {time:"10:00",name:"Shenzhen Natural History Museum",p:["พิพิธภัณฑ์ธรรมชาติวิทยาที่ใหญ่ที่สุดในจีนตอนใต้ เปิดเมื่อ 28 กรกฎาคม 2026 ตั้งอยู่ริมน้ำย่านผิงซาน ออกแบบโดย 3XN, B+H Architects และ Zhubo Design ภายใต้แนวคิดสามเหลี่ยมปากแม่น้ำ ตัวอาคารพริ้วไหลไปตามภูมิประเทศเหมือนสายน้ำที่ไหลมาบรรจบผืนดิน","จุดเด่นคือหลังคาเขียวลาดเอียงยาวกว่า 600 เมตร เปิดให้ขึ้นไปเดินชมระบบนิเวศบนดาดฟ้า ภายในมี 8 โซนจัดแสดงพื้นที่กว่า 100,000 ตารางเมตร เล่าประวัติศาสตร์โลกตลอด 4,600 ล้านปี"],halls:["Cosmos Hall","Earth Hall","Evolution Hall","Dinosaur Hall","Human Hall","Biology Hall","Ecology Hall","Homeland Hall"],note:"มีผู้นำชมบรรยายเป็นภาษาจีน และมี Audio Guide ภาษาอังกฤษผ่านแอป WeChat",pics:[[11,"มุมสูงพิพิธภัณฑ์ธรรมชาติวิทยาเซินเจิ้น"],[12,"โถงไดโนเสาร์ภายในพิพิธภัณฑ์"],[13,"หลังคาเขียวลาดเอียงของพิพิธภัณฑ์"]]},
 {time:"บ่าย",name:"Upperhills",p:["ไฮเอนด์คอมมูนิตี้ใจกลางเขตฟู่เทียน เปิดอย่างเป็นทางการปี 2018 ออกแบบโดย SOM ภายใต้แนวคิด Urban Mountain Complex “เมืองบนภูเขา” ผสมผสานธรรมชาติกับสถาปัตยกรรมสมัยใหม่ ตั้งอยู่ระหว่างสวนสาธารณะใหญ่สองแห่ง คือสวนเหลียนหัวซานและสวนปี้เจียซาน","โซน Open-air Town ด้านบนใช้โทนสีพาสเทลตัดกับสีอบอุ่น อาคารทรงเรขาคณิตเชื่อมกันด้วยลานกว้าง ระเบียงชมวิว และสะพานลอยคนเดิน มีเวลาเดินถ่ายรูป ช้อปปิ้งสินค้าดีไซน์เก๋ นั่งคาเฟ่ และพักผ่อนตามอัธยาศัย"],walk:[["16:30","เริ่มที่ Biji Shan Sports Park เดินขึ้นทางลาดสีเขียวซิกแซก (5 นาที)"],["16:35","ข้าม East Bridge: Bijiashan Skywalk (10 นาที)"],["16:45","ถึง Upperhills Level 3 Outdoor Loft Town เลือกชม MASONPRINCE, DOE และแฟลกชิปสโตร์ต่าง ๆ (35 นาที)"],["17:20","ข้าม West Bridge: Lianhuashan Sky-bridge (เดินชมธรรมชาติ 15 นาที)"],["17:35","ขึ้นยอด Lianhuashan Park ชมพระอาทิตย์ตก 17:50 และตึกระฟ้าย่าน CBD เปิดไฟ (30 นาที)"],["18:20","เดินกลับข้าม West Bridge เข้าด้านใน ลงชั้นล่างเดินดูร้าน Sony และ MUJI"],["18:55","ถึง Tower A, Mandarin Oriental Hotel เพื่อรับประทานอาหารค่ำกับ Chef Fei"]],pics:[[26,"ตึกสูงย่านฟู่เทียนมองจากสวน"],[29,"ลานระเบียงหลายชั้นของ Upperhills"],[27,"ร้านแฟลกชิปที่ Upperhills"]]},
 {time:"18:00",tag:"DINNER",tagc:"meal",name:"The Bay by Chef Fei, Mandarin Oriental",p:["มื้อค่ำร้านมิชลิน 2 ดาว (Two-Michelin-star dining) ที่ Mandarin Oriental"],pics:[[24,"อาหารและห้องอาหารของ The Bay by Chef Fei"]],pm:"wide"},
 {tag:"OPTIONAL",tagc:"opt",name:"MO Bar, ชั้น 79",p:["ติดอันดับ 5 ของ Asia’s 50 Best Bars 2026 และอันดับ 60 ของ The World’s 50 Best Bars 2026 ตั้งอยู่ชั้น 79 ของ Mandarin Oriental Shenzhen ในเขตฟู่เทียน โด่งดังเรื่องค็อกเทลสร้างสรรค์สไตล์มรดกจีน วิวสกายไลน์กว้าง และบรรยากาศอินดัสเทรียลชิค ใครสนใจแวะดื่มสักแก้วสองแก้ว"],pics:[[21,"ค็อกเทลกับวิวสกายไลน์ยามค่ำ"]],pm:"one"}
]},
{n:3,dow:"MON",date:"30 NOV 2026",title:"ย่านศิลปะโรงงานเก่า และสวนแห่งอนาคตริมอ่าว",hero:34,toc:"OCT Loft · Talent Park · MixC Shenzhen Bay",items:[
 {time:"10:00",name:"OCT LOFT & OCT HARBOUR",p:["ย่านศิลปะและคอมมูนิตี้ครีเอทีฟในเขตหนานซาน เปิดอย่างเป็นทางการตั้งแต่ปี 2006 พัฒนาจากโรงงานเก่าของบริษัท OCT ที่สร้างตั้งแต่ทศวรรษ 1980 จุดเด่นคือการเก็บรักษาอาคารโรงงานสไตล์โซเวียตผสมสถาปัตยกรรมยุคปฏิรูปอุตสาหกรรมของจีนไว้ครบถ้วน อาคารอิฐเปลือยและโครงสร้างคอนกรีตเดิมถูกปรับเป็นแกลเลอรี คาเฟ่ สตูดิโอออกแบบ และร้านหนังสืออิสระ","มีเวลาเดินถ่ายรูป ชมนิทรรศการ street art และนั่งพักในคาเฟ่ตามอัธยาศัย"],chips:["Old Heaven Books","GEE Coffee Roasters","IM Loft Shop","TOMOSOON Café","HEYTEA LAB OCT Harbour"],pics:[[34,"ผนังอาคารโรงงานเก่า OCAT"],[30,"ผนังคำว่า 深圳 ในย่านศิลปะ"],[31,"ร้านหนังสือและต้นไม้ในย่านศิลปะ"]]},
 {name:"TOMOSOON Café (多么顺)",p:["ร้านกาแฟสไตล์อินดัสเทรียลแนวอาวองต์การ์ด ตั้งอยู่ในย่าน OCT-Loft Creative Culture Park (华侨城创意园-北区)"]},
 {tag:"HEYTEA LAB",name:"OCT Harbour Flagship",p:["แฟลกชิปหลายชั้นออกแบบโดย Tomo Design มีห้องปฏิบัติการเฉพาะทาง (ice-making, dessert, tea geek lab และ illustration lab) พร้อมเจลาโต้ เพสทรี และเค้กสูตรเฉพาะ HEYTEA (喜茶) ก่อตั้งและมีสำนักงานใหญ่ในเซินเจิ้น","เปิดทุกวัน 10:00–22:00 · Unit 18-1A, Building 18, Qushuiwan, OCT Harbour, 2008 Binhai Ave, Nanshan District"],pics:[[36,"ทางเข้า HEYTEA LAB"]],pm:"one"},
 {time:"13:00",tag:"LUNCH",tagc:"meal",name:"Magpie Restaurant 喜鹊派餐厅",note:"ถ้าไปถึงช้ากว่า 13:00 น. ที่นั่งจะถูกยกเลิก",p:["ร้านอาหารที่อาหารพบกับศิลปะ ในย่านศิลปะ OCT Loft"],pics:[[40,"บรรยากาศภายในร้านอาหาร"]],pm:"one"},
 {time:"14:30",name:"Shenzhen Talent Park · Bay Cultural Plaza",p:["เปิดครั้งแรกเมื่อเดือนพฤศจิกายน 2017 เป็นสวนสาธารณะระดับเมืองแห่งแรกที่ยกย่องบุคลากรผู้ขับเคลื่อนเมือง ต่อมามีการเพิ่มโซน Shenzhen Bay Culture Square (Bay Cultural Plaza) ออกแบบโดย MAD Architects นำโดย Ma Yansong เริ่มพัฒนาตั้งแต่ปี 2018 และเปิดอย่างเป็นทางการในช่วงปลายปี 2025","แนวคิดคือผสานธรรมชาติเข้ากับพื้นที่เมืองริมทะเล พิพิธภัณฑ์ศิลปะและศูนย์วัฒนธรรมมีรูปทรงโค้งมนคล้ายก้อนหินขนาดมหึมา (Giant Pebbles) กลมกลืนกับสวนสีเขียว ผนังกรุหินแกรนิตสีขาวตัดเป็นเส้นตามความโค้งของอาคาร ภายในเชื่อมกันด้วยโถงรูปวงแหวน ดาดฟ้าและขั้นบันไดลดหลั่นลงสู่แนวชายฝั่ง กลายเป็นพื้นที่ชุ่มน้ำและสวนสาธารณะแบบเปิดโล่ง ได้เดินเล่นรับลมเย็นริมอ่าว ชมแสงสีของตึกระฟ้ายามค่ำคืน"],pics:[[54,"ก้อนหินยักษ์ Bay Cultural Plaza และตึกระฟ้า"],[56,"ทางเดินโค้งภายในอาคาร"],[55,"โถงโค้งของ Bay Cultural Plaza"],[57,"หน้าต่างทรงโค้งภายในอาคาร"]],pm:"two"},
 {time:"16:00",name:"Shenzhen Bay MixC Mall",p:["ศูนย์การค้าระดับ Ultra Luxury ออกแบบโดย OMA เป็นจุดที่สถาปัตยกรรม ประติมากรรม Art Installation และเทคโนโลยี มาพบกับ High-end Fashion Brand ทั้งแบรนด์เนมระดับโลกจากตะวันตกและแบรนด์ใหม่ ๆ ของจีน เหมาะสำหรับเลือกซื้อของขวัญของฝากชิ้นพิเศษ และสัมผัสบรรยากาศไลฟ์สไตล์ระดับท็อปของเซินเจิ้นในปัจจุบัน"],pics:[[70,"ศูนย์การค้า MixC พร้อมประติมากรรมช้าง"]],pm:"one"},
 {time:"18:00",tag:"DINNER",tagc:"meal",name:"Bing Sheng Pin Wei",note:"ถ้าไปถึงช้ากว่า 18:00 น. ที่นั่งจะถูกยกเลิก"}
]},
{n:4,dow:"TUE",date:"1 DEC 2026",title:"MOCAPE ช้อปปิ้ง และเดินทางกลับกรุงเทพฯ",hero:65,toc:"MOCAPE · MixC Luohu · เดินทางกลับ",items:[
 {time:"10:30",name:"MOCAPE",p:["Museum of Contemporary Art & Planning Exhibition ศิลปะร่วมสมัย ผังเมือง และพื้นที่สาธารณะ ผลงานระดับโลกใจกลางย่าน Civic Center ออกแบบโดย Coop Himmelb(l)au จากออสเตรีย รวมพิพิธภัณฑ์ศิลปะและศูนย์ผังเมืองไว้ในอาคารเดียวกัน โดดเด่นด้วยโครงสร้างเรขาคณิตรูปทรงอิสระหุ้มด้วยผิวโลหะสะท้อนแสง ภายในไม่มีเสาค้ำขนาดใหญ่ มีประติมากรรมทรงเมฆสีเงินเชื่อมพื้นที่และทางเดินลอยฟ้า สะท้อนวิสัยทัศน์ไร้ขีดจำกัด","อาคารออกแบบให้ “พิพิธภัณฑ์ศิลปะ” และ “ศูนย์ผังเมือง” มาพบกันผ่านโถงกลางขนาดใหญ่ โครงสร้างเปิดโล่งไร้เสาช่วยให้จัดนิทรรศการระดับนานาชาติและหมุนเวียนงานศิลปะร่วมสมัยได้ยืดหยุ่น รอบอาคารมีกระจกใสและแผงโลหะที่สะท้อนแสงธรรมชาติ ทำให้เฉดสีเปลี่ยนไปตามช่วงเวลาของวัน"],note:"ไม่มีผู้นำชม และยังไม่มีบริการ Audio Guide",pics:[[65,"ประติมากรรมทรงเมฆสีเงินภายใน MOCAPE"],[67,"โถงกลางที่ไร้เสา"],[69,"อาคาร MOCAPE และตึกรอบข้าง"],[68,"แบบจำลองผังเมืองในอาคาร"]],pm:"two"},
 {time:"12:00",tag:"LUNCH",tagc:"meal",name:"Guangzhou Restaurant, Upperhills"},
 {time:"13:30",name:"Free time shopping · MixC Luohu",p:["ศูนย์การค้าระดับท็อปของเซินเจิ้นในเครือ China Resources ถือเป็นสาขาแรกและต้นแบบของแบรนด์ MIXC ตั้งอยู่ใจกลางเขตหลัวหู ภายในมีแบรนด์ไฮเอนด์ ร้านอาหารหลากหลาย โรงภาพยนตร์ และลานสเก็ตน้ำแข็ง ให้เดินเล่น ช้อปปิ้ง และพักรับประทานอาหารได้ตามอัธยาศัย"]},
 {time:"17:30",tag:"DINNER",tagc:"meal",name:"YUN DI SI NAN",p:["Cantonese & Hunan Fusion Cuisine"]},
 {time:"20:30",name:"ถึงสนามบินนานาชาติเซินเจิ้นเป๋าอัน",p:["เช็กอินตรวจสัมภาระ"]},
 {time:"23:25",name:"บินกลับกรุงเทพฯ · CZ 8157",p:["China Southern Airlines ออกเดินทางสู่สุวรรณภูมิ"]},
 {time:"2 DEC · 01:15",name:"ถึงสุวรรณภูมิโดยสวัสดิภาพ",p:["พร้อมความประทับใจ"]}
]}
];
var TITLE="Shenzhen for Lovers of Urban Design &amp; Future Trends";
var ORDER=["home","trip","day1","day2","day3","day4","hotel","end"];
var NAMES={home:"สารบัญ",trip:"ข้อมูลทริป",day1:"วัน 1",day2:"วัน 2",day3:"วัน 3",day4:"วัน 4",hotel:"ที่พัก",end:"ข้อมูลทริป"};
function pn(id){
  var i=ORDER.indexOf(id),p=ORDER[i-1],n=ORDER[i+1],h='<div class="wrap pn">';
  if(p)h+='<a class="btn ghost" href="#/'+p+'"><span><small>ก่อนหน้า</small>'+(p=="home"?"สารบัญ":NAMES[p])+'</span></a>';
  if(n)h+='<a class="btn" href="#/'+n+'"><span><small>ถัดไป</small>'+(n=="end"?"ข้อมูลทริป":NAMES[n])+'</span>'+ICON.arr+'</a>';
  return h+"</div>";
}
function dayPage(d){
  var h='<section class="hero"><img src="'+I(d.hero)+'" alt=""><div class="wrap"><div class="dn"><small>DAY</small>0'+d.n+'</div><h1>'+d.title+'</h1><div class="dt">'+d.dow+' · '+d.date+'</div></div></section>';
  h+='<div class="wrap tl">'+d.items.map(item).join("")+'</div>'+pn("day"+d.n);
  return h;
}
function home(){
  var h='<section class="cover"><img class="bg" src="'+I(62)+'" alt=""><div class="cover-top"><div class="wrap"><span class="kick">28 NOV – 1 DEC 2026</span><div class="badge"><img src="img/sml6.png" alt="โลโก้กลุ่ม SML6 นกหัวขวาน"><span>SML6<i>WOODPECKER</i></span></div></div></div>';
  h+='<div class="wrap"><div class="kick">SHENZHEN · 4 DAYS 3 NIGHTS</div><h1>Shenzhen for Lovers of <em>Urban Design</em> &amp; Future Trends</h1><p class="sub">สำรวจสถาปัตยกรรม การออกแบบ และวัฒนธรรมเมืองของเซินเจิ้น พร้อมผู้นำชมท้องถิ่นและช่างภาพส่วนตัว</p>';
  h+='<div class="facts"><span>4 วัน 3 คืน</span><span>กรุงเทพฯ ⇄ เซินเจิ้น</span><span>หมู่นกหัวขวาน SML6</span></div><a class="btn" href="#/day1">เริ่มดูโปรแกรม '+ICON.arr+'</a></div></section>';
  h+='<section class="toc"><div class="wrap"><div class="sec-k">Itinerary</div><h2 class="big">สารบัญการเดินทาง</h2><ul>';
  h+='<li><a href="#/trip"><span class="no"><small>INFO</small>00</span><span class="t">ข้อมูลทริปและเที่ยวบิน</span><span class="d">สิ่งที่รวมในทริป · CZ 8158 / CZ 8157</span><span class="ar">'+ICON.arr+'</span></a></li>';
  DAYS.forEach(function(d){h+='<li><a href="#/day'+d.n+'"><span class="no"><small>'+d.dow+' '+d.date.split(" ")[0]+'</small>0'+d.n+'</span><span class="t">'+d.title+'</span><span class="d">'+d.toc+'</span><span class="ar">'+ICON.arr+'</span></a></li>'});
  h+='<li><a href="#/hotel"><span class="no"><small>STAY</small>'+ICON.bed.replace("<svg","<svg style=\"width:30px;height:30px\"")+'</span><span class="t">Hui Hotel · พัก 3 คืน</span><span class="d">ที่อยู่ เบอร์โทร และห้องพัก</span><span class="ar">'+ICON.arr+'</span></a></li>';
  h+='</ul></div></section>';
  return h;
}
function trip(){
  var h='<div class="wrap block"><div class="sec-k">Trip info</div><h2 class="big">ข้อมูลทริป</h2>';
  h+='<div class="cardl"><h3>About this trip</h3><ul><li>พักโรงแรมบูติกดีไซน์ระดับ 5 ดาว</li><li>ประสบการณ์อาหารจากร้านดังในท้องถิ่น และมื้อค่ำร้านมิชลิน 2 ดาว</li><li>รถรับส่งส่วนตัวแบบเอ็กซ์คลูซีฟ</li><li>มีผู้นำชมท้องถิ่นผู้เชี่ยวชาญ และช่างภาพส่วนตัว</li><li>รถ ผู้นำชม และช่างภาพ ให้บริการวันละ 10 ชั่วโมง</li></ul></div>';
  h+='<div class="cardl"><div class="fn">เที่ยวบินขาไป · CZ 8158</div><div class="flight"><div><b>02:40</b><span>สุวรรณภูมิ (BKK)<br>28 NOV</span></div><div class="mid">'+ICON.plane+'</div><div><b>Bao’an</b><span>Shenzhen Bao’an Airport (SZX)</span></div></div><p style="margin-top:12px;font-size:14.5px">นัดพร้อม 23:20 วันที่ 27 NOV ที่สนามบินสุวรรณภูมิ อาคารผู้โดยสารระหว่างประเทศ ชั้น 4 เคาน์เตอร์ China Southern Airlines รับ Fast Track Immigration และ Miracle Lounge ดูแลเป็นพิเศษโดยพี่ก้อย</p></div>';
  h+='<div class="cardl"><div class="fn">เที่ยวบินขากลับ · CZ 8157</div><div class="flight"><div><b>23:25</b><span>Shenzhen Bao’an (SZX)<br>1 DEC</span></div><div class="mid">'+ICON.plane+'</div><div><b>01:15</b><span>สุวรรณภูมิ (BKK)<br>2 DEC</span></div></div></div>';
  h+='<div class="stack"><img src="'+I(62)+'" alt="สกายไลน์เซินเจิ้นยามพลบค่ำ" loading="lazy"><img src="'+I(59)+'" alt="ตึกสูงริมน้ำเซินเจิ้นยามค่ำ" loading="lazy"><img src="'+I(60)+'" alt="ประติมากรรมไฟรูปนกยูง" loading="lazy"></div></div>';
  return h+pn("trip");
}
function hotel(){
  var h='<section class="hero"><img src="img/pg10_131.jpg" alt=""><div class="wrap"><div class="dn"><small>STAY</small>Hui</div><h1>Hui Hotel · Boutique stay for 3 nights</h1><div class="dt">FUTIAN · SHENZHEN</div></div></section>';
  h+='<div class="wrap block"><div class="cardl"><h3>ที่อยู่</h3><p>3015 Hongli Rd, Huaqiangbei, Futian District, Shenzhen, Guangdong Province, China, 518028</p><p style="margin-top:8px"><b style="font-weight:600">โทร</b> <a href="tel:+8675588305555">+86 755 8830 5555</a></p><div class="chips"><span>สระว่ายน้ำในร่มอุ่น 24 ชั่วโมง</span></div></div>';
  h+='<div class="stack">'+["pg10_130","pg10_131","pg10_132","pg10_133","pg10_134","pg10_135","pg31_484","pg32_490"].map(function(n){return '<img src="img/'+n+'.jpg" alt="Hui Hotel" loading="lazy" decoding="async">'}).join("")+'</div></div>';
  return h+pn("hotel");
}
function end(){
  return '<section class="end"><div class="wrap"><img class="grp" src="img/sml6.png" alt="โลโก้กลุ่ม SML6 นกหัวขวาน"><div class="kick">SML6 · หมู่นกหัวขวาน</div><h1>'+TITLE+'</h1>'
  +'<dl class="meta"><div><dt>วันเดินทาง</dt><dd>28 พ.ย. – 1 ธ.ค. 2026 · 4 วัน 3 คืน</dd></div><div><dt>เส้นทาง</dt><dd>กรุงเทพฯ ⇄ เซินเจิ้น</dd></div><div><dt>สายการบิน</dt><dd>China Southern Airlines · CZ 8158 / CZ 8157</dd></div><div><dt>ที่พัก</dt><dd>Hui Hotel, Futian</dd></div></dl>'
  +'<div class="collab"><span class="cur">Curated by</span><div class="bb"><img class="bear" src="img/bear.png" alt="" width="64"><span>Brotherbear<em>.Co</em></span></div><span class="x">×</span><img src="img/teaw_logo.png" alt="เที่ยวสนุก ทราเวลเซ็นเตอร์ Teawsanook Travel Center"></div>'
  +'<div class="site">TEAWSANOOK.COM</div><a class="btn" style="margin-top:28px" href="#/home">กลับไปสารบัญ</a></div></section>';
}
var VIEWS={home:home,trip:trip,hotel:hotel,end:end,day1:function(){return dayPage(DAYS[0])},day2:function(){return dayPage(DAYS[1])},day3:function(){return dayPage(DAYS[2])},day4:function(){return dayPage(DAYS[3])}};
var root=document.getElementById("app"),tabs=document.getElementById("tabs");
ORDER.forEach(function(id){var s=document.createElement("div");s.className="page";s.id="pg-"+id;s.innerHTML=VIEWS[id]();root.appendChild(s)});
var TAB=[["home",ICON.home,"สารบัญ"],["day1","<b>1</b>","วัน 1"],["day2","<b>2</b>","วัน 2"],["day3","<b>3</b>","วัน 3"],["day4","<b>4</b>","วัน 4"],["hotel",ICON.bed,"ที่พัก"]];
tabs.innerHTML='<div class="tabs-in">'+TAB.map(function(t){return '<a href="#/'+t[0]+'" data-t="'+t[0]+'" aria-label="'+t[2]+'">'+t[1]+'<span>'+t[2]+'</span></a>'}).join("")+"</div>";
function route(){
  var id=(location.hash||"").replace(/^#\/?/,"")||"home";
  if(ORDER.indexOf(id)<0)id="home";
  Array.prototype.forEach.call(document.querySelectorAll(".page"),function(p){p.classList.toggle("on",p.id==="pg-"+id)});
  Array.prototype.forEach.call(tabs.querySelectorAll("a"),function(a){a.classList.toggle("on",a.getAttribute("data-t")===id);if(a.classList.contains("on"))a.setAttribute("aria-current","page");else a.removeAttribute("aria-current")});
  var tt=id=="home"?"Shenzhen for Lovers of Urban Design & Future Trends":NAMES[id]+" · Shenzhen SML6";
  document.title=tt;window.scrollTo(0,0);
}

/* lightbox */
var lb=document.createElement("div");lb.className="lb";lb.hidden=true;lb.setAttribute("role","dialog");lb.setAttribute("aria-modal","true");lb.setAttribute("aria-label","ดูรูปขยาย");
lb.innerHTML='<button class="lb-x" aria-label="ปิด">&times;</button><button class="lb-p" aria-label="รูปก่อนหน้า">&#8249;</button><img alt=""><button class="lb-n" aria-label="รูปถัดไป">&#8250;</button><div class="lb-c"></div>';
document.body.appendChild(lb);
var lbImg=lb.querySelector("img"),lbC=lb.querySelector(".lb-c"),grp=[],cur=0,pushed=false,sx=0;
function show(i){cur=(i+grp.length)%grp.length;lbImg.src=grp[cur].src;lbImg.alt=grp[cur].alt;lbC.textContent=grp.length>1?(cur+1)+" / "+grp.length:"";lb.classList.toggle("single",grp.length<2)}
function openLb(img){var box=img.closest(".pics,.stack");grp=Array.prototype.slice.call(box?box.querySelectorAll("img"):[img]);show(grp.indexOf(img));lb.hidden=false;document.body.style.overflow="hidden";if(!pushed){history.pushState({lb:1},"");pushed=true}lb.querySelector(".lb-x").focus()}
function closeLb(fromPop){if(lb.hidden)return;lb.hidden=true;lbImg.removeAttribute("src");document.body.style.overflow="";if(pushed&&!fromPop){pushed=false;history.back()}else pushed=false}
document.addEventListener("click",function(e){var im=e.target.closest(".pics img,.stack img");if(im){openLb(im);return}
 if(lb.hidden)return;if(e.target.closest(".lb-x")||e.target===lb)closeLb();else if(e.target.closest(".lb-p"))show(cur-1);else if(e.target.closest(".lb-n"))show(cur+1)});
document.addEventListener("keydown",function(e){if(lb.hidden)return;if(e.key==="Escape")closeLb();else if(e.key==="ArrowLeft")show(cur-1);else if(e.key==="ArrowRight")show(cur+1)});
lb.addEventListener("touchstart",function(e){sx=e.changedTouches[0].clientX},{passive:true});
lb.addEventListener("touchend",function(e){var d=e.changedTouches[0].clientX-sx;if(Math.abs(d)>50&&grp.length>1)show(cur+(d<0?1:-1))},{passive:true});
window.addEventListener("popstate",function(){closeLb(true)});
window.addEventListener("hashchange",function(){if(!lb.hidden)closeLb(true);route()});route();
})();
