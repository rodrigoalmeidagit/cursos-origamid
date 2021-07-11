export default function outSideClick(element, events, callback) {
  const html = document.documentElement;
  const outSide = 'data-outside';
  const hasOutsideAttribute = element.hasAttribute(outSide);

  if (!hasOutsideAttribute) {
    events.forEach(event => {
      html.addEventListener(event, handleOutsideClick);
    })
    element.setAttribute(outSide, '');
  }

  function handleOutsideClick(event) {
    const isElementEqualTarget = element.contains(event.target);

    if (!isElementEqualTarget) {
      element.removeAttribute(outSide);
      events.forEach(event => {
        html.removeEventListener(event, handleOutsideClick);
      })
      callback();
    }
  }
}