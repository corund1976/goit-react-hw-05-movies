import { useState, useEffect } from 'react';
// import { Link, useRouteMatch } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import Section from '../components/Section';
import MoviesList from '../components/MoviesList';

function HomePage() {
  // const match = useRouteMatch(); // УДАЛИТЬ
  // console.log('match: ', match); // УДАЛИТЬ
  // const { url } = useRouteMatch();
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    moviesAPI
      .fetchTrending()
      .then(({ results }) => setMovies(results))
      .catch(error => console.log(error));
  }, []);

  return (
    <Section title="Trending today">
      <MoviesList movies={movies} />
    </Section>
  );
};

export default HomePage;
