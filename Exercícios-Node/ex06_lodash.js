const _ = require('lodash')

const studants = [{
    name: 'João',
    note: 7.6
}, {
    name: 'maria',
    note: 8.6
}, {
    name: 'Pedro',
    note: 8.1
}]

const media = _.sumBy(studants, 'note') / studants.length
console.log(media)