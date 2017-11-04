import {ce} from '../source';
export function Content({href, text, subhrefs = []}){
  var links = subhrefs.map(function(i){
    return ce('div', {sClass:'subcontent-component', children:[ce('a',i)]})
  });
  return ce('div', {
    sClass:'content-component',
    children:[
      ce('a', {sClass:'label', href, text,}),
      ce('span', {sClass:'angle'}),
      ce('div', {sClass:'subcontents-component thin-shadow', children:links}),
    ],
  })
}
