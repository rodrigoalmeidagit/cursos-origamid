import outSideClick from './outsideclick.js';

export default function initMenuMobile() {

}

const $menuBtn = document.querySelector('[data-js="menu"]')
const $menuList = document.querySelector('[data-js="list"]')

function openMenu(event) {
  $menuList.classList.add('active')
  $menuBtn.classList.add('active')
  outSideClick($menuList, ['click', 'touchstart'], () => {
    console.log('teste')
    $menuList.classList.remove('active')
    $menuBtn.classList.remove('active')
  })
}

$menuBtn.addEventListener('click', openMenu);