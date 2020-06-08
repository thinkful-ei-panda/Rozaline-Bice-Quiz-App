const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What is broccoli?',
      answers: ['An alien watchdog', 'A miniature tree', 'A form of torture', 'All of the above'],
      correctAnswer: 'All of the above',
    },
    {
      question: 'What is the current year?',
      answers: ['1970', '2015', '2020', '2005'],
      correctAnswer: '2020',
    },
    {
      question: 'What is a dolpin?',
      answers: ['Person', 'Place', 'Thing', 'Animal'],
      correctAnswer: 'Animal',
    },
    {
      question: 'What is your level of pain?',
      answers: ['No pain', 'Discomfort', 'Intense', 'Unbearable'],
      correctAnswer: 'Unbearable',
    },
    {
      question: 'What is Winnie the Pooh?',
      answers: ['A cartoon', 'A stuffed bear', 'A living creature', 'A severe delusion'],
      correctAnswer: 'A severe delusion',
    },
    {
      question: 'What is Javascript?',
      answers: ['A hip new brand of coffee', 'A type of language', 'A writers tool', 'A tool actors use to memorize lines'],
      correctAnswer: 'A type of language',
    },
    {
      question: 'What is the hero\'s name in the Karate kid?',
      answers: ['Daniel Laruso', 'Johnny Lawrence', 'Tim Burton', 'Luke Skywalker'],
      correctAnswer: 'Johnny Lawrence',
    },
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
};

 // Variable declarations for working with store data.
let state = 0;
let currentQuestion;
let currentAnswers;
let currentCorrectAnswer;
let selectedAnswer;
let quizLength = store.questions.length;
let html;

/*
*	
* This function changes button css to visually show focus 
* on the currently selected answer. It also stores the value 
* of the currently selected answer in the selectedAnswer variable.
*	
*/
const highlightSelection = ( btn ) => {
	
	//console.log ( 'highlightSelection started' );
		
	// Reset any previous selections highlight.

	$( '.quiz-app-form-button' ).css( 'background-color', '#000' );

	$( '.quiz-app-form-button' ).css( 'color', '#fff' );

	// Highlight the selected answer.

	$( btn ).css( 'background-color', '#fff' );

	$( btn ).css( 'color', '#000' );

	// Store the answer for use.

	selectedAnswer = $( btn ).val ();

	//console.log ( 'highlightSelection completed' );
	
}

/*
*
* Function to check for undefined answers and 
* reset the appropriate variables if found.
* 
*/
const isAnswered = () => {

	//console.log ( 'isAnswered started' );

	// Reset selectedAnswer at the beginning of every question so the previous answer is flushed.
	if ( state === 1 && selectedAnswer !== undefined ) {

		selectedAnswer = undefined;

	}

	// An undefined answer was submitted.
	else if ( state === 2 && selectedAnswer === undefined ) {

			state = 1;
			
			store.questionNumber--;

	}

	//console.log ( 'isAnswered completed' );

}

/*
*
* Function builds state based html for injection.
* 
*/
const generateHTML = () => {

	//console.log ( 'generateHTML started' );

	// Begin screen html.
	if ( state === 0 ) {

		html = `
			<div class="wrapper">
				<div id="quiz-container">
					<form id="quiz-app-form" action="http://someform.php">
						<legend id="quiz-app-form-legend">Click the button below if you dare...</legend>
						<button type="submit" id="quiz-app-form-submit-button">Begin</button>
					</form>
				</div>
			</div>
		`;

	}

	// Question screen html.
	if ( state === 1 ) {

		// Grab the relevant question data for use.
		currentQuestion = store.questions[ store.questionNumber ].question;
	
		currentAnswers = store.questions[ store.questionNumber ].answers;

		currentCorrectAnswer = store.questions[ store.questionNumber ].correctAnswer;

		let liString = '';

		// Iteration here to build the <li>s for insertion into the output HTML.
		currentAnswers.forEach ( ( item, index ) => {

			// I realize that there is a better way to implement the button click functionality
			// through declaring an event handler rather than the onclick used here. This is an 
			// improvement I would like to see made, but I struggled with the other implementation.
			// - Bice
			liString += `<li><input class="quiz-app-form-button" id="form-button-${ index }" type="button" value="${ item }" onclick="highlightSelection( '#form-button-${ index }' )" ></input></li>`;

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
					<div>Total questions: ${ quizLength }</div>
					<div>Unanswered questions: ${ quizLength - store.questionNumber }</div>
					<div>Incorrect questions: ${ store.score }</div>
					<div>Correct questions: ${ ( ( quizLength -( quizLength - store.questionNumber ) ) - store.score ) }</div>
					
					
				</div>
			</div>
		`;

	}

	// Answer screen html.
	else if ( state === 2 ) {

		let answerMsg = '';
		
		if ( selectedAnswer !== currentCorrectAnswer ) answerMsg = 'Incorrect!';

		else answerMsg = 'Correct!';

		html = `
			<div class="wrapper">
				<div id="quiz-container">
					<form id="quiz-app-form" action="http://someform.php">
						<legend id="quiz-app-form-legend"><h2>${ answerMsg }</h2></legend>
						<p>${ currentQuestion }<p>
						<p>You chose: ${ selectedAnswer }</p>
						<p>The correct answer was: ${ currentCorrectAnswer }</p>
						<button type="submit" id="quiz-app-form-submit-button">Next question</button>
					</form>
				</div>
			</div>
		`;

	}

	// Quiz completed.
	else if ( state === 3 ) {
		
		html = `
			<div class="wrapper">
				<div id="quiz-container">
					<form id="quiz-app-form" action="http://someform.php">
						<legend id="quiz-app-form-legend"><h2>Quiz Complete!</h2></legend>
						<p>Congratulations, you're smart!<p>
						<p>You answered ${ ( ( quizLength -( quizLength - store.questionNumber ) ) - store.score ) } of ${ quizLength } questions correctly.</p>
						<button type="submit" id="quiz-app-form-submit-button">Take the quiz again?</button>
					</form>
				</div>
			</div>
		`;

		// Reset for a retaking the quiz.
		store.questionNumber = 0;
		store.score = 0;
		state = 0;

	}
	
	//console.log ( 'generateHTML completed' );

}

/*
*
* Function renders the content to the page.
* 
*/
const render = () => {

	//console.log ( 'render started' );

	$( 'main' ).html( html )

	//console.log ( 'render completed' );

}

/*
* 
* Function is responsible for updating the state of quiz.
* 
*/
const updateState = () => {

	//console.log ( 'updateState started' );

	// Begin screen.
	if ( state === 0 ) state++;
	
	// Question screen.
	else if ( state === 1 ) state = 2;
	
	// Answer screen.
	else if ( state === 2 && store.questionNumber < quizLength ) state = 1;
	
	// Quiz Complete screen.
	else if ( state === 2 && store.questionNumber === quizLength ) state = 3;

	//console.log ( 'updateState completed' );

};

/*
*
* Function increments store.score if an incorrect answer is submitted.
*
*/
const updateScore = () => {

	//console.log ( 'updateScore started' );

	// Increment the store.score when an incorrect answer is submitted.
	if ( selectedAnswer !== currentCorrectAnswer && selectedAnswer !== undefined ) store.score++;

	//console.log ( 'updateScore completed' );

}

/*
*
* Function increments store.questionNumber.
*
*/
const updateQuestion = () => {

	//console.log ( 'updateQuestion started' );

	// Increment questionNumber.
	if ( state === 2 ) {
		
		store.questionNumber++;
	
	}

	//console.log ( 'updateQuestion completed' );

}

/* 
*
*	This function is responsible for calling all sub functions.
*
*/
const buildQuiz = ( option ) => {

	//console.log ( 'buildQuiz started' );

	isAnswered ();
	generateHTML ();
	render ();
	updateState ();
	updateScore ();
	updateQuestion ();
	
	// Form submit handler.
	$( '#quiz-app-form' ).submit ( e => {

		e.preventDefault ();
		
		buildQuiz ();

	});
	
	//console.log ( 'buildQuiz completed' );

};

// On page load, call `buildQuiz`.
$( buildQuiz );
