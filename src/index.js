import {ce, hash} from './source';
import {Body, HeaderRow, TableOfContents} from './execution';
import {Sample} from './static';

require('./styles/app.scss');
require('./styles/header.scss');
require('./styles/hpage.scss');
require('./styles/styles.scss');
require('./styles/slogan.scss');
require('./styles/toc.scss');

ce({
  id:'app',
  children:[
    HeaderRow(),
    TableOfContents(),
    Body(Sample),
  ],
}, document.getElementsByTagName('body')[0]);
