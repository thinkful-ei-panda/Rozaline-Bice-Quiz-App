const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'What color is broccoli?',
      answers: ['red', 'orange', 'pink', 'green'],
      correctAnswer: 'green',
    },
    {
      question: 'What is the current year?',
      answers: ['1970', '2015', '2019', '2005'],
      correctAnswer: '2019',
    },
    {
      question: 'What is a dolpin?',
      answers: ['Person', 'Place', 'Thing', 'Animal'],
      correctAnswer: 'Animal',
    },
    {
      question: 'What is your level of pain?',
      answers: ['No pain', 'Discomfort', 'Intense', 'Unbearable'],
      correctAnswer: '2019',
    },
    {
      question: 'What is Winnie the Pooh?',
      answers: ['A cartoon', 'A stuffed bear', 'A living creature', 'A severe delusion'],
      correctAnswer: 'A cartoon',
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

let currentQuestion;
let currentAnswers;
let currentCorrectAnswer;
let selectedAnswer;

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

  $( 'main' ).html ( html );

  console.log ( 'render completed' );
};

const getContent = () => {
/* 
	This function is responsible for initializing the 
	variable we need to work with and giving them data.
*/

  console.log ( 'pickQuestion started' );

  // Creation of the variables with the info we need to work with:

  currentQuestion = store.questions[ store.questionNumber ].question;

  currentAnswers = store.questions[ store.questionNumber ].answers;

  currentCorrectAnswer = store.questions[ store.questionNumber ].correctAnswer;

  console.log ( 'pickQuestion completed' );
};

const generateHtml = ( option ) => {
/* 

	This function handles building the html for injection to the page.

*/

	console.log ( 'generateHtml started' );

	if ( option === 'incorrect' ) {

		html = `
			<div class="wrapper">
				<div id="quiz-container">
					<h2>Incorrect!</h2>
					<p>You currently have ${ store.score } answers.</p>
					<p>Your next answer is loading in 3 seconds</p>
					<p id="countdown"></p>
				</div>
			</div>
		`;

		return;

	}

	if ( store.quizStarted === true ) {
		let liString = '';

		// Iteration here to build the <li>s for insertion into the output HTML.

		currentAnswers.forEach ( ( item, index ) => {

			liString += `<li><input class="quiz-app-form-button" id="form-button-${ index }" type="button" value="${ item }" onclick="highlightSelection( '#form-button-${ index }' )" ></input></li>`;

		});
	
		// HTML for injection.

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
	}

	console.log ( 'generateHtml completed' );

};

const updateStore = ( option ) => {
/*

	This function will take in a variable and
	based on that will update the store property
	accordingly.

*/
	console.log ( 'updateStore started' );

	// Update the quizStarted property when the quiz begins.

	if ( store.quizStarted === false && option === 'x' ) store.quizStarted = true;

	// Update questionNumber property in the store.
	
  	else if ( store.quizStarted !== false ) store.questionNumber++;
  
  	console.log ( store.questionNumber );

	console.log ( 'updateStore completed' );

}

const highlightSelection = ( btn ) => {
/*

	This function changes button css to
	visually show focus on the currently
	selected answer. It also stores the
	value of the currently selected question
	in the selectedAnswer variable.

*/

	console.log ( 'highlightSelection started' );
		
	// Reset any previous selections highlight

	$( '.quiz-app-form-button' ).css( 'background-color', '#000' );

	$( '.quiz-app-form-button' ).css( 'color', '#fff' );

	// Highlight the selected answer.

	$( btn ).css( 'background-color', '#fff' );

	$( btn ).css( 'color', '#000' );

	// Store the answer for use.

	selectedAnswer = $( btn ).val ();

	console.log ( 'highlightSelection completed' );

}

const checkScreen = ( btn ) => {
/*

	This function displays a screen indicated an
	incorrect answer has been submitted. It then
	performs a countdown for 3 seconds before moving
	to the next question.

*/



}

const checkAnswer = () => {
/*

	This function is passed the relevant button's id,
	the value of the button is the selected answer,
	that value is then compared to the correctAnswer property.

*/

	console.log ( 'checkAnswer started' );

	// Checks for initial run.

	if ( selectedAnswer !== undefined ) {
	
		console.log ( selectedAnswer);
		console.log ( currentCorrectAnswer);
		

	// Adjust the store.score property to keep track of incorrect answers.

		if ( selectedAnswer !== currentCorrectAnswer ) {
		
			//store.score++;

			generateHtml( 'incorrect' );
	
		}

	}

	console.log ( 'checkAnswer completed' );

};

const buildQuiz = ( option ) => {
/* 

	This function is responsible for calling all sub functions responsible
	for a functioning quiz app.

*/

	console.log ( 'buildQuiz started' );

	getContent ();
	generateHtml ();
	updateStore ( option );
	checkAnswer ();
	render ();

	$( '#quiz-app-form' ).submit ( e => {

		e.preventDefault ();
		
		buildQuiz ( 'x' );

	});

	console.log ( 'buildQuiz completed' );

};

// when the page loads, call `buildQuiz`.
$( buildQuiz );
