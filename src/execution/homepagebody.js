import {ce} from '../source';
import {Article} from './Article'
export const HomePageBody = (sampleArray) => {
  let col0 = [], col1 = [], col2 = [], i=0;
  for(; i < sampleArray.length; i++) {
    if(!(i % 3)) {
      col0.push(Article(sampleArray[i]));
    } else if((i % 3) == 1) {
      col1.push(Article(sampleArray[i]));
    } else if((i % 3) == 2) {
      col2.push(Article(sampleArray[i]));
    }
  }
  return ce({
    sClass:'home-page-body',
    children:[
      ce({
        sClass:'home-page-body',
        children: [
          ce({sClass:'home-page-body-col',children:col0,}),
          ce({sClass:'home-page-body-col',children:col1,}),
          ce({sClass:'home-page-body-col',children:col2,}),
        ]
      })
    ]
  });
}
