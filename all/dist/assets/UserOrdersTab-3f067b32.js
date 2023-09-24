import{R as n,u as c,a as d,j as e}from"./index-5df575e0.js";const l=()=>{const i=c(r=>r.purchasedItems),s=Object.values(i);let o=[];if(s&&s[0])for(let r=0;r<s.length;r++){const t=s[r];for(let a=0;a<t.length;a++)Array.isArray(t[a])&&(o=[...o,...t[a]],console.log(o))}return d("div",{className:"user-orders-tab",children:[e("style",{children:`
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
        `}),e("h3",{children:"My Orders"}),o.length===0?e("strong",{children:e("span",{className:"no-orders",children:"You don't have any orders"})}):o.map(r=>d("div",{className:"order-item",children:[e("p",{className:"order-item n",children:r.name}),e("img",{src:r.image,alt:r.name}),e("p",{children:r.description}),d("p",{children:["Brand: ",r.brand]}),d("p",{className:"price",children:["Price: ",r.price*r.quantity," $"]}),d("p",{children:["Quantity purchased: ",r.quantity]})]},r.id))]})},h=n.memo(l);export{h as default};
