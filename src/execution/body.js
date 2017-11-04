import {ce} from '../source';
import {HomePageBody, RecentStories, SloganSectional} from './index';
export const Body = (sampleArray, hash) => ce({
  sClass:'app-body', id:'app-body',
  children: [ SloganSectional(), !hash && RecentStories(sampleArray), HomePageBody(sampleArray, hash), ]
});
