import checkKey from './utilities';

export const ce = ({ele = 'div', style, children = [], sClass, text, href, id, html, callbacks, src} = {}, renderPoint = null) => {
  if(!ele) return null;
  const element = document.createElement(ele);
  for(let i in style) { element.style[i] = style[i]; };
  for(let j in callbacks) { element.addEventListener(j, callbacks[j]); };
  for(let child of children) { child && element.appendChild(child); };
  if(sClass) element.className = sClass;
  if(text) element.innerText = text;
  if(href) element.href = href;
  if(id) element.id = id;
  if(html) element.innerHTML = html;
  if(src) element.src = src;

  if(renderPoint) {
    return renderPoint.appendChild(element);
  } else {
    return element;
  }
}

export const hash = () => {
  let hash = window.location.hash.slice(1,window.location.hash.length);
  if(hash) {
    return JSON.parse(decodeURIComponent(hash))
  } else {
    return false;
  }
}
