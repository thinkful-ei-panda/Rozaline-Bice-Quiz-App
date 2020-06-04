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

let currentQuestion;
let currentAnswers;
let currentCorrectAnswer;

let html = `
	<div class="wrapper">
		<div id="quiz-container">
			<form id="quiz-app-form" action="http://someform.php">
				<legend id="quiz-app-form-legend">Click the button below if you dare...</legend>
					<ul id="quiz-app-form-ul"> 
		
					</ul>
					<button type="submit" id="quiz-app-form-submit-button">Begin</button>
			</form>
		</div>
	</div>
`;

const render = () => {
/*
	This function is responsible for finding the relevant
	information to be displayed and compiling that within html.
	Finally, injecting that compilation into the main element
	within the HTML document body.
*/

	console.log ( 'render started' );
	
	$( 'main' ).html ( html ) ;

	console.log ( 'render completed' );

};

const getContent = () => {
/* 
	This function is responsible for initializing the 
	variable we need to work with and giving them data.
*/

	console.log ( 'pickQuestion started' );

	// Creation of the variables with the info we need to work with:

	currentQuestion = store.questions [ store.questionNumber ].question;

	currentAnswers = store.questions [ store.questionNumber ].answers;

	currentCorrectAnswer = store.questions [ store.questionNumber ].correctAnswer;

	console.log ( 'pickQuestion completed' );

};

const generateHtml = () => {
// Story

	console.log ( 'generateHtml started' );

	// Iteration here to build the <li>s for insertion

	let liString;

	liString = currentAnswers.forEach( ( item ) => {
		console.log ( item );
		liString += `<li>${ item }</li>`
	});

	html = `
		<div class="wrapper">
			<div id="quiz-container">
				<form id="quiz-app-form" action="http://someform.php">
					<legend id="quiz-app-form-legend">${ currentQuestion }</legend>
						<ul id="quiz-app-form-ul"> 
							${ liString }
						</ul>
						<button type="submit" id="quiz-app-form-submit-button">Next Question</button>
				</form>
			</div>
		</div>
	`;

	console.log ( 'generateHtml completed' );

};

const updateStore = () => {
// Story

	console.log ( 'updateStore started' );

	//console.log ( quizStarted );

	// If quizStarted == True, do nothing

	// If quizStarted == False, 
	//if ( !store.quizStarted ) {
		//console.log ( currentQuestion );
		//console.log ( currentAnswers );
		//console.log ( currentCorrectAnswer );
	//}

	console.log ( 'updateStore completed' );

};

const buildQuiz = ( ) => {
// This function is responsible for calling all sub functions responsible
// for a functioning quiz app.

	console.log ( 'buildQuiz started' );
	
	//if ( store.quizStarted !== false ) { 
		
		getContent ();
		generateHtml ();
		updateStore ();
		render ();

	//}

	$( '#quiz-app-form' ).submit( ( e ) => {
	
		e.preventDefault ();
	
		buildQuiz ();
	
	});

	console.log ( 'buildQuiz completed' );

};

// when the page loads, call `buildQuiz`.
$( buildQuiz );