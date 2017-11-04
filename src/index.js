import {ce, fin} from './source';
import {Body, HeaderRow, TableOfContents} from './execution';
import {Sample} from './static';

require('./styles.css');

const runner = (hook) => {
  let html = ce('div', {
    sClass:'app',
    children:[
      HeaderRow(),
      TableOfContents(),
      Body(Sample),
    ],
  });
  fin(html);
}
runner();
