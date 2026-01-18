// クイズデータ（令和、平成、昭和の芸能人グループ）
const quizData = {
  "令和": [
    {
      question: "令和時代に大ブレイクしたダンス&ボーカルグループはどれ？",
      options: ["BE:FIRST", "SMAP", "光GENJI", "キャンディーズ"],
      correct: 0
    },
    {
      question: "令和にデビューした7人組ボーイズグループはどれ？",
      options: ["嵐", "なにわ男子", "少年隊", "チェッカーズ"],
      correct: 1
    },
    {
      question: "令和時代にグローバルに活躍している女性グループはどれ？",
      options: ["ピンク・レディー", "モーニング娘。", "NiziU", "おニャン子クラブ"],
      correct: 2
    }
  ],
  "平成": [
    {
      question: "平成時代を代表する国民的アイドルグループはどれ？",
      options: ["SMAP", "BE:FIRST", "ザ・ドリフターズ", "ピンク・レディー"],
      correct: 0
    },
    {
      question: "平成末期まで活躍した5人組アイドルグループはどれ？",
      options: ["光GENJI", "嵐", "少年隊", "なにわ男子"],
      correct: 1
    },
    {
      question: "平成に大ヒット曲を連発した女性グループはどれ？",
      options: ["NiziU", "モーニング娘。", "BE:FIRST", "チェッカーズ"],
      correct: 1
    }
  ],
  "昭和": [
    {
      question: "昭和を代表する伝説的なコメディ&バラエティグループはどれ？",
      options: ["なにわ男子", "ザ・ドリフターズ", "SMAP", "BE:FIRST"],
      correct: 1
    },
    {
      question: "昭和時代に一世を風靡した女性デュオはどれ？",
      options: ["ピンク・レディー", "モーニング娘。", "NiziU", "嵐"],
      correct: 0
    },
    {
      question: "昭和末期に人気を博したローラースケートアイドルグループはどれ？",
      options: ["SMAP", "BE:FIRST", "光GENJI", "なにわ男子"],
      correct: 2
    }
  ]
};

// 定数
const FINAL_SCORE_DELAY = 2000; // 最終スコア表示までの遅延時間（ミリ秒）

// グローバル変数
let currentCategory = "";
let currentQuestionIndex = 0;
let score = 0;
let allQuestions = [];
let answered = false;
let totalAnswered = 0;

// DOM要素の取得
const categoryDisplay = document.getElementById("category-display");
const questionDisplay = document.getElementById("question-display");
const optionsContainer = document.getElementById("options-container");
const resultDisplay = document.getElementById("result-display");
const scoreDisplay = document.getElementById("score-display");
const nextButton = document.getElementById("next-button");
const restartButton = document.getElementById("restart-button");

// クイズの初期化
function initQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  totalAnswered = 0;
  allQuestions = [];
  
  // 全カテゴリの問題をシャッフルして結合
  Object.keys(quizData).forEach(category => {
    quizData[category].forEach(question => {
      allQuestions.push({
        category: category,
        ...question
      });
    });
  });
  
  // 問題をシャッフル
  allQuestions = shuffleArray(allQuestions);
  
  showQuestion();
}

// 配列をシャッフルする関数
function shuffleArray(array) {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// 問題を表示
function showQuestion() {
  if (currentQuestionIndex >= allQuestions.length) {
    showFinalScore();
    return;
  }
  
  answered = false;
  const currentQuestion = allQuestions[currentQuestionIndex];
  currentCategory = currentQuestion.category;
  
  // カテゴリの表示
  categoryDisplay.textContent = `【${currentCategory}時代】`;
  categoryDisplay.className = `category-display category-${currentCategory}`;
  
  // 質問の表示
  questionDisplay.textContent = currentQuestion.question;
  
  // 選択肢の表示
  optionsContainer.innerHTML = "";
  currentQuestion.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.className = "option-button";
    button.addEventListener("click", () => selectOption(index));
    optionsContainer.appendChild(button);
  });
  
  // 結果表示をクリア
  resultDisplay.textContent = "";
  resultDisplay.className = "result-display";
  
  // ボタンを非表示
  nextButton.style.display = "none";
  restartButton.style.display = "none";
  
  // スコア表示を更新
  updateScoreDisplay();
}

// 選択肢を選択
function selectOption(selectedIndex) {
  if (answered) return;
  
  answered = true;
  totalAnswered++;
  const currentQuestion = allQuestions[currentQuestionIndex];
  const buttons = optionsContainer.querySelectorAll(".option-button");
  
  // 正解・不正解の判定
  if (selectedIndex === currentQuestion.correct) {
    score++;
    resultDisplay.textContent = "正解！";
    resultDisplay.className = "result-display correct";
    buttons[selectedIndex].classList.add("correct");
  } else {
    resultDisplay.textContent = `不正解... 正解は「${currentQuestion.options[currentQuestion.correct]}」でした。`;
    resultDisplay.className = "result-display incorrect";
    buttons[selectedIndex].classList.add("incorrect");
    buttons[currentQuestion.correct].classList.add("correct");
  }
  
  // すべてのボタンを無効化
  buttons.forEach(button => {
    button.disabled = true;
  });
  
  updateScoreDisplay();
  
  // 次へボタンを表示
  currentQuestionIndex++;
  if (currentQuestionIndex < allQuestions.length) {
    nextButton.style.display = "block";
  } else {
    setTimeout(showFinalScore, FINAL_SCORE_DELAY);
  }
}

// スコア表示を更新
function updateScoreDisplay() {
  scoreDisplay.textContent = `スコア: ${score} / ${totalAnswered}`;
}

// 最終スコアを表示
function showFinalScore() {
  categoryDisplay.textContent = "クイズ終了！";
  categoryDisplay.className = "category-display";
  questionDisplay.textContent = `お疲れさまでした！`;
  optionsContainer.innerHTML = "";
  resultDisplay.textContent = `最終スコア: ${score} / ${allQuestions.length}`;
  resultDisplay.className = "result-display final-score";
  
  const percentage = Math.round((score / allQuestions.length) * 100);
  let message = "";
  if (percentage === 100) {
    message = "完璧です！芸能人グループマスター！";
  } else if (percentage >= 80) {
    message = "素晴らしい！芸能通ですね！";
  } else if (percentage >= 60) {
    message = "よくできました！";
  } else if (percentage >= 40) {
    message = "もう少し頑張りましょう！";
  } else {
    message = "また挑戦してくださいね！";
  }
  
  scoreDisplay.textContent = message;
  nextButton.style.display = "none";
  restartButton.style.display = "block";
}

// イベントリスナーの設定
nextButton.addEventListener("click", showQuestion);
restartButton.addEventListener("click", initQuiz);

// クイズの開始
initQuiz();
