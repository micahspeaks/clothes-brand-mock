const products=[
 {code:"NT-001A",name:"Reversible Shell Bomber",description:"Oversized reversible shell with detachable hood, dual-entry pockets and matte hardware.",price:"$240",image:"assets/olive-bomber.png",tag:"Limited"},
 {code:"NT-001B",name:"Heavyweight Crop Hoodie",description:"520 GSM brushed cotton, sculpted hood and cropped box fit with dropped shoulders.",price:"$160",image:"assets/black-hoodie.png",tag:"New"},
 {code:"NT-001C",name:"Magenta Uniform Set",description:"Relaxed hoodie and track trouser cut as a single monochrome uniform.",price:"$220",image:"assets/pink-campaign.png",tag:"Drop 001"}
];
let bag=0,current=0,selectedSize="";
const grid=document.querySelector("#product-grid"),dialog=document.querySelector("#product-dialog"),toast=document.querySelector("#toast");
grid.innerHTML=products.map((p,i)=>`<article class="product-card" data-index="${i}"><div class="product-image"><img src="${p.image}" alt="${p.name}"><span>${p.tag}</span></div><div class="product-meta"><h3>${p.name}</h3><p>${p.code}</p><strong>${p.price}</strong></div></article>`).join("");
function openProduct(i){current=i;selectedSize="";const p=products[i];document.querySelector("#dialog-image").src=p.image;document.querySelector("#dialog-image").alt=p.name;document.querySelector("#dialog-code").textContent=p.code+" / DROP 001";document.querySelector("#dialog-name").textContent=p.name;document.querySelector("#dialog-description").textContent=p.description;document.querySelector("#dialog-price").textContent=p.price;document.querySelectorAll("#sizes button").forEach(b=>b.classList.remove("active"));dialog.showModal()}
grid.querySelectorAll(".product-card").forEach(card=>card.onclick=()=>openProduct(+card.dataset.index));
document.querySelector(".close").onclick=()=>dialog.close();
dialog.addEventListener("click",e=>{if(e.target===dialog)dialog.close()});
document.querySelectorAll("#sizes button").forEach(button=>button.onclick=()=>{selectedSize=button.textContent;document.querySelectorAll("#sizes button").forEach(b=>b.classList.remove("active"));button.classList.add("active")});
document.querySelector("#dialog-add").onclick=()=>{if(!selectedSize){toast.textContent="Select a size";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1500);return}bag++;document.querySelector("#bag-count").textContent=bag;dialog.close();toast.textContent=products[current].name+" / "+selectedSize+" added";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1800)};
document.querySelector(".bag").onclick=()=>{bag=0;document.querySelector("#bag-count").textContent=0;toast.textContent="Bag cleared";toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),1300)};
document.querySelector("#view-toggle").onclick=e=>{grid.classList.toggle("compact");e.target.textContent=grid.classList.contains("compact")?"Standard view":"Compact view"};
document.querySelector(".menu-button").onclick=()=>document.querySelector(".left-nav").classList.toggle("open");
document.querySelectorAll(".left-nav a").forEach(a=>a.onclick=()=>document.querySelector(".left-nav").classList.remove("open"));
document.querySelector("#newsletter-form").onsubmit=e=>{e.preventDefault();document.querySelector("#message").textContent="YOU'RE ON THE LIST.";e.target.reset()};
window.addEventListener("load",()=>setTimeout(()=>document.querySelector("#loader").classList.add("done"),650));
