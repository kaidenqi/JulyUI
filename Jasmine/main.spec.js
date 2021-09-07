describe('main.js', function(){
    describe('calculate()', function(){
    it('validates expression1', ()=>{
            spyOn(window, 'updateResult').and.stub() //stub = dont return, execute

            calculate('a+3')
            calculate('a+3')

            expect(window.updateResult).toHaveBeenCalled()
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized')
            expect(window.updateResult).toHaveBeenCalledTimes(2)
        })
    });
    it('call to add', ()=>{
        // const calculator = new Calculator()
        // spyOn(Calculator.prototype, 'add')
        
        // calculate('3+4')//calls add 2 times
        
        // expect(calculator.add).toHaveBeenCalledTimes(2)
        // expect(calculator.add).toHaveBeenCalledWith(4)
        // expect(calculator.add).toHaveBeenCalledWith(3)

        const spy = spyOn(Calculator.prototype, 'add');
        calculate('3+5')
        expect(spy).toHaveBeenCalledTimes(2)
        expect(spy).toHaveBeenCalledWith(3)
        expect(spy).toHaveBeenCalledWith(5)

    });
    it('call to subtract', ()=>{
        const spyA = spyOn(Calculator.prototype, 'add');
        const spyS = spyOn(Calculator.prototype, 'subtract');

        calculate('3-5')

        expect(spyA).toHaveBeenCalledTimes(1)
        expect(spyS).toHaveBeenCalledTimes(1)

        expect(spyA).toHaveBeenCalledWith(3)
        expect(spyS).toHaveBeenCalledWith(5)

    });
    it('calls updaetResult using CallThrough', ()=>{
        spyOn(window, 'updateResult');
        spyOn(Calculator.prototype, 'multiply').and.callThrough();

        calculate('5*5')

        expect(window.updateResult).toHaveBeenCalled()
        expect(window.updateResult).toHaveBeenCalledWith(25)
    })

    it('calls updaetResult using CallFake', ()=>{
        spyOn(window, 'updateResult');
        spyOn(Calculator.prototype, 'multiply').and.callFake(function(){
            return 50;
        });

        calculate('5*5')

        expect(window.updateResult).toHaveBeenCalled()
        expect(window.updateResult).toHaveBeenCalledWith(50)
    })

    it('calls updaetResult using return value', ()=>{
        spyOn(window, 'updateResult');
        spyOn(Calculator.prototype, 'multiply').and.returnValue('some value');

        calculate('5*5')

        expect(window.updateResult).toHaveBeenCalled()
        expect(window.updateResult).toHaveBeenCalledWith('some value')
    })

    it('calls updaetResult using return values', ()=>{
        spyOn(window, 'updateResult');
        spyOn(Calculator.prototype, 'multiply').and.returnValues(44, null,'some value');

        calculate('5*5')
        expect(window.updateResult).toHaveBeenCalled()
        expect(window.updateResult).toHaveBeenCalledWith(44)

        calculate('5*5')
        expect(window.updateResult).toHaveBeenCalledWith(null)

        calculate('5*5')
        expect(window.updateResult).toHaveBeenCalledWith('some value')
    });
    it('doesnt handle erros', ()=>{
        spyOn(Calculator.prototype, "multiply").and.throwError("Some Error")
        expect(function(){calculate('5*5')}).toThrowError('Some Error')
    })


})