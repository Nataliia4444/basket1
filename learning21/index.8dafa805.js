const t={list:document.getElementById("list-container"),input:document.getElementById("input-box"),inputName:document.getElementById("input-box-name"),btnWriteName:document.querySelector(".button-write"),btnAdd:document.querySelector(".button-add")};const e=[],n=[];function o(o){if(t.input.value.trim().length>0){const o=document.createElement("li");o.textContent=t.input.value,t.list.appendChild(o);const l=document.createElement("button");l.className="btn-card btn",l.textContent="Delete",o.appendChild(l);const a=document.createElement("button");a.textContent="Write",o.appendChild(a),l.addEventListener("click",(function(e){t.list.removeChild(o)})),t.input.value="",a.addEventListener("click",(function(){const t={name:a.parentNode.firstChild.textContent};let o=localStorage.getItem("KEY");if(o){JSON.parse(o).map((t=>e.push(t)))}e.push(t),a.disabled=!0,a.classList.add("btn-disabled"),e.map((t=>{n.push(t.name)}));let l=[];Array.from(new Set(n)).map((t=>{const e={name:t};l.push(e)})),localStorage.setItem("KEY",JSON.stringify(l))}))}}t.btnAdd.addEventListener("click",o),document.addEventListener("keypress",(function(t){"Enter"===t.key&&o()})),t.btnWriteName.addEventListener("click",(e=>{t.inputName.placeholder=`${t.inputName.value}`,t.inputName.value=""})),function(){const e=localStorage.getItem("KEY");if(e){const n=JSON.parse(e);t.list.insertAdjacentHTML("beforeend",n.map((t=>`\n         <li>\n         ${t.name}\n         <button class="btn-card btn">Delete</button>\n         </li>\n      `)).join(""))}document.querySelectorAll(".btn-card").forEach((e=>{e.addEventListener("click",(function(e){console.log(e.target.closest("li")),t.list.removeChild(e.target.closest("li")),localStorage.removeItem("KEY")}))}))}();
//# sourceMappingURL=index.8dafa805.js.map