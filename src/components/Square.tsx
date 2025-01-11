import React from 'react';

interface SquareProps {
	value: string | null;
	onClick: () => void;
}

const Square: React.FC<SquareProps> = ({ value, onClick }) => {
	return (
		<button style={squareStyle} onClick={onClick}>
			{value}
		</button>
	);
};

const squareStyle: React.CSSProperties = {
	width: '100px',
	height: '100px',
	fontSize: '2rem',
	fontWeight: 'bold',
};

export default Square;
