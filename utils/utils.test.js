var expect = require('expect');
var utils = require('./utils');

describe('Utils', ()=> {
    it('should square a number', () => {
        var res = utils.square(3);
        // if( res !== 9) {
        //     throw Error(`res not matched ${res}`);
        // }
        expect(res).toBe(9);
    })

    it('should split the name', () => {
        var user = utils.setName({
            fullName: 'Joydeep Maiti'
        })
        // console.log(user);
        expect(user).toInclude({
            firstName: 'Joydeep',
            lastName: 'Maiti'
        });
    })

    it('should add two numbers asynchronously', (done) => {
        // console.log('sum1');
        utils.asyncAdd(2, 3, (sum) => {
            expect(sum).toBe(5).toBeA('number');
            // console.log('sum2');
            done();
        });
        // console.log('sum3');
    });

});
