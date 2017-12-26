import {ce, hash} from '../source';
import {HomePageBody, RecentStories, SloganSectional} from './index';

export const Body = (sampleArray) => ce({
  sClass:'app-body', id:'app-body',
  children: [ SloganSectional(), RecentStories(sampleArray), HomePageBody(sampleArray), ]
});
