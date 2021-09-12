const linkedList = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: {
                    value: 5,
                    next: null
                }
            }
        }
    }
}

function sum_recursive(element) {
    if (element == null) return 0;
    return element.value + sum_recursive(element.next);;
}

function sum_iterative(linked) {
    let el = linked;
    let sum = 0;
    while (el != null) {
        sum += el.value;
        el = el.next;
    }
    return sum;
}

console.log(sum_recursive(linkedList));
console.log(sum_iterative(linkedList));