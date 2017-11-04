import * as utilities from './utilities.js'
export const ce = (ele, {style, children = [], sClass, text, href, id, html} = {}) => {
  let element = document.createElement(ele);
  for(var i in style) { element.style[i] = style[i]; };
  for(var child of children) { element.appendChild(child); };
  if(sClass) element.className = sClass;
  if(text) element.innerText = text;
  if(href) element.href = href;
  if(id) element.id = id;
  if(html) element.innerHTML = html;
  return element;
}

export function fin(ele) {
  let doc = document.getElementsByTagName('body')[0];
  doc.appendChild(ele);
}
