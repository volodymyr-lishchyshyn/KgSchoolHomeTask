const user = {

    person: 'User',

    sayHi() {
        return `Hello, ${this.person}!`;
    },
    
    sayBye: () =>  {
        return `Goodbye, ${this.person}!`;
    },
};

console.log(user.sayHi());
console.log(user.sayBye());