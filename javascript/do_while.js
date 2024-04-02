// TIMER

// let leftTime = prompt("Enter the leftover time in seconds: ");

// while(0 < leftTime){
//     leftTime--;
//     console.log("Left time: " + leftTime);
// }
// console.log("Time is up!");

// Password Checker Using Do-While Loop:

// const correctPassword = "1234";
// let userInput;

// do {
//     userInput = prompt("Enter the password: ");

// }while(userInput !== correctPassword);

// console.log("Password correct. Welcome.");



// User login
// const correctPassword = "1234";
// const correctUserName = "user";
// let userInput;
// let userName;

// do {
//     userName = prompt("Enter the username:");
//     userInput = prompt("Enter the password:");
// }while(userName !== correctUserName && userInput !== correctPassword);

// console.log("Login successful. Welcome.");



//GUESSING GAME WITH WHILE LOOP\

// const NumberInMyMind = 9;
// let userGuess;
// let attempts = 0;

// while (userGuess !== NumberInMyMind) {
//     userGuess = parseInt(prompt("Guess the number between 1 and 10:"));
//     attempts++;
//     if (userGuess === NumberInMyMind) {
//         console.log(`Great you guessed in your ${attempts} attemt.`);
//     }else{
//       console.log("Try again!");
//     }
// }

// TERNARY OPERATORS\

// CONDITION ? EXPRESSI IF TRUE : EXPRESS IF FALSE

// IS RAINING CHECKER
// let isRaining = prompt("Is it raining outside? (1/0)")*1;

// let weather = isRaining ? "Take an umbrella." : "Wear a sun cap.";

// console.log(weather);


// CAN VOTE OR NOT
// let age = prompt("Enter your age: ");

// let canVote = age >= 18 ? "Yes, you canm vote." : "No, you can't vote.";

// console.log(canVote);

// CAN DRIVE OR NOT

// let age = prompt("Enter your age: ");

// let canDrive = age >= 16 ? "Yees, you can drive." : "No, you can't drive.";
// console.log(canDrive);

// TICKET PRICE CHECKER

// let age = prompt("Enter your age: ");

// let ticketPrice = age < 18 ? "5$" : "10$";
// console.log(ticketPrice);

// EXPERIENCE CHECKER

// let experience = prompt("Enter your experience: ");

// let jobResponse = experience >= 3 ? "You are welcome." : "Sorry, you are not eligible.";

// console.log(jobResponse);


// LOGIN

// let phoneNumber = prompt("Enter your phone number: ");
// let isAuth = false;

// if(phoneNumber === '0241098'){
//    isAuth = true;
//    console.log("Welcome to the system!");
// }else{
//    console.log("Wrong phone number!");
// }

// NESTED TERNARY

// let age = 11;
// let canVote = age >= 18 ? "Yes, you can vote." : (age >= 16 ? "You are almost there! Wait a bit." : "You are not eligible.");
// console.log(canVote);

