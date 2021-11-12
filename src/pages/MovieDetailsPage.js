import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as moviesAPI from '../services/movies-api';
import Section from '../components/Section';
import MovieCard from '../components/MovieCard';

function MovieDetailsPage() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    moviesAPI
      .fetchMovieId(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  }, [movieId]);

  return (
    <Section>
      {movie && (
        <MovieCard movie={movie}/>
      )}
    </Section>
  );
};

export default MovieDetailsPage;