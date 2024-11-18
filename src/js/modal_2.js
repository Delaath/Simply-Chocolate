(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-open-modal-2]"),
      closeModalBtn: document.querySelector("[data-close-modal-2]"),
      modal: document.querySelector("[data-modal-2]"),
    };

    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);

    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();