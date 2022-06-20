import axios from "axios";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../stateprovider/UserContext";
import FlipMove from "react-flip-move";

const Search = () => {
    const state = useContext(UserContext)
    const [search, setSearch] = useState();
    const [rest, setRes] = useState();
    const router = useRouter()
   
    useEffect(() => {
        if (search) {
            
            axios
              .get(
                `https://www.omdbapi.com/?apikey=a1ccce30&s=${search}&page=${state.page}`
              )
              .then((res) => {
                if (res.data.Response) {
                  setRes(res.data.Search);
                  state.setTotal(res.data.totalResults);
                }
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
           
        } else {
            setRes(null)
        }
    },[search,state.page])
    console.log(search)
    const clickHandeler = async () => {
        await state.setReasult(search)
        router.push('/main')
    }
    
    return (
        <div className="container">
            <div className="search_box">
                <input type="text"
                    placeholder="Search any movie"
                    onChange={e=>setSearch(e.target.value)}
                />
                <button disabled={!rest && true} onClick={clickHandeler}>Search</button>
                <div className="seaerch_dispalyer">
                    {
                        rest && rest.map(e => {
                            return (
                                <FlipMove>
                                    <div key={e.imdbID}>
                                    <div onClick={() => {
                                        state.setImdb(e.imdbID)
                                        router.push('/movieInfo')
                                    }} className="box">
                                    <img src={e.Poster} alt="" />
                                    <p>{ e.Title}</p>
                                    </div>
                                    <br />
                                </div>
                                </FlipMove>
                                
                            )
                        })
                }
            </div>
            </div>
            
        </div>
    );
};

export default Search;