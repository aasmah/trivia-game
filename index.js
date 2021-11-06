// Your Code Here
let userName = window.prompt('Please enter your name:')
let newGame=true;
let userScore = 0;
while(newGame == true){
  userScore = 0;
  for(let i = 0; i < questions.length; i++){
      let question = questions[i]
      let userAnswer = window.prompt(question.text)
      if(userAnswer === question.correctAnswer){
          userScore = userScore + 10
      }
  }

  window.alert('Your score is: '+userScore)
  console.log('Your score is: '+userScore)
  newGame=window.confirm('Do you want to play again?');
};

let games = []

let game = {
    user: userName,
    score: userScore
}

games.push(game)

console.log(games)

let serializedGames = JSON.stringify(games)
localStorage.setItem('games', serializedGames)

//THINGS TO ADD IN ASSIGNMENT
// use console.log  to 
//display highest score
//add play again option