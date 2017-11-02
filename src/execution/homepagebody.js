import * as sources from '../source';
import {Article} from './Article'

export const HomePageBody = (sampleArray) => {
  let {ce} = sources;
  let col0 = [], col1 = [], col2 = [];

  for(let i = 0; i < sampleArray.length; i++) {
    if(!(i % 3)) {
      col0.push(Article(sampleArray[i]));
    } else if((i % 3) == 1) {
      col1.push(Article(sampleArray[i]));
    } else if((i % 3) == 2) {
      col2.push(Article(sampleArray[i]));
    }
  }

  return (
    ce('div', {
      sClass:'home-page-body',
      children: [
        ce('div', {
          sClass:'home-page-body-col',
          children:col0,
        }),
        ce('div', {
          sClass:'home-page-body-col',
          children:col1,
        }),
        ce('div', {
          sClass:'home-page-body-col',
          children:col2,
        }),

      ]
    })
  )
}
