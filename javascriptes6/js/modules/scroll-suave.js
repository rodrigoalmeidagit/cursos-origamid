export default function initScrollSuave() {
  const $menuLinks = document
    .querySelectorAll('[data-js="menu-link"] a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  $menuLinks.forEach(item => {
    item.addEventListener('click', scrollToSection)
  })
}