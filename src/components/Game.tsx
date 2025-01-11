import React, { useState } from 'react';
import Board from './Board';
import ResetButton from './ResetButton';

const Game: React.FC = () => {
	const [board, setBoard] = useState<string[]>(Array(9).fill(null)); 
	const [isXNext, setIsXNext] = useState<boolean>(true); 
	const [winner, setWinner] = useState<string | null>(null);

	const handleClick = (index: number): void => {
		if (board[index] || winner) return; 
		const newBoard = [...board];
		newBoard[index] = isXNext ? 'X' : 'O';
		setBoard(newBoard);
		setIsXNext(!isXNext);
		checkWinner(newBoard); 
	};

	const checkWinner = (board: string[]): void => {
		const winningCombinations = [
			[0, 1, 2], [3, 4, 5], [6, 7, 8], 
			[0, 3, 6], [1, 4, 7], [2, 5, 8],
			[0, 4, 8], [2, 4, 6], 
		];

		for (const combo of winningCombinations) {
			const [a, b, c] = combo;
			if (board[a] && board[a] === board[b] && board[a] === board[c]) {
				setWinner(board[a]);
				return;
			}
		}

		if (!board.includes(null)) {
			setWinner('Draw');
		}
	};

	const resetGame = (): void => {
		setBoard(Array(9).fill(null));
		setIsXNext(true);
		setWinner(null);
	};

	return (
		<div>
			<h1>Tic Tac Toe</h1>
			<Board board={board} handleClick={handleClick} />
			<p>{winner ? `Winner: ${winner}` : `Next Player: ${isXNext ? 'X' : 'O'}`}</p>
			<ResetButton resetGame={resetGame} />
		</div>
	);
};

export default Game;