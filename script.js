// クイズデータ
const quizData = [
  {
    question: '以下のうち、嵐のメンバーは誰ですか？',
    options: ['木村拓哉', '櫻井翔', '福山雅治', '長瀬智也'],
    correct: 1
  },
  {
    question: 'SMAPのメンバーといえば？',
    options: ['櫻井翔', '木村拓哉', '国分太一', '松岡昌宏'],
    correct: 1
  },
  {
    question: '以下のうち、TOKIOのメンバーは誰ですか？',
    options: ['二宮和也', '国分太一', '長瀬智也', '木村拓哉'],
    correct: 2
  },
  {
    question: 'Perfumeのメンバーといえば？',
    options: ['のっち', '佐々木希', '有村架純', '新垣結衣'],
    correct: 0
  },
  {
    question: '以下のうち、AKB48の元メンバーは誰ですか？',
    options: ['深田恭子', '前田敦子', '石原さとみ', '綾瀬はるか'],
    correct: 1
  }
];

let currentQuestion = 0;
let score = 0;
let answered = false;

// DOM要素の取得
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options-container');
const feedbackElement = document.getElementById('feedback');
const nextButton = document.getElementById('next-btn');
const scoreContainer = document.getElementById('score-container');
const finalScoreElement = document.getElementById('final-score');
const restartButton = document.getElementById('restart-btn');

// クイズを開始
function startQuiz() {
  currentQuestion = 0;
  score = 0;
  answered = false;
  scoreContainer.classList.add('hidden');
  showQuestion();
}

// 質問を表示
function showQuestion() {
  answered = false;
  nextButton.classList.add('hidden');
  feedbackElement.classList.add('hidden');
  
  const current = quizData[currentQuestion];
  questionElement.textContent = current.question;
  
  // 選択肢をクリア
  optionsContainer.innerHTML = '';
  
  // 選択肢を作成
  current.options.forEach((option, index) => {
    const button = document.createElement('button');
    button.textContent = option;
    button.classList.add('option-btn');
    button.addEventListener('click', () => selectAnswer(index));
    optionsContainer.appendChild(button);
  });
}

// 答えを選択
function selectAnswer(selectedIndex) {
  if (answered) return;
  
  answered = true;
  const current = quizData[currentQuestion];
  const optionButtons = optionsContainer.querySelectorAll('.option-btn');
  
  // 全てのボタンを無効化
  optionButtons.forEach(btn => btn.disabled = true);
  
  // 正解・不正解の表示
  if (selectedIndex === current.correct) {
    score++;
    optionButtons[selectedIndex].classList.add('correct');
    feedbackElement.textContent = '正解！';
    feedbackElement.classList.remove('incorrect-feedback');
    feedbackElement.classList.add('correct-feedback');
  } else {
    optionButtons[selectedIndex].classList.add('incorrect');
    optionButtons[current.correct].classList.add('correct');
    feedbackElement.textContent = `不正解。正解は「${current.options[current.correct]}」でした。`;
    feedbackElement.classList.remove('correct-feedback');
    feedbackElement.classList.add('incorrect-feedback');
  }
  
  feedbackElement.classList.remove('hidden');
  
  // 次の問題ボタンまたは結果を表示
  if (currentQuestion < quizData.length - 1) {
    nextButton.classList.remove('hidden');
  } else {
    setTimeout(showResults, 1500);
  }
}

// 次の質問へ
function nextQuestion() {
  currentQuestion++;
  showQuestion();
}

// 結果を表示
function showResults() {
  document.getElementById('question-container').classList.add('hidden');
  optionsContainer.classList.add('hidden');
  feedbackElement.classList.add('hidden');
  nextButton.classList.add('hidden');
  
  finalScoreElement.textContent = `あなたのスコア: ${score} / ${quizData.length}`;
  scoreContainer.classList.remove('hidden');
}

// クイズをリスタート
function restartQuiz() {
  document.getElementById('question-container').classList.remove('hidden');
  optionsContainer.classList.remove('hidden');
  startQuiz();
}

// イベントリスナー
nextButton.addEventListener('click', nextQuestion);
restartButton.addEventListener('click', restartQuiz);

// 初期化
startQuiz();
