import { Information, Fields } from './Components';
import styles from './App.module.css';
import { connect } from 'react-redux';

const GameLayout = ({ handleAgain }) => (
	<div className={styles.App}>
		<h2>Крестики-нолики</h2>
		<Information />
		<Fields />
		<button onClick={handleAgain} className={styles.startbtn}>
			Начать заново
		</button>
	</div>
);

export const GameContainer = ({ dispatch }) => {
	const handleAgain = () => {
		dispatch({ type: 'RESTART_GAME' });
	};
	return <GameLayout handleAgain={handleAgain} />;
};

export const Game = connect()(GameContainer);
