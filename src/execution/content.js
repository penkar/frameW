import {ce} from '../source';
export const Content = ({href, text, subhrefs = []}) => ce({
  sClass:'content-component',
  children:[
    ce({ele:'a', sClass:'label', href, text}),
    ce({ele:'span', sClass:'angle'}),
    ce({
      sClass:'subcontents-component thin-shadow',
      children: subhrefs.map((i) => ce({sClass:'subcontent-component', children:[ce({ele:'a', ...i})]}) )
    }),
  ],
});
