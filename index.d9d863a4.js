(()=>{let e={openModalBtn:document.querySelector("[data-open-modal]"),closeModalBtn:document.querySelector("[data-close-modal]"),modal:document.querySelector("[data-modal]")};function o(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{let e={openModalBtn:document.querySelector("[data-open-modal-2]"),closeModalBtn:document.querySelector("[data-close-modal-2]"),modal:document.querySelector("[data-modal-2]")};function o(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),(()=>{let e={openModalBtn:document.querySelector("[data-open-modal-3]"),closeModalBtn:document.querySelector("[data-close-modal-3]"),modal:document.querySelector("[data-modal-3]")};function o(){e.modal.classList.toggle("is-hidden"),document.body.classList.toggle("no-scroll")}e.openModalBtn.addEventListener("click",o),e.closeModalBtn.addEventListener("click",o)})(),document.getElementById("card-number").addEventListener("input",function(){let e=document.getElementById("card-logo"),o=this.value;/^4/.test(o)?(e.src="https://upload.wikimedia.org/wikipedia/commons/0/04/Visa.svg",e.style.visibility="visible"):/^5[1-5]/.test(o)?(e.src="https://upload.wikimedia.org/wikipedia/commons/2/2a/Mastercard-logo.svg",e.style.visibility="visible"):e.style.visibility="hidden"}),new Splide("#sliderchoco",{type:"loop",pading:0,autoplay:!0}).mount();
//# sourceMappingURL=index.d9d863a4.js.map
