import {ce, fin} from './source';
import {Body, HeaderRow} from './execution';
import {Sample} from './static';

require('./styles.css');

const runner = (hook) => {
  let html = ce('div', {
    sClass:'app',
    children:[
      HeaderRow(),
      Body(Sample),
    ],
  });
  fin(html);
}
runner();
