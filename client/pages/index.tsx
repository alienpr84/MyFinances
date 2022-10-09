import type { NextPage } from 'next';
import { useAdminLayoutState } from '../context/AdminLayout';
import { withAdminLayout } from '../layouts/AdminLayout/Layout';

const Home: NextPage = () => {
	return <h1>Home page</h1>;
};

export default withAdminLayout(Home);
