/*
 * import 구문은 수정하지 말고 사용하세요.
 * import를 처음 보신다면, MDN에서 import, export를 검색해보시기 바랍니다.
 *
 * [주의] quiz.json 파일 내용은 수정하지 마세요.

import data from "./quiz.json";


 * 퀴즈 데이터가 콘솔에 출력됩니다.
 * `data` 변수에 담긴 정보를 이용해서 작업하세요.
 * 아래 콘솔 출력문은 가이드 목적의 코드이니 삭제하셔도 됩니다.
 */


// 아래 setTimeout 구문 또한 가이드 목적의 코드이니 삭제하셔도 됩니다.

import data from "./quiz.json";

const startButton = document.querySelector(".startButton button");
const rulesBox = document.querySelector(".rulesBox");
const quitButton = rulesBox.querySelector(".buttons .quit");
const continueButton = rulesBox.querySelector(".buttons .continue");
const quizBox = document.querySelector(".quizBox");

startButton.onclick = ()=> {
  rulesBox.classList.add("activeRules");
}

quitButton.onclick = ()=> {
  rulesBox.classList.remove("activeRules");
}

continueButton.onclick = ()=> {
  rulesBox.classList.remove("activeRules");
  quizBox.classList.add("activeQuiz");
  presentQuestions();
}

let questionNum = 0;
let questionCnt = 0;

function presentQuestions() {
  const questionText = document.querySelector("question");
  let questionTag = '<span>' + data[questionNum].question + '</span>'; // This part! I'm having an error!
  console.log(questionTag);
}