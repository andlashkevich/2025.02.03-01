import { Information, Fields } from './Components';
import styles from './App.module.css';


export const GameLayout = ({ handleAgain }) => (
	<div className="text-center">
		<div className="w-full h-screen flex justify-center items-center">
			<h1 className="font-bold text-5xl text-indigo-500">Tailwind работает?</h1>
		</div>
		<h2>Крестики-нолики</h2>
		<Information />
		<Fields />
		<button onClick={handleAgain} className={styles.startbtn}>
			Начать заново
		</button>
	</div>
);
