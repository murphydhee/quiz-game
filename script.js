const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: 'What is 2 + 2?',
    answers: [
      { text: '4', correct: true },
      { text: '22', correct: false }
    ]
  },
  {
    question: 'What is my name?',
    answers: [
      { text: 'David', correct: false },
      { text: 'Fluffy', correct: false },
      {text: 'Jerry', correct: false},
      {text: 'Mfon', correct: true},
    ]
  },
  {
    question: 'Will you send me money?',
    answers: [
      { text: 'Yes', correct: true },
      { text: 'No', correct: false },
      { text: 'Send your AZA', correct: true },
      { text: 'Send you wallet address', correct: true }
    ]
  },
  {
    question: 'Who was British Prime Minister before Theresa May?',
    answers: [
      { text: 'Ifiok Menadio', correct: false },
      { text: 'Michael Howard', correct: true },
      { text: 'David Ozoh', correct: false },
      { text: 'James Cameron', correct: false }
    ]
  },
  {
    question: 'who was the last nigerian prime minister?',
    answers: [
      { text: 'Tafawa Balewa', correct: true },
      { text: 'Michael Howard', correct: false },
      { text: 'Udom Emmanuel', correct: false },
      { text: 'John Jameson', correct: false }
    ]
  },
  {
    question: 'In meters, how long is an Olympic swimming pool?',
    answers: [
      { text: '100 meters', correct: false},
      { text: '80 meters', correct: false },
      { text: '50 meters', correct: true },
      { text: '400 meters', correct: false }
    ]
  },
  {
    question: 'What year did World War II end?',
    answers: [
      { text: '1/sept/1939', correct: false},
      { text: '11/june/1995', correct: false },
      { text: '2/sept/1945', correct: true },
      { text: '20/oct/2020', correct: false }
    ]
  },
  {
    question: 'what is the capital of peru?',
    answers: [
      { text: 'Para', correct: false},
      { text: 'Panama', correct: false },
      { text: 'Obudu', correct: false },
      { text: 'Lima', correct: true }
    ]
  },
  {
    question: 'What is the largest muscle in the body?',
    answers: [
      { text: 'Breast ', correct: false},
      { text: 'Tongue', correct: false },
      { text: 'Brachial plexus', correct: false },
      { text: 'Gluteus maximus', correct: true }
    ]
  },
  {
    question: 'What is a 70 years anniversary called?',
    answers: [
      { text: '70 years anniversary', correct: false},
      { text: 'Silver jubilee', correct: false },
      { text: 'Golden jubilee', correct: false },
      { text: 'Platinum', correct: true }
    ]
  },
  {
    question: 'Who was Nigeria’s first inspector General of Police?',
    answers: [
      { text: 'Mr. W. D. Duncan, 1940 – 1965', correct: false},
      { text: 'Mr. C. W. Duncan, 1933 – 1935', correct: false },
      { text: 'Mr. Duncan Mighty, 1995 – 2045', correct: false },
      { text: 'Mr. C. W. Duncan, 1930 – 1935', correct: true }
    ]
  },
  {
    question: 'Who was the first Senate President of Nigeria?',
    answers: [
      { text: 'Dr. David Bryce', correct: false},
      { text: 'Mr. David Mark', correct: false },
      { text: 'Dr. Nnamdi Azikiwe', correct: true },
      { text: 'Mr john Atsu', correct: false }
    ]
  },
  {
    question: 'How many Local Government Areas are in Nigeria?',
    answers: [
      { text: '774', correct: true},
      { text: '340', correct: false },
      { text: '2003', correct: false },
      { text: '36', correct: false }
    ]
  },
  {
    question: 'Which state in Nigeria has the largest number of Local Government Areas?',
    answers: [
      { text: 'Delta', correct: false},
      { text: 'Kano', correct: true },
      { text: 'Abuja', correct: false },
      { text: 'Cross-river', correct: false }
    ]
  },
  {
    question: 'How many countries constitute the Economic Community of West African States?',
    answers: [
      { text: '16', correct: true},
      { text: '23', correct: false },
      { text: '35', correct: false },
      { text: '23', correct: false }
    ]
  },
  {
    question: 'How many brothers does Prince Hans of the Southern Isles have in Frozen?',
    answers: [
      { text: '12', correct: true},
      { text: '2', correct: false },
      { text: '3', correct: false },
      { text: '23', correct: false }
    ]
  },
  {
    question: 'Who trained Hercules to be a hero?',
    answers: [
      { text: 'Phil/Philoctetes', correct: true},
      { text: 'The half goat man', correct: false },
      { text: 'Thanos', correct: false },
      { text: 'Sapa', correct: false }
    ]
  },
  {
    question: 'What motivates Mfon Ekwere to be a programmer?',
    answers: [
      { text: 'Living my best life', correct: true},
      { text: 'contributing to society', correct: true },
      { text: 'Problem-solving', correct: true },
      { text: 'Sapa', correct: true }
    ]
  },
  {
    question: 'What are the names of Cinderella’s stepsisters?',
    answers: [
      { text: 'Diana & Dati-abasi', correct: false},
      { text: 'Mete & Oti', correct: false },
      { text: 'Anastasia and Drizella', correct: true },
      { text: 'Chioma & Amaka', correct: false}
    ]
  },
  {
    question: 'What are the names of Hades minions in Hercules?',
    answers: [
      { text: 'Praise & worship', correct: false},
      { text: 'Tom & Jerry', correct: false },
      { text: 'Pain & Panic', correct: true },
      { text: 'Chioma & Amaka', correct: false}
    ]
  },
  {
    question: 'Who is Mufasa’s trusted advisor in The Lion King?',
    answers: [
      { text: 'Lai Mohammed', correct: false},
      { text: 'Nala', correct: false },
      { text: 'Zazu', correct: true },
      { text: 'Balde', correct: false}
    ]
  },
    {
    question: 'What is the name of Belle’s father in Beauty and the Beast?',
    answers: [
      { text: 'Maurice', correct: true},
      { text: 'John', correct: false },
      { text: 'Willam', correct: true },
      { text: 'Murphy', correct: false}
    ]
  },
  {
    question: 'Who serves a Pinocchio’s conscience?',
    answers: [
      { text: 'Nigerian SARS', correct: false},
      { text: 'Victor Cricket', correct: false },
      { text: 'johnny Cricket', correct: false },
      { text: 'Jimmy Cricket', correct: true}
    ]
  },
  {
    question: 'Emperor Kuzco turns into what animal in The Emperor’s New Groove?',
    answers: [
      { text: 'Ram', correct: false},
      { text: 'Goat', correct: false },
      { text: 'Penguin', correct: false },
      { text: 'Llama', correct: true}
    ]
  },
  {
    question: 'Rapunzel’s chameleon in Tangled is called what?',
    answers: [
      { text: 'Victor', correct: false},
      { text: 'Edmund', correct: false },
      { text: 'Pascal', correct: true },
      { text: 'Lizzy', correct: false}
    ]
  },
  {
    question: 'The Princess and the Frog is set in which city?',
    answers: [
      { text: 'Califonia', correct: false},
      { text: 'Oron road', correct: false },
      { text: 'New Orleans', correct: true },
      { text: 'Ohio', correct: false}
    ]
  },
  {
    question: 'What are the names of Cruella’s henchmen in 101 Dalmatians?',
    answers: [
      { text: 'Edwin & Desmond', correct: false},
      { text: 'Sammy & Anthony', correct: false },
      { text: 'Jasper & Horace', correct: true },
      { text: 'Julius & Jamie', correct: false}
    ]
  },
  {
    question: 'What was Nemo’s mother’s name?',
    answers: [
      { text: 'Coral', correct: true},
      { text: 'Fluffy', correct: false },
      { text: 'Christy', correct: false },
      { text: 'Jenny', correct: false}
    ]
  },
  {
    question: 'What did Jumbo  hold to fly?',
    answers: [
      { text: 'Feather', correct: true},
      { text: 'Jet Pack', correct: false },
      { text: 'Skill chip', correct: false },
      { text: 'Audacity', correct: false}
    ]
  },
  {
    question: 'Will you recommend me for tech jobs?',
    answers: [
      { text: 'yes but in red', correct: false },
      { text: 'yes', correct: true }
    ]
  }
]