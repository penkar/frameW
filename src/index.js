import {ce, setStyle, fin} from './source'

const runner = (hook) => {
  let div = ce('div', {
    styles: {backgroundColor:'red'},
    text:'hello',
    children:[
      ce('span'),
      ce('img'),
    ],
  });

  fin(div);
}

runner()
