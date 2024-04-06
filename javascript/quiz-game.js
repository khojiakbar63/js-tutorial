// GAME QUESTIONS
let gameQuestions = [
   {
      question: "What is the capital of Palestine ?",
      option: [`
      A) Rafaq 
      B) Abu Dabi 
      C) Jerusalem
      `],
      answer: "JERUSALEM"
   },
   {
      question: 'How old was prophet Muhammad pbuh when he died? ',
      option: [`
      A) 30 
      B) 63 
      C) 28
      `],
      answer: '63',
   },
   {
      question: 'Who was `Khaleed ibn Waleed ?`',
      option: [`
      A) sahabah 
      B) poem 
      C) president `],
      answer: 'SAHABAH'
   },
   {
      question: 'Where did Islamic religion start?`',
      option: [`
      A) Madina
      B) Mecca 
      C) Jerusalem `],
      answer: 'MECCA'
   },
   {
      question: 'What is the holy book in Islam',
      option: [`
      A) Quran 
      B) Torah 
      C) Bible` ],
      answer: 'QURAN'
   },
   {
      question: 'How many surahs does Quran contain?',
      option: [`
      A) 110 
      B) 128 
      C) 114 
      `],
      answer: '114'
   },
   {
      question: 'What is the holy book in Jews?',
      option: [`
      A) Quran 
      B) Torah 
      C Bible
      `],
      answer: 'TORAH'
   },
   {
      question: 'Who is the mother of Isa (AS)?',
      option: [`
      A) Maryam 
      B) Khadija 
      C) Asiya
      `],
      answer: 'MARYAM'
   },
   {
      question: 'Who is the wife of Pharaoh',
      option: [`
      A) Maryam 
      B) Khadija 
      C) Asiya 
      `],
      answer: 'ASIYA'
   },
   {
      question: 'Who is the first man on earth?',
      option: [`
      A) Adam (AS) 
      B) Musa (AS) 
      C Ibrahim (AS)
      `],
      answer: 'ADAM (AS)'
   },
]
// QUESTIONS ABOUT USER
let questionsAboutUser = [
   `
   ~~~~~~~~~~~~~~~~~~~~~~~~~
   Hello! Is it your first time 
   playing this game?
   ~~~~~~~~~~~~~~~~~~~~~~~~~
   `,
   `
   ~~~~~~~~~~~~~~~~~~~~~~~~~
   Then, what is your name?
   ~~~~~~~~~~~~~~~~~~~~~~~~~
   `];

// ------ ------ ------ ------


let currentQuestionIndex = 0;
let rightAnswers = []
let wrongAnswers = []

// GAME QUESTIONS FUNCTION
function askQuestion(){
   while(currentQuestionIndex < gameQuestions.length){

      let checkAnswer = prompt(`
      <>~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~<>
      ${gameQuestions[currentQuestionIndex].question}  
      ${gameQuestions[currentQuestionIndex].option}
      <>~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~<>
      `)
      let upperCheckAnswer = checkAnswer.toUpperCase();
      if(!upperCheckAnswer.toUpperCase()){
         continue;
      }else if(upperCheckAnswer !== gameQuestions[currentQuestionIndex].answer){
         wrongAnswers++

      }else{
         rightAnswers++

      }
      currentQuestionIndex++
   }
   
   console.log(`
      ~ ~ ~ ~ ~ ~ ~ ~ ~ <><><><> ~ ~ ~ ~ ~ ~ ~ ~~
      ~ ~ ~ ~ ~ ~ ~ ~ ~ <><><><> ~ ~ ~ ~ ~ ~ ~ ~~

      Right answers: ${rightAnswers}
      Wrong answers: ${wrongAnswers}

      ~ ~ ~ ~ ~ ~ ~ ~ ~ <><><><> ~ ~ ~ ~ ~ ~ ~ ~~
      ~ ~ ~ ~ ~ ~ ~ ~ ~ <><><><> ~ ~ ~ ~ ~ ~ ~ ~~
   `);
   giveComment()
} 

function giveComment(){

      if(rightAnswers >= 10){
         alert(`
            <>~~~~<>~~~~~<Comment>~~~~~<>~~~~<>
            ~ Barakalloh, MashaAlloh! ${userName} May Alloh 
              give you more than that!

            ~ You are bunderkind !!!
            <>~~~~~<>~~~~~<>~~~~<>~~~~~<>~~~~~<>
         `);

      }else if(rightAnswers >= 8){
         alert(`
            <>~~~~<>~~~~~<Comment>~~~~~<>~~~~<>
            ~ Barakalloh, MashaAlloh! ${userName}, you are
              really close to bundergind!

            ~ You have got high knowledge!
            <>~~~~~<>~~~~~<>~~~~<>~~~~~<>~~~~~<>
         `);
      }else if(rightAnswers >= 6){
         alert(
            `<>~~~~<>~~~~~<Comment>~~~~~<>~~~~<>
            ~ Barakalloh, MashaAlloh! ${userName}, you 
              should work on you!

            ~ You have a medium Islamic knowledge !!!
             <>~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~~<>
            `
         );
      }else if(rightAnswers >= 2){
         alert(
            `<>~~~~<>~~~~~<Comment>~~~~~<>~~~~<>
            ~ ${userName}, may Allah have mercy on you! 
              It is really bad not knowing this basic 
              knowledge.
   
            ~ You did not well !!!
            <>~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~<>
            `
         );
      }else {
         alert(`
            <>~~~~<>~~~~~<Comment>~~~~~<>~~~~<>~~~~<>
            ~ ${userName}, may Allah have mercy on you! 
              It is really bad not knowing this basic 
              knowledge.
              
            ~ It can not be worse than this!
            <>~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~<>
            `);
      }
}
// ASK ABOUT USER FUNCTION
let aboutUserIndex = 0;
let aboutAnswers = [];
let userName;

function askAboutUser(){
   while(aboutUserIndex < questionsAboutUser.length){

      let aboutAnswer = prompt(questionsAboutUser[aboutUserIndex])
      let upperAboutAnswer = aboutAnswer.toLocaleUpperCase()
      if(!upperAboutAnswer){
         continue;

      }else{
         aboutAnswers.push(upperAboutAnswer)

         userName = aboutAnswers[1]
         aboutUserIndex++
      }
   }
   
   playGame()
}

// ASK USER TO PLAY OR NOT
function playGame(){
   let agree = prompt(`
   <>~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~<>
   
   ${userName}, Would you test your knowledge ? [YES/NO] 

   <>~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~<>
   
   `);
   let upperAgree = agree.toUpperCase()

   if(upperAgree === 'YES'){
      askQuestion()
   }else if(upperAgree === 'NO'){
      alert(`
      <>~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~<>
      
      I hope you come later again!

      <>~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~<>
      `)
   }else{
      alert(`
      <>~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~<>

      Invalid answer.

      <>~~~~<>~~~~~<>~~~~~<>~~~~<>~~~~<>
      `)
   }
}


// [HEAD] GAME OPERATOR
function gameOperator(){
   askAboutUser()
}

gameOperator()
