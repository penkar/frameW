import {ce} from '../source';
export function NewsButton () {
  let click = () => {
    let body = document.getElementById('app');
    if(body.className.indexOf('toc') === -1) {
      body.className = 'toc';
    } else {
      body.className = '';
    }
  }
  return [
    ce({sClass:'news-button spyglass', children:[ce({html:'\u26B2'})]}),
    ce({sClass:'news-button', html:'Sections &#9776;', callbacks:{click}}),
  ]
}
