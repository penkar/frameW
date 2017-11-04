import {ce} from '../source';
export const Content = ({href, text, subhrefs = []}) => ce('div', {
  sClass:'content-component',
  children:[
    ce('a', {sClass:'label', href, text}),
    ce('span', {sClass:'angle'}),
    ce('div', {
      sClass:'subcontents-component thin-shadow',
      children: subhrefs.map((i) => ce('div', {sClass:'subcontent-component', children:[ce('a',i)]}) )
    }),
  ],
});
