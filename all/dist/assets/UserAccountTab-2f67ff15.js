import{w as N,u as o,j as e,I as m,A as c,d as b,P as s}from"./index-018eeca7.js";var l="C:\\Users\\kubat\\OneDrive\\Masaüstü\\PF-HENRY-E-commerce\\all\\src\\views\\account\\components\\UserAccountTab.jsx";const d=u=>{const i=o(a=>a.profile),n=o(a=>a.darkMode),r=Object.values(n)[0];return e("div",{className:`user-profile ${r?"dark-mode":""}`,children:e("div",{className:`user-profile-block ${r?"dark-mode":""}`,children:[e("div",{className:`user-profile-banner ${r?"dark-mode":""}`,children:[e("div",{className:"user-profile-banner-wrapper",children:e(m,{alt:"Banner",className:"user-profile-banner-img",src:i.banner},void 0,!1,{fileName:l,lineNumber:22,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:21,columnNumber:11},void 0),e("div",{className:"user-profile-avatar-wrapper",children:e(m,{alt:"Avatar",className:"user-profile-img",src:i.avatar},void 0,!1,{fileName:l,lineNumber:29,columnNumber:13},void 0)},void 0,!1,{fileName:l,lineNumber:28,columnNumber:11},void 0),e("button",{className:"button button-small user-profile-edit",onClick:()=>u.history.push(c),type:"button",children:"Edit Account"},void 0,!1,{fileName:l,lineNumber:35,columnNumber:11},void 0)]},void 0,!0,{fileName:l,lineNumber:20,columnNumber:9},void 0),e("div",{className:`user-profile-details ${r?"dark-mode":""}`,children:[e("h2",{className:`user-profile-name ${r?"dark-mode":""}`,children:i.fullname},void 0,!1,{fileName:l,lineNumber:44,columnNumber:11},void 0),e("span",{children:"Email"},void 0,!1,{fileName:l,lineNumber:45,columnNumber:11},void 0),e("br",{},void 0,!1,{fileName:l,lineNumber:46,columnNumber:11},void 0),e("h5",{children:i.email},void 0,!1,{fileName:l,lineNumber:47,columnNumber:11},void 0),e("span",{children:"Address"},void 0,!1,{fileName:l,lineNumber:48,columnNumber:11},void 0),e("br",{},void 0,!1,{fileName:l,lineNumber:49,columnNumber:11},void 0),i.address?e("h5",{children:i.address},void 0,!1,{fileName:l,lineNumber:51,columnNumber:13},void 0):e("h5",{className:"text-subtle text-italic",children:"Address not set"},void 0,!1,{fileName:l,lineNumber:53,columnNumber:13},void 0),e("span",{children:"Mobile"},void 0,!1,{fileName:l,lineNumber:55,columnNumber:11},void 0),e("br",{},void 0,!1,{fileName:l,lineNumber:56,columnNumber:11},void 0),i.mobile?e("h5",{children:i.mobile.value},void 0,!1,{fileName:l,lineNumber:58,columnNumber:13},void 0):e("h5",{className:"text-subtle text-italic",children:"Mobile not set"},void 0,!1,{fileName:l,lineNumber:60,columnNumber:13},void 0),e("span",{children:"Date Joined"},void 0,!1,{fileName:l,lineNumber:62,columnNumber:11},void 0),e("br",{},void 0,!1,{fileName:l,lineNumber:63,columnNumber:11},void 0),i.dateJoined?e("h5",{children:b(i.dateJoined)},void 0,!1,{fileName:l,lineNumber:65,columnNumber:13},void 0):e("h5",{className:"text-subtle text-italic",children:"Not available"},void 0,!1,{fileName:l,lineNumber:67,columnNumber:13},void 0)]},void 0,!0,{fileName:l,lineNumber:43,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:19,columnNumber:7},void 0)},void 0,!1,{fileName:l,lineNumber:18,columnNumber:5},void 0)};d.propTypes={history:s.shape({push:s.func}).isRequired};const f=N(d);export{f as default};
