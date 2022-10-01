import React from "react";
import Navbar from "../../layout/Navbar";
import styles from "../Home/HomeScreen.module.css";
import Banner from "./Banner";
import MovieGenre from "./MovieGenre";
import requests from "../../config/others/requests";
const HomeScreen = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <div className={styles.homescreen}>
        <MovieGenre
          tittle="NOW PLAYING"
          fetchUrl={requests.fetchNowPlaying}
          isLarge
        />
        <MovieGenre tittle="Trending Now" fetchUrl={requests.fetchTrending} />
        <MovieGenre
          tittle="Top Rated Movies"
          fetchUrl={requests.fetchTopRated}
        />
        <MovieGenre
          tittle="Popular TV Shows"
          fetchUrl={requests.fetchTvShows}
        />
        <MovieGenre
          tittle="Upcoming Movies"
          fetchUrl={requests.fetchUpcoming}
        />
      </div>
    </>
  );
};

export default HomeScreen;
