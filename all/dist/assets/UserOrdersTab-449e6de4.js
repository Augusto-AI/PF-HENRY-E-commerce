import{u as d,a as r,j as s}from"./index-1dd8d519.js";const l=()=>{const a=d(e=>e.purchasedItems);console.log(a);const c=Object.values(a);return r("div",{className:"loader",style:{minHeight:"80vh"},children:[s("h3",{children:"My Orders"}),c.length!==0?c.map(e=>r("div",{className:"order-card",children:[s("img",{src:e.image,alt:e.description}),s("p",{children:e.description}),r("p",{children:["Brand: ",e.brand]}),r("p",{children:["Price: $",e.price]}),r("p",{children:["Quantity: ",e.quantity]})]},e.id)):s("strong",{children:s("span",{className:"text-subtle",children:"You don't have any orders"})})]})};export{l as default};