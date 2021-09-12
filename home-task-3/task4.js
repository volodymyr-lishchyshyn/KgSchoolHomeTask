function flatten(arr) {
    function _flat(arr, hold) {
        arr.forEach(element => {
            if (Array.isArray(element)) _flat(element, hold)
            else hold.push(element);
        });
        return hold;
    }

    if (!Array.isArray(arr)) return arr;
    return _flat(arr, []);
}

console.log(flatten([1, 2, 6,[11, 12], [15, [19, 23]]]));