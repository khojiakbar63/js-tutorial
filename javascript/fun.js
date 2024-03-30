// LOGIN

// const correctUserName = "Khojiakbar";
// const correctPassword = "pass123";
// let isLoggedIn = false;

// alert("Welcome to the authantication system!")

// while(!isLoggedIn) {
//    let userName = prompt("Enter your user name: ")
//    let userPassword = prompt("Enter your user password: ")

//    if(userName === correctUserName && userPassword === correctPassword ){
//       isLoggedIn = true;
//       alert(`${userName}, welcome to the system.`)
//    }else{
//       alert("Try again.")
//    }
// }
// alert(`${userName} You are logged in.`)

// WHETHER 

// let temperature = prompt("Enter the temperature: ");
// if(temperature > 30){
//    console.log("It's too hot outside, stay at home.");
// }else if(20 < temperature && temperature < 30){
//    console.log("It's a very nice weather today, you can go outside.");
// }else{
//    console.log("It's freezing, stay at home.");
// }

// SAY HELLO ACCORDING TO DAYTIME\

// let hour = prompt("Enter an hour: ");

// if(3 <= hour && hour <= 6){
//    console.log("Hello, It's dawn time.");
// }else if (7 <= hour && hour <= 11) {
//    console.log("Good morning.");
// }else if(12 <= hour && hour <= 18){
//    console.log("Good afternoon.");
// }else if(19 <= hour && hour <= 23){
//    console.log("Good evening.");
// }else if(0 <= hour && hour >= 24){
//    console.log("It's invalid time.");
// }else{
//    console.log("Good night.");
// }

// IF ELSE\ IS CAT HUNGRY

// let mealsEaten = prompt("Enter the number of meals eaten: ")*1;

// if(mealsEaten === 3){
//    console.log("The cat is full.");
//    let currentAction = prompt("What is your cat doing now? ");
//    console.log(`The cat is ${currentAction}.`);
//    if (currentAction === "sleeping"){
//       console.log("Don't touch the cat!");
//    }else if(currentAction === "walking"){
//       console.log("Don't let the cat go outside!");
//    }else if(currentAction === "playing"){
//       console.log("Don't let the cat play alone!");
//    }else if(currentAction === "fighting"){
//       console.log("Don't let the cat fight!");
//    }else{
//       console.log("The cat's action is unknown.");
//    }
// }else if(mealsEaten < 3){
//    console.log("The cat is hungry.");
// }else if(mealsEaten > 3){
//    console.log("The cat is full.");
// }else{
//    console.log("The cat's meal is invalid.");
// }

// FUNCTION WEEKEND DECISION MAKER

// function weekendDecisionMaker(day){
//     if(day === "Saturday" || day === "Sunday"){
//        return "It's the weekend! You can relax today.";
//     } else if(day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday"){
//        return "It's the weekday! You have to work today.";
//     }else {
//       return "Invalid day";
//    }
// }
// console.log(weekendDecisionMaker("Monday"));
// console.log(weekendDecisionMaker("ddd"));
// console.log(weekendDecisionMaker("Friday"));

// CIGARETTE ADDICTION CHECKER
// var cigarettesYouSmokePerDay = prompt("Enter the number of cigarettes you smoke per day: ")*1;
    
// if(cigarettesYouSmokePerDay <= 10){
//    console.log( "You are not addickted to cigarettes.");
//    }else{
//    console.log("You are addicted to cigarettes."); 
//    }

// HEART RATE CHECKER
// let heartRate = prompt("Enter your heart rate: ")*1;

// if(60 <= heartRate && heartRate <= 100){
//     console.log("Your heart rate is normal.");
// }else if(heartRate < 60){
//     console.log("Yourb heart rate is too slow. Drink a pill to make it normal.");
// }else if(heartRate > 100){
//     console.log("Your heart rate is too high. Dink a pill to make it normal.");
// }else{
//     console.log("Your heart rate is invalid.");
// }
