import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import Button from "@material-ui/core/Button";
import { useContext } from "react";
import { UserContext } from "../stateprovider/UserContext";
import { useState, useEffect } from "react";
const Pagination = () => {
  const ctx = useContext(UserContext);
  const [pageNum, setPagename] = useState();

  useEffect(() => {
    if (ctx.total % 10) {
      setPagename(Math.floor(ctx.total / 10) + 1);
    } else {
      setPagename(Math.floor(ctx.total / 10));
    }
  }, []);
  console.log(pageNum, ctx.total, ctx.page);
  return (
    <div className="container flex">
      <div className="pagin">
        <NavigateBeforeIcon
          className={ctx.page === 1 && `hidden`}
          onClick={() => {
            ctx.setPage(ctx.page - 1);
            ctx.setLoad(true);
          }}
        />
        <Button variant="contained" color="primary" disabled>
          Page - {ctx.page}
        </Button>
        <NavigateNextIcon
          className={ctx.page === pageNum && `hidden`}
          onClick={() => {
            ctx.setPage(ctx.page + 1);
            ctx.setLoad(true);
          }}
        />
      </div>
    </div>
  );
};

export default Pagination;
