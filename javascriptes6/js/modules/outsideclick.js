export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outSide = 'data-outside';
  const hasOutsideAttribute = element.hasAttribute(outSide);

  if (!hasOutsideAttribute) {
    events.forEach(userEvent => {
      setTimeout(() => { html.addEventListener(userEvent, handleOutsideClick); })
    })
    element.setAttribute(outSide, '');
  }

  function handleOutsideClick(event) {
    const isElementEqualTarget = element.contains(event.target);

    if (!isElementEqualTarget) {
      element.removeAttribute(outSide);
      events.forEach(userEvent => {
        html.removeEventListener(userEvent, handleOutsideClick);
      })
      callback();
    }
  }
}