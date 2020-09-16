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
  // code needs to generate the welcome page template to be displayed on the DOM in the main

  // must be usable by a keyboard and mouse******

  // must contain a start quiz button that - on click - changes from this template to the question/answer template 
  
  // per the generateResultsTemplate function, the quiz score needs to revert to 0 when you reach this page - possibly when you hit the start quiz button?

  // must render at the end
}

function generateQuestionTemplate() {
  // code needs to create the page template for the question div of the quiz

  // must be usable by a keyboard and mouse******

  // Needs to pull the question from the store

  // must call the render function at end
}

function generateAnswerTemplate() {
  // code needs to create a template for the answer choices div of the quiz ***must be in a form***

  // must be usable by a keyboard and mouse******

  // Needs to pull the answers from the store and orient them in a radial selector form

  // Upon submitting an answer, users should:
    // * receive textual feedback about their answer. If they were incorrect, they should be told the correct answer.
    // * be moved onto the next question (or interact with an element to move on).

  // must call the render function at end if a standalone div
}

function generateCurrentScoreTemplate() {
  // code needs to create a template for the div that will display the total score of the quiz so far

  // must be usable by a keyboard and mouse******

  // Needs to pull the question number at that point in the quiz from the store

  // Needs to reset the score after the quiz has been reset to the welcome page

  // must call the render function at end if a standalone div
}

function generateQuestionNumberTemplate() {
  // code needs to create a template for the div that will show which question they're on (i.e. - Question 7 of 10)

  // must be usable by a keyboard and mouse******

  // Needs to pull the quiz score at that point in the quiz from the store

  // must call the render function at end if a standalone div
}

function generateResultsTemplate() {
  // code needs to create a template for the div that will show the final results page

  // Users should be shown their overall score at the end of the quiz. In other words, how many questions they got right out of the total questions asked.

  // Users should be able to start a new quiz. ****add a button*** (button could theoretically reset the value of quiz score to 0?)

  // must call the render function at end
}


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)