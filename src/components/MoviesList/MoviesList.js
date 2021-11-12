import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MoviesList.modules.css';

function MoviesList({ movies }) {
  const location = useLocation();

  return (
    <ul>
      {movies &&
        movies.map(movie => (
          <li className={s.link} activeClassName={s.link_active} key={movie.id}>
            <Link to={{ pathname: `/movies/${movie.id}`, state: { from: location } }}>
              {movie.title}
            </Link>
          </li>
        ))
      }
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    }).isRequired,
  ),
};