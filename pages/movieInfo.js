import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../stateprovider/UserContext";
import { useRouter } from "next/router";

const movieInfo = () => {
  const [rest, setaola] = useState({});
  const state = useContext(UserContext);
  const router = useRouter();
  const [load, setload] = useState(false);
  useEffect(async () => {
    if (state.imdb) {
      setload(true);
      await axios
        .get(`https://www.omdbapi.com/?apikey=a1ccce30&i=${state.imdb}`)
        .then((res) => {
          setaola({
            Poster: res.data.Poster,
            Title: res.data.Title,
            Year: res.data.Year,
            Awards: res.data.Awards,
            BoxOffice: res.data.BoxOffice,
            Country: res.data.Country,
            DVD: res.data.DVD,
            Genre: res.data.Genre,
            Language: res.data.Language,
            Metascore: res.data.Metascore,
            Plot: res.data.Plot,
            Actors: res.data.Actors,
            Rated: res.data.Rated,
            Director: res.data.Director,
          });
          setload(false);
          console.log(res.data.Poster);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      router.push("/");
    }
  }, []);
  console.log(rest);
  return (
    <div className="container main_info">
      <div className="image">
        <img
          src={rest.Poster != "N/A" ? rest.Poster : `images/logo.png`}
          alt="image"
        />
      </div>
      <div className="text">
        <h1>{rest.Title}</h1>
        <hr />
        <p>
          <strong>Year</strong> : {rest.Year}
        </p>
        <p>
          <strong>Rated</strong> : {rest.Rated}
        </p>
        <p>
          <strong>Awards</strong> : {rest.Awards}
        </p>
        <p>
          <strong>Actors</strong> : {rest.Actors}
        </p>
        <p>
          {" "}
          <strong>BoxOffice</strong> : {rest.BoxOffice}
        </p>
        <p>
          <strong>Country</strong> : {rest.Country}
        </p>
        <p>
          <strong>Year</strong> : {rest.DVD}
        </p>
        <p>
          <strong>Director</strong> : {rest.Director}
        </p>
        <p>
          <strong>Genre</strong> : {rest.Genre}
        </p>
        <p>
          <strong>Language</strong> : {rest.Language}
        </p>
        <p>
          <strong>Metascore</strong> : {rest.Metascore}
        </p>
        <p>
          <strong>Plot</strong> : {rest.Plot}
        </p>
      </div>
      <hr />
      <div className="ratting"></div>
    </div>
  );
};

export default movieInfo;
