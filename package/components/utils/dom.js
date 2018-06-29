export function getOffset (el) {
  const box = el.getBoundingClientRect();
  const body = document.body;
  const clientTop = el.clientTop || body.clientTop || 0;
  const clientLeft = el.clientLeft || body.clientLeft || 0;
  const scrollTop = window.pageYOffset || el.scrollTop;
  const scrollLeft = window.pageXOffset || el.scrollLeft;

  return {
    top: box.top + scrollTop - clientTop,
    left: box.left + scrollLeft - clientLeft
  }
}

export function getDom (el) {
  const box = el.getBoundingClientRect();

  return {
    x: box.x,
    y: box.y,
    width: box.width,
    height: box.height,
    top: box.top,
    left: box.left,
    right: box.right,
    bottom: box.bottom
  }
}
