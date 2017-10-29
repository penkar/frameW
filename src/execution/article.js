import * as sources from '../source';

export const Article = ({title='', author = [], story = []}) => {
  let {ce} = sources;
  let childpara = story.map((para) => ce('span', para) );
  return (
    ce('div', {
      sClass:'story-teaser-component',
      children: [
        ce('a', {text:title, sClass:'title'}),
        ce('div', {text:(author.join(', ')), sClass:'author'}),
        ...childpara,
      ]
    })
  )
}
