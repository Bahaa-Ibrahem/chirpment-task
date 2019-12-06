const lib = require('../../../lib');
const {Number} = require('../../../models/calculator');

describe('absolute', () => {
    it('should return a positive number if input is positive', () => {
        let number = new Number({ 
            num1: 10,
            num2: 20
          });
          console.log('number : ' + number);
        const result = lib.absolute(number.num1);
        console.log(result);
        expect(result).toBe(number.num1);
    });
    
    it('should return a positive number if input is negative', () => {
        let number = new Number({ 
            num1: -10,
            num2: 20
          });
          console.log('number : ' + number);
        const result = lib.absolute(number.num1);
        console.log(result);
        expect(result).toBe(-number.num1);
    });
    
    it('should return 0 if input is 0', () => {
        let number = new Number({ 
            num1: 0,
            num2: 20
          });
          console.log('number : ' + number);
        const result = lib.absolute(number.num1);
        console.log(result);
        expect(result).toBe(number.num1);
    });
});