/* I want to test a calculator
    Im going to test the addition function
        I want to getthe result of 42
        I expect the result to of20+22 to be 42*/

/*describe("Calculator", function({
    describe("Addition tests", funtion(){
        it("should return 42", function(){
            expect(addition(20, 22).toBe(42)))
        })
    })
}); */

describe("Calculator", function() {
    describe("Addition function", function() {
        it("should return 42", function() {
            expect(addition(20, 22)).toBe(42);
        });

        it("should not return 4 if the arguments given don't produce a sum of 4", function() {
            expect(addition(7, 19)).toBe(26);
        });
    });
});
