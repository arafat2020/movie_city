import Link from "next/link";
import { useContext } from "react";
import { UserContext } from "../stateprovider/UserContext";

const Nav = () => {
    const ctx = useContext(UserContext)
    return (
        <div className="nav">
            <div className="logo">
                <Link  href='/'>
                    <img
                        onClick={
                            () => {
                                ctx.setPage(1)
                                ctx.setTotal(null)
                            }
                        }
                        src="images/logo.svg" alt="logo" />
                </Link>
            </div>
        </div>
    );
};

export default Nav;