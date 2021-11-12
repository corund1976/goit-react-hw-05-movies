import { lazy, Suspense } from 'react';
import { NavLink, Route, Switch, useRouteMatch, useHistory, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import s from './MovieCard.module.css';
import defaultImage from '../../images/defaultImage.jpg';

const Cast = lazy(() =>
  import('../../components/Cast/Cast' /* webpackChunkName: "Cast" */),
);
const Reviews = lazy(() =>
  import('../../components/Reviews/Reviews' /* webpackChunkName: "Reviews" */),
);

function MovieCard({ movie }) {
  const {
    poster_path,
    tagline,
    title,
    release_date,
    vote_average,
    overview,
    genres
  } = movie;

  const history = useHistory();
  const location = useLocation();
  const { url, path } = useRouteMatch();

  const release_year = new Date(release_date).getFullYear();

  const handleGoBack = () => {
    history.push(location.state?.from);
  };

  return (
    <>
      <button type="button" className={s.button} onClick={handleGoBack}>
        Go back
      </button>
        
      <div className={s.movieBox}>
        <img
          className={s.image}
          src={poster_path
            ? `https://image.tmdb.org/t/p/w500${poster_path}`
            : defaultImage}
          alt={tagline}
        />

        <div className={s.descriptionBox}>
          <h2 className={s.title}>
            {title}
            {release_date ? ` (${release_year})` : ''}
          </h2>
          <p className={s.userScore}>User Score: {vote_average * 10}%</p>
          <p className={s.overview}>Overview</p>
          <p className={s.overview__text}>{overview}</p>
          <p className={s.genres}>Genres</p>
          <p>{genres.map(({ id, name }) => (
              <span className={s.genres__name} key={id}>{name}</span>
            ))}
          </p>
        </div>
      </div>
      <hr />  
      <div>
        <h3 className={s.addTitle}>Additional information</h3>
        
        <ul>
          <li>
            <NavLink
              to={{
                pathname: url + '/cast',
                state: { ...location.state, id: movie.Id },
              }}
              className={s.link}
              activeClassName={s.link_active}
            >
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink
              to={{
                pathname: url + '/reviews',
                state: { ...location.state, id: movie.Id },
              }}
              className={s.link}
              activeClassName={s.link_active}
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <hr />
      <Suspense fallback={<h2>Loading in movie card...</h2>}>
        <Switch>
          
          <Route exact path={`${path}/cast`}>
            <Cast />
          </Route>

          <Route exact path={`${path}/reviews`}>
            <Reviews />
          </Route>

        </Switch>
      </Suspense>

    </>
  );
};

export default MovieCard;

MovieCard.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    tagline: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    vote_average: PropTypes.number,
    overview: PropTypes.string,
    genres: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string
      }).isRequired
    ).isRequired
  }).isRequired
}