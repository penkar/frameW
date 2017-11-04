import {ce} from '../source'
import {NewsLinkLi} from './newslinkli'
import {NewsButton} from './newsbutton'

export function HeaderRow() {
  return ce('div', {
    id:'header-row',
    children:[
      ce('ul', {
        sClass:'news-link-ul',
        children:[
          ...NewsButton(),
          ...NewsLinkLi(),
        ],
      }),
      ce('ul', {
        sClass:'news-link-ul',
        children:[
          ce('li', {
            children:[
              ce('a', {
                style:{color:'white', textDecoration:'none', fontSize:'25px'},
                href:'#',
                html:"\u23E3",
              })
            ]
          })
        ]
      }),
    ]
  })
}
