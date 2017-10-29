import {ce, setStyle, fin} from './source'

import {Body} from './execution'
import {Sample} from './static'

const runner = (hook) => {
  let div = Body(Sample)

  fin(div);
}

runner()
