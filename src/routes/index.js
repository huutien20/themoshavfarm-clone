import { createBrowserRouter } from 'react-router-dom';
import App from '~/App';
import { Home, MembershipCard, Partnership, Products, Recruitment } from '~/pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Home />,
            },
            {
                path: '/products',
                element: <Products />,
            },
            {
                path: '/partnership',
                element: <Partnership />,
            },
            {
                path: '/recruitment',
                element: <Recruitment />,
            },
            {
                path: '/membership-card',
                element: <MembershipCard />,
            },
        ],
    },
]);

export default router;
