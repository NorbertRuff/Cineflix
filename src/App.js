import {Footer, Header, PageContainerStyle} from "./styles/PageContainer.Style";
import MainPage from "./components/MainPage";
import MovieDetailsPage from "./components/MovieDetailsPage";
import {ApolloClient, ApolloProvider, InMemoryCache,} from "@apollo/client";
import GithubCorner from "react-github-corner";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import RelatedMoviesPage from "./components/RelatedMoviesPage";


const client = new ApolloClient({
    uri: 'https://tmdb.sandbox.zoosh.ie/dev/graphql',
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <PageContainerStyle>
                    <Header>
                        <Link to={"/"}><h2>Apex Lab homework</h2></Link>
                        <GithubCorner href="https://github.com/NorbertRuff/apex-project" size="60" octoColor=""
                                      bannerColor="#2DE1AF"/>
                    </Header>
                    <Switch>
                        <Route path="/" exact>
                            <MainPage/>
                        </Route>
                        <Route path="/movie/:id"
                               render={(props) => <MovieDetailsPage {...props}/>}/>
                        <Route path="/related/:id"
                               render={(props) => <RelatedMoviesPage {...props}/>}/>
                    </Switch>
                    <Footer>
                        <h4>Created by Ruff Norbert</h4>
                    </Footer>
                </PageContainerStyle>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
