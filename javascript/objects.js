// How To Create An Object

let obj = {} //Empty object

// Person Object
const person = {
   firstName: 'Khojiakbar',
   lastName: 'Abdulakhatov',
   age: 26,
   isMarried: true,
   likeAnimals: ['🐪', '🐴', '🐑']
}

// console.log(person.isMarried, person.likeAnimals[0]);

// Organism Object
const organism = {
   dna: Math.random()
}
// console.log(organism.dna);

// People Object
const randomWords = ['foo', 'boo', 'koo','foo', 'boo', 'koo']
// console.table(randomWords);
// console.dir(document);


// ABOUT ME OBJECT
const aboutMe = {
   fullName: {
      firstName: 'Khojiakbar',
      lastName: 'Abdulakhatov',
   },
   age: 25,
   hobby: ['sports', 'reading', 'coding'],
   isMarried: true,
   phone: '+998900241098',
   email: 'abdulakhatovx@mail.com',
   address:{
      country: 'Uzbekistan',
      region: 'Tashkent',
      district: 'Akkurgan',
      street: "Do'rmon",
      house: 26
   },
   ability: function(){
     console.log(
      `
      ~~~~~~~~~~~~~~~~~~~~~~~~~~<><><><>~~~~~~~~~~~~~~~~~~~~~
      Full name: ${aboutMe.firstName} ${aboutMe.lastName}
      Age: ${aboutMe.age}
      Is Married: ${aboutMe.isMarried}
      ~~~~~~~~~~~~~~~~~~~~~~~~~~<><><><>~~~~~~~~~~~~~~~~~~~~~

      `
     );
   }
}
// aboutMe.ability();

