import outSideClick from "./outsideclick.js";

export default function initDropDownMenu() {
  const $dropdownMenu = document.querySelectorAll('[data-js="dropdown"]');
  const userEvents = ['touchstart', 'click'];

  $dropdownMenu.forEach((menu) => {
    userEvents.forEach((userEvent) => {
      menu.addEventListener(userEvent, handleClick)
    })
  });

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outSideClick(this, userEvents, () => {
      this.classList.remove('active');
    });
  }
}

