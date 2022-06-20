import { useContext, useEffect } from "react";
import Search from "../components/Search";
import { UserContext } from "../stateprovider/UserContext";


const index = () => {
    const state = useContext(UserContext)
    useEffect(() => {
        state.setPage(1)
        state.setTotal(null)
    },[])
    return (
        <div className=" ">
            <Search/>
        </div>
    );
};

export default index;