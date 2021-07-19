import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../services/api";

import "../styles/movie.css";

interface Movies {
  original_title: string;
  id: number;
  popularity: number;
  poster_path: string;
  overview: string;
  release_date: string;
  original_language: string;
}

interface Params {
  id: string;
}

const Movie = () => {
  const [film, setFilm] = useState<Movies>({} as Movies);

  let { id } = useParams<Params>();

  const key = "10ae2a06054a21f8c4bc55011987026d";
  const urlImg = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2`;

  useEffect(() => {
    api
      .get(`/movie/${id}?api_key=${key}`)
      .then((result) => {
        setTimeout(() => {
          setFilm(result.data);
        }, 2000);
        console.log(result.data);
      })
      .catch((error) => {
        console.error("ops! ocorreu um erro" + error);
      });
  }, [id]);

  if (Object.keys(film).length <= 0) {
    return <h1>Loading</h1>;
  }
  return (
    <div className="movie">
      <>
        <div className="img">
          <img src={urlImg + film?.poster_path} alt="" />
        </div>

        <div className="informations">
          <h1>Original-Title:{film?.original_title}</h1>
          <p>Date:{film?.release_date}</p>
          <p>Overview:{film?.overview}</p>
          <p>Popularity:{film?.popularity}</p>
        </div>
      </>
    </div>
  );
};

export default Movie;
