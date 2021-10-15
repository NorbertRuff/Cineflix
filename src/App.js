import {Footer, Header, PageContainerStyle} from "./styles/PageContainer.Style";
import MainContainer from "./components/MainContainer";

function App() {
    return (
        <PageContainerStyle>
            <Header>
                <h2>Navbar</h2>
            </Header>
            <MainContainer/>
            <Footer>
                <h4>Created by Ruff Norbert</h4>
            </Footer>
        </PageContainerStyle>
    );
}

export default App;
