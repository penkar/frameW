import {ce} from '../source';
export function Content({href, text, subhrefs}){

  return ce('div', {
    sClass:'content-component',
    children:[
      ce('span', {sClass:'label', href, text}),
    ],
  })
}
