(function (document, window) {
  const $tabMenu = document.querySelectorAll('[data-js="tab-menu"] li');
  const $tabContent = document.querySelectorAll('[data-js="tab-content"] section');
  const activeClass = 'ativo';

  if ($tabMenu.length && $tabContent.length) {
    $tabContent[0].classList.add(activeClass);

    function activeTab(index) {
      $tabContent.forEach(section => section.classList.remove(activeClass));
      $tabContent[index].classList.add(activeClass);
    }

    $tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => activeTab(index))
    })
  }

  const faqList = document.querySelectorAll('[data-js="faq-lista"] dt')
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
})(document, window);