/* eslint-disable strict */
/**
 * Example store structure
 */
const store = {
  
  // 5 or more questions are required
  questions: [
    {
      question: 'What is the meaning of "Wubba Lubba Dub Dub"?',
      answers: [
        'I love my grandkids',
        'Let\'s party',
        'I am in great pain',
        'That was a CLOSE ONE'
      ],
      correctAnswer: 'I am in great pain'
    },
    {
      question: 'What was name of Rick\'s Anatomy Park attraction?',
      answers: [
        'Aortic Thunder',
        'Pirates of th Pancreas',
        'The Spleen Splitter',
        'Liver Free, Die Hard'
      ],
      correctAnswer: 'Pirates of th Pancreas'
    },
    {
      question: 'What is the number of Rick’s universe?',
      answers: [
        'C-137',
        'A-199',
        'The Frumubulon Univers',
        'C-245'
      ],
      correctAnswer: 'C-137'
    },
    {
      question: 'With which Disney channel show Rick and Morty shared some easter eggs?',
      answers: [
        'Phil of the Future',
        'That\'s So Raven',
        'Gravity Falls',
        'Phineas and Ferb'
      ],
      correctAnswer: 'Gravity Falls'
    },
    {
      question: 'What is a "Mr. Meeseeks"?',
      answers: [
        'A Helper',
        'A Cool Blue Guy',
        'A problem solver',
        'All of the Above'
      ],
      correctAnswer: 'All of the Above'
    },
    {
      question: 'What was an item that came from Gravity Falls?',
      answers: [
        'Hoola Hoop',
        'Pen and Notepad',
        'Radio and Antenna',
        'Onion'
      ],
      correctAnswer: 'Pen and Notepad'
    },
    {
      question: 'How old is a Morty',
      answers: [
        '9',
        '12',
        '16',
        '14'
      ],
      correctAnswer: '14'
    },
    {
      question: 'What is Beth\'s profession?',
      answers: [
        'Horse Surgeon',
        'Shoe Maker',
        'Wedding Planner',
        'Dancing Queen'
      ],
      correctAnswer: 'Horse Surgeon'
    },
    {
      question: 'What is the worth of a Schmeckle?',
      answers: [
        'About $4',
        'Like at least $10',
        'Woah! Could it BE $148',
        'I guess it could also be $10,000'
      ],
      correctAnswer: 'Woah! Could it BE $148'
    },
    {
      question: 'Who are the creators of the show',
      answers: [
        'Matt Stone & Trey Parker',
        'Matt Groening & J.G Quintel',
        'Justin Roiland & Dan Harmon',
        'The Wachowski Brothers'
      ],
      correctAnswer: 'Justin Roiland & Dan Harmon'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// The below functions return HTML templates



function generateWelcomePageTemplate() {
  // Code needs to generate the welcome page template to be displayed on the DOM in the main
  let template = `<img src="images/showme.gif" alt="SHOW ME WHAT YOU GOT!">
  <h2>CLICK BELOW TO START!</h2>
  <div>
      <button class="button" id="start">Start Quiz</button> 
  </div>`;

  render(template);
  


  // Must be usable by a keyboard and mouse******

  // Must contain a start quiz button that - on click - changes from this template to the question/answer template and changes quiz start to true
  
  // Per the generateResultsTemplate function, the score , quizStart, and questionNumber need to be reset when you reach this page - possibly when you hit the retry button?

  // Must render at the end
}

function generateQuestionTemplate() {
  // Code needs to create the page template for the question div of the quiz
  let item = store.questions[store.questionNumber];
  return `<h2>Question ${store.questionNumber + 1}</h2>
  <p>${item.question}</p>
  <div>
      <form class="form">
          <input type="radio" name="selector" id="a" value="${item.answers[0]}">
          <label>${item.answers[0]}</label>
          <input type="radio" name="selector" id="b" value="${item.answers[1]}">
          <label>${item.answers[1]}</label>
          <input type="radio" name="selector" id="c" value="${item.answers[2]}">         
          <label>${item.answers[2]}</label>
          <input type="radio" name="selector" id="d" value="${item.answers[3]}">
          <label>${item.answers[3]}</label>
          <div>
            <button class="submit" id="submit-btn" type="submit">Submit</button>
          </div>
      </form>
      <p>Score: ${store.score}/${store.questionNumber}</p>
      <p>Questions Left: ${10 - store.questionNumber}</p>
  </div>`;

  
  // **********above: may need to mve button in to form to make keyboard accesible***********

  // Must be usable by a keyboard and mouse******

  // Needs to pull the question from the store

  // Must call the render function at end
}

function generateCorrectAnswerTemplate() {
  // Code needs to create a template for the correct answer and add +1 to total score
  return `<h2>Ahhh, yeaaahhhh. Get Schwifty!</h2>
  <img src="images/schwifty.gif" alt="I'm Mr. Bulldops!">
  <h3 id="totalScore">You got ${store.score} out of ${store.questionNumber} right so far!</h3>
  <p>You've got ${10 - store.questionNumber} to go!</p>
  <div>
      <button class="button" id="nextQ">Continue</button>
  </div>`;
}

function generateWrongAnswerTemplate() {
  // Code needs to create a template for the wrong answer
  return `<h2>Wrong answer, broh!</h2>
  <img src="images/donthate.gif" alt="Don't hate the player, hate the game, son!">
  <div class="score/questions">
  <p>Ooh-la-la, your running score is ${store.score} out of ${store.questionNumber}!</p>
  </div>
  <div>
  <p>You got *Uuurp* ${10 - store.questionNumber}'s left there, don't be a Jerry.</p>
  </div>
  <div>
      <button class="button" id="nextQ">Continue</button>
  </div>`;
  
  
  // Must have a 'next question' button at the end, ***regardless of if statement result***

 
} 

function generateCurrentScoreTemplate() {
  // Code needs to create a template for the div that will display the total score of the quiz so far

  // Must be usable by a keyboard and mouse******

  // Needs to pull the question number at that point in the quiz from the store

  // Needs to reset the score after the quiz has been reset to the welcome page

  // Must call the render function at end if a standalone div
}

function generateQuestionNumberTemplate() {
  // Code needs to create a template for the div that will show which question they're on (i.e. - Question 7 of 10)

  // Must be usable by a keyboard and mouse******

  // Needs to pull the quiz score at that point in the quiz from the store

  // Must call the render function at end if a standalone div
}

function generateResultsTemplate() {
  // Code needs to create a template for the div that will show the final results page
  console.log('generateResultsTemplate is running');
  // Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.
  return `<h2 id="totalScore">Total Score</h2>
            <img src="images/finaldance.gif">
            <div>
                <button class="button" id="retryQuiz">Retry</button>
            </div>`;

            
  // Users should be able to start a new quiz. ****add a button*** (button could theoretically reset the value of quiz score to 0?)

  // Must call the render function at end
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function render(html) {
  $("main").html(html);
  
  // this is the general render function that will be at the end of all above functions
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)
function handleStartQuiz(){
  $("main").on("click", "#start", function(evt) {
    evt.preventDefault();
    store.quizStarted = true;
    render(generateQuestionTemplate());
    
  });
}

function evaluateAnswer() {
  console.log('hello');
  let template = "";
  let currentQuestion = store.questions[store.questionNumber];
  console.log($('input[name="selector"]:checked'));
  let answer = $('input[name="selector"]:checked').val();
  console.log("The answer is" + answer);
  console.log(currentQuestion);
  if (answer === currentQuestion.correctAnswer) {
    store.score++;
    template = generateCorrectAnswerTemplate();
    } else if (answer === undefined) {
      throw new ErrorEvent('Select an Answer, Jerry.');
    } else {
      template = generateWrongAnswerTemplate();
    };
    render(template);
}


function handleSubmitAnswer(){
  // Create an if statement that checks if the submitted answer choice was the correct answer
  //*** / 1.) If right, it will render a template with a happy meseeks with a positive statement and the running score
  //*** // 2.) If wrong, it will render a template with a meseeks filled with existential terror, a wrong answer informative statement and the running score
  $("body").on("click", ".submit", function(evt) {
    evt.preventDefault();
    console.log('Reading Clicked');
    evaluateAnswer();
  });
}

function handleNextQuestion() {
  $("body").on("click", "#nextQ", function(evt) {
    evt.preventDefault();
    console.log('handleNextQuestion is running');
    store.questionNumber++;
    let template = "";
    if (store.questionNumber >= store.questions.length) {
     template = generateResultsTemplate();
    } else {
      template = generateQuestionTemplate();
    }
    render(template);
  });
}

function handleRetryQuiz() {
  $("body").on("click", "#retryQuiz", function(evt) {
    console.log('handleRetryQuiz is running');
    store.quizStarted = false;
    store.questionNumber = 0;
    store.score = 0;
    generateWelcomePageTemplate();
    
  });
}

// ***Need event listeners for buttons***
  // button is set to a class
  // buttons also have id's
    // start, submit, nextQ and retryQuiz


function main() {
  handleStartQuiz();
  handleSubmitAnswer();
  handleNextQuestion();
  handleRetryQuiz();
  generateWelcomePageTemplate();
  
  
}

$(main);