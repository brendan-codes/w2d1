console.log("Hello world!");
console.log(window);


function print255(){
    for(var i = 1; i < 256; i++){
        console.log(i);
    }
}

function doStuff(element){
    console.log(element);
    // element.remove();
    // element.innerText = "This has changed to something completely different!";
    element.innerHTML = "<button onclick='console.log(`more stuff`)'>Dynamic Button</button>";
}

function showDoc(){
    console.log(document);
    // the document object model is a javascript object
    // that represents 100% of the HTML on the loaded page
    // document
    var element = document.querySelector("#title");
    console.log(element);
    element.style = `color:` + randomColor();
}

function randomColor(){
    // "rgb(?, ?, ?)"
    return "rgb(" + randomNumber() + ", " +randomNumber() + ", " + randomNumber() + ")";
}

function randomNumber(){
    return Math.floor(Math.random() * 256);
    // 22.22
}



// integers: 10
// strings: "words"
// arrays: [1, 15]
// booleans: true / false
// functions: function(){}
// object: {}

var b_firstName = "Brendan";
var b_hairColor = "Brown";
var b_eyeColor = "Green";
var b_userName = "bstanton";
var b_password = "12345fakepassword";

// object
// hashes, associative arrays, dictionaries

var user = {
    // key value pairs
    "firstName": "Brendan",
    "lastName": "Stanton",
    "favoriteColors": ["green", "orange"],
    "address": {
        "street": "123 fake street",
        "zip": 99999,
        "city": "anytown"
    },
    "sayName": function(){
        console.log(this);
        console.log("Hello my name is " + this.firstName);
    }
};

// console.log(user);


// // dot notation
// console.log(user.firstName);
// console.log(user.address.city);

// // bracket notation
// console.log(user["lastName"]);

// var key = "lastName";
// console.log(user[key]);

// console.log(user.key);

// user.sayName();