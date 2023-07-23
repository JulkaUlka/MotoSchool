(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-open]"),
    closeModalBtns: document.querySelectorAll("[data-modal-close]"),
    modals: document.querySelectorAll("[data-modal]"),
  };

  refs.openModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => toggleModal(btn.dataset.modalTarget));
  });

  refs.closeModalBtns.forEach((btn) => {
    btn.addEventListener("click", () => closeModal());
  });

  refs.modals.forEach((modal) => {
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal();
    }
  });

  function toggleModal(modalTarget) {
    const modal = document.querySelector(modalTarget);
    modal.classList.toggle("is-hidden");
    modal.addEventListener("click", (event) => {
      if (event.target === modal) {
        closeModal();
      }
    });
  }

  function closeModal() {
    const openModal = document.querySelector(".backdrop:not(.is-hidden)");
    if (openModal) {
      openModal.closest(".backdrop").classList.add("is-hidden");
    }
  }
})();
