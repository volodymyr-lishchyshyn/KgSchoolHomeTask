const student = {

    greeting: "Hello, student!",

    getGreeting: function (){
        const greeting = "Hello, Earth!";
        return this.greeting;       
    }

};

console.log(student.getGreeting());