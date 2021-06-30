(function (document, window) {
  const $tabMenu = document.querySelectorAll('[data-js="tab-menu"] li');
  const $tabContent = document.querySelectorAll('[data-js="tab-content"] section');

  if ($tabMenu.length && $tabContent.length) {
    $tabContent[0].classList.add('ativo');

    function activeTab(index) {
      $tabContent.forEach(section => section.classList.remove('ativo'));
      $tabContent[index].classList.add('ativo');
    }

    $tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index))
    })
  }
})(document, window);