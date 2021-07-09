export default function initFaqAccordion() {
  const faqList = document.querySelectorAll('[data-js="faq-lista"] dt')
  const activeClass = 'ativo';

  if (faqList.length) {
    faqList[0].classList.add(activeClass);
    faqList[0].nextElementSibling.classList.add(activeClass);

    function faqListAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    faqList.forEach((item) => {
      item.addEventListener('click', faqListAccordion)
    });
  }
}