const { expect } = require('chai');
const { library } = require('./problemThree');

describe("Tests …", function () {
    describe("test calcPriceOfBook",  () => {
        it("throws an error if name of book is not a string", () => {
            expect(()=>library.calcPriceOfBook(1, 1980)).to.throw();
        });
        it("throws an error if year is not integer", () => {
            expect(()=>library.calcPriceOfBook('abc', 'abc')).to.throw();
        });
        it("throws an error if both are not valid", () => {
            expect(()=>library.calcPriceOfBook(0, 'abc')).to.throw();
        });
        it("returns discounted price if year is before 1980", () => {
            expect(library.calcPriceOfBook('abc', 1979)).to.equal('Price of abc is 10.00');
        });
        it("returns discounted price if year is 1980", () => {
            expect(library.calcPriceOfBook('abc', 1980)).to.equal('Price of abc is 10.00');
        });
        it("returns full price if year above 1980", () => {
            expect(library.calcPriceOfBook('abc', 1981)).to.equal('Price of abc is 20.00');
        });
    });

    describe("test findBook",  () => {
        it("throws an error if array length is 0", () => {
            expect(()=>library.findBook([], 'abc')).to.throw();
        });
        it("returns a message", () => {
            expect(library.findBook(['bcd', 'abc', 'xyz'], 'abc')).to.equal('We found the book you want.');
        });
        it("returns a message", () => {
            expect(library.findBook(['bcd', 'abc', 'xyz'], 'sgd')).to.equal('The book you are looking for is not here!');
        });
    });

    describe("test arrangeTheBooks",  () => {
        it("throws an error if count books is not an integer", () => {
            expect(()=>library.arrangeTheBooks(1.1)).to.throw();
        });
        it("throws an error if count books is negative", () => {
            expect(()=>library.arrangeTheBooks(-1)).to.throw();
        });
        it("returns a message if countbooks is 40", () => {
            expect(library.arrangeTheBooks(40)).to.equal('Great job, the books are arranged.');
        });
        it("returns a message if countbooks is below 40", () => {
            expect(library.arrangeTheBooks(39)).to.equal('Great job, the books are arranged.');
        });
        it("returns a message if countbooks is above 40", () => {
            expect(library.arrangeTheBooks(41)).to.equal('Insufficient space, more shelves need to be purchased.');
        });
    });
});
