import {ce} from '../source';
export function RecentStories(sampleArray) {
  let arr = sampleArray.map((item) => ce('li', {
    sClass:'recent-sectional-title',
    children:[ ce('a', {text:item.title, href:`#${item.id}`}) ]
  }) );
  return ce('ul', {sClass:'recent-sectional', children: [ce('li', {sClass:'label', text:'In the News '}), ...arr],});
}
