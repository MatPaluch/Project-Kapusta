"use strict";(self.webpackChunkproject_kapusta=self.webpackChunkproject_kapusta||[]).push([[656],{86388:(e,s,a)=>{a.d(s,{A:()=>I});const r="InputBalance_label__fEeXw",t="InputBalance_balanceWraper__rHvBm",n="InputBalance_amountBox__6heJj",o="InputBalance_amount__ZRz9v",l="InputBalance_inputBox__KakGL",i="InputBalance_pln__0qPSa",c="InputBalance_disabled__v2nqP",d="InputBalance_confirm__+3KK5";var _=a(65043),x=a(83003),m=a(63401),p=a(80002),u=a(81531);const h=a.p+"static/media/modalBgComment.280a0f4ddafdbc5d8931a947c5c525a6.svg",j="ModalBilance_moduleDiv__pJxVT",g="ModalBilance_text__W8YEO",v="ModalBilance_textNext__AX7zh",N="ModalBilance_svg__DNmuy";var y=a(70579);const C=function(){return(0,y.jsxs)("div",{className:j,children:[(0,y.jsx)("img",{src:h,className:N,alt:"BackGroundModal"}),(0,y.jsx)("p",{className:g,children:"Hello! To get started, enter the current balance of your account!"}),(0,y.jsx)("p",{className:v,children:"You can't spend money until you have it :)"})]})},f="ModalAreYouSure_modalOverlay__fftTj",b="ModalAreYouSure_modal__Bru93",k="ModalAreYouSure_paragraphModal__Xmlvq",B="ModalAreYouSure_modalButtons__sMUMN",w="ModalAreYouSure_confirmButton__RhBza",R="ModalAreYouSure_cancelButton__Gk2y5",A=e=>{let{clickYes:s,clickNo:a}=e;return(0,y.jsx)("div",{className:f,children:(0,y.jsxs)("div",{className:b,children:[(0,y.jsx)("p",{className:k,children:"Are you sure?"}),(0,y.jsxs)("div",{className:B,children:[(0,y.jsx)("button",{onClick:s,className:w,children:"Yes"}),(0,y.jsx)("button",{onClick:a,className:R,children:"No"})]})]})})};const I=function(){const e=(0,x.wA)(),{balance:s,isPending:a,isBalanceSet:h}=(0,x.d4)((e=>e.user)),[j,g]=(0,_.useState)(!1);(0,_.useEffect)((()=>{e((0,u.S)())}),[e]);const v=()=>{g(!1)};return(0,y.jsxs)("div",{className:t,children:[(0,y.jsx)("p",{className:r,children:"Balance:"}),(0,y.jsxs)("form",{className:n,onSubmit:e=>{e.preventDefault(),g(!0)},children:[(0,y.jsxs)("div",{className:l,children:[!h&&(0,y.jsx)(C,{}),(0,y.jsx)("input",{name:"balance",className:o,value:s||"0",onChange:s=>{let a=s.target.value.replace(/[^0-9]/g,"");"0"!==a&&(a=a.replace(/^0+/,"")),""===a&&(a="0"),e((0,p.Zy)(a))},type:"text",pattern:"\\d*",inputMode:"numeric",disabled:h}),(0,y.jsx)("span",{className:i,children:"PLN"})]}),(0,y.jsx)("button",{type:"submit",className:`${h?c:d}`,disabled:h,children:a?"Loading":"Confirm"})]}),j&&(0,y.jsx)(A,{clickYes:()=>{const a=new Promise(((a,r)=>{e((0,u.A)(Number(s))).then((e=>{e.error?r(e.payload.message):a(e.payload.message)}))}));m.oR.promise(a,{pending:"Please wait ...",success:{render(e){let{data:s}=e;return`${s}`}},error:{render(e){let{data:s}=e;return`Error ${s}`}}},{autoClose:2e3}),v()},clickNo:v})]})}},60656:(e,s,a)=>{a.r(s),a.d(s,{default:()=>de});var r=a(65043);const t="ReportsBar_mainBarContainer__iLGbn",n="CurrentPeriod_currentPeriodContainer__P7y6j",o="CurrentPeriod_arrowButton__fsbFe",l="CurrentPeriod_arrowIcon__sbloE",i="CurrentPeriod_currentPeriod__5xXD2";var c=a(94872),d=a(83003),_=a(52558),x=a(70579);const m=()=>{const e=(0,d.wA)(),s=(0,d.d4)((e=>e.period.selectedPeriod)),a=new Date(s);return(0,x.jsxs)("div",{className:n,children:[(0,x.jsx)("div",{children:"Current period:"}),(0,x.jsxs)("div",{className:i,children:[(0,x.jsx)("button",{className:o,onClick:()=>e((0,_.QK)()),children:(0,x.jsx)("svg",{className:l,children:(0,x.jsx)("use",{href:`${c.A}#icon-arrow-left`})})}),(r=a,new Intl.DateTimeFormat("en-US",{month:"long",year:"numeric"}).format(r)),(0,x.jsx)("button",{className:o,onClick:()=>e((0,_.wc)()),children:(0,x.jsx)("svg",{className:l,children:(0,x.jsx)("use",{href:`${c.A}#icon-arrow-right`})})})]})]});var r},p="BackToMain_arrowBox__cPc5Z",u="BackToMain_arrowIcon__FqxUu",h="BackToMain_mobileHidden__-vYDu",j="BackToMain_arrowLink__U7Dzp";var g=a(35475);const v=()=>(0,x.jsx)(x.Fragment,{children:(0,x.jsx)("div",{className:p,children:(0,x.jsxs)(g.N_,{to:"/",className:j,children:[(0,x.jsx)("svg",{className:u,children:(0,x.jsx)("use",{href:`${c.A}#icon-big-arrow-left`})}),(0,x.jsx)("div",{className:h,children:"Main page"})]})})}),N="BalanceForReports_balanceWrapper__Jj1Mm",y="BalanceForReports_balanceText__FgGhw",C="BalanceForReports_balanceInput__HqWiX",f=()=>{const e=(0,d.d4)((e=>e.user.balance));return(0,x.jsxs)("div",{className:N,children:[(0,x.jsx)("p",{className:y,children:"Balance:"}),(0,x.jsxs)("div",{className:C,children:[(0,x.jsx)("span",{children:e}),(0,x.jsx)("span",{children:"PLN"})]})]})};var b=a(86388);const k=()=>{const[e,s]=(0,r.useState)(window.innerWidth>1280);return(0,r.useEffect)((()=>{const e=()=>{s(window.innerWidth>1280)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,x.jsxs)("div",{className:t,children:[(0,x.jsx)(v,{}),(0,x.jsx)(m,{}),e?(0,x.jsx)(b.A,{}):(0,x.jsx)(f,{})]})},B="ReportCategories_reportContainer__iIv03",w="ReportCategories_categoriesBar__gqsp6",R="ReportCategories_categoriesContainer__q-klS",A="ReportCategories_arrowButton__ZSI24",I="ReportCategories_arrowIcon__mOa3U",P="IncomeCategories_categoriesContainer__ox7Ad",M="IncomeCategories_categoryBox__SIgHy",E="ReportCategory_categoryContainer__Wpugo",S="ReportCategory_categoryTotal__tmu7T",L="ReportCategory_categoryName__b6esZ",T="ReportCategory_categoryImage__nA3Vw",Y="ReportCategory_categoryBackground__q5MxA",D="ReportCategory_categoryIcon__B7rpt",F="ReportCategory_categoryButton__w9kUu";const z=a.p+"static/media/categoryIcons.7d2fd8a462939141fc1545c7847c941f.svg",$=e=>{let{name:s,total:a,onClick:r}=e;return(0,x.jsx)("button",{className:F,onClick:r,children:(0,x.jsxs)("div",{className:E,children:[(0,x.jsxs)("div",{className:S,children:[a," PLN"]}),(0,x.jsxs)("div",{className:T,children:[(0,x.jsx)("div",{className:Y}),(0,x.jsx)("svg",{className:D,children:(0,x.jsx)("use",{href:`${z}#icon-category-${(e=>{let s;return s="Other income"===e?"ioth":e.slice(0,4).toLowerCase(),s})(s)}`})})]}),(0,x.jsx)("div",{className:L,children:s})]})})};var O=a(19891),W=a(49066);const q=()=>{const e=(0,d.wA)(),s=(0,d.d4)((e=>{var s;return(null===(s=e.reports.incomeCategories)||void 0===s?void 0:s.incomesData)||{}})),a=(0,d.d4)((e=>e.categories.loading)),t=(0,d.d4)((e=>e.categories.error)),n=(0,d.d4)((e=>e.period.selectedPeriod));if((0,r.useEffect)((()=>{n&&e((0,O.C)(n))}),[e,n]),a)return(0,x.jsx)("p",{children:"Loading..."});if(t)return(0,x.jsxs)("p",{children:["Error: ",t]});const o=Object.entries(s);return!o.length>0&&e((0,W.Ao)(!1)),(0,x.jsx)("div",{className:P,children:o&&o.length>0?o.map((s=>{let[a,r]=s;return(0,x.jsx)("div",{className:M,children:(0,x.jsx)($,{name:a,total:r.total,onClick:()=>{e((0,W.Ao)(a)),e((0,W.kY)("incomes"))}})},a)})):"No incomes available in selected period"})},U="ExpenseCategories_categoriesContainer__WR0vm",G="ExpenseCategories_categoryBox__UrMQ1",X=()=>{const e=(0,d.wA)(),s=(0,d.d4)((e=>{var s;return(null===(s=e.reports.expenseCategories)||void 0===s?void 0:s.expensesData)||{}})),a=(0,d.d4)((e=>e.categories.loading)),t=(0,d.d4)((e=>e.categories.error)),n=(0,d.d4)((e=>e.period.selectedPeriod));if((0,r.useEffect)((()=>{n&&e((0,O.T)(n))}),[e,n]),a)return(0,x.jsx)("p",{children:"Loading..."});if(t)return(0,x.jsxs)("p",{children:["Error: ",t]});const o=Object.entries(s);return!o.length>0&&e((0,W.Ao)(!1)),(0,x.jsx)("div",{className:U,children:o&&o.length>0?o.map((s=>{let[a,r]=s;return(0,x.jsx)("div",{className:G,children:(0,x.jsx)($,{name:a,total:r.total,onClick:()=>{e((0,W.Ao)(a)),e((0,W.kY)("expenses"))}})},a)})):"No expenses available in selected period"})},Z=()=>{const e=(0,d.wA)(),s=(0,d.d4)((e=>e.reports.selectedType)),[a,t]=(0,r.useState)(s||"expenses"),n=(0,d.d4)((e=>e.period.selectedPeriod)),o=()=>{t((e=>"expenses"===e?"incomes":"expenses")),e((0,W.Ao)(!1))};return(0,x.jsxs)("div",{className:B,children:[(0,x.jsxs)("div",{className:w,children:[(0,x.jsx)("button",{onClick:o,className:A,children:(0,x.jsx)("svg",{className:I,children:(0,x.jsx)("use",{href:`${c.A}#icon-arrow-left`})})}),a,(0,x.jsx)("button",{onClick:o,className:A,children:(0,x.jsx)("svg",{className:I,children:(0,x.jsx)("use",{href:`${c.A}#icon-arrow-right`})})})]}),(0,x.jsx)("div",{className:R,children:n?"expenses"===a?(0,x.jsx)(X,{selectedMonth:n}):(0,x.jsx)(q,{selectedMonth:n}):(0,x.jsx)("p",{children:"Please select a month."})})]})},H="ReportChart_reportContainer__k06Xr",K="ReportChart_verticalChart__rZ9Iw",V="ReportChart_horizontalChart__AxaS0";var J=a(74938),Q=a(44752),ee=a(9512),se=a(85886);const ae=()=>{const e=(0,d.d4)((e=>e.reports.selectedCategory)),s=(0,d.d4)((e=>e.reports.selectedType)),a=(0,d.d4)((a=>"expenses"===s&&e?a.reports.expenseCategories.expensesData[e]:"incomes"===s&&e?a.reports.incomeCategories.incomeData[e]:null)),r=a?Object.entries(a).filter((e=>{let[s]=e;return"total"!==s})).map((e=>{let[s,a]=e;return{x:s,y:a}})).sort(((e,s)=>e.y-s.y)):[];return(0,x.jsx)("div",{className:H,children:e&&r?(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)("div",{className:K,children:(0,x.jsxs)(J.t,{domainPadding:{x:25},children:[(0,x.jsx)(Q.O,{style:{axis:{stroke:"var(--light-grey)"},tickLabels:{fontSize:12,padding:10,fill:"var(--grey)"}},tickFormat:r.map((e=>e.x))}),(0,x.jsx)(Q.O,{dependentAxis:!0,style:{axis:{stroke:"none"},ticks:{stroke:"none"},tickLabels:{fill:"none"},grid:{stroke:"var(--light-grey)",strokeWidth:1}},tickCount:9}),(0,x.jsx)(ee.k,{data:r,barWidth:38,barRatio:2,alignment:"middle",labels:e=>{let{datum:s}=e;return`${s.y} PLN`},labelComponent:(0,x.jsx)(se.R,{dy:-10,style:{fill:"var(--grey)",fontSize:12,fonrFamily:"Roboto"}}),cornerRadius:{topLeft:10,topRight:10},style:{data:{fill:e=>{let{index:s}=e;return s%3===0?"var(--orange)":"var(--chart-orange-light)"},width:38}}})]})}),(0,x.jsx)("div",{className:V,children:(0,x.jsxs)(J.t,{horizontal:!0,children:[(0,x.jsx)(Q.O,{style:{axis:{stroke:"none"}},tickLabelComponent:(0,x.jsx)(se.R,{dy:-23,dx:10,textAnchor:"start",style:{fill:"var(--grey)",fontSize:17,fontFamily:"Roboto"}})}),(0,x.jsx)(ee.k,{data:r,barWidth:22,barRatio:.65,labels:e=>{let{datum:s}=e;return`${s.y} PLN`},labelComponent:(0,x.jsx)(se.R,{dy:-23,dx:-25,style:{fill:"var(--grey)",fontSize:17,fontFamily:"Roboto"}}),cornerRadius:{topLeft:11,topRight:11},style:{data:{fill:e=>{let{index:s}=e;return s%3===0?"var(--orange)":"var(--chart-orange-light)"}}}})]})})]}):(0,x.jsx)("p",{children:"Select category to display the data"})})},re="ExpensesIncome_bilansBox__e6y-D",te="ExpensesIncome_labelBox__9kk9S",ne="ExpensesIncome_label__miKAt",oe="ExpensesIncome_expensesLabel__fq-GN",le="ExpensesIncome_incomeLabel__8Oi4P",ie="ExpensesIncome_svg__iVTyn";const ce=function(){const e=(0,d.d4)((e=>e.reports.expenseCategories.total)),s=(0,d.d4)((e=>e.reports.incomeCategories.total));return(0,x.jsxs)("div",{className:re,children:[(0,x.jsxs)("div",{className:te,children:[(0,x.jsx)("p",{className:ne,children:"Expenses:"}),(0,x.jsxs)("p",{className:oe,children:["- ",e||0," PLN."]})]}),(0,x.jsx)("svg",{className:ie,width:"2",height:"70",viewBox:"0 0 2 70",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,x.jsx)("path",{d:"M1 0V70",stroke:"#E0E5EB"})}),(0,x.jsxs)("div",{className:te,children:[(0,x.jsx)("p",{className:ne,children:"Income:"}),(0,x.jsxs)("p",{className:le,children:["+ ",s||0," PLN."]})]})]})},de=()=>(0,x.jsxs)("div",{children:[(0,x.jsx)(k,{}),(0,x.jsx)(ce,{}),(0,x.jsx)(Z,{}),(0,x.jsx)(ae,{})]})}}]);
//# sourceMappingURL=656.9fa30c47.chunk.js.map