import {ce} from '../source';
import {Contents} from './contents';
import {Content} from './content';
export function TableOfContents() {
  const multiarray = [
    {text:'Home Page',sClass:'primary',href:''},
    {text:'US & World',sClass:'secondary',href:'world'},
    {text:'Regional',sClass:'secondary',href:'regional'},
  ].map((i)=> ce('a', i) );
  const contents = Contents.map((i) => Content(i));
  return ce('div', {
    sClass:'table-of-contents-component',
    id:'TableOfContents',
    children: [
      ce('div', {sClass:'generic-button-component content-component-button primary', text:'Subscribe' }),
      ce('hr', {sClass:'divider'}),
      ce('div', {sClass:'multicontent-component content-component', children:multiarray}),
      ...contents,
      ce('hr', {sClass:'full-break'}),
    ]
  })
}
