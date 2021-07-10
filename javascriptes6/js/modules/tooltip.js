export default function initTooltip() {
  const $toolTips = document.querySelectorAll('[data-js="tooltip"]');
  const onMouseMove = {
    handleEvent(event) {
      this.tooltipBox.style.top = event.pageY + 20 + 'px';
      this.tooltipBox.style.left = event.pageX + 20 + 'px';
    }
  }
  const onMouseLeave = {
    handleEvent() {
      this.tooltipBox.remove();
      this.element.removeEventListener('mouseleave', onMouseLeave);
      this.element.removeEventListener('mousemove', onMouseMove);
    }
  }

  function onMouseOver(event) {
    const tooltipBox = createTooltip(this);
    tooltipBox.style.top = event.pageY + 20 + 'px';
    tooltipBox.style.left = event.pageX + 20 + 'px';

    onMouseMove.tooltipBox = tooltipBox;
    this.addEventListener('mousemove', onMouseMove);

    onMouseLeave.element = this;
    onMouseLeave.tooltipBox = tooltipBox;
    this.addEventListener('mouseleave', onMouseLeave);
  }

  function createTooltip(element) {
    const tooltipBox = document.createElement('div');
    const text = element.getAttribute('aria-label');
    tooltipBox.classList.add('tooltip');
    tooltipBox.innerText = text;
    document.body.appendChild(tooltipBox);
    return tooltipBox;
  }

  $toolTips.forEach((item) => {
    item.addEventListener('mouseover', onMouseOver)
  })
}

