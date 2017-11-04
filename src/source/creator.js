export const ce = ({ele = 'div', style, children = [], sClass, text, href, id, html, callbacks} = {}) => {
  if(!ele) return null;
  let element = document.createElement(ele);
  for(var i in style) { element.style[i] = style[i]; };
  for(var j in callbacks) { element.addEventListener(j, callbacks[j]); };
  for(var child of children) { child && element.appendChild(child); };
  if(sClass) element.className = sClass;
  if(text) element.innerText = text;
  if(href) element.href = href;
  if(id) element.id = id;
  if(html) element.innerHTML = html;
  return element;
}

export const fin = (ele) => {
  let body = document.getElementsByTagName('body')[0], app = document.getElementById('app');
  if(app) {
    body.replaceChild(ele, app);
  } else {
    body.appendChild(ele);
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
