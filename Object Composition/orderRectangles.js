function order(input) {
    // let result = input.map(([width, height]) => ({width, height}));
    let result = input.map(([width, height]) => {
        return {
            width: width,
            height: height,
            // area: () => width * height,
            area: function () {
                return this.width * this.height;
            },
            compareTo(rect) {
                let result = rect.area() - this.area();
                return result == 0 ? rect.width - this.width : result;
            }
        }
    });
    // could make chaining with map().sort()
    result.sort((a, b) => a.compareTo(b));
    console.log(result)
}

order([[10, 5], [5, 12]]);

order([[10, 5], [3, 20], [5, 12]]);