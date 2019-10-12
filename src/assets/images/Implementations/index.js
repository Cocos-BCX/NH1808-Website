let iconInfo = ['COCOS', 'EOS', 'ETH', 'TRON']
let iconArr = {}
for (let i = 0; i < iconInfo.length; i++) {
    iconArr[iconInfo[i]] = require('./' + iconInfo[i] + '.png')
}


export default iconArr