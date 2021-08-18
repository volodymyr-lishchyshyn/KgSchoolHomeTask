function solveQuadraticEquation(a, b, c) {

    /* ax^2 + bx + c = 0

    d = b*b-4ac if (d < 0) then use |d| * sqrt(-1)
    x1 = (-b+sqrt(d))/2a
    x2 = (-b-sqrt(d))/2a

    if a, b == 0 -> show infinity, and if c == 0 than error
    if (a == 0) -> linear equation -> bx+ c = 0, than x = -c/b
    if (b == 0) -> ax^2 + c = 0 than x1,2 = +/- sqrt(-c/a) if (c/a >0) x = |c/a|*sqrt(-1) or i
    if (c == 0) -> ax^2 + bx = 0 -> x(ax+b)=0, x1=0, x2 = -b/a

    */


    if (a == 0 && b == 0) {
        if (c != 0) {
            console.error('Incorrect expression! A,B should be different form 0');
            return;
        }
        console.warn('A and B should be defined, in other case the answer is "infinity"');
        return 'infinity';
    }

    if (a == 0) {
        return '' + (-c / b);
    }
    if (b == 0) {
        let d = -c / a;
        if (d < 0) {
            return Math.sqrt(-d) + '*sqrt(-1)';
        }
        let x = Math.sqrt(-c / a)
        return x + ',' + (-x);
    }
    if (c == 0) {
        return '0,' + (-b / a);
    }

    let d = b * b - 4 * a * c;
    let complex = d < 0 ? '*sqrt(-1)' : '';
    let rd = Math.sqrt(Math.abs(b * b - 4 * a * c)); // rooted Discriminant


    return (-b - rd) / 2 * a + complex + ',' + (-b + rd) / 2 * a + complex;

}

console.log(solveQuadraticEquation(1, -1, -2));
console.log(solveQuadraticEquation(0, 0, 0));
console.log(solveQuadraticEquation(0, 0, -2));
console.log(solveQuadraticEquation(1, 0, 2));
console.log(solveQuadraticEquation(0, -1, -2));
console.log(solveQuadraticEquation(1, -1, 0));
