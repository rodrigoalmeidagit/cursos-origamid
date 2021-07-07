const $btnAbrir = document.querySelector('[data-js="abrir"]');
const $btnFechar = document.querySelector('[data-js="modal"]');
const $containerModal = document.querySelector('[data-js="container"]');
const activeClass = 'ativo';

if ($btnAbrir && $btnFechar && $containerModal) {
  function abrirModal(event) {
    event.preventDefault();
    $containerModal.classList.add(activeClass);
  }

  function fecharModal(event) {
    event.preventDefault()
    $containerModal.classList.remove(activeClass)
  }

  function clickForaModal(event) {
    if (event.target === this)
      fecharModal(event);
  }

  $btnAbrir.addEventListener('click', abrirModal)
  $btnFechar.addEventListener('click', fecharModal)
  $containerModal.addEventListener('click', clickForaModal)
}