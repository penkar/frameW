import {ce, fin, hash} from './source';
import {Body, HeaderRow, TableOfContents} from './execution';
import {Sample} from './static';

require('./styles/app.scss');
require('./styles/header.scss');
require('./styles/hpage.scss');
require('./styles/styles.scss');
require('./styles/slogan.scss');
require('./styles/toc.scss');

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
