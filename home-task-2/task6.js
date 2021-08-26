function Vector(args) {

    this.vector = validateType(args);

    function validateType(args) {
        if (!Array.isArray(args)) {
            throw "Parameter is not an array!"
        }
        return args;
    }

    function validateLength(self, v) {
        if (self.vector.length != v.vector.length) {
            throw "Vector lengths are different!"
        }
    };


    this.add = function (v) {
        validateLength(this, v);
        let res = this.vector.map(function (num, idx) {
            return num + v.vector[idx];
        })
        return new Vector(res);
    };

    this.subtract = function (v) {
        validateLength(this, v);
        return new Vector(this.vector.map(function (num, idx) {
            return num - v.vector[idx];
        }));
    };

    this.dot = function (v) {
        validateLength(this, v);
        return this.vector.map(function (num, idx) {
            return num * v.vector[idx];
        }).reduce((prev, current) => prev + current);

    };

    this.toString = function () {
        return `(${this.vector.join(',')})`;
    }

    this.valueOf = function () { return this.vector; }

    this.equals = function (v) {
        if (this === v) return true;
        if (v == null) return false;

        if (this.vector.length === v.vector.length) return false;

        for (let index = 0; index < this.vector.length; index++) {
            if (this.vector[index] != v.vector[index]) return false;
        }
        return true;
    }

}

const a = new Vector([1, 2, 3]);
const b = new Vector([3, 4, 5]);
const c = new Vector([5, 6, 7, 8]);
try {
    const b = new Vector(null);
} catch (error) {
    console.error(error);
}

console.log(''+a.add(b));
console.log(''+ a.subtract(b));
console.log(''+ a.dot(b));
try {
    console.log(a.add(c));
} catch (error) {
    console.error(error);
}