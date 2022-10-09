import { PropsWithChildren } from 'react';
import styles from './Main.module.scss'

function Main({ children }: PropsWithChildren) {
	return <main className={styles.main}>{children}</main>;
}

export default Main;
