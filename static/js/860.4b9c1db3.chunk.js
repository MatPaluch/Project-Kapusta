"use strict";(self.webpackChunkproject_kapusta=self.webpackChunkproject_kapusta||[]).push([[860],{6077:(e,s,a)=>{a.d(s,{w:()=>i});const t="BackToHome_arrowBox__gsGIG",n="BackToHome_arrowIcon__12FR1",r="BackToHome_mobileHidden__tfrFy",o="BackToHome_arrowLink__x2UNd";var c=a(94872),l=a(70579);const i=e=>{let{onClick:s}=e;return(0,l.jsx)("div",{className:t,children:(0,l.jsxs)("button",{onClick:s,className:o,children:[(0,l.jsx)("svg",{className:n,children:(0,l.jsx)("use",{href:`${c.A}#icon-big-arrow-left`})}),(0,l.jsx)("div",{className:r,children:"Main page"})]})})}},24630:(e,s,a)=>{a.d(s,{A:()=>m});const t="Balans_balanceBox__FewV2",n="ToReportsButton_reportsBox__-5cpj",r="ToReportsButton_reportsSVG__LHd9f";var o=a(94872),c=a(35475),l=a(83003),i=a(19891),d=a(70579);const _=()=>{const e=(0,l.wA)(),s=(0,l.d4)((e=>e.period.selectedPeriod));return(0,d.jsxs)(c.N_,{to:"/reports",className:n,onClick:()=>e((0,i.C)(s)),children:[(0,d.jsx)("span",{children:"Reports"}),(0,d.jsx)("svg",{className:r,children:(0,d.jsx)("use",{href:`${o.A}#icon-reports`})})]})};var u=a(86388);const m=function(){return(0,d.jsxs)("div",{className:t,children:[(0,d.jsx)(_,{}),(0,d.jsx)(u.A,{})]})}},94774:(e,s,a)=>{a.d(s,{A:()=>p});const t="Calendar_calendarBox__D79Ci",n="Calendar_calendar__vKx+D",r="Calendar_customButtonCalendar__CnDJK",o="Calendar_calendarIcon__h-QzY";var c=a(65043),l=a(31899),i=a.n(l),d=(a(25015),a(94872)),_=a(83003),u=a(54362),m=a(70579);const p=()=>{const e=(0,_.wA)(),[s,a]=(0,c.useState)(new Date);(0,c.useEffect)((()=>{const a=s.toLocaleDateString("pl-PL",{day:"2-digit",month:"2-digit",year:"numeric"});e((0,u.Af)(a))}),[e,s]);const l=(0,c.forwardRef)(((e,s)=>{let{value:a,onClick:t,className:n}=e;return(0,m.jsxs)("button",{type:"button",className:n,onClick:t,ref:s,children:[(0,m.jsx)("svg",{className:o,children:(0,m.jsx)("use",{href:`${d.A}#icon-calendar`})}),a]})}));return(0,m.jsx)("div",{className:t,children:(0,m.jsx)(i(),{className:n,selected:s,onChange:e=>{a(e)},dateFormat:"dd.MM.yyyy",customInput:(0,m.jsx)(l,{className:r})})})}},86388:(e,s,a)=>{a.d(s,{A:()=>w});const t="InputBalance_label__fEeXw",n="InputBalance_balanceWraper__rHvBm",r="InputBalance_amountBox__6heJj",o="InputBalance_amount__ZRz9v",c="InputBalance_inputBox__KakGL",l="InputBalance_pln__0qPSa",i="InputBalance_disabled__v2nqP",d="InputBalance_confirm__+3KK5";var _=a(65043),u=a(83003),m=a(63401),p=a(80002),x=a(81531);const h=a.p+"static/media/modalBgComment.280a0f4ddafdbc5d8931a947c5c525a6.svg",j="ModalBilance_moduleDiv__pJxVT",N="ModalBilance_text__W8YEO",b="ModalBilance_textNext__AX7zh",g="ModalBilance_svg__DNmuy";var v=a(70579);const y=function(){return(0,v.jsxs)("div",{className:j,children:[(0,v.jsx)("img",{src:h,className:g,alt:"BackGroundModal"}),(0,v.jsx)("p",{className:N,children:"Hello! To get started, enter the current balance of your account!"}),(0,v.jsx)("p",{className:b,children:"You can't spend money until you have it :)"})]})},k="ModalAreYouSure_modalOverlay__fftTj",T="ModalAreYouSure_modal__Bru93",f="ModalAreYouSure_paragraphModal__Xmlvq",C="ModalAreYouSure_modalButtons__sMUMN",B="ModalAreYouSure_confirmButton__RhBza",M="ModalAreYouSure_cancelButton__Gk2y5",S=e=>{let{clickYes:s,clickNo:a}=e;return(0,v.jsx)("div",{className:k,children:(0,v.jsxs)("div",{className:T,children:[(0,v.jsx)("p",{className:f,children:"Are you sure?"}),(0,v.jsxs)("div",{className:C,children:[(0,v.jsx)("button",{onClick:s,className:B,children:"Yes"}),(0,v.jsx)("button",{onClick:a,className:M,children:"No"})]})]})})};const w=function(){const e=(0,u.wA)(),{balance:s,isPending:a,isBalanceSet:h}=(0,u.d4)((e=>e.user)),[j,N]=(0,_.useState)(!1);(0,_.useEffect)((()=>{e((0,x.S)())}),[e]);const b=()=>{N(!1)};return(0,v.jsxs)("div",{className:n,children:[(0,v.jsx)("p",{className:t,children:"Balance:"}),(0,v.jsxs)("form",{className:r,onSubmit:e=>{e.preventDefault(),N(!0)},children:[(0,v.jsxs)("div",{className:c,children:[!h&&(0,v.jsx)(y,{}),(0,v.jsx)("input",{name:"balance",className:o,value:s||"0",onChange:s=>{let a=s.target.value.replace(/[^0-9]/g,"");"0"!==a&&(a=a.replace(/^0+/,"")),""===a&&(a="0"),e((0,p.Zy)(a))},type:"text",pattern:"\\d*",inputMode:"numeric",disabled:h}),(0,v.jsx)("span",{className:l,children:"PLN"})]}),(0,v.jsx)("button",{type:"submit",className:`${h?i:d}`,disabled:h,children:a?"Loading":"Confirm"})]}),j&&(0,v.jsx)(S,{clickYes:()=>{const a=new Promise(((a,t)=>{e((0,x.A)(Number(s))).then((e=>{e.error?t(e.payload.message):a(e.payload.message)}))}));m.oR.promise(a,{pending:"Please wait ...",success:{render(e){let{data:s}=e;return`${s}`}},error:{render(e){let{data:s}=e;return`Error ${s}`}}},{autoClose:2e3}),b()},clickNo:b})]})}},54822:(e,s,a)=>{a.d(s,{A:()=>k});const t="MainBody_mainBody__uNl2v",n="MainBody_inputs__xObEG",r="MainBody_lists__YgbTc";var o=a(94774),c=a(45912),l=a(83003);const i="SummaryList_summaryBox__25iHJ",d="SummaryList_header__IyMFo",_="SummaryList_list__5TsvU",u="SummaryList_element__YJRZm";var m=a(70579);const p=()=>{const e=(0,l.d4)((e=>e.transactions.summary)),s=Object.entries(e);return(0,m.jsxs)("div",{className:i,children:[(0,m.jsx)("h4",{className:d,children:"Summary"}),(0,m.jsx)("ul",{className:_,children:s.map((e=>{let[s,a]=e;return(0,m.jsxs)("li",{className:u,children:[(0,m.jsx)("span",{children:s}),(0,m.jsx)("span",{children:a})]},s)}))})]})},x={table:"TableDesktop_table__L4Z5J",thead:"TableDesktop_thead__ssPaR",headRow:"TableDesktop_headRow__7q4EN",tbody:"TableDesktop_tbody__711BV",row:"TableDesktop_row__NcgmD",date:"TableDesktop_date__4L9D1",category:"TableDesktop_category__IvS-s",amount:"TableDesktop_amount__DNcTk",red:"TableDesktop_red__+E74l",green:"TableDesktop_green__v2qng",deleteIcon:"TableDesktop_deleteIcon__xOzsS",buttonDelete:"TableDesktop_buttonDelete__CEM1+",center:"TableDesktop_center__6-uUT"};var h=a(65043),j=a(63401),N=a(81531),b=a(89891),g=a(94872),v=a(30045);const y=e=>{let{page:s}=e;const{loading:a}=(0,l.d4)((e=>e.transactions)),t=(0,l.d4)((e=>"expense"===s?e.transactions.expenses:e.transactions.incomes)),n=[{_id:1},{_id:2},{_id:3},{_id:4},{_id:5},{_id:6},{_id:7},{_id:8},{_id:9},{_id:10},{_id:11},{_id:12},{_id:13}];t.forEach(((e,s)=>{s<n.length?n[s]=e:n.push(e)}));const r=(0,l.wA)();(0,h.useEffect)((()=>{r((0,b.mh)(s))}),[r,s]);const o=e=>{const a=e.currentTarget.value,t=new Promise(((e,s)=>{r((0,b.Uw)(a)).then((a=>{a.error?s(a.payload.message):e(a.payload.message)}))}));t.then((()=>{r((0,N.S)()),r((0,b.mh)(s))})),j.oR.promise(t,{pending:"Please wait ...",success:{render(e){let{data:s}=e;return`${s}`}},error:{render(e){let{data:s}=e;return`Error ${s}`}}},{autoClose:2e3})};return(0,m.jsxs)("table",{className:x.table,children:[(0,m.jsx)("thead",{className:x.thead,children:(0,m.jsxs)("tr",{className:x.headRow,children:[(0,m.jsx)("th",{children:"Date"}),(0,m.jsx)("th",{children:"Description"}),(0,m.jsx)("th",{children:"Category"}),(0,m.jsx)("th",{children:"Sum"}),(0,m.jsx)("th",{})]})}),(0,m.jsxs)("tbody",{className:x.tbody,children:[a&&(0,m.jsx)("div",{className:x.center,children:(0,m.jsx)(v.A,{color:"rgba(255, 117, 29, 1)",loading:!0})}),n.map((e=>(0,m.jsxs)("tr",{className:x.row,children:[(0,m.jsx)("td",{className:x.date,children:e.date}),(0,m.jsx)("td",{className:x.desc,children:e.description}),(0,m.jsx)("td",{className:x.category,children:e.category}),(0,m.jsx)("td",{className:x.amount,children:"expense"===s?(0,m.jsx)("span",{className:x.red,children:e.amount&&`- ${e.amount} PLN`}):(0,m.jsx)("span",{className:x.green,children:e.amount&&`+ ${e.amount} PLN`})}),(0,m.jsx)("td",{className:x.action,children:e.amount&&(0,m.jsx)("button",{type:"button",className:x.buttonDelete,onClick:o,value:e._id,children:(0,m.jsx)("svg",{className:x.deleteIcon,children:(0,m.jsx)("use",{href:`${g.A}#icon-delete`})})})})]},e._id)))]})]})},k=e=>{let{page:s}=e;return(0,m.jsxs)("div",{className:t,children:[(0,m.jsxs)("div",{className:n,children:[(0,m.jsx)(o.A,{}),(0,m.jsx)(c.A,{page:s})]}),(0,m.jsxs)("div",{className:r,children:[(0,m.jsx)(y,{page:s}),(0,m.jsx)(p,{page:s})]})]})}},45912:(e,s,a)=>{a.d(s,{A:()=>C});const t="MultiForm_form__EEoh5",n="MultiForm_description__kOEVh",r="MultiForm_amountWrapper__XwY2V",o="MultiForm_amount__8TZJk",c="MultiForm_calculatorWrapper__jiASK",l="MultiForm_calculatorSVG__01Uej",i="MultiForm_buttonsWrapper__mdzuz",d="MultiForm_submit__p9jHa",_="MultiForm_clear__OMlqV";var u=a(65043),m=a(83003),p=a(63401),x=a(89891),h=a(54362),j=a(81531),N=a(94872);const b="CustomSelect_categorySelect__ARf4o",g="CustomSelect_arrowList__CDf6v",v="CustomSelect_selectedOption__o1Z0g",y="CustomSelect_categoryList__g3ICi",k="CustomSelect_categoryOption__DrsGM";var T=a(70579);const f=e=>{let{name:s,placeholder:a,optionsArray:t,selectedOption:n,onChange:r}=e;const[o,c]=(0,u.useState)(!1),[l,i]=(0,u.useState)(n);(0,u.useEffect)((()=>{""===n&&i("")}),[i,n]);const d=e=>{c(!1),r(e),i(e.currentTarget.innerText)};return(0,T.jsxs)("div",{onClick:()=>c(!o),className:b,children:[(0,T.jsx)("input",{type:"text",name:s,className:v,value:l,placeholder:a,readOnly:!0}),(0,T.jsx)("svg",{className:g,width:"12",height:"7",viewBox:"0 0 12 7",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,T.jsx)("path",{d:"M1 1L6 5L11 1",stroke:"#C7CCDC",strokeWidth:"2"})}),o&&(0,T.jsx)("ul",{className:y,children:t.map(((e,s)=>(0,T.jsx)("li",{onClick:d,className:k,children:e},s)))})]})},C=e=>{let{page:s}=e;const a="expense"===s,b=(0,m.wA)(),g=(0,m.d4)((e=>e.transactions.currentDate)),{description:v,category:y,amount:k}=(0,m.d4)((e=>e.transactions.formElements)),C=(0,m.d4)((e=>a?e.transactions.expensesCategories:e.transactions.incomesCategories)),B=(0,u.useCallback)((()=>{b((0,h.Xo)("")),b((0,h.Fb)("")),b((0,h.Bx)(""))}),[b]);(0,u.useEffect)((()=>(b(a?(0,x.zF)():(0,x.qY)()),()=>{B()})),[b,B,a]);return(0,T.jsxs)("form",{className:t,onSubmit:e=>{if(e.preventDefault(),""===v)return void p.oR.error("Description is required!");if(""===y)return void p.oR.error("Category is required!");if(""===k)return void p.oR.error("Amout is required!");const a=new Promise(((e,a)=>{const t={description:v,category:y,amount:k,date:g};b((0,x.p6)({bodyTransaction:t,page:s})).then((s=>{s.error?a(s.payload.message):e(s.payload.message)}))}));a.then((()=>{b((0,j.S)()),b((0,x.mh)(s))})),p.oR.promise(a,{pending:"Please wait ...",success:("expense"===s?"Expense":"Income")+" has been added to transactions.",error:{render(e){let{data:s}=e;return`Error ${s}`}}},{autoClose:2e3}),B()},children:[(0,T.jsx)("input",{name:"description",type:"text",className:n,onChange:e=>{b((0,h.Xo)(e.currentTarget.value))},value:v,placeholder:"Product description"}),(0,T.jsx)(f,{name:"category",placeholder:"Product category",optionsArray:C,selectedOption:y,onChange:e=>{b((0,h.Fb)(e.currentTarget.innerText))}}),(0,T.jsxs)("div",{className:r,children:[(0,T.jsx)("input",{name:"amount",type:"text",className:o,onChange:e=>{let s=e.currentTarget.value.replace(/[^0-9]/g,"");"0"!==s&&(s=s.replace(/^0+/,"")),b((0,h.Bx)(s))},pattern:"\\d*",inputMode:"numeric",value:k,placeholder:"0"}),(0,T.jsx)("div",{className:c,children:(0,T.jsx)("svg",{className:l,children:(0,T.jsx)("use",{href:`${N.A}#icon-calculator`})})})]}),(0,T.jsxs)("div",{className:i,children:[(0,T.jsx)("button",{type:"submit",className:d,children:"Input"}),(0,T.jsx)("button",{type:"reset",onClick:B,className:_,children:"Clear"})]})]})}},42907:(e,s,a)=>{a.d(s,{A:()=>y});const t="TableMobile_container__oKaa0",n="TableMobile_table__S1Qat",r="TableMobile_desc__F8gJ7",o="TableMobile_amount__8TW+S",c="TableMobile_red__hFByF",l="TableMobile_green__iYfYU",i="TableMobile_trUnderline__D-ePE",d="TableMobile_tdPadding__hoTDc",_="TableMobile_deleteButton__ctBBl",u="TableMobile_iconDelete__wd4Vs",m="TableMobile_modalLoader__3jqhD";var p=a(65043),x=a(83003),h=a(63401),j=a(89891),N=a(81531),b=a(94872),g=a(30045),v=a(70579);const y=e=>{let{page:s}=e;const a=(0,x.wA)(),y=(0,x.d4)((e=>"expense"===s?e.transactions.expenses:e.transactions.incomes)),k=(0,x.d4)((e=>e.transactions.loading));(0,p.useEffect)((()=>{a((0,j.mh)(s))}),[a,s]);const T=e=>{const s=e.currentTarget.value,t=new Promise(((e,t)=>{a((0,j.Uw)(s)).then((s=>{a((0,N.S)()),s.error?t(s.payload.message):e(s.payload.message)}))}));h.oR.promise(t,{pending:"Please wait ...",success:{render(e){let{data:s}=e;return`${s}`}},error:{render(e){let{data:s}=e;return`Error ${s}`}}},{autoClose:2e3})};return(0,v.jsx)("div",{className:t,children:k?(0,v.jsx)("div",{className:m,children:(0,v.jsx)(g.A,{color:"rgba(255, 117, 29, 1)",loading:!0})}):(0,v.jsx)("table",{className:n,children:(0,v.jsx)("tbody",{children:y.map((e=>(0,v.jsxs)(p.Fragment,{children:[(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{colSpan:2,className:r,children:e.description}),(0,v.jsxs)("td",{colSpan:2,rowSpan:2,className:o,children:["expense"===s?(0,v.jsxs)("span",{className:c,children:["- ",e.amount," PLN"]}):(0,v.jsxs)("span",{className:l,children:["+ ",e.amount," PLN"]}),(0,v.jsx)("button",{type:"button",className:_,onClick:T,value:e._id,children:(0,v.jsx)("svg",{className:u,children:(0,v.jsx)("use",{href:`${b.A}#icon-delete`})})})]})]},e._id),(0,v.jsxs)("tr",{className:i,children:[(0,v.jsx)("td",{className:d,children:e.date}),(0,v.jsx)("td",{className:d,children:e.category})]})]},e._id)))})})})}},97976:(e,s,a)=>{a.d(s,{A:()=>i});const t="TabsExpensesIncomes_linkWrapper__-I47E",n="TabsExpensesIncomes_buttonsLink__xt4wY",r="TabsExpensesIncomes_active__OcljW";var o=a(65043),c=a(35475),l=a(70579);const i=e=>{let{page:s}=e;const[a,i]=(0,o.useState)("expenses"===s),[d,_]=(0,o.useState)("incomes"===s);return(0,l.jsxs)("div",{className:t,children:[(0,l.jsx)(c.N_,{to:"/expenses",className:`${a?r:""} ${n}`,onMouseEnter:()=>{"incomes"===s&&(i(!0),_(!1))},onMouseLeave:()=>{"incomes"===s&&(i(!1),_(!0))},children:"Expenses"}),(0,l.jsx)(c.N_,{to:"/incomes",className:`${d?r:""} ${n}`,onMouseEnter:()=>{"expenses"===s&&(i(!1),_(!0))},onMouseLeave:()=>{"expenses"===s&&(i(!0),_(!1))},children:"Incomes"})]})}},96667:(e,s,a)=>{a.d(s,{y:()=>o});const t={reportsSVG:"ToTransaction_reportsSVG__Qr-Up",backspaceBox:"ToTransaction_backspaceBox__Y3KC9"};var n=a(94872),r=a(70579);function o(e){let{onClick:s}=e;return(0,r.jsxs)("button",{className:t.backspaceBox,onClick:s,children:[(0,r.jsx)("svg",{className:t.reportsSVG,children:(0,r.jsx)("use",{href:`${n.A}#icon-keyboard-backspace`})}),(0,r.jsx)("span",{children:"to transaction"})]})}}}]);
//# sourceMappingURL=860.4b9c1db3.chunk.js.map