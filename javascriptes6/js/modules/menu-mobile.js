import outSideClick from './outsideclick.js';

export default function initMenuMobile() {
  const $menuBtn = document.querySelector('[data-js="menu"]')
  const $menuList = document.querySelector('[data-js="list"]')
  const eventos = ['click', 'touchstart'];

  if ($menuBtn) {
    function openMenu(event) {
      $menuList.classList.add('active')
      $menuBtn.classList.add('active')
      outSideClick($menuList, eventos, () => {
        console.log('teste')
        $menuList.classList.remove('active')
        $menuBtn.classList.remove('active')
      })
    }
    eventos.forEach(evento => $menuBtn.addEventListener(evento, openMenu))
  };
}
