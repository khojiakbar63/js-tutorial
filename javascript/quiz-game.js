let gameQuestions = [
   {
      question: "What is the capital of Palestine ?",
      option: ['Rafaq', 'Abu Dabi', 'Jerusalem'],
      answer: "Jerusalem"
   },
   {
      question: 'How old was prophet Muhammad pbuh when he died? ',
      option: ['30', '63', '28'],
      answer: '63',
   },
   {
      question: 'Who was `Khaleed ibn Waleed ?`',
      option: ['sahabah', 'poem', 'president'],
      answer: 'sahabah'
   },
   {
      question: 'Where did Islamic religion start?`',
      option: ['Madina', 'Mecca', 'Jerusalem'],
      answer: 'Makka'
   },
   {
      question: 'What is the holy book in Islam',
      option: ['Quran', 'Torah', 'Bible'],
      answer: 'Quran'
   },
   {
      question: 'How many surahs does Quran contain?',
      option: ['110', '128', '114'],
      answer: '114'
   },
   {
      question: 'What is the holy book in Jews?',
      option: ['Quran', 'Torah', 'Bible'],
      answer: 'Torah'
   },
   {
      question: 'Who is the mother of Isa (AS)?',
      option: ['Maryam', 'Khadija', 'Osiyo'],
      answer: 'Maryam'
   },
   {
      question: 'Who is the wife of Pharaoh',
      option: ['Maryam', 'Khadija', 'Osiyo'],
      answer: 'Osiyo'
   },
   {
      question: 'Who is the first man on earth?',
      option: ['Adam (AS)', 'Musa (AS)', 'Ibrahim (AS)'],
      answer: 'Adam (AS)'
   },
]

let currentQuestionIndex = 0;
let rightAnswers = []
let wrongAnswers = []

function askQuestion(){
   while(currentQuestionIndex < gameQuestions.length){

      let checkAnswer = prompt(`${gameQuestions[currentQuestionIndex].question}  ${gameQuestions[currentQuestionIndex].option}`)
      
      if(!checkAnswer){
         continue;
      }else if(checkAnswer !== gameQuestions[currentQuestionIndex].answer){
         wrongAnswers++

      }else{
         rightAnswers++

      }


      currentQuestionIndex++
   }
   console.log(`Right answers: ${rightAnswers}`);
   console.log(`Wrong answers: ${wrongAnswers}`);


}

askQuestion()