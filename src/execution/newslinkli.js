import {ce} from '../source'
export const NewsLinkLi = () => [
  'politics', 'opinions', 'sports', 'local', 'national', 'world', 'business', 'tech', 'lifestyle'
].map((i) => ce({ele:'li', sClass:'news-link-li', children:[ce({ele:'a', text:i, href:`#${encodeURIComponent(JSON.stringify({section:i}))}`})] }) );
