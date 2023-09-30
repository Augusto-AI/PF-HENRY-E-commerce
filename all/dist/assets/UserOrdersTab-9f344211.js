import{r as i,a as v,b as t,j as r,L as x,S as k,g as T,f as y,R as j}from"./index-c9e97497.js";const F=({productId:h,onClose:l})=>{const[s,p]=i.useState(""),[d,g]=i.useState(1),[u,f]=i.useState(!1),{profile:m}=v(o=>({profile:o.profile})),{auth:w}=v(o=>({auth:o.auth}));return t("div",{children:[r("h2",{className:"tittle",children:u?"Send review successfully!":"LEAVE A REVIEW"}),u?r("div",{children:r(x,{to:`/product/${h}`,className:"review-submit-button",children:"Close"})}):t("form",{className:"review-form",onSubmit:async o=>{o.preventDefault();try{const{date:n,time:R}=T();await y.db.collection("reviews").add({productId:h,userId:w.id,username:m.fullname,email:m.email,text:s,rating:d,date:n,time:R,edited:!1}),f(!0)}catch(n){console.error("Error al enviar la revisión:",n)}},children:[t("div",{children:["Comment:",r("textarea",{id:"reviewText",className:"review-textarea",value:s,onChange:o=>p(o.target.value),placeholder:"Write your review here...",required:!0})]}),r("div",{}),t("div",{className:"star-rating",children:["Rating:",r(k,{rating:d,onRatingChange:g})]}),r("button",{type:"submit",className:"review-submit-button",children:"Send"})]})]})};const O=()=>{const h=v(e=>e.purchasedItems),l=Object.values(h);let s=[];if(l&&l[0])for(let e=0;e<l.length;e++){const c=l[e];for(let a=0;a<c.length;a++)Array.isArray(c[a])&&(s=[...s,...c[a]],console.log(s))}const[p,d]=i.useState(!1),[g,u]=i.useState(null),[f,m]=i.useState(null);i.useState([]);const w=e=>{u(e),d(!0),m(e.id),console.log(e),console.log(s)},b=()=>{u(null),d(!1)},o=async e=>{const c=y.db.collection("reviews"),a=[];try{(await c.where("userId","==",e).get()).forEach(E=>{const I=E.data();a.push(I)})}catch(S){console.error("Error fetching user reviews:",S)}return a},{auth:n,profile:R}=v(e=>({auth:e.auth,profile:e.profile})),[N,C]=i.useState([]);return i.useEffect(()=>{n.id&&o(n.id).then(e=>{C(e)})},[n.id]),t("div",{className:"user-orders-tab",children:[r("style",{children:`
          .user-orders-tab {
            margin: 20px;
            padding: 20px;
            border: 1px solid #ccc;
            background-color: smoke;
            border-radius: 100px;
          }

          h3 {
            font-size: 24px;
            margin-bottom: 10px;
          }

          .order-item {
            margin-bottom: 20px;
            padding: 10px;
            border: 1px solid #ddd;
            background-color: #fff;
          }

          .order-item img {
            max-width: 150px;
            height: auto;
          }
          

          .order-item p {
            margin: 0;
          }
          .order-item n {
            background-color: red;
            font-weight: bold;
            font-style: italic;
          }

          .order-item p:first-child {
            font-weight: bold;
          }

          .order-item p.price {
          }

          .no-orders {
            font-weight: bold;
            font-style: italic;
          }
        `}),r("h3",{children:"My Orders"}),s.length===0?r("strong",{children:r("span",{className:"no-orders",children:"You don't have any orders"})}):s.map(e=>{const c=N.some(a=>a.productId===e.id);return t("div",{className:"order-item",children:[r("p",{className:"order-item n",children:e.name}),r("img",{src:e.image,alt:e.name}),r("p",{children:e.description}),t("p",{children:["Brand: ",e.brand]}),t("p",{className:"price",children:["Price: ",e.price*e.quantity," $"]}),t("p",{children:["Quantity purchased: ",e.quantity]}),c?r("div",{className:"review-successful",children:t("div",{children:["Review Successful!",r(x,{to:`/product/${e.id}`,className:"review-submit-button",children:"View Product"})]})}):r("button",{onClick:()=>w(e),disabled:e.reviewed,children:"Leave Review"})]},e.id)}),p&&r("div",{className:"review-modal",children:t("div",{className:"review-modal-content",children:[r("button",{className:"close-button",onClick:b,children:"Close"}),r(F,{productId:f,onClose:b})]})})]})},A=j.memo(O);export{A as default};
