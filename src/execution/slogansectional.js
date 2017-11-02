import {ce} from '../source';

export function SloganSectional() {
  return ce('div', {
    sClass:'slogan-sectional',
    children:[
      ce('a', {sClass:'slogan-text', href:'#', text:'Not the Washington Post'}),
      ce('div', {
        sClass:'slogan-row-text',
        children:[
          ce('span', {
            sClass:'slogan-row-text-col left',
            text:(new Date()).toUTCString().split(' ').slice(0,4).join(' '),
          }),
          ce('span', {
            sClass:'slogan-row-text-col center', text:'Mold Dies In Daylight'
          }),
          ce('span', {
            sClass:'slogan-row-text-col right',
            children:[
              ce('span', {text:'Edition '}),
              ce('a', {href:'#', text:'Web'})
            ]
          }),
        ]
      }),
      ce('hr', {sClass:'medium-divider'}),
    ]
  });
}
