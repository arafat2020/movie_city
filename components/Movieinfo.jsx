import { useContext } from "react";
import { UserContext } from "../stateprovider/UserContext";
import { useRouter } from "next/router";
import { LazyLoadImage } from 'react-lazy-load-image-component';

const Movieinfo = ({ Title, Year, Poster, Type, imdbID }) => {
    const state = useContext(UserContext);
    const router = useRouter()
    const clickHandeler = () => {
        if (imdbID) {
            state.setImdb(imdbID)
            router.push('/movieInfo')
        }
    }
    return (
        <div onClick={clickHandeler} className="info">
            
            <div className="info_box">
            <div className="image">
                    {/* <img src={Poster} alt="image"  /> */}
                    <LazyLoadImage
                        src={Poster}
                        width={100}
                        height={200}
                        
                    />
            </div>
            <div className="text">
                <h3>{ Title}</h3>
                <p>Releas : { Year}</p>
                <p>Type { Type}</p>
                <p></p>
            </div>
            </div>
        </div>
    );
};

export default Movieinfo;