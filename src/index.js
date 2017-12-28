import {ce, fin, hash} from './source';
import {Body, HeaderRow, TableOfContents} from './execution';
import {Sample} from './static';

require('./styles/styles.scss');
require('./styles/app.scss');
require('./styles/header.scss');
require('./styles/toc.scss');
require('./styles/slogan.scss');

const runner = (hook) => {
  let html = ce({
    id:'app',
    children:[
      HeaderRow(),
      TableOfContents(),
      Body(Sample),
    ],
  });
  fin(html);
}
runner();
