(this["webpackJsonp@betrybe/student-journey-web"]=this["webpackJsonp@betrybe/student-journey-web"]||[]).push([[24],{2191:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var o=n(5),c=n(1),r=n(22),i=n(48),l=n(0);const a=778;function s(e){const{currentRawContent:t,isLoadingContent:n,trackData:s,breadcrumbItems:u,sidebarItems:d,onUrlChange:b,contentTitle:v,navigation:p,classLayout:h}=e,f=Object(o.useWindowDimensions)(),m=f.width,[_,j]=Object(c.useState)(m>640),[O,k]=Object(c.useState)(f.width<=a),[y,g]=Object(c.useState)(!1);return Object(c.useEffect)((()=>{f.width<=a&&!O&&j(!1),f.width>a&&O&&!y&&j(!0),k(f.width<=a)}),[f,O,y]),Object(l.jsxs)("div",{className:`chapter-template ${h}`,children:[Object(l.jsx)(r.a,{items:u,className:"breadcrumbs-section"}),Object(l.jsxs)("div",{className:"block-section",children:[Object(l.jsx)(i.k,{items:d,onChange:b,setMenuOpen:e=>{j(e),g(!e)},isMenuOpen:_}),Object(l.jsxs)("div",{className:`${_&&"open"} content-container`,children:[Object(l.jsx)(i.b,{isMenuOpen:_,contentTitle:v,navigation:p}),Object(l.jsx)(i.c,{isMenuOpen:_,isLoadingContent:n,trackData:s,rawContent:t})]})]})]})}var u=Object(c.memo)(s)},2207:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const o=/[/-]solutions?/;function c(e){return o.test(e)}},2215:function(e,t,n){"use strict";n.d(t,"a",(function(){return U})),n.d(t,"b",(function(){return $}));var o=n(1);var c=Object(o.createContext)();const r="/course";function i(e){return e.startsWith(r)?e:`/course${e}`}function l(e){return t=>i(t.url)===e}const a="/course";function s(e,t){var n,o;const c=null===e||void 0===e?void 0:e.flatMap((e=>{var t;return null!==(t=e.sections)&&void 0!==t&&t.length?e.sections.flatMap((e=>{var t;const n=e.sub_sections||e.subSections,o=null!==(t=null===n||void 0===n?void 0:n.map((e=>e.url)))&&void 0!==t?t:[];return[e.url,...o]})):e.url})),r=function(e,t){const n=null===t||void 0===t?void 0:t.startsWith(a),o=n?t:`/course${t}`,c=n?t.replace(a,""):t,r=e.findIndex((e=>e===o||e===c));return r>-1?r:e.findIndex((e=>e.startsWith(o)||e.startsWith(c)))}(c,t);if(-1===r)return{next:null,previous:null};const l=null!==(n=c[r+1])&&void 0!==n?n:null,s=null!==(o=c[r-1])&&void 0!==o?o:null;return{next:l&&i(l),previous:s&&i(s)}}function u(e,t,n){return e.map((e=>{var o,c,r,l,a;return{label:e.title,target:i(null!==(o=null===e||void 0===e||null===(c=e.sections)||void 0===c||null===(r=c[0])||void 0===r?void 0:r.url)&&void 0!==o?o:e.url),active:e.url===t,children:null!==(l=null===(a=e.sections)||void 0===a?void 0:a.map((e=>{var t,o;return{label:e.title,target:i(e.url),active:n.includes(e.url),children:null!==(t=null===(o=e.subSections)||void 0===o?void 0:o.map((e=>({label:e.title,target:i(e.url),active:n.includes(e.url)}))))&&void 0!==t?t:[]}})))&&void 0!==l?l:[]}}))}var d=n(49);var b=function(e){let{subSection:t,section:n,...o}=e;return t?d.b.SUBSECTION:n?d.b.SECTION:o.category};function v(e,t,n){const{id:o,block:c,blockOrder:r,competence:i,competenceName:l,contentId:a,theme:s,title:u,section:v,subSection:p,url:h,order:f}=t;return{contentType:(()=>{switch(e){case"soft-skills":return d.b.SOFT_SKILL;case"career":return d.b.CAREER;default:return d.b.HARD_SKILL}})(),contentHierarchy:b(t),context:{source:d.c.COURSE,block_name:c,chapter_id:o,chapter_name:u,content_id:a,competence_name:l,theme:s,section_id:null===v||void 0===v?void 0:v.id,section_name:null===v||void 0===v?void 0:v.title,subsection_id:null===p||void 0===p?void 0:p.id,subsection_name:null===p||void 0===p?void 0:p.title},object:{path:n,block:c,block_order:r,chapter:h,chapter_id:o,chapter_order:f,chapter_name:u,competence:i,section_id:null===v||void 0===v?void 0:v.id,section_name:null===v||void 0===v?void 0:v.title,subsection_id:null===p||void 0===p?void 0:p.id,subsection_name:null===p||void 0===p?void 0:p.title}}}const p={hard_skill:"hard-skills","hard-skills":"hard-skills",soft_skill:"soft-skills","soft-skills":"soft-skills",career:"career"};function h(e){return`/course/calendar/${e.split("/")[2]}`}const f={solutions:e=>function(e){return`/course/calendar/${e.split("/")[2]}/solutions`}(e),chapter:e=>h(e)};function m(e,t){return f[e]?f[e](t):h(t)}function _(e,t){const{block:n,blockOrder:o,category:c,competenceName:r,module:i,theme:l,title:a,url:s}=t;return"soft-skills-layout"===e?[{title:r},{title:l}]:"career-layout"===e?[{title:"Carreira",href:"/course/career"},{title:l},{title:a}]:[{title:i,href:m(c,s)},{title:`Bloco ${o} - ${n}`}]}function j(e,t){const{chapterData:n,chapterSiblings:o}=e,c=o.length>0?o:[n],r=function(e,t){var n,o;const c=null===(n=e.sections)||void 0===n?void 0:n.find(l(t));return c?{...e,section:c,subSection:null,rawContent:c.rawContent}:(null===(o=e.sections)||void 0===o?void 0:o.reduce(((n,o)=>{var c;if(n)return n;const r=null===(c=o.subSections)||void 0===c?void 0:c.find(l(t));return r?{...e,section:o,subSection:r,rawContent:r.rawContent}:null}),null))||{...e,section:null,subSection:null}}(n,t),i=p[n.type],a=`${i}-layout`;return{chapterData:{...r,chapterSiblings:c,navigation:s(c,t)},layout:a,sidebar:u(c,n.url,t),breadcrumbItems:_(a,n),trackData:v(i,r,t)}}var O=n(2207);function k(e){let{block:t,chapter:n,section:o,subsection:c}=e;return t.chapters.map((e=>{var t;return{label:e.title,target:i(null!==(t=e.sections)&&void 0!==t&&t.length?e.sections[0].url:e.url),active:e.url===n.url,children:n.sections.map((e=>({label:e.title,target:i(e.url),active:!!o&&e.url===o.url,children:e&&e.sub_sections?e.sub_sections.map((e=>({label:e.title,target:i(e.url),active:!!c&&e.url===c.url}))):[]})))}}))}function y(e,t){let{block:n,chapter:o,section:c,subsection:r}=e;return{contentType:d.b.HARD_SKILL,contentHierarchy:b({section:c,subSection:r}),context:{source:d.c.COURSE,block_name:null===n||void 0===n?void 0:n.name,chapter_id:null===o||void 0===o?void 0:o.id,chapter_name:null===o||void 0===o?void 0:o.title,section_id:null===c||void 0===c?void 0:c.id,section_name:null===c||void 0===c?void 0:c.title,subsection_id:null===r||void 0===r?void 0:r.id,subsection_name:null===r||void 0===r?void 0:r.title},object:{path:t,block:null===n||void 0===n?void 0:n.id,block_order:null===n||void 0===n?void 0:n.block_order,chapter:null===o||void 0===o?void 0:o.url,chapter_order:null===o||void 0===o?void 0:o.order,chapter_id:null===o||void 0===o?void 0:o.id,chapter_name:null===o||void 0===o?void 0:o.title,section_id:null===c||void 0===c?void 0:c.id,section_name:null===c||void 0===c?void 0:c.title,subsection_id:null===r||void 0===r?void 0:r.id,subsection_name:null===r||void 0===r?void 0:r.title}}}function g(e,t){const n=function(e,t){const n={module:e,block:{},chapter:{},section:null,subsection:null},o=n.module.blocks.some((e=>(n.block=e,e.chapters.some((e=>{if(n.chapter=e,n.section=null,n.subsection=null,Object(O.a)(t))return!1;if(e.url===t){const t=e.sections&&e.sections[0];if(t){n.section=t;const e=t.sub_sections&&t.sub_sections[0];e&&(n.subsection=e)}return!0}return e.sections&&e.sections.some((e=>(n.section=e,n.subsection=null,e.url===t||e.sub_sections&&e.sub_sections.some((e=>(n.subsection=e,e.url===t))))))})))));return n.navigation=s(n.block.chapters,t),n.hasContent=o,n.contentURL=n.chapter.url,n}(e,t);return{current:n,sidebar:k(n),trackData:y(n,t)}}function R(e){if(!e||!e.url)return[];const t=[{url:e.url,type:e.type,content:e.raw_content||""}];return e.sections&&e.sections.forEach((e=>{t.push(...R(e))})),e.sub_sections&&e.sub_sections.forEach((e=>{t.push(...R(e))})),t}var S=n(52);var C=function(e){const t=Object(o.useRef)(null),n=function(e){const{object:t,context:n,contentType:o}=e;return{context:{source:d.c.COURSE,block_name:null===n||void 0===n?void 0:n.block_name},contentType:o,contentHierarchy:d.b.CHAPTER,verb:d.d.VIEW,object:{chapter:null===t||void 0===t?void 0:t.chapter,chapter_id:null===t||void 0===t?void 0:t.chapter_id,chapter_name:null===t||void 0===t?void 0:t.chapter_name,block:null===t||void 0===t?void 0:t.block_order,day:null===t||void 0===t?void 0:t.chapter_order}}}(e),c=e.contentHierarchy,r=n.object.chapter_id;Object(S.k)({data:n,skip:c===d.b.SOLUTIONS||!r||t.current===r}),Object(o.useEffect)((()=>{r&&(t.current=r)}),[r])};var q=function(e){const t=Object(o.useRef)(null),n=Object(o.useRef)(null),c=function(e){const{object:t,context:n,contentType:o}=e;return{context:n,contentType:o,contentHierarchy:d.b.SECTION,verb:d.d.VIEW,object:{chapter:null===t||void 0===t?void 0:t.chapter,block:null===t||void 0===t?void 0:t.block_order,day:null===t||void 0===t?void 0:t.chapter_order,section_id:null===t||void 0===t?void 0:t.section_id,section_name:null===t||void 0===t?void 0:t.section_name}}}(e),r=c.object.section_id,i=e.contentHierarchy;Object(S.k)({data:c,skip:i!==d.b.SECTION||!r||t.current===r&&n.current===i}),Object(o.useEffect)((()=>{t.current=null!==r&&void 0!==r?r:null,n.current=null!==i&&void 0!==i?i:null}),[r,i])};var w=function(e){const t=e.contentHierarchy,n=function(e){const{object:t,context:n,contentType:o}=e;return{context:{source:d.c.COURSE,block_name:null===n||void 0===n?void 0:n.block_name},contentType:o,contentHierarchy:d.b.SOLUTIONS,verb:d.d.VIEW,object:{chapter:null===t||void 0===t?void 0:t.chapter,chapter_id:null===t||void 0===t?void 0:t.chapter_id,chapter_name:null===t||void 0===t?void 0:t.chapter_name,block:null===t||void 0===t?void 0:t.block_order,day:null===t||void 0===t?void 0:t.chapter_order}}}(e);Object(S.k)({data:n,skip:t!==d.b.SOLUTIONS})};var x=function(e){const t=Object(o.useRef)(null),n=Object(o.useRef)(null),c=function(e){const{object:t,context:n,contentType:o}=e;return{context:n,contentType:o,contentHierarchy:d.b.SUBSECTION,verb:d.d.VIEW,object:{chapter:null===t||void 0===t?void 0:t.chapter,block:null===t||void 0===t?void 0:t.block_order,day:null===t||void 0===t?void 0:t.chapter_order,subsection_id:null===t||void 0===t?void 0:t.subsection_id,subsection_name:null===t||void 0===t?void 0:t.subsection_name}}}(e),r=c.object.subsection_id,i=e.contentHierarchy;Object(S.k)({data:c,skip:i!==d.b.SUBSECTION||!r||t.current===r&&n.current===i}),Object(o.useEffect)((()=>{n.current=null!==i&&void 0!==i?i:null,t.current=null!==r&&void 0!==r?r:null}),[r,i])},I=n(0);const E={failed:!1,loaded:!1,loading:!1};function T(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{...E,...e}}const D={moduleRequest:T(),contentRequest:T(),chapterRequest:T({loading:!0}),rawContents:[],current:{module:{},block:{chapters:[]},chapter:{},navigation:{}},sidebar:[],trackData:{},layout:"hard-skills",chapterData:{}};function L(e,t){let{type:n,payload:o,currentURL:c,contentURL:r,status:i}=t;switch(n){case"module-request/started":return{...e,moduleRequest:{...e.moduleRequest,loading:!0}};case"current-url-updated":case"module-request/completed":const t=g(o,c);return{...e,...t,moduleRequest:{failed:!1,loaded:!0,loading:!1},contentRequest:{...e.contentRequest,loading:t.current.chapter.url!==e.loadedContentURL}};case"module-request/failed":return{...e,moduleRequest:{...e.moduleRequest,failed:!0,loading:!1}};case"content-request/started":return{...e,contentRequest:{...e.contentRequest,loading:!0}};case"content-request/completed":return{...e,contentRequest:{failed:!1,loaded:!0,loading:!1},rawContents:R(o),loadedContentURL:r};case"content-request/failed":return{...e,contentRequest:{...e.contentRequest,failed:{status:i},loading:!1}};case"chapter-request/started":return{...e,chapterRequest:{...e.chapterRequest,loading:!0}};case"chapter-request/completed":return{...e,...j(o,c),chapterRequest:{failed:!1,loaded:!0,loading:!1}};case"chapter-request/failed":return{...e,chapterRequest:{...e.chapterRequest,failed:{status:i},loading:!1}};case"chapter-inner-raw-content/changed":return{...e,...j({chapterData:e.chapterData,chapterSiblings:e.chapterData.chapterSiblings},c)};default:throw new Error(`Unhandled action type: ${n}`)}}function U(e){let{children:t,providedState:n={}}=e;const[r,i]=Object(o.useReducer)(L,{...D,...n});return C(r.trackData),w(r.trackData),q(r.trackData),x(r.trackData),Object(I.jsx)(c.Provider,{value:[r,i],children:t})}function $(){const e=Object(o.useContext)(c);if(!e)throw new Error("useContent must be used within a CourseContentContext");return e}},2457:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(52),r=n(13),i=n(65),l=n(2215),a=n(48),s=n(2207),u=n(2191),d=n(129),b=n(441),v=n(20);const p="/api/v2/content/chapters/:chapterId";var h=async function(e){const t=p.replace(":chapterId",e);return(await v.b.get(t,{headers:{Accept:"application/json"}})).data},f=n(0);function m(){var e;const[t,n]=Object(l.b)(),{chapterRequest:v,chapterData:p,sidebar:m,trackData:_,breadcrumbItems:j,layout:O}=t,{rawContent:k,title:y,navigation:g,type:R,blockOrder:S,order:C}=p,q=Object(i.k)(),{chapterId:w,sectionId:x,subSectionId:I}=Object(i.m)(),{pathname:E}=Object(i.l)(),T=E.includes("/real-life-engineer"),D=E.includes("/trybe-talks");Object(o.useEffect)((()=>{w&&(async(e,t,n)=>{e({type:"chapter-request/started"});try{const o=await h(t);e({type:"chapter-request/completed",payload:{chapterData:Object(d.a)(o.data),chapterSiblings:Object(d.a)(o.meta.siblings)},currentURL:n})}catch(r){var o,c;e({type:"chapter-request/failed",status:null!==(o=null===r||void 0===r||null===(c=r.response)||void 0===c?void 0:c.status)&&void 0!==o?o:500})}})(n,w,E)}),[w]);Object(c.h)(S&&C?`${S}.${C} ${y}`:y);Object(o.useEffect)((()=>{(x||I)&&v.loaded&&n({type:"chapter-inner-raw-content/changed",payload:{},currentURL:E})}),[E,v.loaded,n,I,x]);const L=Object(o.useCallback)(((e,t)=>{q.push(`${e}?use_case=${t}`)}),[q]),U=Object(o.useMemo)((()=>({content:k})),[k]);return!v.loaded&&v.loading?Object(f.jsx)(r.f,{}):404===(null===(e=v.failed)||void 0===e?void 0:e.status)&&(!["hard_skill","hard-skills","soft_skill","soft-skills","career"].includes(R)||Object(s.a)(E))||T||D?Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{children:Object(f.jsx)(b.a,{})}),Object(f.jsx)(a.e,{})]}):v.failed?Object(f.jsx)(i.c,{to:`/${v.failed.status}`}):Object(f.jsx)(u.a,{sidebarItems:m,onUrlChange:L,breadcrumbItems:j,contentTitle:y,navigation:g,trackData:_,classLayout:O,currentRawContent:U,isLoadingContent:v.loading})}t.default=Object(o.memo)(m)}}]);
//# sourceMappingURL=24.f74e67da.chunk.js.map