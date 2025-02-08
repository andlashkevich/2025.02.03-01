import styles from './information.module.css';

export const InformationLayout = ({ message }) => (
	<div className={styles.information}>{message}</div>
);
