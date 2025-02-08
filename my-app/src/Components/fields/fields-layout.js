import styles from './fields.module.css';

export const FieldLayout = ({ handleStep, fields }) => (
	<div className={styles.container}>
		{fields.map((it, id) => {
			return (
				<button
					ind={id}
					key={id}
					className={styles.button}
					onClick={(e) => handleStep(e, id)}
				>
					{it}
				</button>
			);
		})}
	</div>
);
