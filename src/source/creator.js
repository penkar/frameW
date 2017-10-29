import * as utilities from './utilities.js'

export const ce = (ele, {styles = null, children = null, classList = '', text = ''} = {}) => {
  let html = document.createElement(ele);
  if(styles) setStyle(html, styles);
  if(children) appender(html, children);
  if(classList) classset(html, classList)
  if(text) innertext(html, text)

  return html;
}

export const setStyle = (element, styleObject) => {
  for(var i in styleObject) {
    element.style[i] = styleObject[i];
  }
  return element;
}

export const appender = (element, children) => {
  for(var child of children) {
    element.appendChild(child);
  }
  return element;
}

export const fin = (ele) => {
  utilities.zeroMargin();
  let doc = document.getElementsByTagName('body')[0];
  doc.appendChild(ele);
}

export const classset = (ele, text) => {
  return ele.className = text;
}

export const innertext = (ele, text) => {
  return ele.innerText = text;
}
