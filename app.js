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

/*
<div class="wrapper">

<div id="quiz-container">
	
	<form id="quiz-app-form" action="http://someform.php">
		
		<legend id="quiz-app-form-legend"></legend>
		<ul id="quiz-app-form-ul"> 
		
		</ul>
		<button type="submit" id="quiz-app-form-submit-button">Start Quiz</button>

	</form>

</div>

</div>
*/


const render = () => {
/*
	This function is responsible for finding the relevant
	information to be displayed and compiling that within html.
	Finally, injecting that compilation into the main element
	within the HTML document body.
*/

	console.log ( 'render started' );

	const html = `<div class="wrapper"><div id="quiz-container">testing</div></div>`;
	
	$( 'main' ).html ( html ) ;

	console.log ( 'render completed' );

}

const pickQuestion = ( questions ) => {
// Story

	console.log ( 'pickQuestion started' );

	console.log ( 'pickQuestion completed' );

}

const generateHtml = ( currentQuestion) => {
// Story

	console.log ( 'generateHtml started' );

	console.log ( 'generateHtml completed' );

};

const buildQuiz = () => {
// Story

	console.log ( 'buildQuiz started' );
	
	render ();

	// Quiz complete ?

	console.log ( 'buildQuiz completed' );

}

$( '#quiz-app-form' ).submit( ( e ) => {
	
	e.preventDefault ();

	buildQuiz ();

});

// when the page loads, call `buildQuiz`.
$(buildQuiz);