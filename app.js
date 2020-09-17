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

function generateWelcomePageTemplate() {
  // Code needs to generate the welcome page template to be displayed on the DOM in the main

  // Must be usable by a keyboard and mouse******

  // Must contain a start quiz button that - on click - changes from this template to the question/answer template and changes quiz start to true
  
  // Per the generateResultsTemplate function, the score , quizStart, and questionNumber need to be reset when you reach this page - possibly when you hit the retry button?

  // Must render at the end
}

function generateQuestionTemplate() {
  // Code needs to create the page template for the question div of the quiz

  // Must be usable by a keyboard and mouse******

  // Needs to pull the question from the store

  // Must call the render function at end
}

function generateAnswerTemplate() {
  // Code needs to create a template for the answer choices div of the quiz ***must be in a form***

  // Must be usable by a keyboard and mouse******

  // Needs to pull the answers from the store and orient them in a radial selector form

  // Upon submitting an answer, users should:
  // * receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
  // * be moved onto the next question (or interact with an element to move on).

  // Must call the render function at end if a standalone div
}

function generateFeedbackTemplate() {
  // Code needs to create a teplate for displaying feedback

  // Create an if statement that checks if the submitted answer choice was the correct answer
  //*** / 1.) If right, it will render a template with a happy meseeks with a positive statement and the running score
  //*** // 2.) If wrong, it will render a template with a meseeks filled with existential terror, a wrong answer informative statement and the running score
  
  // Must have a 'next question' button at the end, ***regardless of if statement result***

  // Must call the render function at end
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

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)