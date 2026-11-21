/* Growth v5: additive fields only; legacy weekly records retain their scores. */
const V5 = [
 ['바르게 앉아요','의자에 앉아요|발을 편하게 놓아요','sit'],
 ['설명을 들어요','하던 일을 멈춰요|설명을 들어요','listen'],
 ['손을 들고 말해요','손을 들어요|차례를 기다려요','raise'],
 ['공부에 집중해요','준비물을 꺼내요|내 학습지를 봐요','study'],
 ['설명대로 따라 해요','시범을 봐요|한 단계씩 따라 해요','listen'],
 ['스스로 시작해요','필요한 도구를 꺼내요|첫 문제를 시작해요','start'],
 ['어려워도 도전해요','한 번 더 해 봐요|필요하면 도움을 요청해요','study'],
 ['도움을 요청해요','손을 들어요|도와주세요라고 말해요','help'],
 ['예쁜 말을 사용해요','잠깐 생각해요|친절하게 말해요','talk'],
 ['친구의 말을 들어요','친구가 말해요|말이 끝날 때까지 기다려요','listen'],
 ['내 차례를 기다려요','누구 차례인지 확인해요|내 차례까지 기다려요','wait'],
 ['친구에게 양보해요','친구에게 물건을 건네요|다음 차례를 기다려요','give'],
 ['함께 놀이해요','같이 놀자고 물어요|번갈아 놀이해요','play'],
 ['먼저 물어봐요','사용해도 되는지 물어요|대답을 기다려요','help'],
 ['친구의 기분을 살펴요','표정을 살펴요|괜찮은지 물어요','care'],
 ['미안하다고 말해요','어떤 일이 있었는지 생각해요|미안해라고 말해요','talk'],
 ['잠깐 멈춰요','손과 발을 멈춰요|잠시 생각해요','stop'],
 ['깊게 숨을 쉬어요','배에 손을 얹어요|천천히 숨을 내쉬어요','breath'],
 ['천천히 숫자를 세어요','손가락을 펴요|하나씩 다섯까지 세어요','count'],
 ['내 기분을 말해요','내 마음을 알아봐요|말로 표현해요','feel'],
 ['잠깐 쉬어요','쉬고 싶다고 말해요|편안한 곳에서 쉬어요','rest'],
 ['작은 목소리로 말해요','목소리를 낮춰요|친구에게 말해요','quiet'],
 ['손을 안전하게 사용해요','손을 내 몸 가까이 두어요|필요하면 말로 부탁해요','hands'],
 ['다시 시작해요','마음을 가라앉혀요|활동을 다시 시작해요','start'],
 ['준비물을 챙겨요','필요한 준비물을 확인해요|가방에서 꺼내요','bag'],
 ['물건을 정리해요','사용한 물건을 모아요|정리해요','tidy'],
 ['제자리에 넣어요','보관할 곳을 확인해요|물건을 넣어요','tidy'],
 ['복도에서 걸어요','천천히 걸어요|친구가 지나갈 공간을 남겨요','walk'],
 ['차례대로 줄을 서요','친구 뒤에 서요|차례를 기다려요','wait'],
 ['손을 깨끗이 씻어요','비누로 손을 문질러요|물로 헹궈요','wash'],
 ['손가락을 깨끗하게 관리해요','손을 안전하게 두어요|필요하면 손을 씻어요','hands'],
 ['쓰레기를 버려요','쓰레기를 주워요|쓰레기통에 넣어요','bin'],
 ['먼저 생각해요','잠깐 멈춰요|어떤 행동을 할지 생각해요','think'],
 ['내가 원하는 것을 말해요','원하는 것을 생각해요|말로 부탁해요','talk'],
 ['싫어요라고 말해요','싫은 마음을 알아봐요|싫어요라고 말해요','stop'],
 ['친구가 싫다고 하면 멈춰요','친구의 말을 들어요|한 걸음 물러나요','space'],
 ['다른 방법을 찾아요','잠깐 멈춰요|다른 방법으로 해 봐요','play'],
 ['선생님에게 알려요','선생님에게 다가가요|상황을 말해요','help'],
 ['스스로 확인해요','약속 그림을 봐요|오늘의 모습을 선택해요','check'],
 ['오늘의 약속을 정해요','그림을 살펴봐요|실천할 약속을 골라요','check']
];
function v5Art(kind){
 const p=(x,y,c='#78a9d7',pose='')=>`<g stroke="#354d60" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M${x-12} ${y+72}v32m24-32v32" stroke-width="10"/><rect x="${x-25}" y="${y+24}" width="50" height="55" rx="16" fill="${c}"/><circle cx="${x}" cy="${y}" r="25" fill="#ffd8b8"/><path d="M${x-24} ${y-4}q-4 -30 25 -28q27 1 24 27q-19 -2 -25 -15q-10 14 -24 16" fill="#493f38"/><circle cx="${x-8}" cy="${y+2}" r="2" fill="#354d60"/><circle cx="${x+8}" cy="${y+2}" r="2" fill="#354d60"/><path d="M${x-7} ${y+12}q7 5 14 0" fill="none"/><path d="M${x-23} ${y+34}l-15 26M${x+23} ${y+34}${pose==='raise'?'l15 -42':'l15 26'}" stroke="#ffd8b8" stroke-width="12"/></g>`;
 const rect=(x,y,w,h,c)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${c}" stroke="#354d60" stroke-width="3"/>`;
 const speech=(x,y,c='#fff')=>`<path d="M${x} ${y}h64q12 0 12 12v24q0 12-12 12h-28l-14 12 2-12h-24q-12 0-12-12v-24q0-12 12-12z" fill="${c}" stroke="#354d60" stroke-width="3"/><path d="M${x+8} ${y+24}h38" stroke="#526f82" stroke-width="5" stroke-linecap="round"/>`;
 const desk=()=>rect(62,153,196,42,'#d9ba91')+rect(112,137,96,33,'#fff')+'<path d="M160 140v26m-35-19h23m24 0h23" stroke="#7996b3" stroke-width="3"/>';
 let a='';
 switch(kind){
 case 'sit':a=rect(133,87,55,93,'#e6ab68')+p(160,68)+rect(130,153,60,12,'#e6ab68');break;
 case 'study':case 'start':a=p(160,65,'#78a9d7')+desk()+(kind==='start'?'<path d="M211 143l28-32" stroke="#e9a14f" stroke-width="8" stroke-linecap="round"/>':'');break;
 case 'listen':a=p(80,100)+p(240,77,'#8bbc9c')+speech(118,25);break;
 case 'raise':case 'help':a=p(100,82,'#78a9d7','raise')+(kind==='help'?p(250,82,'#8bbc9c')+speech(140,30):desk());break;
 case 'talk':case 'care':case 'feel':case 'quiet':a=p(75,100)+p(245,100,'#8bbc9c')+speech(124,18,kind==='care'?'#ffe0e3':'white');if(kind==='feel')a+='<path d="M159 39c-11-14-25 8 0 22 25-14 11-36 0-22" fill="#e9899b"/>';break;
 case 'wait':a=p(60,105)+p(157,105,'#8bbc9c')+p(254,105,'#e9b575')+'<circle cx="160" cy="32" r="25" fill="white" stroke="#354d60" stroke-width="3"/><path d="M160 13v19l12 9" stroke="#354d60" stroke-width="4" fill="none"/>';break;
 case 'give':case 'play':a=p(72,83)+p(244,83,'#8bbc9c')+rect(129,125,61,42,'#eeb876')+(kind==='play'?rect(152,100,32,27,'#9ac9da'):'<path d="M100 145h35m85 0h-30" stroke="#354d60" stroke-width="4"/>');break;
 case 'stop':case 'space':a=p(85,96)+p(247,96,'#8bbc9c')+'<path d="M145 109v-35q0-8 7-8t7 8v15-35q7-12 14 0v33-25q7-12 14 0v28-15q7-10 14 1v38q0 35-29 35t-32-28l-12-18q-4-12 5-14z" fill="#ffd8b8" stroke="#354d60" stroke-width="3"/>';break;
 case 'breath':a=p(160,83)+ '<path d="M110 140q30 22 45 4m55-4q-30 22-45 4" fill="none" stroke="#ffd8b8" stroke-width="13" stroke-linecap="round"/><path d="M204 87q32-18 61-2m-60 14q35-10 63 4" fill="none" stroke="#8bbbd5" stroke-width="4" stroke-linecap="round"/>';break;
 case 'count':case 'hands':a=p(95,95)+ '<path d="M174 167v-56q0-15 10-15v32-65q12-15 20 0v50-63q12-14 20 0v63-48q12-12 20 0v54-27q12-10 20 0v48q0 39-44 39z" fill="#ffd8b8" stroke="#354d60" stroke-width="3"/>';break;
 case 'rest':a=rect(70,120,180,67,'#b7d8cb')+p(160,78,'#8bbc9c');break;
 case 'bag':case 'tidy':a=p(75,87)+rect(170,94,100,97,'#a1c5e7')+rect(186,137,68,38,'#e8f3fc')+rect(140,47,50,57,'#fff');break;
 case 'walk':a=p(112,80)+p(242,80,'#8bbc9c')+'<path d="M22 196h276M25 182h270" stroke="#9fb4c3" stroke-width="4"/>';break;
 case 'wash':return v4AutoPicture('손 씻기');
 case 'bin':a=p(80,85)+rect(182,119,75,85,'#94c4ae')+rect(175,111,89,13,'#6a9e86')+'<path d="M139 88l34 37" stroke="#354d60" stroke-width="3"/><rect x="130" y="70" width="23" height="27" rx="4" fill="#fff" stroke="#354d60" stroke-width="3"/>';break;
 case 'think':a=p(160,100)+speech(118,14);break;
 case 'check':a=p(75,85)+rect(158,28,125,163,'#fff')+'<path d="M175 70l9 9 15-19m-24 49 9 9 15-19m-24 49 9 9 15-19" stroke="#519b73" stroke-width="5" fill="none"/><path d="M210 72h48m-48 39h48m-48 39h48" stroke="#9eb2c2" stroke-width="4"/>';break;
 default:return v4AutoPicture('공부');
 }
 return `<svg class="v5-art" viewBox="0 0 320 220" role="img" aria-label="행동 그림"><rect width="320" height="220" rx="20" fill="#f0f7fa"/>${a}</svg>`;
}
function v5CardArt(id){return v5Art(V5[id]?.[2]||'study')}
function v5Goal(id){const x=V5[id];return {cardId:id,text:x[0],steps:x[1].split('|'),image:'',stepImages:[]}}
function v5Find(t){return V5.findIndex(x=>x[0]===t)}
const v5OldPic=v4AutoPicture;
function v5Picture(t){let id=v5Find(t);return id>=0?v5CardArt(id):v5OldPic(t)}
function v5GoalPicture(g,s){return v4Img(g?.image)|| (Number.isInteger(g?.cardId)?v5CardArt(g.cardId):v5Picture(g?.text||s?.promise||''))}
const v5Record=record;
record=function(i,w=week){const sid=db.students[i].id,created=!db.weeks[w]?.[sid],r=v5Record(i,w);if(created){const prior=Object.keys(db.weeks).filter(k=>k<w&&db.weeks[k]?.[sid]).sort().reverse().find(k=>db.weeks[k][sid].goals?.length||db.weeks[k][sid].confirmedNextGoals?.length);if(prior){const p=db.weeks[prior][sid];r.goals=JSON.parse(JSON.stringify(p.confirmedNextGoals?.length?p.confirmedNextGoals:p.goals));r.promise=r.goals.map(g=>g.text).join(' / ');r.how=r.goals.flatMap(g=>g.steps||[]).join('\n');}}return r;};
function v5Check(r,w,j){const a=r.dailyChecks?.[v4Date(w,j)];return !!a&&Object.keys(a.responses||{}).length>0;}
function v5Score(i,j,v){const r=record(i);r.teacher4??=[null,null,null,null,null];r.scoreV5??=[false,false,false,false,false];r.scoreV5[j]=true;r.teacher4[j]=v===''?null:Number(v);v5Recalc(r,week,j);save();render();}
function v5Recalc(r,w,j){if(!r.scoreV5?.[j])return;let t=r.teacher4[j];r.scores[j]=t==null?null:t+(v5Check(r,w,j)?1:0);}
function v5Bonus(i,j,v){const r=record(i);r.plus[j]=Math.max(0,Math.min(99,Number(v)||0));save();render();}
function v5Text(i,k,v){record(i)[k]=v;save();}
function v5Note(i,j,v){const r=record(i);r.publicNotes??=['','','','',''];r.publicNotes[j]=v;save();}
let v5Picker=null,v5Category=0,v5Query='',v5Detailed=false;
const v5Categories=['수업·학습','친구 관계','감정 조절','학교생활','문제 해결'];
function v5OpenPicker(i,field){v5Picker={i,field};v5Category=0;v5Query='';render();}
function v5Pick(id){const {i,field}=v5Picker,r=record(i),s=db.students[i];if(field==='goals'||field==='nextGoals'){let a=field==='goals'?(r.goals||[]):(r.nextGoals||[]).filter(g=>g.text.trim());if(a.some(g=>g.cardId===id))a=a.filter(g=>g.cardId!==id);else if(a.length>=2){toast('최대 두 가지를 선택해 주세요. 먼저 기존 목표를 삭제할 수 있어요.');return;}else a.push(v5Goal(id));r[field]=a;if(field==='goals'&&a.length){r.promise=a.map(g=>g.text).join(' / ');r.how=a.flatMap(g=>g.steps).join('\n');}if(field==='nextGoals'){r.selectedNextGoals=[];r.next=a.map(g=>g.text).join('\n');}}else{const key=field+'Cards';r[key]??=[];const at=r[key].indexOf(id);if(at>=0)r[key].splice(at,1);else r[key].push(id);}save();render();}
function v5Remove(i,field,j){const r=record(i);r[field].splice(j,1);if(field==='goals'&&r.goals.length){r.promise=r.goals.map(x=>x.text).join(' / ');r.how=r.goals.flatMap(x=>x.steps||[]).join('\n');}if(field==='nextGoals'){r.selectedNextGoals=[];r.next=r.nextGoals.map(x=>x.text).join('\n');}save();render();}
function v5PickerHtml(){if(!v5Picker)return '';const {i,field}=v5Picker,r=record(i),active=field==='goals'||field==='nextGoals'?(r[field]||[]).map(g=>g.cardId):r[field+'Cards']||[];return `<div class="v5-overlay"><section class="panel v5-library"><div class="row between"><h2>행동 그림 카드 · 40종</h2><button class="primary" onclick="v5Picker=null;render()">선택 완료</button></div><div class="row">${v5Categories.map((c,j)=>`<button class="${v5Category===j?'active':''}" onclick="v5Category=${j};v5Query='';render()">${c}</button>`).join('')}</div><input placeholder="행동 검색 후 Enter" value="${esc(v5Query)}" onchange="v5Query=this.value;render()"><div class="v5-cardgrid">${V5.map((x,j)=> (v5Query?x[0].includes(v5Query):Math.floor(j/8)===v5Category)?`<button class="v5-pick ${active.includes(j)?'chosen':''}" onclick="v5Pick(${j})">${v5CardArt(j)}<strong>${esc(x[0])}</strong>${active.includes(j)?'선택됨':''}</button>`:'').join('')}</div></section></div>`;}
function v5Chips(r,i,field){const list=field==='goals'||field==='nextGoals'?(r[field]||[]).filter(g=>g.text.trim()):(r[field+'Cards']||[]).map(v5Goal);return `<div class="v5-minicards">${list.map((g,j)=>`<div>${v5GoalPicture(g)}<b>${esc(g.text)}</b><button onclick="v5Remove(${i},'${field==='goals'||field==='nextGoals'?field:field+'Cards'}',${j})">삭제</button></div>`).join('')}</div>`;}
const v5OldEdit=edit;
edit=function(){const i=selected,s=db.students[i],r=record(i);if(v5Detailed)return `<section class="panel"><button onclick="v5Detailed=false;render()">← 간편 입력으로</button></section>`+v5OldEdit();return `<section class="panel"><div class="row between"><h2>${esc(s.name)} · 빠른 기록</h2><button onclick="v5Detailed=true;render()">기존 상세 편집</button></div><div class="row">${db.students.map((a,j)=>`<button class="${j===i?'active':''}" onclick="switchStudent(${j})">${esc(a.name)}</button>`).join('')}</div><div class="v5-section"><h3>이번 주 약속</h3><p>${esc(r.promise)}</p>${v5Chips(r,i,'goals')}<button onclick="v5OpenPicker(${i},'goals')">그림으로 목표 선택</button></div><div class="v5-section"><h3>잘한 행동</h3>${v5Chips(r,i,'positive')}<button class="green" onclick="v5OpenPicker(${i},'positive')">칭찬 그림 선택</button><textarea placeholder="필요할 때만 한 줄 메모" onchange="v5Text(${i},'positive',this.value)">${esc(r.positive)}</textarea></div><div class="v5-section"><h3>조금 더 연습할 행동</h3>${v5Chips(r,i,'practice')}<button onclick="v5OpenPicker(${i},'practice')">연습 그림 선택</button><textarea placeholder="공유할 수 있는 긍정적인 표현" onchange="v5Text(${i},'practice',this.value)">${esc(r.practice)}</textarea></div><div class="v5-section"><h3>다음 주 목표 (선택 사항)</h3><p class="hint">선택하지 않으면 기존 목표를 이어갑니다.</p>${v5Chips(r,i,'nextGoals')}<button onclick="v5OpenPicker(${i},'nextGoals')">다음 목표 그림 선택</button></div><div class="v5-section"><h3>특별한 사회성 이야기 (선택)</h3><label>그림 추가<input type="file" multiple accept="image/png,image/jpeg,image/webp" onchange="attachStories(this.files)"></label>${storyImages(r).filter(validImage).map((img,j)=>`<div class="row">${v4Img(img,'v5-storythumb')}<button onclick="deleteStory(${j})">삭제</button></div>`).join('')}</div><div class="v5-section"><h3>교사만 보는 메모</h3><textarea onchange="v5Text(${i},'privateMemo',this.value)">${esc(r.privateMemo||'')}</textarea></div><button onclick="tab('home')">전체 점수 입력으로</button></section>${v5PickerHtml()}`;};
function v5Row(i){const r=record(i),s=db.students[i];return `<tr><th><button onclick="selected=${i};v5Detailed=false;tab('edit')">${esc(s.name)}</button></th>${DAYS.map((d,j)=>`<td><select aria-label="${esc(s.name)} ${d} 교사점수" onchange="v5Score(${i},${j},this.value)"><option value="">${r.scoreV5?.[j]?'미입력':r.scores[j]!=null?'기존 '+r.scores[j]+'점':'미입력'}</option>${[0,1,2,3,4].map(n=>`<option value="${n}" ${r.scoreV5?.[j]&&r.teacher4?.[j]===n?'selected':''}>${n}</option>`).join('')}</select><small>자기점검 ${v5Check(r,week,j)?'+1':'–'}</small><label class="v5-bonus">칭찬 +<input type="number" min="0" max="99" value="${r.plus[j]||0}" onchange="v5Bonus(${i},${j},this.value)"></label></td>`).join('')}<td><strong class="v5-total-sm">${weekTotal(r)}</strong><button onclick="selected=${i};tab('edit')">기록</button></td></tr>`;}
home=function(){return `<section class="panel"><div class="row between"><h2>해오름반 · 이번 주 빠른 점수 입력</h2><button class="primary" onclick="startPresent()">TV 성장 돌아보기</button></div><p class="hint">교사 0~4점 + 자기점검 참여 1점 = 하루 5점. 기존 점수는 수정하지 않으면 그대로 유지됩니다. 금요일 이후 입력하지 않은 날은 미기록입니다.</p><div class="v5-tablewrap"><table class="v5-table"><thead><tr><th>학생</th>${DAYS.map(d=>'<th>'+d+'</th>').join('')}<th>총점</th></tr></thead><tbody>${db.students.map((_,i)=>v5Row(i)).join('')}</tbody></table></div><div class="row"><button class="green" onclick="tab('dailyMenu')">공용 태블릿 자기점검</button><button onclick="cloudPush(true)">지금 클라우드 저장</button><button onclick="tab('settings')">저장·백업 설정</button></div></section><section class="panel"><h2>금요일 함께 돌아볼 학생</h2><div class="row">${db.students.map((s,i)=>`<label class="choice"><input type="checkbox" style="width:auto" ${db.attendance[i]?'checked':''} onchange="toggleAttend(${i},this.checked)"> ${esc(s.name)}</label>`).join('')}</div></section>`;};
const v5OldDailySave=v4DailySave;
v4DailySave=function(){const w=monday(v4DailyDate),j=Array.from({length:5},(_,k)=>v4Date(w,k)).indexOf(v4DailyDate);if(j<0){toast('월~금에 자기점검을 해요.');return;}v5OldDailySave();if(v4DailyDone){v5Recalc(record(v4DailyStudent,w),w,j);save();render();}};
v4Daily=function(){const i=v4DailyStudent,s=db.students[i],r=record(i,monday(v4DailyDate)),gs=v4Goals(r,s).slice(0,2);return `<section class="panel v4-present"><div class="v4-top"><button onclick="tab('dailyMenu')">← 이름 선택</button><b>${esc(s.name)} · 오늘의 자기점검</b></div>${v4DailyDone?'<div class="v4-body"><h1>오늘 나의 모습을 돌아보았어요!</h1><div class="v4-total">+1점</div><p>솔직하게 생각해 본 노력을 칭찬해요.</p><button class="primary v4-save" onclick="tab(\'dailyMenu\')">완료 · 다음 친구</button></div>':`<h1>오늘 약속을 실천했나요?</h1>${gs.map((g,j)=>`<div class="v4-dailygoal">${v5GoalPicture(g,s)}<div class="v4-big">${esc(g.text)}</div>${v4Answers(v4DailyResponse[j],`v4DailySelect(${j},{k})`)}</div>`).join('')}<button class="primary v4-save" onclick="v4DailySave()">오늘의 자기평가 완료</button>`}</section>`;};
v4DailyMenu=function(){return `<section class="panel v4-present"><h1>내 이름을 선택해요</h1><p class="hint">교사 감독 아래 공용 태블릿에서 한 명씩 사용합니다. 오늘 점검은 한 번만 점수에 반영됩니다.</p><div class="grid3">${db.students.map((s,i)=>`<button class="v4-student" onclick="v4OpenDaily(${i})"><strong>${esc(s.name)}</strong><small>${db.weeks[monday(v4Today())]?.[s.id]?.dailyChecks?.[v4Today()]?'✓ 오늘 완료':'점검하기'}</small></button>`).join('')}</div><button onclick="tab('home')">교사 화면으로</button></section>`;};
v4QuestionList=(r,s)=>v4Goals(r,s).slice(0,2).map(g=>g.text);
v4Choices=function(r){const a=(r.nextGoals||[]).filter(g=>g.text.trim());if(a.length)return a;const i=presentPeople[presentIdx]??selected;return v4Goals(r,db.students[i]).slice(0,2);};
const v5OldRecall=v4Recall;
function v5DayPoint(r,j){return r.scores[j]==null?'—':r.scores[j]+(r.plus[j]?' +'+r.plus[j]:'')}
function v5Feedback(r,key){const ids=r[key+'Cards']||[],txt=lines(r[key]);return `<div class="v5-feedbackcards">${ids.map(id=>`<div>${v5CardArt(id)}<strong>${esc(V5[id][0])}</strong></div>`).join('')}${txt.map(t=>`<div>${v5Picture(t)}<strong>${esc(t)}</strong></div>`).join('')}</div>`;}
const v5OldPresent=present;
present=function(){if(!presentPeople.length)presentPeople=db.students.map((_,i)=>i).filter(i=>db.attendance[i]);if(!presentPeople.length)return '<section class="panel">발표할 학생을 선택해 주세요.</section>';const {i,s,r}=v4Current(),goals=v4Goals(r,s),prev=db.weeks[lastWeek()]?.[s.id],choices=v4Choices(r),sel=v4Selected(r,s);let html='';
 if(reviewStage===0)html=`<h1>이번 주 나의 약속은?</h1><p class="v4-speaking">먼저 생각하고 말해 봐요!</p>${v4Reveal?`<div class="v5-feedbackcards">${goals.map(g=>`<div>${v5GoalPicture(g,s)}<strong>${esc(g.text)}</strong></div>`).join('')}</div>`:'<button class="primary v4-save" onclick="v4Recall(\'hint\')">약속 그림 확인</button>'}`;
 if(reviewStage===1)html=`<h1>나는 약속을 잘 지켰나요?</h1>${v5GoalPicture(goals[v4Question],s)}<div class="v4-big">${esc(goals[v4Question]?.text||r.promise)}</div>${v4Answers(r.v4SelfAnswers?.[v4Question],'v4Self')}`;
 if(reviewStage===2)html=`<h1>이번 주 나의 노력 점수</h1><div class="v4-total">${weekTotal(r)}</div><div class="v4-daygrid">${DAYS.map((d,j)=>`<div><b>${d}</b><strong>${v5DayPoint(r,j)}</strong><small>${v5Check(r,week,j)?'자기점검 ✓':''}</small></div>`).join('')}</div><p class="v4-caption">지난주 ${weekTotal(prev)} · 기본 25점 + 특별 칭찬</p><div class="positive"><h2>이번 주 잘한 행동</h2>${v5Feedback(r,'positive')||''}</div>`;
 if(reviewStage===3)html=`<h1>잘한 점과 다음에 연습할 점</h1><div class="v4-daygrid">${DAYS.map((d,j)=>`<button class="${v4Day===j?'active':''}" onclick="v4Day=${j};render()">${d}<strong>${v5DayPoint(r,j)}</strong></button>`).join('')}</div><p class="v4-big">${esc(r.publicNotes?.[v4Day]||'이날의 노력을 함께 이야기해요.')}</p><div class="positive"><h2>잘한 행동</h2>${v5Feedback(r,'positive')}</div><div class="practice"><h2>조금 더 연습해요</h2>${v5Feedback(r,'practice')}</div><p class="hint">친구의 노력에 박수! 다음 행동을 함께 생각해요.</p>`;
 if(reviewStage===4)html=`<h1>다음 주에도 도전할 약속을 골라요</h1><div class="v4-goals">${choices.map((g,j)=>`<button class="v4-goal ${(r.selectedNextGoals||[]).includes(j)?'chosen':''}" onclick="v4GoalToggle(${j})">${v5GoalPicture(g,s)}<strong>${esc(g.text)}</strong></button>`).join('')}</div>`;
 if(reviewStage===5){const g=sel[v4Step]||choices[0],imgs=storyImages(r).filter(validImage);html=`<h1>이렇게 실천해요!</h1><div class="v4-big">${esc(g?.text||r.promise)}</div><div class="v4-steps">${(g?.steps||[]).map((t,j)=>`<div>${v4Img(g.stepImages?.[j])||v5Picture(t)}<strong>${j+1}. ${esc(t)}</strong></div>`).join('')}</div>${imgs.length?`<div class="v4-story"><h2>특별한 사회성 이야기</h2>${v4Img(imgs[v4ImagePage%imgs.length])}<button onclick="v4ImagePage++;render()">다음 그림 (${v4ImagePage%imgs.length+1}/${imgs.length})</button></div>`:''}`;}
 if(reviewStage===6)html=`<h1>나는 할 수 있어요!</h1><div class="v5-feedbackcards">${(sel.length?sel:choices).map(g=>`<div>${v5GoalPicture(g,s)}<strong>${esc(g.text)}</strong></div>`).join('')}</div><div class="v4-big">다음 주에 이렇게 실천할 거예요!</div>`;
 return `<section class="panel v4-present"><div class="v4-top"><button onclick="tab('home')">종료</button><b>${esc(s.name)} · ${presentIdx+1}/${presentPeople.length}</b><button onclick="tryFullscreen()">전체 화면</button></div><div class="v4-progress"><b>${reviewStage+1}/7 ${v4Stages[reviewStage]}</b></div><div class="v4-body">${html}</div><div class="v4-nav"><button onclick="v4Nav(-1)">◀ 이전</button><button onclick="v5Pause()">잠깐 쉬기 / 다음 친구</button><button class="primary" onclick="v4Nav(1)">${reviewStage===6?'다짐 완료 · 다음 친구':'다음'} ▶</button></div></section>`;
};
function v5Pause(){if(!confirm('잠시 쉬고 다음 친구로 넘어갈까요? 현재 기록은 남아 있어요.'))return;presentIdx++;reviewStage=0;v4Reset();if(presentIdx>=presentPeople.length){presentPeople=[];presentIdx=0;tab('finish');}else render();}
const v5Nav=v4Nav;
v4Nav=function(d){if(d>0&&reviewStage===4){const {r}=v4Current();if(!v4Selected(r).length){r.selectedNextGoals=v4Choices(r).slice(0,2).map((_,j)=>j);}}v5Nav(d);};
const v5BaseSettings=settings;
settings=function(){return v5BaseSettings().replace(/<section class="panel"><h2>학생 전용 태블릿 연결[\s\S]*?<\/section>$/,'')+`<section class="panel"><h2>공용 태블릿 이용 안내</h2><p>교사 계정에서 자기점검 화면을 열어 한 학생씩 이용합니다. 교사 감독용 모드이며, 학생에게 교사 계정 비밀번호를 알려 주지 마세요.</p><button class="primary" onclick="tab('dailyMenu')">공용 태블릿 자기점검</button></section>`;};
const v5OldRender=render;
render=function(){v5OldRender();if(mode==='edit'&&!v5Detailed){const r=record(selected);const a=document.querySelector('#app .panel');if(a){a.insertAdjacentHTML('beforeend',`<div class="v5-section"><h3>요일별 공유할 메모 (선택)</h3>${DAYS.map((d,j)=>`<label>${d}<input value="${esc(r.publicNotes?.[j]||'')}" onchange="v5Note(${selected},${j},this.value)" placeholder="공개 가능한 짧은 표현"></label>`).join('')}</div>`);}}if(mode==='daily'||mode==='dailyMenu')document.body.classList.add('v5-daily');else document.body.classList.remove('v5-daily');};
document.head.insertAdjacentHTML('beforeend',`<style>
.v5-tablewrap{overflow:auto}.v5-table{border-collapse:collapse;width:100%;min-width:760px}.v5-table th,.v5-table td{border-bottom:1px solid #dfe8ef;padding:9px;text-align:center}.v5-table td small{display:block;font-size:12px;color:#35664c;margin:4px}.v5-table select{font-size:20px;font-weight:800;padding:7px;min-width:66px}.v5-bonus{display:flex;align-items:center;justify-content:center;font-size:12px;gap:3px}.v5-bonus input{width:49px;padding:5px}.v5-total-sm{display:block;font-size:23px;color:#2459a1}.v5-section{margin:14px 0;padding:14px;border:1px solid #dce7ee;border-radius:14px}.v5-section h3{margin:0 0 10px}.v5-section textarea{margin-top:8px}.v5-section label{display:block;margin:5px 0}.v5-overlay{position:fixed;inset:0;background:#22394b88;z-index:999;display:flex;justify-content:center;align-items:center;padding:16px}.v5-library{width:min(960px,100%);max-height:90vh;overflow:auto}.v5-cardgrid,.v5-feedbackcards{display:grid;grid-template-columns:repeat(auto-fit,minmax(145px,1fr));gap:12px;margin:12px 0}.v5-cardgrid{grid-template-columns:repeat(4,minmax(0,1fr))}.v5-pick{background:#fff;border:2px solid #dce7ee;padding:8px;display:grid;gap:6px}.v5-pick.chosen,.v4-goal.chosen{border-color:#38875c;background:#e6f4e9}.v5-art{display:block;width:100%;max-width:370px;height:auto;margin:auto;border-radius:12px}.v5-minicards{display:flex;gap:8px;flex-wrap:wrap;margin:8px 0}.v5-minicards>div{width:140px;border:1px solid #dbe8ee;border-radius:12px;padding:6px;text-align:center}.v5-minicards button{padding:4px;font-size:12px}.v5-storythumb{width:120px;max-height:100px;object-fit:contain}.v5-feedbackcards>div{background:#fff;border:1px solid #cddfe8;border-radius:16px;padding:10px;display:grid;align-content:start;gap:8px;font-size:clamp(20px,2.4vw,33px);text-align:center}.v4-body .v5-art{max-height:27vh}.v4-body .positive h2,.v4-body .practice h2{font-size:clamp(22px,2.8vw,38px);margin:4px}.v4-body .v5-feedbackcards{margin:8px 0}.v5-daily .header,.v5-daily .tabs,.v5-daily .weekbar{display:none!important}.v5-daily .v4-student{font-size:30px;min-height:105px}.v5-daily .v4-student small{font-size:16px}.v4-answer{min-height:78px}.v5-daily .v4-dailygoal .v5-art{max-width:250px}.v5-daily .v4-dailygoal{margin-bottom:12px}@media(max-width:650px){.v5-cardgrid{grid-template-columns:repeat(2,minmax(0,1fr))}}
</style>`);

// Keep the existing account-scoped manifest and immutable chunks. Never replace
// unsynced local data with remote data silently; only auto-pull known clean data.
function v5Owner(){try{return localStorage.getItem('haeoreum_v5_owner')||''}catch(e){return ''}}
function v5SetOwner(uid){try{localStorage.setItem('haeoreum_v5_owner',uid)}catch(e){}}
function v5Revision(uid){try{return localStorage.getItem('haeoreum_v5_revision_'+uid)}catch(e){return null}}
function v5SetRevision(uid,rev){try{localStorage.setItem('haeoreum_v5_revision_'+uid,rev||'')}catch(e){}}
function v5Pending(uid,on){try{if(on)localStorage.setItem('haeoreum_v5_pending_'+uid,'yes');else localStorage.removeItem('haeoreum_v5_pending_'+uid)}catch(e){}}
function v5IsPending(uid){try{return localStorage.getItem('haeoreum_v5_pending_'+uid)==='yes'}catch(e){return true}}
function v5Normalized(obj){const x=JSON.parse(JSON.stringify(obj));delete x.savedAt;return JSON.stringify(x)}
async function v5ReadRemote(m){const data=m.data();if(!Array.isArray(data.chunks)||data.chunks.length>10000)throw Error('기록 형식 오류');let p=[];for(let i=0;i<data.chunks.length;i+=20){const rows=await Promise.all(data.chunks.slice(i,i+20).map(id=>chunkRef(id).get({source:'server'})));p.push(...rows.map(x=>{if(!x.exists)throw Error('기록 일부가 없습니다.');return x.data().text}));}const obj=JSON.parse(p.join(''));if(!validateCloud(obj))throw Error('기록 확인 실패');return obj;}
const v5OriginalPush=cloudPush,v5OriginalPull=cloudPull;
cloudPush=async function(manual=false){
 if(cloudUser&&v5Owner()&&v5Owner()!==cloudUser.uid){cloudMessage('⚠ 다른 계정의 기기 기록입니다. 먼저 백업한 뒤 원래 계정으로 로그인하세요.');return;}
 if(cloudUser&&!cloudReady&&cloudRevision!==null&&v5Revision(cloudUser.uid)===cloudRevision&&v5IsPending(cloudUser.uid))cloudReady=true;
 await v5OriginalPush(manual);
 if(cloudReady&&cloudUser){v5SetOwner(cloudUser.uid);v5SetRevision(cloudUser.uid,cloudRevision);if(!cloudDirty)v5Pending(cloudUser.uid,false);}
};
cloudPull=async function(automatic=false){
 if(cloudUser&&v5Owner()&&v5Owner()!==cloudUser.uid){cloudMessage('⚠ 다른 계정의 기기 기록입니다. 원래 계정으로 로그인하세요.');return;}
 if(!automatic&&cloudUser&&v5IsPending(cloudUser.uid)){alert('이 기기에 아직 저장되지 않은 변경이 있습니다. 먼저 전체 백업을 내려받아 보관하세요. 필요한 경우 백업 후 다시 로그인하여 기록을 확인하세요.');return;}
 await v5OriginalPull(automatic);
 if(cloudReady&&cloudUser){v5SetOwner(cloudUser.uid);v5SetRevision(cloudUser.uid,cloudRevision);v5Pending(cloudUser.uid,false);}
};
cloudInit=function(){
 if(cloudInitPromise)return cloudInitPromise;
 cloudInitPromise=loadSDK().then(()=>{const app=firebase.initializeApp(firebaseConfig,'haeoreum');cloudAuth=app.auth();cloudStore=app.firestore();
 cloudAuth.onAuthStateChanged(async user=>{
 clearTimeout(cloudTimer);cloudUser=user;cloudReady=false;cloudRevision=null;cloudDirty=false;
 if(!user){cloudMessage('로그인 전 · 이 기기에만 저장');return;}
 if(v5Owner()&&v5Owner()!==user.uid){cloudMessage('⚠ 다른 교사 계정의 기기 기록입니다. 원래 계정으로 로그인하세요.');return;}
 cloudMessage('로그인됨 · 클라우드 기록 확인 중');
 try{
 const m=await manifest().get({source:'server'});if(cloudUser?.uid!==user.uid)return;
 cloudRevision=m.exists?m.data().rev:null;const uid=user.uid,marker=localStorage.getItem('haeoreum_synced_'+uid),pending=v5IsPending(uid);
 if(!m.exists){v5SetOwner(uid);cloudReady=true;cloudDirty=true;v5Pending(uid,true);await cloudPush();return;}
 const remote=await v5ReadRemote(m);if(cloudUser?.uid!==uid)return;
 if(v5Normalized(remote)===v5Normalized(db)||(!pending&&(v5Revision(uid)!==null||v5Pristine()||marker===await hashText(JSON.stringify(db))))){
 await cloudPull(true);return;}
 if(v5Revision(uid)===cloudRevision&&pending){cloudReady=true;cloudDirty=true;await cloudPush();return;}
 // A new device or older build may have meaningful records but no revision.
 // Leave both untouched and show an explicit recovery path.
 cloudMessage('⚠ 기기와 클라우드에 서로 다른 기록이 있습니다. 설정에서 백업 후 안전하게 복구하세요.');
 }catch(e){cloudMessage('⚠ 클라우드 연결 실패 · 기기 기록 유지: '+e.message);}
 });
 }).catch(e=>{cloudInitPromise=null;cloudMessage('연결 실패: '+e.message);throw e;});return cloudInitPromise;
};
const v5SaveLocal=localSave;
function v5Pristine(){return isPristine()&&Object.values(db.weeks).every(w=>Object.values(w).every(r=>!Object.keys(r.dailyChecks||{}).length&&!r.goals?.length&&!r.nextGoals?.some(g=>g.text)&&!r.positiveCards?.length&&!r.practiceCards?.length&&!r.privateMemo&&!r.publicNotes?.some(Boolean)));}
save=function(){const ok=v5SaveLocal(),owner=v5Owner();if(!cloudUser&&owner)v5Pending(owner,true);if(cloudUser&&(!owner||owner===cloudUser.uid)){v5SetOwner(cloudUser.uid);v5Pending(cloudUser.uid,true);cloudDirty=true;if(cloudReady){cloudMessage('☁ 변경 사항 저장 중…');clearTimeout(cloudTimer);cloudTimer=setTimeout(()=>cloudPush(),350);}else cloudMessage('⚠ 기기에 저장됨 · 클라우드 연결 확인 필요');}return ok;};
// Safe recovery: upload neither side until the teacher has downloaded local
// backup and explicitly chosen which conflicting records to keep.
async function v5Recover(){
 if(!cloudUser||cloudBusy||v5Owner()&&v5Owner()!==cloudUser.uid){alert('먼저 동일한 교사 계정으로 로그인하세요.');return;}
 if(!confirm('이 기기의 전체 기록을 먼저 JSON 파일로 백업합니다. 계속하시겠어요?'))return;
 exportJSON();
 try{const m=await manifest().get({source:'server'});if(!m.exists){cloudRevision=null;cloudReady=true;await cloudPush();return;}
 const remote=await v5ReadRemote(m);const merged=JSON.parse(JSON.stringify(remote));let conflicts=0,added=0;
 for(const [w,students] of Object.entries(db.weeks||{})){merged.weeks[w]??={};for(const [sid,r] of Object.entries(students)){if(!merged.weeks[w][sid]){merged.weeks[w][sid]=r;added++;}else if(JSON.stringify(merged.weeks[w][sid])!==JSON.stringify(r)){conflicts++;}}}
 if(!confirm('클라우드에 있는 기록을 우선 보존하고, 이 PC에만 있는 주차·학생 기록 '+added+'개를 함께 저장할까요? 서로 다른 기록 '+conflicts+'개는 다운로드한 백업에 보존됩니다. 이름과 설정은 클라우드 기준을 유지합니다.'))return;
 db=merged;cloudRevision=m.data().rev;cloudReady=true;v5SetOwner(cloudUser.uid);v5SetRevision(cloudUser.uid,cloudRevision);save();await cloudPush();render();
 }catch(e){alert('복구 실패: '+e.message);}
}
cloudPanel=function(){return `<section class="panel"><h2>학교·집 기록 자동 동기화</h2><p id="cloud-status" role="status">${esc(cloudStatus)}</p><p class="hint">같은 Google 계정으로 로그인하면 기록을 자동으로 불러오고 저장합니다. 다른 계정의 기록은 덮어쓰지 않습니다. PC를 끄기 전에는 '클라우드 저장 완료'를 확인해 주세요.</p><div class="row"><button class="primary" onclick="cloudLogin()">Google 로그인</button><button class="green" onclick="cloudPush(true)">지금 저장</button><button onclick="cloudPull()">클라우드 기록 가져오기</button><button onclick="v5Recover()">기록 충돌 안전 복구</button><button onclick="cloudLogout()">로그아웃</button></div></section>`;};
window.addEventListener('online',()=>{if(cloudReady&&cloudDirty)cloudPush();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='hidden'&&cloudReady&&cloudDirty&&!cloudBusy)cloudPush();});
