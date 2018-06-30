import {ce, hashChanger, hash} from '../source';
import {Article} from './article'
export const HomePageBody = (sampleArray) => {
  hashChanger(()=> {
    let parent = document.getElementsByClassName('app-body')[0];
    parent.removeChild(parent.children[2]);
    parent.appendChild(ultimateCallback())
  });

  const ultimateCallback = () => {
    let hashObj = hash(), children = [];

    if(!hashObj || hashObj.section || hashObj.subSection) {
      let filter = (hashObj && (hashObj.section || hashObj.subSection)) || '';
      let col0 = [], col1 = [], col2 = [], i=0, k = 0;
      for(; i < sampleArray.length; i++) {
        let sample = sampleArray[i];
        if(!filter || filter === sample.section || filter === sample.subSection) {
          k++
          if(!(k % 3)) {
            col0.push(Article(sample));
          } else if((k % 3) == 1) {
            col1.push(Article(sample));
          } else if((k % 3) == 2) {
            col2.push(Article(sample));
          }
        }
      }

      children = [
        ce({sClass:'home-page-body-col',children:col0,}),
        ce({sClass:'home-page-body-col',children:col1,}),
        ce({sClass:'home-page-body-col',children:col2,}),
      ]
    } else if(hashObj.id) {
      let main = sampleArray.find((article)=>(hashObj.id === article.id));
      children = [ Article(main, true) ];
    } else {
      children = [];
    }

    return ce({
      sClass:'home-page-body',
      children,
    })
  }
  return ultimateCallback();
}
