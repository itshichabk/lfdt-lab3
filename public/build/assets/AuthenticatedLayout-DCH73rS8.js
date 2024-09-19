import{r as a,j as e,a as l,q as g}from"./app-YjWIOk_X.js";import{A as p}from"./ApplicationLogo-Cp2vhCgP.js";import{X as f}from"./transition-l1B8vkFb.js";const h=a.createContext(),d=({children:t})=>{const[r,s]=a.useState(!1),n=()=>{s(o=>!o)};return e.jsx(h.Provider,{value:{open:r,setOpen:s,toggleOpen:n},children:e.jsx("div",{className:"relative",children:t})})},j=({children:t})=>{const{open:r,setOpen:s,toggleOpen:n}=a.useContext(h);return e.jsxs(e.Fragment,{children:[e.jsx("div",{onClick:n,children:t}),r&&e.jsx("div",{className:"fixed inset-0 z-40",onClick:()=>s(!1)})]})},b=({align:t="right",width:r="48",contentClasses:s="py-1 bg-white",children:n})=>{const{open:o,setOpen:c}=a.useContext(h);let x="origin-top";t==="left"?x="ltr:origin-top-left rtl:origin-top-right start-0":t==="right"&&(x="ltr:origin-top-right rtl:origin-top-left end-0");let u="";return r==="48"&&(u="w-48"),e.jsx(e.Fragment,{children:e.jsx(f,{show:o,enter:"transition ease-out duration-200",enterFrom:"opacity-0 scale-95",enterTo:"opacity-100 scale-100",leave:"transition ease-in duration-75",leaveFrom:"opacity-100 scale-100",leaveTo:"opacity-0 scale-95",children:e.jsx("div",{className:`absolute z-50 mt-2 rounded-md shadow-lg ${x} ${u}`,onClick:()=>c(!1),children:e.jsx("div",{className:"rounded-md ring-1 ring-black ring-opacity-5 "+s,children:n})})})})},v=({className:t="",children:r,...s})=>e.jsx(l,{...s,className:"block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out "+t,children:r});d.Trigger=j;d.Content=b;d.Link=v;const i=d;function y({active:t=!1,className:r="",children:s,...n}){return e.jsx(l,{...n,className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none "+(t?"border-indigo-400 text-gray-900 focus:border-indigo-700 ":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300 ")+r,children:s})}function m({active:t=!1,className:r="",children:s,...n}){return e.jsx(l,{...n,className:`w-full flex items-start ps-3 pe-4 py-2 border-l-4 ${t?"border-indigo-400 text-indigo-700 bg-indigo-50 focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700":"border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300"} text-base font-medium focus:outline-none transition duration-150 ease-in-out ${r}`,children:s})}function C({header:t,children:r}){const s=g().props.auth.user,[n,o]=a.useState(!1);return e.jsxs("div",{className:"min-h-screen bg-gray-100",children:[e.jsxs("nav",{className:"bg-white border-b border-gray-100",children:[e.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:e.jsxs("div",{className:"flex justify-between h-16",children:[e.jsxs("div",{className:"flex",children:[e.jsx("div",{className:"shrink-0 flex items-center",children:e.jsx(l,{href:"/",children:e.jsx(p,{className:"block h-9 w-auto fill-current text-gray-800"})})}),e.jsx("div",{className:"hidden space-x-8 sm:-my-px sm:ms-10 sm:flex",children:e.jsx(y,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})})]}),e.jsx("div",{className:"hidden sm:flex sm:items-center sm:ms-6",children:e.jsx("div",{className:"ms-3 relative",children:e.jsxs(i,{children:[e.jsx(i.Trigger,{children:e.jsx("span",{className:"inline-flex rounded-md",children:e.jsxs("button",{type:"button",className:"inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150",children:[s.name,e.jsx("svg",{className:"ms-2 -me-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:e.jsx("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})]})})}),e.jsxs(i.Content,{children:[e.jsx(i.Link,{href:route("profile.edit"),children:"Profile"}),e.jsx(i.Link,{href:route("logout"),method:"post",as:"button",children:"Log Out"})]})]})})}),e.jsx("div",{className:"-me-2 flex items-center sm:hidden",children:e.jsx("button",{onClick:()=>o(c=>!c),className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:e.jsxs("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:[e.jsx("path",{className:n?"hidden":"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"}),e.jsx("path",{className:n?"inline-flex":"hidden",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"})]})})})]})}),e.jsxs("div",{className:(n?"block":"hidden")+" sm:hidden",children:[e.jsx("div",{className:"pt-2 pb-3 space-y-1",children:e.jsx(m,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"})}),e.jsxs("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[e.jsxs("div",{className:"px-4",children:[e.jsx("div",{className:"font-medium text-base text-gray-800",children:s.name}),e.jsx("div",{className:"font-medium text-sm text-gray-500",children:s.email})]}),e.jsxs("div",{className:"mt-3 space-y-1",children:[e.jsx(m,{href:route("profile.edit"),children:"Profile"}),e.jsx(m,{method:"post",href:route("logout"),as:"button",children:"Log Out"})]})]})]})]}),t&&e.jsx("header",{className:"bg-white shadow",children:e.jsx("div",{className:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8",children:t})}),e.jsx("main",{children:r})]})}export{C as A};
