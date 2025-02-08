import { connect } from 'react-redux';
import { InformationLayout } from './information-layout';

export const InformationContainer = ({ currentPlayer, isDraw, isGameEnded }) => {
	let message = '';

	isDraw
		? (message = 'Ничья')
		: isGameEnded
			? (message = `Победа: ${currentPlayer}`)
			: (message = `Ходит: ${currentPlayer}`);

	return <InformationLayout message={message} />;
};

const mapStateToProps = (state) => ({
	currentPlayer: state.currentPlayer,
	isDraw: state.isDraw,
	isGameEnded: state.isGameEnded,
});

export const Information = connect(mapStateToProps)(InformationContainer);
