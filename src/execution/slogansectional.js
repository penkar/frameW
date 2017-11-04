import {ce} from '../source';
export const SloganSectional = () => ce({
  sClass:'slogan-sectional',
  children:[
    ce({ele:'a', sClass:'slogan-text', href:'#', text:'Not the Washington Post'}),
    ce({
      sClass:'slogan-row-text',
      children:[
        ce({
          ele:'span',
          sClass:'slogan-row-text-col left',
          text:(new Date()).toUTCString().split(' ').slice(0,4).join(' '),
        }),
        ce({ele:'span', sClass:'slogan-row-text-col center', text:'Mold Dies In Daylight'}),
        ce({
          ele:'span',
          sClass:'slogan-row-text-col right',
          children:[
            ce({ele:'span', text:'Edition '}),
            ce({ele:'a', href:'#', text:'Web'}),
          ]
        }),
      ]
    }),
    ce({ele:'hr', sClass:'medium-divider'}),
  ]
});
