import { lang } from '../../../../common/lang/zh'
let iconInfo = lang.commonContainer
let iconArr = {}
for (let i = 0; i < iconInfo.length; i++) {
    iconArr[iconInfo[i].imgName] = require('./' + iconInfo[i].imgName + '.png')
}

export default iconArr