import Content from "./components/Content";
import Information from "./components/Infomation";
import Navbar from "./components/Navbar";
import Cursos from "./components/Cursos";
import Footer from "./components/Footer";

const App = () => {
    return (
        <>
            <Navbar />
            <Content />
            <Information />
            <Cursos />
            <Footer />
        </>
    );
}

export default App;
