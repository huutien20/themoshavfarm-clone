import { Outlet } from 'react-router-dom';
import { Footer, Header } from './components/layout';
import { FloatingActionButtons } from './components/ui';

function App() {
    return (
        <>
            <Header />
            <main className="mt-[100px] md:mt-[130px]">
                <Outlet />
            </main>
            <Footer />
            <FloatingActionButtons />
        </>
    );
}

export default App;
