const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ActivityInput-qF74iS71.js","assets/antd-vendor-BDyY8rrc.js","assets/react-vendor-o6zXO7vr.js","assets/date-vendor-FlrYVFXG.js","assets/styled-components-Dha-sBZJ.js","assets/ActivityList-Bmkq9AWp.js"])))=>i.map(i=>d[i]);
import{r as w,c as fe,R as Y,g as he}from"./react-vendor-o6zXO7vr.js";import{b as A,i as ye,a as C,c as D,d as be,e as xe,C as ge,f as J,s as q,g as Z}from"./date-vendor-FlrYVFXG.js";import{d as _}from"./styled-components-Dha-sBZJ.js";import{F as V,I as ve,B as ee,R as we,L as U,C as _e,T as Pe,t as Se,s as I,n as ke}from"./antd-vendor-BDyY8rrc.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(t){if(t.ep)return;t.ep=!0;const a=n(t);fetch(t.href,a)}})();var te={exports:{}},M={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $e=w,je=Symbol.for("react.element"),Ce=Symbol.for("react.fragment"),De=Object.prototype.hasOwnProperty,Oe=$e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ee={key:!0,ref:!0,__self:!0,__source:!0};function re(e,o,n){var r,t={},a=null,i=null;n!==void 0&&(a=""+n),o.key!==void 0&&(a=""+o.key),o.ref!==void 0&&(i=o.ref);for(r in o)De.call(o,r)&&!Ee.hasOwnProperty(r)&&(t[r]=o[r]);if(e&&e.defaultProps)for(r in o=e.defaultProps,o)t[r]===void 0&&(t[r]=o[r]);return{$$typeof:je,type:e,key:a,ref:i,props:t,_owner:Oe.current}}M.Fragment=Ce;M.jsx=re;M.jsxs=re;te.exports=M;var s=te.exports,H={},B=fe;H.createRoot=B.createRoot,H.hydrateRoot=B.hydrateRoot;const Me="modulepreload",Ne=function(e){return"/"+e},X={},oe=function(o,n,r){let t=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),l=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));t=Promise.allSettled(n.map(c=>{if(c=Ne(c),c in X)return;X[c]=!0;const m=c.endsWith(".css"),x=m?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${x}`))return;const d=document.createElement("link");if(d.rel=m?"stylesheet":Me,m||(d.as="script"),d.crossOrigin="",d.href=c,l&&d.setAttribute("nonce",l),document.head.appendChild(d),m)return new Promise((g,P)=>{d.addEventListener("load",g),d.addEventListener("error",()=>P(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(i){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=i,window.dispatchEvent(l),!l.defaultPrevented)throw i}return t.then(i=>{for(const l of i||[])l.status==="rejected"&&a(l.reason);return o().catch(a)})},Re={lessThanXSeconds:{one:"不到 1 秒",other:"不到 {{count}} 秒"},xSeconds:{one:"1 秒",other:"{{count}} 秒"},halfAMinute:"半分钟",lessThanXMinutes:{one:"不到 1 分钟",other:"不到 {{count}} 分钟"},xMinutes:{one:"1 分钟",other:"{{count}} 分钟"},xHours:{one:"1 小时",other:"{{count}} 小时"},aboutXHours:{one:"大约 1 小时",other:"大约 {{count}} 小时"},xDays:{one:"1 天",other:"{{count}} 天"},aboutXWeeks:{one:"大约 1 个星期",other:"大约 {{count}} 个星期"},xWeeks:{one:"1 个星期",other:"{{count}} 个星期"},aboutXMonths:{one:"大约 1 个月",other:"大约 {{count}} 个月"},xMonths:{one:"1 个月",other:"{{count}} 个月"},aboutXYears:{one:"大约 1 年",other:"大约 {{count}} 年"},xYears:{one:"1 年",other:"{{count}} 年"},overXYears:{one:"超过 1 年",other:"超过 {{count}} 年"},almostXYears:{one:"将近 1 年",other:"将近 {{count}} 年"}},Te=(e,o,n)=>{let r;const t=Re[e];return typeof t=="string"?r=t:o===1?r=t.one:r=t.other.replace("{{count}}",String(o)),n!=null&&n.addSuffix?n.comparison&&n.comparison>0?r+"内":r+"前":r},ze={full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},Le={full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},We={full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},Fe={date:A({formats:ze,defaultWidth:"full"}),time:A({formats:Le,defaultWidth:"full"}),dateTime:A({formats:We,defaultWidth:"full"})};function K(e,o,n){const r="eeee p";return ye(e,o,n)?r:e.getTime()>o.getTime()?"'下个'"+r:"'上个'"+r}const Ae={lastWeek:K,yesterday:"'昨天' p",today:"'今天' p",tomorrow:"'明天' p",nextWeek:K,other:"PP p"},Ie=(e,o,n,r)=>{const t=Ae[e];return typeof t=="function"?t(o,n,r):t},Ye={narrow:["前","公元"],abbreviated:["前","公元"],wide:["公元前","公元"]},qe={narrow:["1","2","3","4"],abbreviated:["第一季","第二季","第三季","第四季"],wide:["第一季度","第二季度","第三季度","第四季度"]},Ve={narrow:["一","二","三","四","五","六","七","八","九","十","十一","十二"],abbreviated:["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],wide:["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]},He={narrow:["日","一","二","三","四","五","六"],short:["日","一","二","三","四","五","六"],abbreviated:["周日","周一","周二","周三","周四","周五","周六"],wide:["星期日","星期一","星期二","星期三","星期四","星期五","星期六"]},Ue={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},Be={narrow:{am:"上",pm:"下",midnight:"凌晨",noon:"午",morning:"早",afternoon:"下午",evening:"晚",night:"夜"},abbreviated:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"},wide:{am:"上午",pm:"下午",midnight:"凌晨",noon:"中午",morning:"早晨",afternoon:"中午",evening:"晚上",night:"夜间"}},Xe=(e,o)=>{const n=Number(e);switch(o==null?void 0:o.unit){case"date":return n.toString()+"日";case"hour":return n.toString()+"时";case"minute":return n.toString()+"分";case"second":return n.toString()+"秒";default:return"第 "+n.toString()}},Ke={ordinalNumber:Xe,era:C({values:Ye,defaultWidth:"wide"}),quarter:C({values:qe,defaultWidth:"wide",argumentCallback:e=>e-1}),month:C({values:Ve,defaultWidth:"wide"}),day:C({values:He,defaultWidth:"wide"}),dayPeriod:C({values:Ue,defaultWidth:"wide",formattingValues:Be,defaultFormattingWidth:"wide"})},Qe=/^(第\s*)?\d+(日|时|分|秒)?/i,Ge=/\d+/i,Je={narrow:/^(前)/i,abbreviated:/^(前)/i,wide:/^(公元前|公元)/i},Ze={any:[/^(前)/i,/^(公元)/i]},et={narrow:/^[1234]/i,abbreviated:/^第[一二三四]刻/i,wide:/^第[一二三四]刻钟/i},tt={any:[/(1|一)/i,/(2|二)/i,/(3|三)/i,/(4|四)/i]},rt={narrow:/^(一|二|三|四|五|六|七|八|九|十[二一])/i,abbreviated:/^(一|二|三|四|五|六|七|八|九|十[二一]|\d|1[12])月/i,wide:/^(一|二|三|四|五|六|七|八|九|十[二一])月/i},ot={narrow:[/^一/i,/^二/i,/^三/i,/^四/i,/^五/i,/^六/i,/^七/i,/^八/i,/^九/i,/^十(?!(一|二))/i,/^十一/i,/^十二/i],any:[/^一|1/i,/^二|2/i,/^三|3/i,/^四|4/i,/^五|5/i,/^六|6/i,/^七|7/i,/^八|8/i,/^九|9/i,/^十(?!(一|二))|10/i,/^十一|11/i,/^十二|12/i]},nt={narrow:/^[一二三四五六日]/i,short:/^[一二三四五六日]/i,abbreviated:/^周[一二三四五六日]/i,wide:/^星期[一二三四五六日]/i},at={any:[/日/i,/一/i,/二/i,/三/i,/四/i,/五/i,/六/i]},it={any:/^(上午?|下午?|午夜|[中正]午|早上?|下午|晚上?|凌晨|)/i},st={any:{am:/^上午?/i,pm:/^下午?/i,midnight:/^午夜/i,noon:/^[中正]午/i,morning:/^早上/i,afternoon:/^下午/i,evening:/^晚上?/i,night:/^凌晨/i}},lt={ordinalNumber:be({matchPattern:Qe,parsePattern:Ge,valueCallback:e=>parseInt(e,10)}),era:D({matchPatterns:Je,defaultMatchWidth:"wide",parsePatterns:Ze,defaultParseWidth:"any"}),quarter:D({matchPatterns:et,defaultMatchWidth:"wide",parsePatterns:tt,defaultParseWidth:"any",valueCallback:e=>e+1}),month:D({matchPatterns:rt,defaultMatchWidth:"wide",parsePatterns:ot,defaultParseWidth:"any"}),day:D({matchPatterns:nt,defaultMatchWidth:"wide",parsePatterns:at,defaultParseWidth:"any"}),dayPeriod:D({matchPatterns:it,defaultMatchWidth:"any",parsePatterns:st,defaultParseWidth:"any"})},ct={code:"zh-CN",formatDistance:Te,formatLong:Fe,formatRelative:Ie,localize:Ke,match:lt,options:{weekStartsOn:1,firstWeekContainsDate:4}},dt=_.div`
  height: fit-content;
  max-height: calc(150vh - 112px);

  .rbc-calendar {
    height: fit-content;
    max-height: calc(150vh - 112px);
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      "Helvetica Neue", Arial, sans-serif;
  }

  .rbc-event {
    background-color: #8bc34a;
    border: none;
    border-radius: 6px;
    padding: 4px 8px;
    font-size: 14px;
    line-height: 1.4;
    margin: 2px 4px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.2s ease;
  }

  .rbc-event:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
  }

  .rbc-event-label {
    display: none;
  }

  .rbc-header {
    padding: 12px 8px;
    font-weight: 600;
    font-size: 15px;
    color: #333;
    text-transform: none;
    letter-spacing: 0.5px;
    text-align: center;
  }

  .rbc-time-header {
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
  }

  .rbc-timeslot-group {
    min-height: 60px;
    border-bottom: 1px solid #f0f0f0;
  }

  .rbc-time-view {
    border: 1px solid #f0f0f0;
    border-radius: 8px;
    background: #fff;
    height: fit-content;
    max-height: calc(150vh - 112px);
  }

  .rbc-time-content {
    height: fit-content;
    max-height: calc(150vh - 250px);
    min-height: 500px;

    &::-webkit-scrollbar {
      width: 8px;
    }

    &::-webkit-scrollbar-track {
      background: #f0f0f0;
      border-radius: 4px;
    }

    &::-webkit-scrollbar-thumb {
      background: #ccc;
      border-radius: 4px;

      &:hover {
        background: #999;
      }
    }
  }

  .rbc-time-gutter {
    padding: 0 8px;
    font-size: 13px;
    color: #666;
    width: 80px;
  }

  .rbc-time-gutter .rbc-timeslot-group {
    min-height: 60px;
  }

  .rbc-time-slot {
    padding: 4px 8px;
    color: #666;
    font-size: 13px;
  }

  .rbc-day-slot .rbc-time-slot {
    border: none;
  }

  .rbc-today {
    background-color: transparent !important;
  }

  .rbc-current-time-indicator {
    display: none;
  }

  .rbc-time-column {
    border-left: 1px solid #e0e0e0;
  }

  .rbc-time-header-content {
    border-left: none;
  }

  .rbc-time-header-cell {
    min-height: 50px;
  }

  .rbc-allday-cell {
    display: none;
  }

  .rbc-time-view .rbc-header {
    border-bottom: none;
  }

  .rbc-time-content > * + * > * {
    border-left: 1px solid #e0e0e0;
  }

  .rbc-time-header-gutter {
    width: 80px !important;
  }
`,ut={week:"周",work_week:"工作周",day:"日",month:"月",previous:"上一页",next:"下一页",today:"今天",agenda:"日程",date:"日期",time:"时间",event:"事件",allDay:"全天",noEventsInRange:"此时间段无事件"},pt={"zh-CN":ct},mt=xe({format:J,startOfWeek:()=>q(new Date,{weekStartsOn:1}),getDay:Z,locales:pt}),ft=({schedule:e})=>{const n=(r=>{const t=[],i=r.split(`
`).filter(c=>c.trim()).slice(1),l=q(new Date,{weekStartsOn:1});for(const c of i){const[m,x,d]=c.split(",").map(f=>f.trim());if(!m||!x||!d)continue;const[g,P]=m.split("-");if(!g||!P)continue;const[p,h]=g.split(":").map(Number),[k,y]=P.split(":").map(Number),$=[],me=d.split(",");for(const f of me)if(f.includes("-")){const[b,S]=f.split("-").map(Number);for(let v=b;v<=S;v++){const j=v===7?0:v;$.includes(j)||$.push(j)}}else{const b=parseInt(f),S=b===7?0:b;$.includes(S)||$.push(S)}$.forEach(f=>{const b=new Date(l),S=f===0?6:f-1;b.setDate(l.getDate()+S);const v=new Date(b);v.setHours(p,h,0);const j=new Date(b);j.setHours(k,y,0),t.push({id:`${x}-${f}-${g}`,title:x,start:v,end:j})})}return t})(e);return s.jsx(dt,{children:s.jsx(ge,{localizer:mt,events:n,defaultView:"week",views:["week"],step:30,timeslots:1,min:new Date(0,0,0,7,0,0),max:new Date(0,0,0,23,0,0),defaultDate:q(new Date,{weekStartsOn:1}),toolbar:!1,formats:{timeGutterFormat:r=>J(r,"HH:mm"),dayFormat:r=>{const t=Z(r);return["一","二","三","四","五","六","日"][t===0?6:t-1]}},messages:ut,culture:"zh-CN"})})},ht=({onIdentityChange:e})=>s.jsx(V.Item,{label:"您的身份",name:"identity",rules:[{required:!0,message:"请输入您的身份"}],children:s.jsx(ve,{placeholder:"例如：学生、前端实习生、自由职业者等",onChange:o=>e(o.target.value)})}),yt=({schedule:e})=>{const o=()=>{const n=`data:text/csv;charset=utf-8,
${e}`,r=encodeURI(n),t=document.createElement("a");t.setAttribute("href",r),t.setAttribute("download","schedule.csv"),document.body.appendChild(t),t.click(),document.body.removeChild(t)};return s.jsx(ee,{type:"primary",icon:s.jsx(we,{}),onClick:o,children:"下载时间表"})},{Header:bt,Content:xt,Sider:gt}=U,vt=_(U)`
  min-height: 100vh;

  // 覆盖 antd 的默认样式
  &.ant-layout-has-sider {
    > .ant-layout {
      height: fit-content;
    }
  }
`,wt=_(bt)`
  display: flex;
  align-items: center;
  padding: 0 24px;
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  height: 64px;
`,_t=_(U)`
  min-height: calc(100vh - 64px);
`,Pt=_(gt)`
  background: #fff;
  border-right: 1px solid #f0f0f0;

  .ant-layout-sider-children {
    display: flex;
    flex-direction: column;
    padding: 24px;
  }

  // 覆盖 Sider 的默认宽度
  &.ant-layout-sider {
    width: 500px !important;
    max-width: 500px !important;
    min-width: 500px !important;
  }
`,St=_(xt)`
  padding: 24px;
  background: #fff;
  height: fit-content;
  min-height: 100%;
`,Q=_(_e)`
  &.info-card {
    margin-bottom: 24px;
  }

  &.activity-card {
    margin-bottom: 24px;

    .ant-card-body {
      padding: 16px;
    }
  }

  .ant-card-head {
    border-bottom: 1px solid #f0f0f0;
  }
`,{Title:kt}=Pe,$t=w.lazy(()=>oe(()=>import("./ActivityInput-qF74iS71.js"),__vite__mapDeps([0,1,2,3,4]))),jt=w.lazy(()=>oe(()=>import("./ActivityList-Bmkq9AWp.js"),__vite__mapDeps([5,1,2,3,4]))),Ct=()=>{const[e]=V.useForm(),[o,n]=w.useState(""),[r,t]=w.useState([]),[a,i]=w.useState(""),[l,c]=w.useState(!1),{token:m}=Se.useToken(),x=p=>{n(p)},d=p=>{const h={key:Date.now().toString(),...p};t([...r,h]),e.resetFields()},g=p=>{t(r.filter(h=>h.key!==p))},P=async()=>{if(!o){I.error("请先选择您的身份");return}if(r.length===0){I.error("请至少添加一个活动");return}c(!0);try{const p=`你是一名时间管理专家。请根据以下信息生成一个每周时间表，以CSV格式返回。
格式要求：
1. 第一行是表头：时间段,活动名称,重复日期
2. 时间段格式：HH:mm-HH:mm（24小时制）
3. 重复日期用数字表示：1-5表示周一到周五，6-7表示周末
4. 请确保时间安排合理，不会冲突
5. 只返回CSV格式数据，不要包含任何其他说明文字

示例格式：
时间段,活动名称,重复日期
09:00-10:30,晨会,1-5
12:00-13:00,午餐,1-5
14:00-16:00,学习,6-7

用户信息：
- 身份：${o}
- 活动安排：${r.map(y=>`${y.name}（${y.duration}小时，${y.timeRange?`在${y.timeRange[0]}-${y.timeRange[1]}之间`:"时间灵活"}，在${y.days.join("、")}进行）`).join("；")}

请生成时间表：`,h=await fetch("http://localhost:5001/api/generate-schedule",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({userInput:p})});if(!h.ok)throw new Error("Network response was not ok");const k=await h.json();console.log("原始数据:",k),console.log("CSV内容:",k.schedule),i(k.schedule)}catch(p){console.error("Error:",p),I.error("生成时间表失败，请稍后重试")}finally{c(!1)}};return s.jsxs(vt,{children:[s.jsx(wt,{children:s.jsx(kt,{level:3,style:{margin:0,color:m.colorPrimary},children:"AI 智能时间表生成器"})}),s.jsxs(_t,{children:[s.jsxs(Pt,{width:500,children:[s.jsx(Q,{title:"基本信息",className:"info-card",children:s.jsx(V,{form:e,children:s.jsx(ht,{onIdentityChange:x})})}),s.jsxs(Q,{title:"活动管理",className:"activity-card",extra:a&&s.jsx(yt,{schedule:a}),children:[s.jsx(Y.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsx($t,{onSubmit:d})}),s.jsx("div",{style:{margin:"16px 0",maxHeight:"calc(100vh - 450px)",overflowY:"auto"},children:s.jsx(Y.Suspense,{fallback:s.jsx("div",{children:"Loading..."}),children:s.jsx(jt,{activities:r,onDelete:g})})}),s.jsx(ee,{type:"primary",onClick:P,loading:l,block:!0,style:{marginTop:16},children:l?"生成中...":"生成时间表"})]})]}),s.jsx(St,{children:s.jsx(ft,{schedule:a})})]})]})};var N={},ne={exports:{}};(function(e){function o(n){return n&&n.__esModule?n:{default:n}}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports})(ne);var R=ne.exports,T={};Object.defineProperty(T,"__esModule",{value:!0});T.default=void 0;var Dt={items_per_page:"条/页",jump_to:"跳至",jump_to_confirm:"确定",page:"页",prev_page:"上一页",next_page:"下一页",prev_5:"向前 5 页",next_5:"向后 5 页",prev_3:"向前 3 页",next_3:"向后 3 页",page_size:"页码"};T.default=Dt;var z={},O={},L={},ae={exports:{}},ie={exports:{}},se={exports:{}},le={exports:{}};(function(e){function o(n){"@babel/helpers - typeof";return e.exports=o=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e.exports.__esModule=!0,e.exports.default=e.exports,o(n)}e.exports=o,e.exports.__esModule=!0,e.exports.default=e.exports})(le);var ce=le.exports,de={exports:{}};(function(e){var o=ce.default;function n(r,t){if(o(r)!="object"||!r)return r;var a=r[Symbol.toPrimitive];if(a!==void 0){var i=a.call(r,t||"default");if(o(i)!="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(r)}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(de);var Ot=de.exports;(function(e){var o=ce.default,n=Ot;function r(t){var a=n(t,"string");return o(a)=="symbol"?a:a+""}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(se);var Et=se.exports;(function(e){var o=Et;function n(r,t,a){return(t=o(t))in r?Object.defineProperty(r,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[t]=a,r}e.exports=n,e.exports.__esModule=!0,e.exports.default=e.exports})(ie);var Mt=ie.exports;(function(e){var o=Mt;function n(t,a){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);a&&(l=l.filter(function(c){return Object.getOwnPropertyDescriptor(t,c).enumerable})),i.push.apply(i,l)}return i}function r(t){for(var a=1;a<arguments.length;a++){var i=arguments[a]!=null?arguments[a]:{};a%2?n(Object(i),!0).forEach(function(l){o(t,l,i[l])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach(function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(i,l))})}return t}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(ae);var Nt=ae.exports,W={};Object.defineProperty(W,"__esModule",{value:!0});W.commonLocale=void 0;W.commonLocale={yearFormat:"YYYY",dayFormat:"D",cellMeridiemFormat:"A",monthBeforeYear:!0};var Rt=R.default;Object.defineProperty(L,"__esModule",{value:!0});L.default=void 0;var G=Rt(Nt),Tt=W,zt=(0,G.default)((0,G.default)({},Tt.commonLocale),{},{locale:"zh_CN",today:"今天",now:"此刻",backToToday:"返回今天",ok:"确定",timeSelect:"选择时间",dateSelect:"选择日期",weekSelect:"选择周",clear:"清除",week:"周",month:"月",year:"年",previousMonth:"上个月 (翻页上键)",nextMonth:"下个月 (翻页下键)",monthSelect:"选择月份",yearSelect:"选择年份",decadeSelect:"选择年代",previousYear:"上一年 (Control键加左方向键)",nextYear:"下一年 (Control键加右方向键)",previousDecade:"上一年代",nextDecade:"下一年代",previousCentury:"上一世纪",nextCentury:"下一世纪",yearFormat:"YYYY年",cellDateFormat:"D",monthBeforeYear:!1});L.default=zt;var E={};Object.defineProperty(E,"__esModule",{value:!0});E.default=void 0;const Lt={placeholder:"请选择时间",rangePlaceholder:["开始时间","结束时间"]};E.default=Lt;var ue=R.default;Object.defineProperty(O,"__esModule",{value:!0});O.default=void 0;var Wt=ue(L),Ft=ue(E);const pe={lang:Object.assign({placeholder:"请选择日期",yearPlaceholder:"请选择年份",quarterPlaceholder:"请选择季度",monthPlaceholder:"请选择月份",weekPlaceholder:"请选择周",rangePlaceholder:["开始日期","结束日期"],rangeYearPlaceholder:["开始年份","结束年份"],rangeMonthPlaceholder:["开始月份","结束月份"],rangeQuarterPlaceholder:["开始季度","结束季度"],rangeWeekPlaceholder:["开始周","结束周"]},Wt.default),timePickerLocale:Object.assign({},Ft.default)};pe.lang.ok="确定";O.default=pe;var At=R.default;Object.defineProperty(z,"__esModule",{value:!0});z.default=void 0;var It=At(O);z.default=It.default;var F=R.default;Object.defineProperty(N,"__esModule",{value:!0});N.default=void 0;var Yt=F(T),qt=F(z),Vt=F(O),Ht=F(E);const u="${label}不是一个有效的${type}",Ut={locale:"zh-cn",Pagination:Yt.default,DatePicker:Vt.default,TimePicker:Ht.default,Calendar:qt.default,global:{placeholder:"请选择"},Table:{filterTitle:"筛选",filterConfirm:"确定",filterReset:"重置",filterEmptyText:"无筛选项",filterCheckAll:"全选",filterSearchPlaceholder:"在筛选项中搜索",emptyText:"暂无数据",selectAll:"全选当页",selectInvert:"反选当页",selectNone:"清空所有",selectionAll:"全选所有",sortTitle:"排序",expand:"展开行",collapse:"关闭行",triggerDesc:"点击降序",triggerAsc:"点击升序",cancelSort:"取消排序"},Modal:{okText:"确定",cancelText:"取消",justOkText:"知道了"},Tour:{Next:"下一步",Previous:"上一步",Finish:"结束导览"},Popconfirm:{cancelText:"取消",okText:"确定"},Transfer:{titles:["",""],searchPlaceholder:"请输入搜索内容",itemUnit:"项",itemsUnit:"项",remove:"删除",selectCurrent:"全选当页",removeCurrent:"删除当页",selectAll:"全选所有",deselectAll:"取消全选",removeAll:"删除全部",selectInvert:"反选当页"},Upload:{uploading:"文件上传中",removeFile:"删除文件",uploadError:"上传错误",previewFile:"预览文件",downloadFile:"下载文件"},Empty:{description:"暂无数据"},Icon:{icon:"图标"},Text:{edit:"编辑",copy:"复制",copied:"复制成功",expand:"展开",collapse:"收起"},Form:{optional:"（可选）",defaultValidateMessages:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:u,method:u,array:u,object:u,number:u,date:u,boolean:u,integer:u,float:u,regexp:u,email:u,url:u,hex:u},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},Image:{preview:"预览"},QRCode:{expired:"二维码过期",refresh:"点击刷新",scanned:"已扫描"},ColorPicker:{presetEmpty:"暂无",transparent:"无色",singleColor:"单色",gradientColor:"渐变色"}};N.default=Ut;var Bt=N;const Xt=he(Bt);H.createRoot(document.getElementById("root")).render(s.jsx(Y.StrictMode,{children:s.jsx(ke,{locale:Xt,children:s.jsx(Ct,{})})}));export{s as j};
