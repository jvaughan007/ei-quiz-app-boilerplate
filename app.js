/* eslint-disable strict */
/**
 * Example store structure
 */
const store = {
  
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: [
        'red',
        'orange',
        'pink',
        'green'
      ],
      correctAnswer: 'green'
    },
    {
      question: 'What is the current year?',
      answers: [
        '1970',
        '2015',
        '2019',
        '2005'
      ],
      correctAnswer: '2019'
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

function generateAPage() {
  const pageArr = page.map(templates, index);
}

function generateWelcomePageTemplate() {
  // Code needs to generate the welcome page template to be displayed on the DOM in the main
  return `<img src="images/showme.gif" alt="SHOW ME WHAT YOU GOT!">
  <h2>CLICK BELOW TO START!</h2>
  <div>
      <button class="button" id="start">Start Quiz</button> 
  </div>`;


  // Must be usable by a keyboard and mouse******

  // Must contain a start quiz button that - on click - changes from this template to the question/answer template and changes quiz start to true
  
  // Per the generateResultsTemplate function, the score , quizStart, and questionNumber need to be reset when you reach this page - possibly when you hit the retry button?

  // Must render at the end
}

function generateQuestionTemplate(item) {
  // Code needs to create the page template for the question div of the quiz
  return `<h2>Question ${store.questionNumber}</h2>
  <p>${item.question}</p>
  <div>
      <form>
          <label><input type="radio" name="selector" id="a" val="${questions.answer[0]}">${questions.answer[0]}</label>
          <label><input type="radio" name="selector" id="b" val="${questions.answer[1]}">${questions.answer[1]}</label>         
          <label><input type="radio" name="selector" id="c" val="${questions.answer[2]}">${questions.answer[2]}</label>
          <label><input type="radio" name="selector" id="d" val="${questions.answer[3]}">${questions.answer[3]}</label>
      </form>
  </div>
  <div>
      <button class="button" id="submit" type="submit">Submit</button>
  </div>`;
// **********above: may need to mve button in to form to make keyboard accesible***********

  // Must be usable by a keyboard and mouse******

  // Needs to pull the question from the store

  // Must call the render function at end
}

function generateCorrectAnswerTemplate() {
  // Code needs to create a template for the correct answer and add +1 to total score
  store.score++;
  return `<h2>Ahhh, yeaaahhhh. Get Schwifty!</h2>
  <img src="images/schwifty.gif" alt="I'm Mr. Bulldops!">
  <h3 id="totalScore">You got ${store.score} right so far!</h3>
  <div>
      <button class="button" id="nextQ">Continue</button>
  </div>`;
}

function generateWrongAnswerTemplate() {
  // Code needs to create a template for the wrong answer
  return `<h2>Wrong answer, broh!</h2>
  <img src="images/donthate.gif" alt="Don't hate the player, hate the game, son!">
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

  // Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.

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
  $("main").on("click", "#start", e =>{
    store.quizStarted = true;
    let question = generateQuestionTemplate(store.questions[store.questionNumber]);
    render(question);
  });
}

function handleSubmitAnswer(){
  // Create an if statement that checks if the submitted answer choice was the correct answer
  //*** / 1.) If right, it will render a template with a happy meseeks with a positive statement and the running score
  //*** // 2.) If wrong, it will render a template with a meseeks filled with existential terror, a wrong answer informative statement and the running score
  $("main").on("submit", "form", e =>{
    e.preventDefault;
    let currentQuestion = store.questions[store.questionNumber];
    let answer = $(`input[name=selector:checked]`).val();
    if  (answer === currentQuestion.answer) {
      generateCorrectAnswerTemplate();
    } else {

    }
  })
}
// ***Need event listeners for buttons***
  // button is set to a class
  // buttons also have id's
    // start, submit, nextQ and retryQuiz


function main() {
  console.log(store.questions);
  handleStartQuiz();
  let startPage = generateWelcomePageTemplate();
  render(startPage);
}

$(main);