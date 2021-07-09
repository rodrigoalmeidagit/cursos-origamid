export default function initScrollAnimacao() {
  const $sections = document.querySelectorAll('[data-js="scroll"]');
  const activeClass = 'ativo';

  if ($sections.length) {
    const windowSixteenPercent = window.innerHeight * 0.6;
    $sections[0].classList.add(activeClass)

    function scrollAnimate() {
      $sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = (sectionTop - windowSixteenPercent) < 0
        if (isSectionVisible) {
          section.classList.add(activeClass);
        }
      })
    }

    window.addEventListener('scroll', scrollAnimate)
  }
}