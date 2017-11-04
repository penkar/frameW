import {ce} from '../source';
export function RecentStories(sampleArray) {
  let arr = sampleArray.map((item) => ce({
    ele:'li',
    sClass:'recent-sectional-title',
    children:[ ce({ele:'a', text:item.title, href:`#${item.id}`}) ]
  }) );
  return ce({ele:'ul', sClass:'recent-sectional', children: [ce({ele:'li', sClass:'label', text:'In the News '}), ...arr],});
}
