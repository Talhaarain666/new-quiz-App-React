import './App.css';
import React, { useState } from 'react';


function App() {

	const questions = [
		{
			question: 'What is actually electricity?',
			answerOptions: [
				{ answer: 'A flow of water', isCorrect: false },
				{ answer: 'A flow of air', isCorrect: false },
				{ answer: 'A flow of electrons', isCorrect: true },
				{ answer: 'A flow of atoms', isCorrect: false },
			],
		},
		{
			question: 'What is the speed of sound?',
			answerOptions: [
				{ answer: '120 km/h', isCorrect: false },
				{ answer: '1,200 km/h', isCorrect: true },
				{ answer: '400 km/h', isCorrect: false },
				{ answer: '700 km/h', isCorrect: false },
			],
		},
		{
			question: 'What was the first country to use tanks in combat during World War I?',
			answerOptions: [
				{ answer: 'France', isCorrect: false },
				{ answer: 'Japan', isCorrect: false },
				{ answer: 'Britain', isCorrect: true },
				{ answer: 'Germany', isCorrect: false },
			],
		},
		{
			question: 'Which of the following animals can run the fastest?',
			answerOptions: [
				{ answer: 'Cheetah', isCorrect: true },
				{ answer: 'Leopard', isCorrect: false },
				{ answer: 'Tiger', isCorrect: false },
				{ answer: 'Lion', isCorrect: false },
			],
		},
		{
			question: 'How many time zones are there in total in the world?',
			answerOptions: [
				{ answer: '8', isCorrect: false },
				{ answer: '16', isCorrect: false },
				{ answer: '24', isCorrect: true },
				{ answer: '32', isCorrect: false },
			],
		},
	];

	const [curQuestion, setCurQuestion] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const OptClick = (isCorrect) => {
		if (isCorrect) {
			setScore(score + 1);
		}

		const nxtQuestion = curQuestion + 1;

		if (nxtQuestion < questions.length) {
			setCurQuestion(nxtQuestion);
		} else {
			setShowScore(true);
		}
	};

	
	return (
		<div className='App'>
			<div className='App-header'>

				{showScore ? (
					<div className='score'>
						Your score: {score} out of {questions.length}
					</div>
				) : (
					<>
						<div>
							<div className='questionNos'>
								<span>{curQuestion + 1}</span>/{questions.length}
							</div>
							<div className='titleDiv'>{questions[curQuestion].question}</div>
						</div>

						<div className='optionsDiv'>
							{questions[curQuestion].answerOptions.map((answerOption, ind) => (
								<button className='optionsDivs' key={ind} onClick={() => OptClick(answerOption.isCorrect)}>{answerOption.answer}</button>
							))}
						</div>
					</>
				)}
			</div>
		</div>

	);
}


export default App;
