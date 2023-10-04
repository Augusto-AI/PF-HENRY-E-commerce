import{r as a,u as R,j as e,L as C,S as F,g as A,f as y,R as D,a as I}from"./index-018eeca7.js";var l="C:\\Users\\kubat\\OneDrive\\Masaüstü\\PF-HENRY-E-commerce\\all\\src\\views\\view_product\\ReviewForm.jsx";const P=({productId:c,onClose:x})=>{const[n,S]=a.useState(""),[m,v]=a.useState(1),[h,N]=a.useState(!1),{profile:b}=R(s=>({profile:s.profile})),{auth:w}=R(s=>({auth:s.auth}));return e("div",{children:[e("h2",{className:"tittle",children:h?"Send review successfully!":"LEAVE A REVIEW"},void 0,!1,{fileName:l,lineNumber:63,columnNumber:7},void 0),h?e("div",{children:e(C,{to:`/product/${c}`,className:"review-submit-button",children:"Close"},void 0,!1,{fileName:l,lineNumber:68,columnNumber:11},void 0)},void 0,!1,{fileName:l,lineNumber:67,columnNumber:9},void 0):e("form",{className:"review-form",onSubmit:async s=>{s.preventDefault();try{const{date:u,time:p}=A();await y.db.collection("reviews").add({productId:c,userId:w.id,username:b.fullname,email:b.email,text:n,rating:m,date:u,time:p,edited:!1}),N(!0)}catch(u){console.error("Error al enviar la revisión:",u)}},children:[e("div",{children:["Comment:",e("textarea",{id:"reviewText",className:"review-textarea",value:n,onChange:s=>S(s.target.value),placeholder:"Write your review here...",required:!0},void 0,!1,{fileName:l,lineNumber:76,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:74,columnNumber:7},void 0),e("div",{},void 0,!1,{fileName:l,lineNumber:85,columnNumber:7},void 0),e("div",{className:"star-rating",children:["Rating:",e(F,{rating:m,onRatingChange:v},void 0,!1,{fileName:l,lineNumber:91,columnNumber:9},void 0)]},void 0,!0,{fileName:l,lineNumber:89,columnNumber:7},void 0),e("button",{type:"submit",className:"review-submit-button",children:"Send"},void 0,!1,{fileName:l,lineNumber:93,columnNumber:7},void 0)]},void 0,!0,{fileName:l,lineNumber:73,columnNumber:5},void 0)]},void 0,!0,{fileName:l,lineNumber:62,columnNumber:5},void 0)};var r="C:\\Users\\kubat\\OneDrive\\Masaüstü\\PF-HENRY-E-commerce\\all\\src\\views\\account\\components\\UserOrdersTab.jsx";const T=()=>{const[c,x]=a.useState([]),{auth:n,profile:S}=R(o=>({auth:o.auth,profile:o.profile}));a.useEffect(()=>{n.id&&(async()=>{try{const d=await y.db.collection("orders").where("UserId","==",n.id).get(),t=[];d.forEach(f=>{const g=f.data(),U=f.id;t.push({...g,id:U})}),console.log(t),x(t)}catch(i){console.error("Error fetching user orders:",i)}})()},[n.id]);const[m,v]=a.useState(!1),[h,N]=a.useState(null),[b,w]=a.useState(null);a.useState([]);const E=o=>{N(o),v(!0),w(o.id)},s=()=>{N(null),v(!1)},u=async o=>{const i=y.db.collection("reviews"),d=[];try{(await i.where("userId","==",o).get()).forEach(f=>{const g=f.data();d.push(g)})}catch(t){console.error("Error fetching user reviews:",t)}return d},[p,O]=a.useState([]);a.useEffect(()=>{n.id&&u(n.id).then(o=>{O(o)})},[n.id]);const k=o=>{try{I.firestore().collection("orders").doc(o).update({isActive:!1}),console.log(o)}catch(i){console.error(i)}};return e("div",{className:"user-orders-tab",children:[e("style",{children:`
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

          .cancelar {
            font-weight: bold;
            font-style: italic;
          }

          .cancelar-boton {
            background-color: red;
            color: white;
            border-radius: 2em;
          }
        `},void 0,!1,{fileName:r,lineNumber:116,columnNumber:7},void 0),e("h3",{children:"My Orders"},void 0,!1,{fileName:r,lineNumber:178,columnNumber:7},void 0),c.length===0?e("strong",{children:e("span",{className:"no-orders",children:"You don't have any orders"},void 0,!1,{fileName:r,lineNumber:181,columnNumber:11},void 0)},void 0,!1,{fileName:r,lineNumber:180,columnNumber:9},void 0):c.map(o=>e("div",{className:"order-item",children:[o.isArrive?e("div",{children:"You cannot cancel your order anymore(You had an order.)"},void 0,!1,{fileName:r,lineNumber:196,columnNumber:7},void 0):o.isActive?e("div",{children:[e("button",{className:"cancelar-boton",onClick:()=>k(o.id),children:"Cancel"},void 0,!1,{fileName:r,lineNumber:189,columnNumber:11},void 0),e("div",{children:"You can only cancel your order before it arrives!"},void 0,!1,{fileName:r,lineNumber:190,columnNumber:11},void 0)]},void 0,!0,{fileName:r,lineNumber:188,columnNumber:9},void 0):e("div",{children:"Cancelled  (Your payment will be refunded within 3 business days.)"},void 0,!1,{fileName:r,lineNumber:193,columnNumber:9},void 0),o.product.map(i=>{const d=p.some(t=>t.productId===i.id);return e("div",{className:"order-item",children:[e("p",{className:"order-item n",children:i.name},void 0,!1,{fileName:r,lineNumber:205,columnNumber:19},void 0),e("img",{src:i.image,alt:i.name},void 0,!1,{fileName:r,lineNumber:206,columnNumber:19},void 0),e("p",{children:["Brand: ",i.brand]},void 0,!0,{fileName:r,lineNumber:207,columnNumber:19},void 0),e("p",{className:"price",children:["Price: ",i.price*i.quantity," $"]},void 0,!0,{fileName:r,lineNumber:208,columnNumber:19},void 0),e("p",{children:["Quantity purchased: ",i.quantity]},void 0,!0,{fileName:r,lineNumber:209,columnNumber:19},void 0),d?e("div",{className:"review-successful",children:e("div",{children:["Review Successful!",e(C,{to:`/product/${i.id}`,className:"review-submit-button",children:"View Product"},void 0,!1,{fileName:r,lineNumber:213,columnNumber:25},void 0)]},void 0,!0,{fileName:r,lineNumber:212,columnNumber:23},void 0)},void 0,!1,{fileName:r,lineNumber:211,columnNumber:21},void 0):e("button",{className:"review-submit-button",onClick:()=>E(i),disabled:i.reviewed,children:"Leave Review"},void 0,!1,{fileName:r,lineNumber:219,columnNumber:21},void 0)]},i.id,!0,{fileName:r,lineNumber:204,columnNumber:17},void 0)})]},o.id,!0,{fileName:r,lineNumber:185,columnNumber:11},void 0)),m&&e("div",{className:"review-modal",children:e("div",{className:"review-modal-content",children:[e("button",{className:"close-button",onClick:s,children:"X"},void 0,!1,{fileName:r,lineNumber:236,columnNumber:13},void 0),e(P,{productId:b,onClose:s},void 0,!1,{fileName:r,lineNumber:239,columnNumber:13},void 0)]},void 0,!0,{fileName:r,lineNumber:235,columnNumber:11},void 0)},void 0,!1,{fileName:r,lineNumber:234,columnNumber:9},void 0)]},void 0,!0,{fileName:r,lineNumber:115,columnNumber:5},void 0)},j=D.memo(T);export{j as default};
