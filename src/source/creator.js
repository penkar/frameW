import * as utilities from './utilities.js'

export const ce = (ele, {style = null, children = null, sClass = '', text = '', attr = '', href = '', id = ''} = {}) => {
  let html = document.createElement(ele);
  if(style) setStyle(html, style);
  if(children) appender(html, children);
  if(sClass) classset(html, sClass);
  if(text) innertext(html, text);
  if(href) innerhref(html, href);
  if(attr) innerattr(html, attr);
  if(id) idset(html, id);
  return html;
}

export const idset = (ele, id) => {
  return ele.id = id;
}

export const innerhref = (ele, text) => {
  return ele.href = text;
}

export const innerattr = (ele, text) => {
  return ele.innerText = text;
}

export const setStyle = (element, styleObject) => {
  for(var i in styleObject) {
    element.style[i] = styleObject[i];
  }
  return element;
}

export const appender = (element, children) => {
  for(var child of children) { element.appendChild(child); }
  return element;
}

export const fin = (ele) => {
  // utilities.zeroMargin();
  let doc = document.getElementsByTagName('body')[0];
  doc.appendChild(ele);
}

export const classset = (ele, text) => {
  return ele.className = text;
}

export const innertext = (ele, text) => {
  return ele.innerText = text;
}
