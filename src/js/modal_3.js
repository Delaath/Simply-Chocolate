(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-open-modal-3]"),
      closeModalBtn: document.querySelector("[data-close-modal-3]"),
      modal: document.querySelector("[data-modal-3]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();