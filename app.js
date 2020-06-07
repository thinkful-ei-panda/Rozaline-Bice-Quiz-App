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

 // Variable declarations for working with store data.
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
* Function checks a selected answer and updates store.score if incorrect.
*
*/
const checkAnswer = () => {

	//console.log ( 'checkAnswer started' );

	
	if ( store.quizStarted !== false ) {

		if ( selectedAnswer !== currentCorrectAnswer ) store.score++;

	}

	//console.log ( 'checkAnswer completed' );

}

/*
*
* Function builds state based html for injection.
* 
*/
const generateHTML = () => {

	//console.log ( 'generateHTML started' );

	// Grab the relevant question data for use.
	if ( store.quizStarted === true  && store.questionNumber <= store.questions.length - 1 ) {

		currentQuestion = store.questions[ store.questionNumber ].question;
	
		currentAnswers = store.questions[ store.questionNumber ].answers;

		currentCorrectAnswer = store.questions[ store.questionNumber ].correctAnswer;
	
	}
	
	// If last form submission was the last question, render the quiz complete html.
	if ( store.questionNumber > store.questions.length - 1 ) {
		
		html = `
			<div class="wrapper">
				<div id="quiz-container">
					<h2>Congratulations!</h2>
					<p>You have completed the quiz...<p>
					<p>You have ${ store.score } incorrect answers out of ${ store.questions.length }<p>
				</div>
			</div>
		`;

	}

	// Else build the question html for rendering.
	else if ( store.quizStarted === true  && store.questionNumber <= store.questions.length ) {
		
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
				</div>
			</div>
		`;

	}

	//console.log ( 'generateHTML completed' );

}

/*
* 
* Function is responsible for updating the state of quiz.
* 
*/
const updateState = () => {

	//console.log ( 'updateState started' );

	// Initial page load.
	if ( store.questionNumber === 0 && store.quizStarted === false ) {
		
		store.quizStarted = true;

	} else { // Else on form submit.

		store.questionNumber++;

	}	
	
	//console.log ( 'updateState completed' );

};

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
*	This function is responsible for calling all sub functions.
*
*/
const buildQuiz = ( option ) => {

	//console.log ( 'buildQuiz started' );

	checkAnswer ();
	generateHTML ();
	updateState ();
	render ();

	// Button submit handler.
	$( '#quiz-app-form' ).submit ( e => {

		e.preventDefault ();
		
		buildQuiz ();

	});
	
	//console.log ( 'buildQuiz completed' );

};

// when the page loads, call `buildQuiz`.
$( buildQuiz );
