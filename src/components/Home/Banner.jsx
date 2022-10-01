import React, { useEffect, useState } from "react";
import Axios from "../../config/others/Axios";
import requests from "../../config/others/requests";
import styles from "./Banner.module.css";
const Banner = () => {
  const [movie, setMovie] = useState([]);
  const { banner, contents, description, banner_footer } = styles;
  const truncateText = (string, num) => {
    return string?.length > num ? string.substr(0, num - 1) + "..." : string;
  };

  useEffect(() => {
    async function fetchData() {
      const request = await Axios.get(requests.fetchTrending);
      const randomNumber = Math.floor(
        Math.random() * request.data.results.length - 1
      );
      setMovie(request.data.results[randomNumber]);
    }
    fetchData();
  }, []);
  const style = {
    backgroundImage: `url(https://image.tmdb.org/t/p/w500/${movie?.backdrop_path})`,
  };
  return (
    <header className={banner} style={style}>
      {movie && (
        <div className={contents}>
          <h1>{movie?.original_title}</h1>
          <button>Play</button>
          <button>My List</button>

          <div className={description}>
            <p>{truncateText(`${movie?.overview}`, 150)}</p>
          </div>
        </div>
      )}
      <div className={banner_footer} />
    </header>
  );
};

export default Banner;
