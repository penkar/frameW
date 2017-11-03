import {ce} from '../source'

export function HeaderRow() {
  return ce('div', {
    id:'header-row',
    children:[
      ce('ul', {
        sClass:'news-link-ul',
        children:[]
      }),
      ce('ul', {
        sClass:'news-link-ul',
        children:[
          ce('li', {
            text:"\u1F514",
          })
        ]
      }),
    ]
  })
}
