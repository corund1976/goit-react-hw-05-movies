import { Switch, Route } from 'react-router';
import Container from './components/Container';
import NavBar from './components/NavBar/NavBar';
import HomePage from './pages/HomePage';
import MoviesPage from './pages/MoviesPage';

function App() {
  return (
    <Container>
      <NavBar />

      <Switch>
        <Route path="/movies">
          <MoviesPage />
        </Route>

        <Route>
          <HomePage />
        </Route>
      </Switch>
    </Container>
  );
}

export default App;

// <Route path="/" exact>
//   <HomePage />
// </Route>
