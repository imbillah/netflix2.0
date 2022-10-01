import { useEffect } from "react";
import { useState } from "react";
import Axios from "../../config/others/Axios";
import styles from "./MovieGenre.module.css";
const MovieGenre = ({ tittle, fetchUrl, isLarge = false }) => {
  const [movies, setMovies] = useState([]);
  const baseImageUrl = "https://image.tmdb.org/t/p/w500/";
  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);
  const { row, row_poster, row_posters, image_large, container } = styles;
  return (
    <div className={container}>
      <div className={row}>
        <h1>{tittle}</h1>
        <div className={row_posters}>
          {movies &&
            movies.map((movie) => (
              <img
                className={`${row_poster} ${isLarge && image_large}`}
                src={`${baseImageUrl}${
                  isLarge ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.name}
                key={movie.id}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieGenre;
