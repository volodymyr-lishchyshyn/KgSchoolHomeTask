const data = { a: 1, b: 2 };

function deleteProperty(obj, propertyName) {
    delete obj[propertyName];
    return obj;
}


console.log(deleteProperty(data, 'b'));