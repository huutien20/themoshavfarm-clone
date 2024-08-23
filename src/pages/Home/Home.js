import { About, Feedback, Introduce, News, Slider, Standards } from '~/components/layout';

function Home() {
    return (
        <>
            <Slider />
            <About />
            <Introduce />
            <Standards />
            <Feedback />
            <News />
        </>
    );
}

export default Home;
