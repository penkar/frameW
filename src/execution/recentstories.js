import {ce, hash, hashChanger} from '../source';
export function RecentStories(sampleArray) {
  let callback = () => {
    let stories = document.getElementsByClassName('recent-sectional')[0];
    if(hash()) {
      stories.style.display = 'none';
    } else {
      stories.style.display = 'flex';
    }
  }
  hashChanger(callback);

  let arr = sampleArray.map((item) => ce({
    ele:'li',
    sClass:'recent-sectional-title',
    children:[ ce({ele:'a', text:item.title, href:`#${encodeURIComponent(JSON.stringify({id:item.id}))}`}) ]
  }) );
  return ce({ele:'ul', sClass:'recent-sectional', children: [ce({ele:'li', sClass:'label', text:'In the News '}), ...arr],});
}
