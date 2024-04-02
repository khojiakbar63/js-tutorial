// ===============================================
// 1. FINDING SEASON NAME

// let month = prompt("Enter a month number: ")*1;
function findSeason(month){
    switch (month) {

        case 12:
            console.log("Winter, December");
            break;
        case 1:
            console.log("Winter, January");
            break;
        case 2:
            console.log("Winter, February");
            break;
        case 3:
            console.log("Spring, March");
            break;
        case 4: 
            console.log("Spring, April");
            break;
        case 5:
            console.log("Spring, May");
            break;
        case 6:
            console.log("Summer, June");
            break;
        case 7:
            console.log("Summer, July");
            break;
        case 8:
            console.log("Summer, August");
            break;
        case 9:
            console.log("Autumn, September");
            break;
        case 10:
            console.log("Autumn, October");
            break;
        case 11:
            console.log("Autumn, November");
            break;
        default:
            console.log("Invalid month");
    }
    
}

// findSeason(month);

// ~~~~~~~~~~~  // ~~~~~~~~~~~ // ~~~~~~~~~~~ //
// Savolim bor edi, ustoz: Promptdan 2 martta turli qiymat qabul qilib functionni 2 martta ishlatsa boladimi?
// ~~~~~~~~~~~  // ~~~~~~~~~~~ // ~~~~~~~~~~~ //
// ===============================================

// ===============================================
// 2. FINDING YOUR AGE

// let = currentYear = prompt('Enter the current year: ')*1;
// let = birthYear = prompt('Enter your birth year: ')*1;

function findAge(currentYear, birthYear){
    return currentYear - birthYear;  
}

// console.log(`Your age is now ${findAge(currentYear, birthYear)}.`);


// ===============================================


// ===============================================
// 3. FINDING RATIO OF EVEN AND ODD NUMBERS
// let n = prompt("Enter a number: ")*1;
// nested function
function maxSum(sumEven, sumOdd){
    if(sumEven > sumOdd){
        let ratio = sumEven / sumOdd;
        console.log(`Sum of even numbers is greater by ${ratio} than sum of odd numbers.`);
    }else if(sumEven < sumOdd){
        ratio = sumOdd / sumEven;
        console.log(`Sum of odd numbers is greater by ${ratio} than sum of even numbers.`);
    }
}
function findRatio(n){
    let sumEven = 0;
    let sumOdd = 0;

    for(let i = 0; i <= n; i++){
        if(i % 2 == 0){
            sumEven += i;  
        }else{
            sumOdd +=i;
        }

    }

    console.log(`Sum of even numbers: ${sumEven}`);
    console.log(`Sum of odd numbers: ${sumOdd}`);

    // nested function
    maxSum(sumEven, sumOdd)
}
// findRatio(n)
// ===============================================

// ===============================================
// 4. FINDING THE OPERATOR BY INSERTING THE NUMBER CODE
// ===============================================
// let operator = prompt("Enter a number code[93, 94, 55, 97, 88, 90, 91, 98, 95, 99, 77, 33]: ")*1;

function findOperator(string,operator,str){

    switch (operator){
        case 93:
            console.log(string+"UCELL"+str);
            break;
        case 94:
            console.log(string+"UCELL"+str);
            break;
        case 55:
            console.log(string+"UCELL"+str);
            break;
        case 97:
            console.log(string+"MobiUz"+str);
            break;
        case 88:
            console.log(string+"MobiUz"+str);
            break;
        case 90:
            console.log(string+"BEELINE"+str);
            break;
        case 91:
            console.log(string+"BEELINE"+str);
            break;
        case 98:
            console.log(string+"PERFECTUM MOBILE"+str);
            break;
        case 95:
            console.log(string+"UZMOBILE"+str);
            break;
        case 99:
            console.log(string+"UZMOBILE"+str);
            break;
        case 77:
            console.log(string+"UZMOBILE"+str);
            break;
        case 33:
            console.log(string+"Humans"+str);
            break;
        default:
            console.log("Invalid operator code");
    }
    
}
// findOperator("Your operator is ", operator, ".");





// ===============================================
// GREETING FUNCTION

// let name = prompt("What is your name?");

// function greet(name) {
//     return `Hello ${name}.`
// }
// console.log(greet(name));
// ===============================================

// ===============================================
// MAX NUMBER FUNCTION

// function maxNumber(a, b){
//    return a > b ? a : b;
// }
// console.log(maxNumber(1, 3));
// ===============================================