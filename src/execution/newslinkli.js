import {ce} from '../source'

export function NewsLinkLi() {
  var links = ['politics', 'opinions', 'sports', 'local', 'national', 'world', 'business', 'tech', 'lifestyle'];
  return links.map(function(i) {
    return ce('li', {
      sClass:'news-link-li',
      children:[
        ce('a', {
          text:i,
          href:`#${i}`,
        })
      ]
    })
  });
}
