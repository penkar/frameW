import {ce} from '../source';
export const Article = ({title='', author = [], story = [], id = ''}) => {
  let childpara = [];
  for(let i = 0; i < Math.min(3, story.length); i++) {
    let art = story[i];
    childpara.push(ce({ele:'span', ...art}));
  }
  return ce({
    ele:'div',
    sClass:'story-teaser-component',
    children: [
      ce({ele:'a', text:title, sClass:'title', href:`#${id}`}),
      ce({text:(author.join(', ')), sClass:'author'}),
      ...childpara,
    ]
  });
}
