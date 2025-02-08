import { GameLayout } from './app-layout';
import { connect } from 'react-redux';

const GameContainer = ({ dispatch }) => {
	const handleAgain = () => {
		dispatch({ type: 'RESTART_GAME' });
	};
	return <GameLayout handleAgain={handleAgain} />;
};

export const Game = connect()(GameContainer);
