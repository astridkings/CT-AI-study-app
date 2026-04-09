// CT-AI Study App - Main JavaScript

// Global state
let currentSection = 'home';
let currentQuiz = null;
let currentQuestionIndex = 0;
let quizScore = 0;
let selectedAnswer = null;
let mockExamTimer = null;
let mockExamTimeRemaining = 3600; // 60 minutes in seconds

// DOM Elements
const navButtons = document.querySelectorAll('.nav-btn');
const sections = document.querySelectorAll('.section');

// Chapter quiz data is in quizzes.js

// Mock exam data - 40 questions per exam from all chapters
const mockExamData = {
    exam1: [],
    exam2: [],
    exam3: []
};

// Generate mock exams by selecting questions from all chapters
function generateMockExams() {
    const allQuestions = [];
    
    // Collect all questions from all chapters
    for (let i = 1; i <= 11; i++) {
        const chapterKey = `chapter${i}`;
        if (quizData[chapterKey]) {
            quizData[chapterKey].forEach((q, index) => {
                allQuestions.push({
                    ...q,
                    chapter: i,
                    questionNum: index + 1
                });
            });
        }
    }
    
    // Shuffle and distribute for 3 exams
    const shuffled = shuffleArray([...allQuestions]);
    
    // Assign 40 questions to each exam
    mockExamData.exam1 = shuffled.slice(0, 40);
    mockExamData.exam2 = shuffled.slice(40, 80);
    mockExamData.exam3 = shuffled.slice(80, 120);
}

// Fisher-Yates shuffle
function shuffleArray(array) {
    const arr = [...array];
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
}

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    generateMockExams();
    setupNavigation();
    setupChapterQuizzes();
    setupMockExams();
});

// Navigation functionality
function setupNavigation() {
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetSection = button.dataset.section;
            switchSection(targetSection);
            
            // Update active button
            navButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });
}

function switchSection(sectionId) {
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === sectionId) {
            section.classList.add('active');
        }
    });
    currentSection = sectionId;
}

// Chapter Quiz functionality
function setupChapterQuizzes() {
    const chapterButtons = document.querySelectorAll('.chapter-btn');
    
    chapterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const chapterNum = parseInt(button.dataset.chapter);
            startChapterQuiz(chapterNum);
        });
    });
    
    // Quiz navigation buttons
    document.getElementById('quiz-submit').addEventListener('click', submitQuizAnswer);
    document.getElementById('quiz-next').addEventListener('click', nextQuizQuestion);
    document.getElementById('quiz-restart').addEventListener('click', () => {
        hideQuizContainer();
        showChapterSelection();
    });
}

function startChapterQuiz(chapterNum) {
    const chapterKey = `chapter${chapterNum}`;
    if (!quizData[chapterKey]) {
        console.error('Chapter data not found:', chapterKey);
        return;
    }
    
    currentQuiz = quizData[chapterKey];
    currentQuestionIndex = 0;
    quizScore = 0;
    selectedAnswer = null;
    
    // Update UI
    document.querySelector('.quiz-selection').classList.add('hidden');
    document.getElementById('quiz-container').classList.remove('hidden');
    document.getElementById('quiz-title').textContent = `Quiz do Capítulo ${chapterNum}`;
    
    displayQuestion();
}

function displayQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    const questionNum = currentQuestionIndex + 1;
    const totalQuestions = currentQuiz.length;
    
    // Update progress
    document.getElementById('quiz-progress-text').textContent = `Questão ${questionNum} de ${totalQuestions}`;
    document.getElementById('quiz-progress-bar').style.width = `${((questionNum - 1) / totalQuestions) * 100}%`;
    
    // Display question
    const questionElement = document.getElementById('quiz-question');
    questionElement.innerHTML = `<h4>${questionNum}. ${question.question}</h4>`;
    
    // Display options
    const optionsElement = document.getElementById('quiz-options');
    optionsElement.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index));
        optionsElement.appendChild(optionElement);
    });
    
    // Reset state
    selectedAnswer = null;
    document.getElementById('quiz-feedback').classList.add('hidden');
    document.getElementById('quiz-submit').classList.remove('hidden');
    document.getElementById('quiz-next').classList.add('hidden');
    document.getElementById('quiz-restart').classList.add('hidden');
}

function selectOption(index) {
    selectedAnswer = index;
    
    // Update UI
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, i) => {
        option.classList.remove('selected');
        if (i === index) {
            option.classList.add('selected');
        }
    });
}

function submitQuizAnswer() {
    if (selectedAnswer === null) {
        alert('Por favor, selecione uma resposta antes de enviar.');
        return;
    }
    
    const question = currentQuiz[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    if (isCorrect) {
        quizScore++;
    }
    
    // Show feedback
    const feedbackElement = document.getElementById('quiz-feedback');
    feedbackElement.classList.remove('hidden', 'correct', 'incorrect');
    feedbackElement.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedbackElement.innerHTML = `
        <strong>${isCorrect ? '✓ Correto!' : '✗ Incorreto'}</strong><br>
        ${question.explanation}
    `;
    
    // Highlight correct/incorrect answers
    const options = document.querySelectorAll('.quiz-option');
    options.forEach((option, i) => {
        if (i === question.correct) {
            option.classList.add('correct');
        } else if (i === selectedAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });
    
    // Update buttons
    document.getElementById('quiz-submit').classList.add('hidden');
    
    if (currentQuestionIndex < currentQuiz.length - 1) {
        document.getElementById('quiz-next').classList.remove('hidden');
    } else {
        showQuizResults();
    }
}

function nextQuizQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function showQuizResults() {
    const totalQuestions = currentQuiz.length;
    const percentage = Math.round((quizScore / totalQuestions) * 100);
    
    const feedbackElement = document.getElementById('quiz-feedback');
    feedbackElement.classList.remove('hidden', 'correct', 'incorrect');
    feedbackElement.innerHTML = `
        <div class="score-display">
            <span class="score-number">${quizScore}/${totalQuestions}</span>
            <span class="score-percentage">${percentage}%</span>
        </div>
        <div class="exam-feedback">
            ${getScoreFeedback(percentage)}
        </div>
    `;
    
    document.getElementById('quiz-restart').classList.remove('hidden');
    
    // Hide question and options
    document.getElementById('quiz-question').classList.add('hidden');
    document.getElementById('quiz-options').classList.add('hidden');
    document.getElementById('quiz-progress-bar').style.width = '100%';
}

function getScoreFeedback(percentage) {
    if (percentage >= 90) {
        return 'Excelente! Você tem um bom entendimento deste capítulo.';
    } else if (percentage >= 70) {
        return 'Bom trabalho! Revise os resumos para as áreas que errou.';
    } else if (percentage >= 50) {
        return 'Você está no caminho certo. Revise este capítulo mais detalhadamente.';
    } else {
        return 'Este capítulo precisa de mais estudo. Leia os resumos e tente novamente.';
    }
}

function hideQuizContainer() {
    document.getElementById('quiz-container').classList.add('hidden');
    document.getElementById('quiz-question').classList.remove('hidden');
    document.getElementById('quiz-options').classList.remove('hidden');
}

function showChapterSelection() {
    document.querySelector('.quiz-selection').classList.remove('hidden');
}

// Mock Exam functionality
function setupMockExams() {
    const startButtons = document.querySelectorAll('.start-exam-btn');
    
    startButtons.forEach(button => {
        button.addEventListener('click', () => {
            const examNum = parseInt(button.parentElement.dataset.exam);
            startMockExam(examNum);
        });
    });
    
    // Mock exam navigation buttons
    document.getElementById('mock-exam-submit').addEventListener('click', submitMockExamAnswer);
    document.getElementById('mock-exam-next').addEventListener('click', nextMockExamQuestion);
    document.getElementById('mock-exam-finish').addEventListener('click', finishMockExam);
    document.getElementById('mock-exam-restart').addEventListener('click', () => {
        hideMockExamContainer();
        showMockExamSelection();
    });
}

function startMockExam(examNum) {
    const examKey = `exam${examNum}`;
    if (!mockExamData[examKey]) {
        console.error('Mock exam data not found:', examKey);
        return;
    }
    
    currentQuiz = mockExamData[examKey];
    currentQuestionIndex = 0;
    quizScore = 0;
    selectedAnswer = null;
    mockExamTimeRemaining = 3600; // 60 minutes
    
    // Update UI
    document.querySelector('.mock-exam-selection').classList.add('hidden');
    document.getElementById('mock-exam-results').classList.add('hidden');
    document.getElementById('mock-exam-container').classList.remove('hidden');
    document.getElementById('mock-exam-title').textContent = `Prova Simulada ${examNum}`;
    
    // Start timer
    startMockExamTimer();
    displayMockExamQuestion();
}

function startMockExamTimer() {
    updateTimerDisplay();
    mockExamTimer = setInterval(() => {
        mockExamTimeRemaining--;
        updateTimerDisplay();
        
        if (mockExamTimeRemaining <= 0) {
            clearInterval(mockExamTimer);
            finishMockExam();
        }
    }, 1000);
}

function updateTimerDisplay() {
    const minutes = Math.floor(mockExamTimeRemaining / 60);
    const seconds = mockExamTimeRemaining % 60;
    const timerDisplay = document.getElementById('timer-display');
    
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    
    // Add warning class when less than 5 minutes
    if (mockExamTimeRemaining < 300) {
        timerDisplay.classList.add('warning');
    } else {
        timerDisplay.classList.remove('warning');
    }
}

function displayMockExamQuestion() {
    const question = currentQuiz[currentQuestionIndex];
    const questionNum = currentQuestionIndex + 1;
    const totalQuestions = currentQuiz.length;
    
    // Update progress
    document.getElementById('mock-progress-text').textContent = `Questão ${questionNum} de ${totalQuestions}`;
    document.getElementById('mock-progress-bar').style.width = `${((questionNum - 1) / totalQuestions) * 100}%`;
    
    // Display question
    const questionElement = document.getElementById('mock-exam-question');
    questionElement.innerHTML = `<h4>${questionNum}. ${question.question}</h4>`;
    
    // Remove any existing feedback from previous question
    const existingFeedback = questionElement.querySelector('.quiz-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    // Display options
    const optionsElement = document.getElementById('mock-exam-options');
    optionsElement.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'quiz-option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectMockExamOption(index));
        optionsElement.appendChild(optionElement);
    });
    
    // Reset state
    selectedAnswer = null;
    document.getElementById('mock-exam-submit').classList.remove('hidden');
    document.getElementById('mock-exam-next').classList.add('hidden');
    document.getElementById('mock-exam-finish').classList.add('hidden');
}

function selectMockExamOption(index) {
    selectedAnswer = index;
    
    // Update UI
    const options = document.querySelectorAll('#mock-exam-options .quiz-option');
    options.forEach((option, i) => {
        option.classList.remove('selected');
        if (i === index) {
            option.classList.add('selected');
        }
    });
}

function submitMockExamAnswer() {
    if (selectedAnswer === null) {
        alert('Por favor, selecione uma resposta antes de enviar.');
        return;
    }
    
    const question = currentQuiz[currentQuestionIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    if (isCorrect) {
        quizScore++;
    }
    
    // Show feedback for mock exam
    const questionElement = document.getElementById('mock-exam-question');
    const feedbackDiv = document.createElement('div');
    feedbackDiv.className = 'quiz-feedback';
    feedbackDiv.classList.remove('hidden', 'correct', 'incorrect');
    feedbackDiv.classList.add(isCorrect ? 'correct' : 'incorrect');
    feedbackDiv.innerHTML = `
        <strong>${isCorrect ? '✓ Correto!' : '✗ Incorreto'}</strong><br>
        ${question.explanation}
    `;
    questionElement.appendChild(feedbackDiv);
    
    // Highlight correct/incorrect answers
    const options = document.querySelectorAll('#mock-exam-options .quiz-option');
    options.forEach((option, i) => {
        if (i === question.correct) {
            option.classList.add('correct');
        } else if (i === selectedAnswer && !isCorrect) {
            option.classList.add('incorrect');
        }
        option.style.pointerEvents = 'none';
    });
    
    // Update buttons
    document.getElementById('mock-exam-submit').classList.add('hidden');
    
    if (currentQuestionIndex < currentQuiz.length - 1) {
        document.getElementById('mock-exam-next').classList.remove('hidden');
    } else {
        document.getElementById('mock-exam-finish').classList.remove('hidden');
    }
}

function nextMockExamQuestion() {
    currentQuestionIndex++;
    displayMockExamQuestion();
}

function finishMockExam() {
    // Stop timer
    if (mockExamTimer) {
        clearInterval(mockExamTimer);
        mockExamTimer = null;
    }
    
    const totalQuestions = currentQuiz.length;
    const percentage = Math.round((quizScore / totalQuestions) * 100);
    
    // Update results
    document.getElementById('exam-score').textContent = `${quizScore}/${totalQuestions}`;
    document.getElementById('exam-percentage').textContent = `${percentage}%`;
    document.getElementById('exam-feedback').innerHTML = getScoreFeedback(percentage);
    
    // Hide exam container, show results
    document.getElementById('mock-exam-container').classList.add('hidden');
    document.getElementById('mock-exam-results').classList.remove('hidden');
    
    // Reset progress bar
    document.getElementById('mock-progress-bar').style.width = '100%';
}

function hideMockExamContainer() {
    document.getElementById('mock-exam-container').classList.add('hidden');
    document.getElementById('mock-exam-question').classList.remove('hidden');
    document.getElementById('mock-exam-options').classList.remove('hidden');
    document.getElementById('timer-display').classList.remove('warning');
    
    // Remove feedback from question
    const questionElement = document.getElementById('mock-exam-question');
    const feedback = questionElement.querySelector('.quiz-feedback');
    if (feedback) {
        feedback.remove();
    }
}

function showMockExamSelection() {
    document.querySelector('.mock-exam-selection').classList.remove('hidden');
}