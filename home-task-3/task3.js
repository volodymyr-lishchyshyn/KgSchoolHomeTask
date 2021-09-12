function uniqueArray(arr) {
    if (!Array.isArray(arr)) throw "Invalid argument. Array is expected";

    //bad idea, but works!
    return Array.from(new Set(arr)).sort();
}

console.log(uniqueArray([1,2,4,2,3,1,4,5]));