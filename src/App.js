import {
    FooterStyledWrapper,
    HeaderStyledWrapper,
    PageContainerStyledWrapper
} from "./styles/PageContainerStyledWrapper";
import {ApolloClient, ApolloProvider, InMemoryCache,} from "@apollo/client";
import GithubCorner from "react-github-corner";
import RelatedMoviesPage from "./components/pages/RelatedMoviesPage";
import MovieDetailsPage from "./components/pages/MovieDetailsPage";
import MainPage from "./components/pages/MainPage";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";

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
                        <Link data-testid="homeLink" to={"/"}><h2>Cine<span>Flix</span></h2></Link>
                        <GithubCorner href="https://github.com/NorbertRuff/Cineflix" size="60" octoColor=""
                                      bannerColor="#2DE1AF"/>
                    </HeaderStyledWrapper>
                    <Routes>
                        <Route path="/" exact element={<MainPage/>}/>
                        <Route path="/movie/:id"
                               element={<MovieDetailsPage/>}/>
                        <Route path="/related/:id"
                               element={<RelatedMoviesPage/>}/>
                    </Routes>
                    <FooterStyledWrapper role="footer">
                        <h4>Created by Ruff Norbert</h4>
                    </FooterStyledWrapper>
                </PageContainerStyledWrapper>
            </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;
