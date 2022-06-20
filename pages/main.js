import { useContext, useEffect, useState } from "react";
import Movieinfo from "../components/Movieinfo";
import { UserContext } from "../stateprovider/UserContext";
import { useRouter } from "next/router";
import Pagination from "../components/Pagination";
import axios from "axios";
import FlipMove from "react-flip-move";
import Image from "../components/Image";
import Spinner from "../components/Spinner";

const main = () => {
  const state = useContext(UserContext);
  const [reasult, setReasult] = useState();

  const router = useRouter();
  useEffect(async () => {
    const veryfy = () => {
      if (!state.reasult) {
        router.push("/");
      } else {
        axios
          .get(
            `https://www.omdbapi.com/?apikey=a1ccce30&s=${state.reasult}&page=${state.page}`
          )
          .then((res) => {
            if (res.data.Response) {
              setReasult(res.data.Search);
              state.setLoad(false);
              state.setTotal(res.data.totalResults);
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }
    };
    veryfy();
  }, [state.reasult, state.page, state.load]);
  return (
    <div className="container">
      <div className="btn">
        <button
          disabled={state.current === "All" && true}
          onClick={() => {
            state.setCurrent("All");
            state.setPage(1);
          }}
        >
          All
        </button>
        <button
          disabled={state.current === "Image" && true}
          onClick={() => {
            state.setCurrent("Image");
            state.setPage(1);
          }}
        >
          Image
        </button>
      </div>
      {state.load ? (
        <Spinner />
      ) : state.current === "All" ? (
        <div>
          {reasult &&
            reasult.map((e) => {
              return (
                <FlipMove>
                  <div key={e.imdbID}>
                    <Movieinfo
                      Poster={e.Poster != "N/A" ? e.Poster : `images/logo.png`}
                      Title={e.Title}
                      Year={e.Year}
                      Type={e.Type}
                      imdbID={e.imdbID}
                    />
                    <br />
                  </div>
                </FlipMove>
              );
            })}
          <Pagination />
        </div>
      ) : (
        <div>
          <Image />
        </div>
      )}

      {state.load && <Spinner />}
    </div>
  );
};

export default main;
