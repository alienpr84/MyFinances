import { ComponentType, PropsWithChildren, useState } from 'react';
import AdminLayoutProvider from '../../context/AdminLayout';
import Header from './Header/Header';
import Main from './Main/Main';
import styles from './Layout.module.scss';
import Footer from './Footer/Footer';

function Layout({ children }: PropsWithChildren) {
	const [isOpenLeftMenu, setIsOpenLeftMenu] = useState(false);

	return (
		<div className={styles.container}>
			<Header />
			{/*<aside>Aside</aside>*/}
			<Main>{children}</Main>
			<Footer />
		</div>
	);
}

export function withAdminLayout(ComponentPage: ComponentType) {
	const page = () => (
		<AdminLayoutProvider>
			<Layout>
				<ComponentPage />
			</Layout>
		</AdminLayoutProvider>
	);

	return page;
}

export default Layout;
