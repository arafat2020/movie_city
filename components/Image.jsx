import axios from "axios";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { UserContext } from "../stateprovider/UserContext";
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from "./Spinner";


const Image = () => {
    const [rest, setRes] = useState([]);
    const [load,setLoad]=useState(false)
    const ctx = useContext(UserContext)
    
    useEffect(() => {
           
                axios
                  .get(
                    `https://www.omdbapi.com/?apikey=a1ccce30&s=${ctx.reasult}&page=${ctx.page}`
                  )
                  .then((res) => {
                    setRes([...rest, ...res.data.Search]);
                    setLoad(false);
                    console.log(res.data);
                  });
            
        }, [ctx.page])
    console.log(!ctx.total!==rest.length,typeof(ctx.total),typeof(rest.length))
    const loader = () => {
        ctx.setPage(ctx.page + 1)
    }
    return (
        <div >
            <InfiniteScroll
                dataLength={rest.length}
                next={loader}
                hasMore={parseInt(ctx.total)!==rest.length}
                loader={<Spinner/>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                    </p>
                }
            >
                <div className="img_display container">
                {rest && rest.map((e,index) => {
            if (e.Poster!='N/A') {
                return (
               
                    <div key={index} className="img_box2">
                    <LazyLoadImage
                            width={250}
                            height={320}
                            src={e.Poster}
                        />
                    <div className="overlay">
                        
                        <p>
                           {e.Title}
                        </p>
                    </div>
                    </div>
               )
            }
            
       })}
            
                </div>
 </InfiniteScroll>
   
        
    </div>
    );
};

export default Image;

