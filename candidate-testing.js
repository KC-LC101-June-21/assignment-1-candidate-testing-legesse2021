const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //
// TODO 1.1a: Define candidateName //

let candidateName = "";

// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space?";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";

let questions = [
  "Who was the first American woman in space?" ,
  "True or false: 5 kilometer == 5000 meters?" ,
  "(5 + 3)/2 * 10 = ?" , 
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2?" , 
 'What is the minimum crew size for the ISS ?' ,
  ]
let correctAnswers = ["Sally Ride", "true", "40", "Trajectory", "3"];
let candidateAnswers =[];

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
candidateName = input.question("Your Name: ");
console.log("\n");
}

function askQuestion() {
  for (let i = 0; i < questions.length; i++) {
    candidateAnswers[i] = input.question(questions[i] + "\n" + candidateAnswer);
    console.log(`Correct Answer:   ${correctAnswers[i]}`);
    console.log(`Candidate Answer:   ${candidateAnswers[i]}`);
    console.log(`\n`);
    }
  }

function gradeQuiz(candidateAnswers) {
  let grade = 0;
  for (let i = 0; i < questions.length; i++) {
    if (correctAnswers[i].toUpperCase() === candidateAnswers[i].toUpperCase()) {
    grade++;
  }
 }
 
  console.log(`>>> Overall Grade: ${(grade) / questions.length * 100}%  (${grade} of ${questions.length} responses correct ) <<<`);
  if (grade >= 4){
    console.log(`>>> Status: PASS <<< `);
  } else {
      console.log(`>>> Status: FAILED <<<`);
    }
  grade = grade / questions.length * 100; 
  return grade;
}
    function runProgram() {
      askForName();
      askQuestion();
      gradeQuiz(this.candidateAnswers);
    }

//Part 2: Multiple Questions

module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};

/*const candidateName = () => {
  return "bob";
};
exports.candidateName = candidateName;
const */

