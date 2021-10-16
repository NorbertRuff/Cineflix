import {Footer, Header, PageContainerStyle} from "./styles/PageContainer.Style";
import MainContainer from "./components/MainContainer";
import {ApolloClient, ApolloProvider, InMemoryCache,} from "@apollo/client";
import GithubCorner from "react-github-corner";


const client = new ApolloClient({
    uri: 'https://tmdb.sandbox.zoosh.ie/dev/graphql',
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <PageContainerStyle>
                <Header>
                    <h2>Apex Lab project</h2>
                    <GithubCorner href="https://github.com/NorbertRuff/apex-project" size="60" octoColor=""
                                  bannerColor="#2DE1AF"/>
                </Header>
                <MainContainer/>
                <Footer>
                    <h4>Created by Ruff Norbert</h4>
                </Footer>
            </PageContainerStyle>
        </ApolloProvider>
    );
}

export default App;
