/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'How many months have 28 days?',
      answers: [
        'one',
        'six',
        'none on leap years',
        'all of them'
      ],
      correctAnswer: 'all of them'
    },
    {
      question: 'When will the next olympics be held?',
      answers: [
        '1970',
        '2015',
        '2021',
        '2005'
      ],
      correctAnswer: '2021'
    }
    {
      question: 'what does everyone give to others but never take?',
      answers: [
        'Coronavirus',
        'advice',
        'love',
        'hate'
      ],
      correctAnswer: 'advice'
    }
    {
      question: 'what is the only acceptable way to enjoy coffee/tea?',
      answers: [
        'in a cup',
        'lots of cream and sugar',
        'black',
        'agave nectar and soymilk'
      ],
      correctAnswer: 'in a cup'
    }
    {
      question: 'How should I cook your steak?',
      answers: [
        'medium',
        'Medium-rare',
        'well done',
        'cold-center rare'
      ],
      correctAnswer: 'medium-rare'
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
 * See your course material, consult your instructor, and reference the slides for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)