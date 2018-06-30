import {ce} from '../source';
export function NewsButton () {
  let click = () => {
    let body = document.getElementById('app');
    if(body.className.indexOf('toc') === -1) {
      body.className += ' toc';
    } else {
      body.className = body.className.replace(' toc', '');
    }
  }, spyGlassCallback = () => {
    let headerRow = document.getElementById('header-row');
    if(headerRow.className.indexOf('input-search') === -1) {
      headerRow.className += ' input-search';
    } else {
      headerRow.className = headerRow.className.replace(' input-search', '');
    }
  }
  
  return [
    ce({
      sClass:`news-button spyglass`,
      children:[
        ce({html:'\u26B2', callbacks:{click:spyGlassCallback}}),
        ce({ele:'input', sClass:'input-search'}),
      ]
    }),
    ce({sClass:'news-button', html:'Sections &#9776;', callbacks:{click}}),
  ]
}
