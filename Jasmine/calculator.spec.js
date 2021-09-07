//test suits - collection of related tests
describe('calculator.js', function(){

    let calculator;
    let calculator2;
    let calculator3;

    beforeAll(function(){

    })

    beforeEach(()=>{
        calculator = new Calculator()
        calculator2 = new Calculator()
        calculator3 = undefined
    })
    //individual tests
    it("should add numbers to total", function(){
        calculator.add(5)
        calculator.add(15)
        expect(calculator.total).toBe(20)
    });
    it("should subtract numbers from total", function(){
        calculator.add(5)
        calculator.subtract(15)
        expect(calculator.total).toBe(-10)
    });
    it("should add multiply to total", function(){
        calculator.add(5)
        calculator.multiply(5)
        expect(calculator.total).toBe(25)
    });
    it("should add numbers to total", function(){
        calculator.add(15)
        calculator.divide(5)
        expect(calculator.total).toBe(3)
    });
    it("should initialize total", ()=>{
        expect(calculator.total).toBe(0);
    });
    it('has constructor', ()=>{
        calculator2.total = 0
        expect(calculator).toBeTruthy();
        expect(calculator).not.toBeFalsy();
        expect(calculator3).toBeFalsy();
        expect(calculator2).toEqual(calculator);
    });
    xit("has common operation", ()=>{
        expect(calculator.add).toBeDefined();
        expect(calculator.sum).toBeDefined();
    });
    it("can overwrite total", ()=>{
        calculator.total = null
        expect(calculator.total).toBeNull();
        expect(calculator.constructor.name).toContain('lator')
    });
    it('doesnt have NaN', function(){
        calculator.total = 20
        calculator.multiply('a')
        expect(calculator.total).toBeNaN();
    });
    it('handles divide by 0', ()=>{
        calculator.total = 10
        expect(function(){calculator.divide(0)}).toThrow()
        expect(function(){calculator.divide(0)}).toThrowError(Error)
        expect(function(){calculator.divide(0)}).toThrowError(Error, 'Cannot divide by zero')
    });
    it("return total", function(){
        calculator.total = 50

        expect(calculator.add(20)).toBe(70)
        expect(calculator.total).toMatch(/-?\d/)
        expect(typeof calculator.total).toMatch('number')
        expect(12).toEqual(jasmine.anything())
    })





    afterEach(()=>{
        calculator = null
        calculator2 = null
        calculator3 = null
    });
})