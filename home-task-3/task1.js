function transformObject(obj) {
    if (null == obj) return null;
    if (typeof obj !== "object") return obj;

    return Object.entries(obj)
        .map(([key, value]) => [value, key])
        .reduce((previous, current) => {
            previous[current[0]] = current[1];
            return previous;
        }, {});

}

console.log(transformObject({ "integer": 2, "chars": "some_chars" }));