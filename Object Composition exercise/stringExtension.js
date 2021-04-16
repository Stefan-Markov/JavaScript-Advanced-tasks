(() => {
    String.prototype.ensureStart = function (str = '') {
        if (this.startsWith(str)) {
            return str + this;
        }

        return str.toString();
    }

    String.prototype.ensureEnd = function (str = '') {
        if (!this.endsWith(str)) {
            return this + str;
        }
        return this.toString();
    }
    String.prototype.isEmpty = function () {
        return this.length == 0;
    }
    String.prototype.truncate = function (n) {
        if (n < 4) {
            return '.'.repeat(n);
        }
        if (this.length < n) {
            return this.toString();
        }
        let founded = this.lastIndexOf(' ');
        if (founded !== -1) {
            return str.substring(0, founded) + '...';
        } else {
            return str.substring(0, n - 3) + '...';
        }
    }

    String.format = function (str,...params){
        params.forEach((key,index) => {
            str = str.replace(`${index}`,key)
        })
        return str;
    }
})();

let str = 'my string';
str = str.ensureStart('my');
str = str.ensureStart('hello ');
console.log(str)
str = str.truncate(16);
console.log(str)
str = str.truncate(14);
str = str.truncate(8);
str = str.truncate(4);
str = str.truncate(2);
console.log(str)
str = String.format('The {0} {1} fox',
    'quick', 'brown');
str = String.format('jumps {0} {1}',
    'dog');
console.log(str);