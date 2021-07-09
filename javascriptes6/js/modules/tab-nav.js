export default function initTabNav() {
  const $tabMenu = document.querySelectorAll('[data-js="tab-menu"] li');
  const $tabContent = document.querySelectorAll('[data-js="tab-content"] section');
  const activeClass = 'ativo';

  if ($tabMenu.length && $tabContent.length) {
    $tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      const direction = $tabContent[index].dataset.anime;
      $tabContent.forEach(section => section.classList.remove(activeClass));
      $tabContent[index].classList.add(activeClass, direction);
    }

    $tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index))
    })
  }
}