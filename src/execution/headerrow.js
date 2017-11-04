import {ce} from '../source'
import {NewsLinkLi} from './newslinkli'
import {NewsButton} from './newsbutton'
export const HeaderRow = () => ce({
  id:'header-row',
  children:[
    ce({ele:'ul', sClass:'news-link-ul', children:[...NewsButton(), ...NewsLinkLi(), ]}),
    ce({
      ele:'ul',
      sClass:'news-link-ul',
      children:[
        ce({
          ele:'li',
          children:[
            ce({ele:'a', href:'#', html:"\u23E3", sClass:'alert',})
          ]
        })
      ]
    }),
  ]
});
