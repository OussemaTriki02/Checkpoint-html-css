// alert('Hello Tunisia'); // Do not use for debugging. Stops the script! 
// console.log('Hello World !')
// console.error('This is an error');
// console.warn('This is a warning');
// prompt("Plz enter your age ")
// console.log('Test ok')
/** Variable */

//   var name = "Student";

//  console.warn(name);

//  alert("Enter your name")

// var name = "instructor"
// console.log(name)

// var age = 25 ;
// console.log(age)



// if (1 == 1) {
//     var age = 18
//     console.log(age)
// }
// console.log(age)

/** Data Type */

// var a = 5 ;
// console.log(typeof(a)) ;
// // var age = 26
// // console.log(typeof(age))
// var tallness = 1.55 
// console.log(typeof(tallness))
// // console.log(typeof(tallness))
// var isPerson = false
// console.log(typeof(isPerson))
// var x = null 
// console.log(typeof(x))
// var z;
// console.log(typeof(z))


// ************ ARRAYS - Store multiple values in a variable  // Square Brackets
// var numbers = [1, 2, 3, 4, 5];
//  var fruits = ['apples', 'oranges', 'pears', 'grapes'];
//  var hobbies = ["sleep", 33, true];

// console.log(numbers);
// console.log(fruits);
// console.log(hobbies);

// ************ OBJECTS LITERALS   // Curly Braces
// var person = {
//     name: "Eve",
//     age: 5000,
//     isPerson: true,
//     hobbies: ["eating", "sleeping"]
//     };

// console.log(person);

// console.log(person.hobbies[0])

// console.log(person.age)

// console.log(person.name, person.age)

// console.log(person.isPerson)

// console.log(person.hobbies[0])



// ************ FUNCTIONS (as a type)
// function dummyFunc(){

// }


// // // Check type
// console.log(typeof dummyFunc);


/****** String concatination **** */
var name = "meriem"
var age = 99

// console.log('Hello, my name is ' + name + ' and my age is ' + age)


// console.log('My name is ' + name + ' and I am ' + age + '.');
// console.log('je m\'appelle '+ name)

// console.log(`Hello my name is ${name} and i am ${age}`)

// console.log(`My name is ${name} and I am  ${age}`); 

// var country = "Tunisia"

// console.log(`Hello im from ${country}`)


/****** String methods & properties **** */
var s = 'Hello World.';
var val;

// //Get length
// val = s.length;
// console.log(val)
// console.log(typeof(val))

// console.log(s[-1])

// String Index
// console.log(s[val-1]);

// // Change case
// val = s.toUpperCase();
// val = s.toLowerCase();  
//  console.log(s.toLowerCase())


// // Get sub string
// val = s.substring(0, 5);

// Split into array
// val = s.split('');
// val = val.join('*');

// // // console.log(s)
// console.log(val)

/******* Array methods & properties *****/
// var colors = ['black', 'white', 'red', 'blue'];

// console.log(colors)

// // Get length
// console.log(colors.length)

// // Get one value (!: Arrays start at 0)
// console.log(colors[3]);

// // Add value using push()
// colors.push('yellow');
// console.log(colors)

// // // Add to beginning
// colors.unshift('purple');
// console.log(colors)

// // // Remove last value
// colors.pop();
// console.log(colors)

// // Remove first value
// colors.shift();
// console.log(colors.filter((el)=> el !== 'white'))

// colors[0] = 'Green'
// console.log(colors)

// Check if array
// console.log(Array.isArray(colors));

// // Get index
// console.log(colors.indexOf('white'));

// console.log(colors);


/****** Arithmetic Operators */
// + , - , * , / , % , ++ , -- , **

// console.log(13-2)
// console.log(3*"2")
// console.log(3*'TEXT')
// console.log('10'/'2')
// console.log(10%2)
// console.log(10%3)
// console.log('3'**'2')

// console.log(5+3)
// console.log(5 + '3')
// console.log(typeof(5+'3'))

// var x = 5
// console.log(x)
// console.log(++x)
// console.log(--x)


/****** Object Literals *********/

// const person = { // an object is a collection of key-value pairS 
//     firstName: 'Adam',
//     age: 30,
//     hobbies: ['music', 'movies', 'sports'],
//     address: {
//     street: '66 Main st',
//     city: 'wtvr',
//     state: 'over there'
//     }
//     };

    
    // Get single value (obj.key)
    // console.log(person.firstName)
    // console.log(person.age)
    // console.log(person.hobbies[0])
    // console.log(person.address.street)
    // console.log(person.address.street)
    
    // Add property
    // person.email = 'adam@gmail.com';
    // person.hobbies.push('singing');
    // console.log(person);







    //*************************************************************************************************** */
    // // ************ /!\ Array of objects
    // const users = [
    // {
    // name: 'person',
    // age: 23,
    // email: "p1@gmail.com",
    // country: 'Tunisia'
    // },
    // {
    // name: 'person 2',
    // age: 31,
    // email: "p2@gmail.com",
    // },
    // {
    // name: 'person 3',
    // age: 155,
    // email: "p3@gmail.com",
    // }
    // ];
    
    // console.table(users)
    // console.log(users)

// *** Objects
// var person = {
//     name: 'foulan',
//     age: 27,
//     adresse: 'tunis'}
    
// Change a property
// person.name = 'mohamed'
    
// Delete a property
// delete(person.age)
    
// Add a property
// person.email = 'm@gmail.com';
    
// hello

// *** Tables
// var numbers = [1,2,3]
    
// Still an assignment ! (with a new table)
// numbers = [2,3]
    
// numbers[0] = 'hello'
    
// console.log(numbers)

/******* Truthy & Falsy ********/
// false, undefined, null, 0, "", NaN

// var test=null;
// var title="";
// var y ;
// var a = 0;

// console.log(test)
// console.log(Boolean(test))
// console.log(Boolean(title))
// console.log(Boolean(y))
// console.log(Boolean(a))

/******* Comparison operators *******/
// = assigns a value to a variable*

// == compares the value of the variables

// === compares the value and type of the variables

// ! returns the opposite boolean
// var x = true ;
// console.log(!x) ;

// != compares the inequality based on value

// !== compares the inequality based on value and type





// *****************************   PART 2   ************************************************





/*     Conditional     */
// var val = 11;

// var age = 18;

// if (age === 18 )
//  {
//     console.log('You are 18')
//  } else if (age > 18) {
//     console.log('You are a adult')
//  } else {
//     console.log('You are a child')
//  }






// if (val === 10)  {
// console.log('val is 10');
// } 
// else if (val > 10) {
// console.log('val is greater than 10');
// } else {
// console.log('val is less than 10');
// }







/*     Switch (/!\break)    */
// var color = 'red';

// switch (color) {
// case 'red':
// console.log('color is red');
// break;
// case 'blue':
// console.log('color is blue');
// break;
// default:
// console.log('color is neither red nor blue');
// }

// // // reproducing the conditional with if else
// if (color === 'red') {
//     console.log('color is red')
// } else if (color === 'blue') {
//     console.log('color is blue')
// } else {
//     console.log("color is neither red nor blue")
// }

// var country = "Italy"

// if (country == "Tunisia") {
//     console.log("Welcome Home !")
// }  else if (country == "France") {
//     console.log("Hows going in France ")
// } else {
//     console.log("Where are you from ?")
// }

/*      for loop      */
// var tab = [1, 3, 7]

// for (var i = 0; i < tab.length; i++) {     //var i = tab.length-1; i >= 0 ; i--
//    console.log(tab[i]);
// }
// console.log(tab)
/*    for ... of   */
// for (var el of tab) {
//     console.log(el)
// }
/*       for ... in       */
// for (var i in tab) {
//     console.log(tab[i])
// }


/*      while loop      */
// var l = 4;
// while (l < 5) {
//     console.log("hola")
// }



/*      Functions       */
// function greeting(name, age) {
//     return ("Hello, my name is " + name + ", and my age is " + age)
    
// }


// console.log(greeting("Ilyess", 22)) ; 


// console.log(greeting("Wissem")) ;
// console.log(greeting(5)) 

// function sub(g,h) {
//     return (g-h);
// }
// console.log(sub(4,3))
// console.log(sub(600,326587));

// function add(g,h) {
//     return g + h
// }
// console.log(add("4","3"))
