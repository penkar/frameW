import {ce} from '../source';
export function NewsButton () {
  return [
    ce('div', {
      style:{fontSize:'17px', padding:'2px 10px'},
      sClass:'news-button',
      html:'\u26B2'
    }),
    ce('div', {sClass:'news-button', html:'Sections &#9776;'}),
  ]
}
