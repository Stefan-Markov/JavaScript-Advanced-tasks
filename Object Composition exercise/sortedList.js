function sorted() {
    let collection = [];

    function add(element) {
        collection.push(element);
        this.size++;
        collection = collection.sort((a, b) => a - b);
    }

    function remove(index) {
        if (index >= 0 && index < collection.length) {
            collection.splice(index, 1);
            this.size--;
            collection = collection.sort((a, b) => a - b);
        }
    }

    function get(index) {
        if (index >= 0 && index < collection.length) {
            return collection[index];
        }
    }

    return {
        add,
        remove,
        get,
        size: 0
    }
}

let str = sorted();
str.add(1);
str.add(2);
console.log('value: ' + str.get(1));
str.remove(1);
str.add(3);
console.log('size: ' + str.size);

let rts = sorted();
rts.add(5);
rts.add(6);
console.log('value: ' + rts.get(0))
rts.add(7);
console.log('size: ' + rts.size)