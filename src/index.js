import {ce, fin, hash} from './source';
import {Body, HeaderRow, TableOfContents} from './execution';
import {Sample} from './static';

require('./styles.css');

const runner = (hook) => {
  let html = ce({
    id:'app',
    children:[
      HeaderRow(),
      TableOfContents(),
      Body(Sample, hash()),
    ],
  });
  fin(html);
}
runner();
