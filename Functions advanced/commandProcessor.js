function result() {
    return (function () {
        let string = '';

        function append(text) {
            string += text;
        }

        function removeStart(n) {
            string = string.substring(n);
        }

        function removeEnd(n) {
            string = string.substring(0, string.length - n);
        }

        function print() {
            console.log(string);
        }

        return {
            append,
            removeStart,
            removeEnd,
            print
        }
    })()
};

let secondZeroTest = result();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print(); // 34


let firstZeroTest = result();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);


