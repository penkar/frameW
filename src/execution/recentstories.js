import {ce} from '../source';

export function RecentStories(sampleArray) {
  let array = [ce('li', {sClass:'label', text:'In the News '})];
  sampleArray.map(function(item) {
    array.push(ce('li', {
      sClass:'recent-sectional-title',
      children:[ ce('a', {text:item.title, href:`#${item.id}`}) ]
    }));
  })
  let html = ce('ul', {
    sClass:'recent-sectional',
    children: array,
  })
  return html;
}
