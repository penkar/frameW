import {ce} from '../source'
export const NewsLinkLi = () => [
  'politics', 'opinions', 'sports', 'local', 'national', 'world', 'business', 'tech', 'lifestyle'
].map((i) => ce('li', {sClass:'news-link-li', children:[ce('a', {text:i, href:`#${i}`})] }) );
