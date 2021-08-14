var readLineSync = require('readline-sync')

var score = 0;

var userName = readLineSync.question("what's your name? ")

console.log("welcome " +  userName)

var know = readLineSync.question('do you know Aman? ')


if(know === 'yes'){
  function playGame(question, answer) {
  var userAnswer = readLineSync.question(question)

  if(userAnswer === answer) {
    console.log('right answer')
    score+= 1;
  } else {
    console.log('wrong answer')
  }
    console.log("current score:", score)
    console.log('------------')

}


var questions =[{
  question: 'Where does Aman Live? ',
  answer: 'Kolkata'
}, {
  question: "What is Aman's favourite book? ",
  answer: 'Antifragile'
},
 {
  question: "What is Aman's favourite food? ",
  answer: 'Burger'
},
 {
  question: "What is Aman's favourite movie? ",
  answer: 'Batman'
},
 {
  question: "Who is Aman's favourite author ",
  answer: 'Taleb'
},]

for(var i =0; i<questions.length; i++){
  var currentQuestion = questions[i]
  playGame(currentQuestion.question, currentQuestion.answer)
  
}
} else {
  console.log("This game is only for aman's friends")
}

console.log('aman says hii to you') 