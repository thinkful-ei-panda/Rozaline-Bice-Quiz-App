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
		},
		{
			question: 'What is a dolpin?',
			answers: [
				'Person',
				'Place',
				'Thing',
				'Animal'
			],
			correctAnswer: 'Animal'
		},
		{
			question: 'What is your level of pain?',
			answers: [
				'No pain',
				'Discomfort',
				'Intense',
				'Unbearable'
			],
			correctAnswer: '2019'
		},
		{
			question: 'What is Winnie the Pooh?',
			answers: [
				'A cartoon',
				'A stuffed bear',
				'A living creature',
				'A severe delusion'
			],
			correctAnswer: 'A cartoon'
		},
		{
			question: 'What is Javascript?',
			answers: [
				'A hip new brand of coffee',
				'A type of language',
				'A writers tool',
				'A tool actors use to memorize lines'
			],
			correctAnswer: 'A type of language'
		},
		{
			question: 'What is the hero\'s name in the Karate kid?',
			answers: [
				'Daniel Laruso',
				'Johnny Lawrence',
				'Tim Burton',
				'Luke Skywalker'
			],
			correctAnswer: 'Johnny Lawrence'
		},
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


const render = () => {
// Story

	console.log ( 'render started' );

	// Local array of questions.
	const questions = [...store.questions];

	// Check if quiz started, if true, move on to pickQuestion.

	//if ( !(store.quizStarted) ) $('#quiz-container').html( pickQuestion ( questions ) );
	const currentQuestion = pickQuestion ( questions );
	
	console.log ( 'pickQuestion completed' );

	// Increment the store.questionNumber for the next question.

	store.questionNumber++;

	// Build the relevant html for that question.

	generateHtml ( currentQuestion );

	console.log ( 'generateHtml completed' );

	// Render html to the page.

	//$( '#quiz-app-form' ).html ( html );

	console.log ( 'render completed' );

}

const pickQuestion = ( questions ) => {
// Story

	console.log ( 'pickQuestion started' );

	// Determine the right question object.

	// Use the questionNumber to identify the correct object in the array and return it.

	return questions [ store.questionNumber ];

}

const generateHtml = ( currentQuestion) => {
// Story

	console.log ( 'generateHtml started' );

	// Build the HTML for displaying the question and answers.

	console.log ( currentQuestion.question );

	console.log ( typeof currentQuestion.answers[0] );

	console.log ( currentQuestion.answers[0] );

	
	$( '#quiz-app-form-legend' ).html ( currentQuestion.question );

	// Loop through the currentQuestion.answers array

	const answers = function () {
		currentQuestion.answers.foreach ( ( item ) => {
			console.log ( item );
			return `<li>${item}<li>`;
		});
	}

	// Write the html
	$( '#quiz-app-form-ul' ).html ( answers );

	$( '#quiz-app-form-submit-button' ).html ( 'Make a selection and press enter' );
	
};

const buildQuiz = () => {
// Story
	
	$( '#quiz-app-form' ).submit( ( e ) => {
	
		e.preventDefault ();

		render ();

		// Handle answer recording ( Still Need to determine the logic here ).

		// Grading the quiz  ( Still need to determine the logic here ).

	});
	
	console.log ( 'buildQuiz completed' );

}

// when the page loads, call `buildQuiz`.
$(buildQuiz);