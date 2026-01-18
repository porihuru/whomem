// クイズデータ
const quizData = [
    {
        question: "日本の首都はどこですか？",
        options: ["大阪", "京都", "東京", "名古屋"],
        correct: 2
    },
    {
        question: "1 + 1 = ?",
        options: ["1", "2", "3", "4"],
        correct: 1
    },
    {
        question: "地球で一番大きな海は？",
        options: ["大西洋", "太平洋", "インド洋", "北極海"],
        correct: 1
    },
    {
        question: "一週間は何日ですか？",
        options: ["5日", "6日", "7日", "8日"],
        correct: 2
    }
];

let currentQuestionIndex = 0;

// DOM要素
const questionElement = document.getElementById('question');
const optionsContainer = document.getElementById('options');
const resultElement = document.getElementById('result');

// クイズの初期化
function initQuiz() {
    loadQuestion();
}

// 質問を読み込む
function loadQuestion() {
    if (currentQuestionIndex >= quizData.length) {
        showFinalResult();
        return;
    }

    const currentQuestion = quizData[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    
    // 選択肢ボタンを生成
    optionsContainer.innerHTML = '';
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option';
        button.textContent = option;
        button.addEventListener('click', () => checkAnswer(index));
        optionsContainer.appendChild(button);
    });

    resultElement.textContent = '';
    resultElement.className = '';
}

// 回答をチェック
function checkAnswer(selectedIndex) {
    const currentQuestion = quizData[currentQuestionIndex];
    const buttons = document.querySelectorAll('.option');
    
    // すべてのボタンを無効化
    buttons.forEach(button => button.disabled = true);

    if (selectedIndex === currentQuestion.correct) {
        buttons[selectedIndex].classList.add('correct');
        resultElement.textContent = '正解です！';
        resultElement.className = 'correct-result';
    } else {
        buttons[selectedIndex].classList.add('incorrect');
        buttons[currentQuestion.correct].classList.add('correct');
        resultElement.textContent = '不正解です。正解は「' + currentQuestion.options[currentQuestion.correct] + '」です。';
        resultElement.className = 'incorrect-result';
    }

    // 次の質問へ移動
    setTimeout(() => {
        currentQuestionIndex++;
        loadQuestion();
    }, 2000);
}

// 最終結果を表示
function showFinalResult() {
    questionElement.textContent = 'クイズが終了しました！';
    optionsContainer.innerHTML = '<button class="option" onclick="restartQuiz()">もう一度挑戦する</button>';
    resultElement.textContent = 'お疲れ様でした！';
    resultElement.className = 'correct-result';
}

// クイズを再起動
function restartQuiz() {
    currentQuestionIndex = 0;
    loadQuestion();
}

// ページ読み込み時にクイズを初期化
initQuiz();
