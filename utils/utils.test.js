var utils = require('./utils');

it('should square two numbers',()=> {
    var res = utils.square(3);
    if( res !== 9) {
        throw Error(`res not matched ${res}`);
    }
})