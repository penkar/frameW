import {ce} from '../source';
export function NewsButton () {
  let click = () => {
    let body = document.getElementById('app-body'), toc = document.getElementById('TableOfContents');
    if(body.className.indexOf('tableofcontents') === -1) {
      body.className = 'app-body tableofcontents', toc.className = 'open table-of-contents-component';
    } else {
      body.className = 'app-body', toc.className = 'table-of-contents-component';
    }
  }
  return [
    ce('div', {sClass:'news-button spyglass', children:[ce('div', {html:'\u26B2'})]}),
    ce('div', {sClass:'news-button', html:'Sections &#9776;', callbacks:{click}}),
  ]
}
