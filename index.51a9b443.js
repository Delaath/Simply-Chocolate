(()=>{const e={openModalBtn:document.querySelector("[data-open-modal]"),closeModalBtn:document.querySelector("[data-close-modal]"),modal:document.querySelector("[data-modal]")};function t(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",t),e.closeModalBtn.addEventListener("click",t)})(),document.getElementById("card-number").addEventListener("input",(function(){const e=document.getElementById("card-logo"),t=this.value;/^4/.test(t)?(e.src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",e.style.visibility="visible"):/^5[1-5]/.test(t)?(e.src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",e.style.visibility="visible"):e.style.visibility="hidden"}));
//# sourceMappingURL=index.51a9b443.js.map
