import React from 'react';


interface ResetButtonProps {
  resetGame: () => void;
}

const ResetButton: React.FC<ResetButtonProps> = ({ resetGame }) => {
  return (
    <button onClick={resetGame} className="reset-button">
      Play Again
    </button>
  );
};

export default ResetButton;
