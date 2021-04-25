import React, {
  FunctionComponent,
  useContext,
  useState,
  useEffect,
} from "react";
import { RouteComponentProps } from "@reach/router";

import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

import { DataContext } from "../helpers/context/dataContext";
import compareFactory, { compareTypes } from "../helpers/utils/compareFactory";
import AddLink from "../components/AddLink";
import LinkItem from "../components/LinkItem";
import Header from "../components/Header";

const itemPerPage = Number(process.env.REACT_APP_ITEM_PER_PAGE);

const useStyles = makeStyles((theme) => ({
  container: {
    ...theme.layout,
  },
  select: {
    width: "50%",
  },
  page: {
    alignSelf: "center",
    marginTop: "3em",
    marginBottom: "5em",
  },
}));

type orderByType = "" | "asc" | "desc";

const Home: FunctionComponent<RouteComponentProps> = () => {
  const classes = useStyles();
  const [data] = useContext(DataContext);

  const [toastOpen, setToastOpen] = useState(false);
  const [page, setPage] = useState(1);
  const [deletedName, setDeletedName] = useState("");
  const [orderBy, setOrderBy] = useState<orderByType>("");
  const [compareMethod, setCompareMethod] = useState<compareTypes>(
    "createdAtDesc"
  );

  const handleToastClose = () => setToastOpen(false);

  const handleOrderChange = (event: React.ChangeEvent<{ value: unknown }>) =>
    setOrderBy(event.target.value as orderByType);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) =>
    setPage(value);

  const onItemDelete = (name: string) => {
    setToastOpen(true);
    setDeletedName(name);
  };

  useEffect(() => {
    if (orderBy === "") return;
    if (orderBy == "asc") setCompareMethod("votesAsc");
    if (orderBy == "desc") setCompareMethod("votesDesc");
  }, [orderBy]);

  const dataArray = Object.values(data);
  const pageCount = Math.ceil(dataArray.length / itemPerPage) || 1;

  return (
    <>
      <Header />
      <Grid container direction="column" className={classes.container}>
        <AddLink />

        <Divider />

        <FormControl className={classes.select}>
          <InputLabel id="order-label">Order by</InputLabel>
          <Select
            labelId="order-label"
            value={orderBy}
            onChange={handleOrderChange}
          >
            <MenuItem value="desc">{"Most Voted(Z->A)"}</MenuItem>
            <MenuItem value="asc">{"Less Voted(A->Z)"}</MenuItem>
          </Select>
        </FormControl>

        {dataArray
          .sort(compareFactory(compareMethod))
          .splice((page - 1) * itemPerPage, page * itemPerPage) // pagination
          .map((item) => (
            <LinkItem key={item.uuid} item={item} onItemDelete={onItemDelete} />
          ))}

        <Pagination
          count={pageCount}
          color="primary"
          page={page}
          onChange={handlePageChange}
          className={classes.page}
        />
      </Grid>

      {/* toast */}
      <Snackbar
        open={toastOpen}
        onClose={handleToastClose}
        autoHideDuration={2000}
      >
        <Alert variant="filled" severity="success">
          {`${deletedName} deleted`}
        </Alert>
      </Snackbar>
    </>
  );
};

export default Home;
