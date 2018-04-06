import {ce} from '../source';
export const Article = ({title='', author = [], story = [], id = ''}, main = false) => {
  let childpara = [], count = 0, i = 0;
  if(main) {
    story.forEach((art) => {
      childpara.push(ce({ele:'span', ...art}));
    });
  } else {
    while(count < 1000) {
      let art = story[i];
      if(art.text) {
        childpara.push(ce({ele:'span', ...art}));
        count += art.text.length;
      }
      i++;
    }
  }

  return ce({
    ele:'div',
    sClass:`story-teaser-component${main ? ' main-article-component' : ''}`,
    children: [
      ce({ele:'a', text:title, sClass:'title', href:'#'+encodeURIComponent(JSON.stringify({id}))}),
      ce({text:(author.join(', ')), sClass:'author'}),
      ...childpara,
    ]
  });
}
