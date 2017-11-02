import * as sources from '../source';
import {ce} from '../source';
import {HomePageBody} from './homepagebody';
import {RecentStories} from './recentstories';
import {SloganSectional} from './slogansectional';

export const Body = (sampleArray) => {
  return ce('div', {
    sClass:'app-body',
    children: [
      SloganSectional(),
      RecentStories(sampleArray),
      HomePageBody(sampleArray),
    ]
  });
}
