let cat = {

    name: "Bertie",
    breed: "Cymric",
    color: "white",
    greeting: function () {
        console.log("Meow!");
    }
}

cat["name"] = "Tatiana Patsai";
cat.greeting();
cat.color = "black";

console.log(cat);