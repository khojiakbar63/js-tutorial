// APPLYING FOR COURSE

// 1. Questions were created with an array
// let questions = [
//    "What's your name?",
//    "How old are you?",
//    "Where do you live?",
//    "Which course: Frontend/ Backend?",
//    "What time is proper to you: morning/afternoon?",
//  ];
 
//  let answers = [];  // Empty array for answers to store
//  let currentQuestionIndex = 0;  //Current question's index is stored
 
 
//  function askQuestion () {
//    while(currentQuestionIndex < questions.length){
      // let answer = prompt(questions[currentQuestionIndex]);

//       if(!answer){
//          continue;
//       }else{
//          answers.push(answer);
//          currentQuestionIndex++;
//       }
//    }
//  }

//  function displayAnswers (){
//    console.log('Here are your answers: ');

//    for(let i = 0; i < answers.length; i++){
//       console.log(`${i + 1}.  ${questions[i]}: ${answers[i]}`);
//       console.log('=========================================');
//    }
//  }
//  askQuestion()
//  displayAnswers()

// APPLYING FOR COURSE COPY VERSION
let questions = [
   `What's your name? `,
   `How old are you? `,
   `Which course do you want to study?`,
   `Do you work or study?`,
   `When is comfortable to you?`,
];

let answers = [];
let questionIndex = 0;

function askQuiz(){
   
   while( questionIndex < questions.length){

      let answer = prompt(questions[questionIndex])

      if(!answer){
         continue;
      }else{
         answers.push(answer)
         questionIndex++
      }
   }
}

function displayAnswers(){
   console.log('Your answers: ');
   for(let i = 0; i < answers.length; i++){
      console.log(answers[i]);
   }
   
}

// askQuiz();
// displayAnswers();