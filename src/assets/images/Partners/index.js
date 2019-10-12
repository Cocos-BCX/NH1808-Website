let iconInfo = ['bitpai', 'blocklords', 'cardmaker', 'Dapp', 'Doscoin', 'jimu', 'lianwantang', 'matrix', 'slowMist', 'taiken', 'tokenPocket', 'harmony', 'opensea', 'matic', 'bo', 'infinitoWallet', 'alto']
let iconArr = {}
for (let i = 0; i < iconInfo.length; i++) {
    iconArr[iconInfo[i]] = require('./' + iconInfo[i] + '.png')
}


export default iconArr