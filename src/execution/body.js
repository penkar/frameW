import {ce} from '../source';
import {HomePageBody} from './homepagebody';
import {RecentStories} from './recentstories';
import {SloganSectional} from './slogansectional';
export const Body = (sampleArray) => ce({
  sClass:'app-body', id:'app-body',
  children: [ SloganSectional(), RecentStories(sampleArray), HomePageBody(sampleArray), ]
});
