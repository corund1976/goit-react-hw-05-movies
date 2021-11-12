import { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import * as movieAPI from '../../services/movies-api';
import s from './Cast.module.css';
import defaultImage from '../../images/defaultImage.jpg';

function Cast() {
  const location = useLocation();
  const { movieId } = useParams();
  console.log(location);
  console.log(useParams()); 
  const [cast, setCast] = useState([]);

  useEffect(() => {
    movieAPI
      .fetchMovieCast(movieId)
      .then(({ cast }) => setCast(cast))
      .catch(error => console.log(error));
  }, [movieId]);

  return (
     <ul>
      {cast &&
        cast.map(({ id, profile_path, name, character }) => {
        return (
          <li key={id} className={s.item}>
            <img
              className={s.image}
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path}`
                  : defaultImage
              }
              alt={name}
            />

            <p className={s.name}>{name}</p>
            <p className={s.name}>Character: {character}</p>
          </li>
        )})
      }
    </ul>
  );
};

export default Cast;
