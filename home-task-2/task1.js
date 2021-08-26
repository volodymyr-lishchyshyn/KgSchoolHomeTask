function extend(...args) {

    return args.map(x => typeof x === "object" && x !== null ? x : {})
        .reduce((previous, current) => {
            Object.entries(current).forEach(([key, value]) => {
                if (!previous.hasOwnProperty(key)) {
                    previous[key] = value;
                }
            });
            return previous;
        }, {}
        );
}

console.log(extend({ a: 1, b: 2 }, { c: 3 }));
console.log(extend({ a: 1, b: 2 }, { c: 3 }, { d: 4 }));
console.log(extend({ a: 1, b: 2 }, { a: 3, c: 3 }));
console.log(extend({ a: false, b: null }, { a: true, b: 2, c: 3 }));
console.log(extend({ a: 1, b: 2 }, "test"));
console.log(extend({ a: 1, b: 2 }, null));