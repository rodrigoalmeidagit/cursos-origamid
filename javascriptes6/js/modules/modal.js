export default function initModal() {
  const $btnAbrir = document.querySelector('[data-js="abrir"]');
  const $btnFechar = document.querySelector('[data-js="modal"]');
  const $containerModal = document.querySelector('[data-js="container"]');
  const activeClass = 'ativo';

  if ($btnAbrir && $btnFechar && $containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      $containerModal.classList.toggle(activeClass);
    }

    function clickForaModal(event) {
      if (event.target === this)
        toggleModal(event);
    }

    $btnAbrir.addEventListener('click', toggleModal)
    $btnFechar.addEventListener('click', toggleModal)
    $containerModal.addEventListener('click', clickForaModal)
  }
}