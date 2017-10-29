import {ce, setStyle, fin} from './source'

import {Article} from './execution'
import {Sample} from './static'

const runner = (hook) => {
  console.log(Sample)
  let div = Article(Sample[0])

  fin(div);
}

runner()
