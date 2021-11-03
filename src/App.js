import {
    FooterStyledWrapper,
    HeaderStyledWrapper,
    PageContainerStyledWrapper
} from "./styles/PageContainerStyledWrapper";
import {ApolloClient, ApolloProvider, InMemoryCache,} from "@apollo/client";
import GithubCorner from "react-github-corner";
import {BrowserRouter, Link, Route, Switch} from "react-router-dom";
import RelatedMoviesPage from "./components/pages/RelatedMoviesPage";
import MovieDetailsPage from "./components/pages/MovieDetailsPage";
import MainPage from "./components/pages/MainPage";

/**
 * URL for Apollo provider for Movie Finder TMDB sandbox
 * @type {string}
 */
const ApolloURI = 'https://tmdb.sandbox.zoosh.ie/dev/graphql';

/**
 * ApolloClient setup
 * @type {ApolloClient}
 */
const client = new ApolloClient({
    uri: ApolloURI,
    cache: new InMemoryCache()
});

function App() {
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <PageContainerStyledWrapper>
                    <HeaderStyledWrapper role="header">
                        <Link data-testid="homeLink" to={"/"}><h2>Movie <span>Finder</span></h2></Link>
                        <GithubCorner href="https://github.com/NorbertRuff/movie-finder" size="60" octoColor=""
                                      bannerColor="#2DE1AF"/>
                    </HeaderStyledWrapper>
                    <Switch>
                        <Route path="/" exact>
                            <MainPage/>
                        </Route>
                        <Route path="/movie/:id"
                               render={(props) => <MovieDetailsPage {...props}/>}/>
                        <Route path="/related/:id"
                               render={(props) => <RelatedMoviesPage {...props}/>}/>
                    </Switch>
                    <FooterStyledWrapper role="footer">
                        <h4>Created by Ruff Norbert</h4>
                    </FooterStyledWrapper>
                </PageContainerStyledWrapper>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
