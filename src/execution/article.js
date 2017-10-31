import {ce} from '../source';/* import * as sources from '../source'; */

export const Article = ({title='', author = [], story = [], id = ''}) => {
  let childpara = [];
  for(let i = 0; i < Math.min(3, story.length); i++) {
    childpara.push(ce('span', story[i]));
  }
  return (
    ce('div', {
      sClass:'story-teaser-component',
      children: [
        ce('a', {text:title, sClass:'title', href:`#${id}`}),
        ce('div', {text:(author.join(', ')), sClass:'author'}),
        ...childpara,
      ]
    })
  )
}
