import {ce} from '../source'
import {NewsLinkLi} from './newslinkli'
import {NewsButton} from './newsbutton'
export const HeaderRow = () => ce('div', {
  id:'header-row',
  children:[
    ce('ul', {sClass:'news-link-ul', children:[...NewsButton(), ...NewsLinkLi(), ]}),
    ce('ul', {
      sClass:'news-link-ul',
      children:[
        ce('li', {
          children:[
            ce('a', {href:'#', html:"\u23E3", sClass:'alert',})
          ]
        })
      ]
    }),
  ]
});
